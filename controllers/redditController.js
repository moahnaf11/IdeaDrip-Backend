const { default: fetch } = require("node-fetch");
const { userAgent, clientId, clientSecret } = require("../utils/redditClient");
const { classifyPainPoints } = require("../utils/painClassifier");

const getAccessToken = async () => {
  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64",
  );

  const res = await fetch("https://www.reddit.com/api/v1/access_token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": userAgent,
    },
    body: new URLSearchParams({ grant_type: "client_credentials" }),
  });

  const data = await res.json();
  return data.access_token;
};

const fetchPost = async (req, res) => {
  const sort = req.body.sort || "hot";
  const subs = req.body.subreddits;
  const token = await getAccessToken();
  const subredditPromises = subs.map(async (sub) => {
    const redditRes = await fetch(
      `https://oauth.reddit.com/r/${sub.name}/${sort}?limit=100`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "User-Agent": userAgent,
        },
      },
    );

    const data = await redditRes.json();
    if (!redditRes.ok) {
      return [];
    }

    return (
      data?.data?.children
        ?.filter((post) => {
          const { author, distinguished } = post.data;
          return author !== "AutoModerator" && distinguished !== "moderator";
        })
        .map((post) => ({
          title: post.data.title,
          url: `https://reddit.com${post.data.permalink}`,
          subreddit: sub,
          upvotes: post.data.ups,
          comments: post.data.num_comments,
          author: post.data.author,
          flair: post.data.link_flair_text,
          selftext: post.data.selftext,
        })) || []
    );
  });

  const allPostsArrays = await Promise.all(subredditPromises);
  const allPosts = allPostsArrays.flat();

  const filteredPosts = await classifyPainPoints(allPosts);

  return res.json(filteredPosts);
};

// Fetch specific subreddits
const fetchSpecificSubs = async (req, res) => {
  const token = await getAccessToken();

  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ error: "Missing search query" });
  }

  const response = await fetch(
    `https://oauth.reddit.com/subreddits/search?q=${encodeURIComponent(query)}&limit=100`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "User-Agent": userAgent,
      },
    },
  );
  const data = await response.json();

  // Extract and map relevant subreddit fields
  const subreddits = data.data.children
    .map((item) => {
      const sub = item.data;
      return {
        name: sub.display_name,
        title: sub.title,
        subscribers: sub.subscribers,
        icon: sub.icon_img || sub.community_icon || "".split("?")[0],
        description: sub.public_description,
        url: `https://reddit.com${sub.url}`,
      };
    })
    .filter(
      (sub) =>
        sub.title.toLowerCase().includes(query) ||
        sub.description.toLowerCase().includes(query),
    );

  return res.json(subreddits);
};
module.exports = {
  getAccessToken,
  fetchPost,
  fetchSpecificSubs,
};

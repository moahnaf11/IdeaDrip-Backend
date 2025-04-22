const { default: fetch } = require("node-fetch");
const { userAgent, clientId, clientSecret } = require("../utils/redditClient");

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
  const painKeywords = [
    "i hate",
    "so frustrating",
    "i struggle with",
    "why is it so hard",
    "it sucks when",
    "dealing with",
    "i can't",
    "i wish",
    "i'm so mad",
    "i'm angry",
    "this always happens",
    "drives me crazy",
    "can't stand",
    "pisses me off",
    "how do you deal with",
    "what's the best way to",
    "how can i",
    "any advice",
    "what should i do",
    "anyone else dealing with",
  ];

  const token = await getAccessToken();
  const subredditPromises = subs.map(async (sub) => {
    const redditRes = await fetch(
      `https://oauth.reddit.com/r/${sub.name}/${sort}?limit=50`,
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

    const filteredPosts =
      data?.data?.children
        ?.filter((post) => {
          const { title, selftext, author, distinguished } = post.data;
          if (author === "AutoModerator" || distinguished === "moderator")
            return false;

          const content = `${title} ${selftext}`.toLowerCase();
          return painKeywords.some((kw) => content.includes(kw));
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
        })) || [];

    return filteredPosts;
  });

  const allPostsArrays = await Promise.all(subredditPromises);
  const allPosts = allPostsArrays.flat();

  return res.json(allPosts);
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

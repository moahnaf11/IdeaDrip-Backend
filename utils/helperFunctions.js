const he = require("he"); // npm install he

const generateUsername = (profile) => {
  const emailPrefix = profile.emails?.[0]?.value.split("@")[0];
  const sanitized = emailPrefix?.replace(/[^a-z0-9_]/gi, "_");
  return sanitized || `user_${Math.random().toString(36).slice(2, 8)}`;
};

function sanitizeRedditText(text = "") {
  return he
    .decode(text) // Decode HTML entities like &amp; → &
    .replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold markdown (**text**)
    .replace(/\*(.*?)\*/g, "$1") // Remove italic markdown (*text*)
    .replace(/~~(.*?)~~/g, "$1") // Remove strikethrough markdown
    .replace(/`{1,3}.*?`{1,3}/gs, "") // Remove inline code/backticks
    .replace(/>\s?.*/g, "") // Remove quote lines starting with >
    .replace(/#+\s?(.*)/g, "$1") // Remove headers (# Header)
    .replace(/^\s*[-*+]\s/gm, "") // Remove list item bullets
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1") // Replace markdown links with just the text
    .replace(/\n+/g, " ") // Replace newlines with space
    .replace(/\s+/g, " ") // Collapse multiple spaces
    .trim(); // Trim leading/trailing whitespace
}

module.exports = {
  generateUsername,
  sanitizeRedditText,
};

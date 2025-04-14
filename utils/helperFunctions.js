const generateUsername = (profile) => {
  const emailPrefix = profile.emails?.[0]?.value.split("@")[0];
  const sanitized = emailPrefix?.replace(/[^a-z0-9_]/gi, "_");
  return sanitized || `user_${Math.random().toString(36).slice(2, 8)}`;
};

module.exports = {
  generateUsername,
};

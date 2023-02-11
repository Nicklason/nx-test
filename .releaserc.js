module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
  branches: [
    'main',
    {
      name: 'dev',
      prerelease: true,
    },
  ],
};

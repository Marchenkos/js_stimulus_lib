
module.exports = {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "eslint",
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "eslint",
      },
    ],
    "@semantic-release/npm",
    "@semantic-release/github",
    ["@semantic-release/git", {
      "assets": ["dist/**/*.{js}", "package.json", "package-lock.json"],
      "message": "release: ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }]
  ]
};
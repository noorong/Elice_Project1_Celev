const path = require("path");

module.exports = {
  entry: "./src/views/index.js",
  output: {
    filename: "headerFooterBundle",
    path: path.resolve(__dirname, ".headerFooter"),
  },
};

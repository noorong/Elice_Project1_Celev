const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/views/headerFooter/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./src/views/headerFooter/dist"),
  },
};

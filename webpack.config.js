const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    changePriority: "./src/changePriority.js",
    createTodo: "./src/createTodo.js",
    setComplete: "./src/setComplete.js",
    createHeader: "./src/createHeader.js",
    createSidebar: "./src/createSidebar.js",
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: "Todo",
  //   }),
  // ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

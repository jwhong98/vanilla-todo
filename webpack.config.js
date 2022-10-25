const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    changePriority: "./src/changePriority.js",
    createTodo: "./src/createTodo.js",
    createProject: "./src/createProject.js",
    setComplete: "./src/setComplete.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Todo",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};

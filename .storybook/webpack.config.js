const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        // this will apply to both plain `.scss` files
        // AND `<style lang="scss">` blocks in `.vue` files
        test: /\.scss$/,
        use: [
          {
            loader: "vue-style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ],
        include: path.resolve(__dirname, "../src")
      }
    ]
  }
};

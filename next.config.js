module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(jpg|webp|png|svg|eot|otf|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
            publicPath: "./",
            outputPath: "static/",
            name: "[name].[ext]"
          }
        }
      },
    )
    return config
  }
};

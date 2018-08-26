const path = require("path");

module.exports = {
    mode: "development",
    entry: "./app.ts",
    output: {
      filename: "bundle.js",
      publicPath: "/dist/",
      path: path.resolve("/dist/")
    },
    module: {
      rules: [
        {
            test: /\.ts?$/,
            use: [
                {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                "ts-loader"
            ]
        }
      ]
    }
  };
import { Configuration } from "webpack";

export const commonConfig = (
  entryPath: string,
  outputPath: string
): Configuration => {
  return {
    entry: { index: entryPath },
    output: {
      path: outputPath,
      filename: "[name].js",
    },
    module: {
      rules: [
        { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" },
        {
          test: /\.(?:js|mjs|cjs)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  "@babel/preset-react",
                  { targets: "defaults" },
                ],
              ],
            },
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
  };
};

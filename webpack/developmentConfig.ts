import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';
import 'webpack-dev-server';

export const developmentConfig = (templateSource: string): Configuration => {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        template: templateSource,
      }),
    ],
    devServer: {
      port: 7000,
      hot: true,
    },
  };
};

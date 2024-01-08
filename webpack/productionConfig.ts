import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';
import 'webpack-dev-server';

export const productionConfig = (): Configuration => {
  return {
    output: {
      libraryTarget: 'umd',
      library: 'evident-ui',
      umdNamedDefine: true,
    },
  };
};

import { merge } from 'webpack-merge';
import { Configuration } from 'webpack';
import { EModes, EnvArgs, IPaths } from './webpack/types';
import path from 'path';
import { commonConfig } from './webpack/commonConfig';
import { developmentConfig } from './webpack/developmentConfig';

const paths: IPaths = {
  devSource: path.resolve(__dirname, 'src', 'documentation', 'index.tsx'),
  prodSource: path.resolve(__dirname, 'src', 'index.ts'),
  outSource: path.resolve(__dirname, 'dist'),
  templateSource: path.resolve(__dirname, 'public', 'index.html'),
};

const config = (_env: any, args: EnvArgs<any>): Configuration => {
  switch (args.mode) {
    case EModes.Dev:
      return merge(
        commonConfig(paths.devSource, paths.outSource),
        developmentConfig(paths.templateSource)
      );
    case EModes.Prod:
      return merge(commonConfig(paths.prodSource, paths.outSource));
    default:
      throw new Error('No matching configuration was found!');
  }
};

export default config;

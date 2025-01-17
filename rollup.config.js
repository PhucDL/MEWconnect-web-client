import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve'
export default {
  input: 'src/index.js',
  output: [
    {
      format: 'esm',
      dir: 'dist/esm/'
    },
    { format: 'cjs', dir: 'dist/cjs/' },
    {
      file: 'dist/bundle.js',
      format: 'iife'
    }
  ],
  plugins: [
    json(),
    image(),
    commonjs({
      include: /node_modules/
    }),
    babel(),
    resolve({ browser: true }),
  ]
};

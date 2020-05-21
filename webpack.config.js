const path = require('path')
module.exports = {
  entry: {
    index: './lib/index.tsx',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'FUI',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      },
      {
        test: /\.s[ac]ss$/,
        // 多个loader要写这个use数组,顺序是从右往左 
        use:['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
}

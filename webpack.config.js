module.exports = {
  entry: './index.js',
  devtool: 'sourcemap',
  mode: 'development',
  devServer: {
    contentBase: './',
    hot: true,
    inline: true,
    port: 3000,
  }
};
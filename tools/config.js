const path = require('path')

// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack')
// eslint-disable-next-line import/no-extraneous-dependencies
const nodeExternals = require('webpack-node-externals')

const isDev = process.argv.indexOf('--develop') >= 0
const isWatch = process.argv.indexOf('--watch') >= 0
const demoSrc = path.resolve(__dirname, './demo')
const demoDist = path.resolve(__dirname, '../miniprogram_dev')
const src = path.resolve(__dirname, '../src')
const dev = path.join(demoDist, 'components')
const dist = path.resolve(__dirname, '../miniprogram_dist')


const glob = require('glob')

const getEntry = () => {
  const globPath = 'src/**/*.js' // 匹配src目录下的所有文件夹中的html文件
  // (\/|\\\\) 这种写法是为了兼容 windows和 mac系统目录路径的不同写法
  /* eslint-disable no-useless-escape */
  // const pathDir = 'src(\/|\\\\)(.*?)(\/|\\\\)' // 路径为src目录下的所有文件夹
  const pathDir = 'src(\/|\\\\)' // 路径为src目录下的所有文件夹
  const files = glob.sync(globPath)
  const entries = []
  const reg = new RegExp('^' + pathDir)
  for (let i = 0; i < files.length; i++) {
    entries.push(files[i].replace(reg, '$`').replace('.js', ''))
    // entries.push(files[i].replace('.js', ''))
  }
  return entries
}

module.exports = {
  // entry: ['index', 'lib'],
  // entry: ['vertification/vertification', 'sms/sms'],
  entry: getEntry(),

  isDev,
  isWatch,
  srcPath: src, // 源目录
  distPath: isDev ? dev : dist, // 目标目录

  demoSrc, // demo 源目录
  demoDist, // demo 目标目录

  wxss: {
    less: true, // 使用 less 来编写 wxss
    sourcemap: false, // 生成 less sourcemap
  },

  js: {
    webpack: true, // 使用 webpack 来构建 js
    sourcemap: false,
  },

  webpack: {
    mode: 'production',
    output: {
      filename: '[name].js',
      libraryTarget: 'commonjs2',
    },
    target: 'node',
    externals: [nodeExternals()], // 忽略 node_modules
    module: {
      rules: [{
        test: /\.js$/i,
        use: [{
          loader: 'thread-loader',
        }, {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        }, {
          loader: 'eslint-loader',
        }],
        exclude: /node_modules/
      }, {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [{
          loader: 'thread-loader',
        }, {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        }, {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
            happyPackMode: true,
          },
        }, {
          loader: 'eslint-loader',
        }],
      }],
    },
    resolve: {
      modules: [src, 'node_modules'],
      extensions: ['.js', '.json'],
    },
    plugins: [
      new webpack.DefinePlugin({}),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      }),
    ],
    optimization: {
      minimize: false,
    },
    // devtool: 'source-map', // 生成 js sourcemap
    performance: {
      hints: 'warning',
      assetFilter: assetFilename => assetFilename.endsWith('.js')
    }
  },

  // copy: ['./assets', './utils.js'], // 将会复制到目标目录


  copy: {
    src: ['./**/*', './**/*.wxss', './**/*.wxs']
  }, // 将会复制到目标目录
}

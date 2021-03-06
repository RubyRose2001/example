'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'public'

const ora = require('ora')
const fs = require('fs')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.pub.conf')
const camelCase = require('camelcase')

const spinner = ora('building for production...')
const entry = {};

const filesName = fs.readdirSync(path.join(__dirname, '../src/views'));

filesName.forEach((fileName) => {
  if (fileName !== 'login' && fileName !== 'layout' && fileName !== 'common') {
    entry[`${camelCase(fileName)}AsyncModule`] = `./src/views/${fileName}/export.js`
  }
})

spinner.start()

rm(path.join(config.pub.assetsRoot, config.pub.assetsSubDirectory), err => {
  if (err) throw err
  webpackConfig.entry = entry;
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})

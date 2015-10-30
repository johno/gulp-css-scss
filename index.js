'use strict'

var through = require('through2')
var cssscss = require('css-scss')
var gutil = require('gulp-util')

module.exports = function gulpCssScss (options) {
  options = options || {}

  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      cb(null, file)
      return
    }

    if (!file.isBuffer()) {
      cb()
    }

    var src = file.contents.toString()
    var css = cssscss(src)

    file.path = gutil.replaceExtension(file.path, '.scss')

    file.contents = new Buffer(css)
    cb(null, file)
  })
}

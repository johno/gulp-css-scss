var assert = require('assert');
var gutil = require('gulp-util');
var gulpCssScss = require('..');

describe('gulp-css-scss', function() {

  it('should convert CSS to Scss', function(done) {
    var cssScssStream = gulpCssScss();

    var actual = ':root {\n  --blue: blue;\n}\n\n.some-class {\n  color: var(--blue);\n}\n\n';
    var expected = '\n// Converted Variables\n\n$blue: blue !default;\n\n// Custom Media Query Variables\n\n\n.some-class {\n  color: $blue;\n}\n\n';

    cssScssStream.once('data', function(file) {
      assert.equal(file.relative, 'default.scss');
      assert.equal(file.contents.toString(), expected);
    });

    cssScssStream.on('end', done);

    cssScssStream.write(new gutil.File({
      path: 'default.css',
      contents: new Buffer(actual)
    }));

    cssScssStream.end();
  });
});

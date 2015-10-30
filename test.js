import test from 'ava'
import gutil from 'gulp-util'
import gulpCssScss from './'

test('converts CSS to Scss', t => {
  t.plan(2)

  var cssScssStream = gulpCssScss();

  var actual = ':root {\n  --blue: blue;\n}\n\n.some-class {\n  color: var(--blue);\n}\n\n';
  var expected = '\n// Converted Variables\n\n$blue: blue !default;\n\n// Custom Media Query Variables\n\n\n.some-class {\n  color: $blue;\n}\n\n';

  cssScssStream.once('data', file => {
    t.same(file.relative, 'default.scss');
    t.same(file.contents.toString(), expected);
  });

  cssScssStream.write(new gutil.File({
    path: 'default.css',
    contents: new Buffer(actual)
  }));

  cssScssStream.end();
});

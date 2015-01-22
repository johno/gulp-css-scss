# gulp-css-scss

[![Build Status](https://secure.travis-ci.org/johnotander/gulp-css-scss.png?branch=master)](https://travis-ci.org/johnotander/gulp-css-scss)

Gulp plugin for converting CSS to Scss.

## Installation

```bash
npm install --save gulp-css-scss
```

## Usage

```javascript
var gulp = require('gulp');
var cssScss = require('gulp-css-scss');

gulp.task('css-scss', function() {
  return gulp.src('my-file.css')
    .pipe(cssScss('my-class-prefix-'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['css-scss']);
```

## License

MIT

## Thanks to the following

* <https://github.com/jxnblk/css-scss>

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).

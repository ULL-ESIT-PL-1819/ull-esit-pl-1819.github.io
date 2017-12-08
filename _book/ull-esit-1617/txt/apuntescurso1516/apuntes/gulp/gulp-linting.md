### Gulp Linting

```javascript
(() => {
    'use strict';

    let gulp        = require('gulp');
    let nodemon     = require('gulp-nodemon');
    let jshint      = require('gulp-jshint');
    let scsslint    = require('gulp-scss-lint');

    gulp.task('lint', ['lint:jshint', 'lint:jscs', 'lint:scss']);

    // Tarea para pasar el JSHint a el código
    gulp.task('lint:jshint', () => {
        return gulp.src([
                'gulpfile.js',
                'public/js/**/*.js',
                'routes/**/*.js',
                'assets/modules/**/*.js',
                'db/models/**/*.js'
            ])
            .pipe(jshint('.jshintrc'))
            .pipe(jshint.reporter('jshint-stylish'));
    });

    // Tarea para pasar el JSCS a el código
    gulp.task('lint:jscs', () => {
        return gulp.src([
                'gulpfile.js',
                'public/js/**/*.js',
                'routes/**/*.js',
                'assets/modules/**/*.js',
                'db/models/**/*.js'
            ])
            .pipe(jscs())
            .pipe(jscs.reporter());
    });

    // Tarea para pasar el SCSS-Lint a el código
    gulp.task('lint:scss', () => {
        return gulp.src('assets/frontend/stylesheets/**/*.scss')
            .pipe(scsslint());
    });
})();
```

#### Véase

* [gulp-jshint](https://github.com/spalger/gulp-jshint)
* [Práctica de Rafa, pedro y Dani de Mongoose con Populations](https://github.com/ULL-ESIT-GRADOII-DSI/mongoose-y-populations-rafa-pedro-dani)
  * [gulpfile](https://github.com/ULL-ESIT-GRADOII-DSI/mongoose-y-populations-rafa-pedro-dani/blob/master/gulpfile.js)

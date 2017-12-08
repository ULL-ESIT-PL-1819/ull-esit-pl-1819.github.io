### Browsersync

```javascript
(() => {
    'use strict';

    let gulp        = require('gulp');
    let nodemon     = require('gulp-nodemon');
    let browserSync = require('browser-sync');

    gulp.task('default', ['browser-sync']);

    gulp.task('browser-sync', ['nodemon'], () => {
        browserSync.init(null, {
            proxy: 'http://localhost:3000',
            files: [
                'views/**/*.ejs',
                'public/js/**/*.js',
                'public/img/**/*.*',
                'public/vendor/**/*.*',
                'assets/public/stylesheets/**/*.scss'
            ],
            port: 8080
        });
    });

    gulp.task('nodemon', (cb) => {
        var started = false;

        return nodemon({
            script: 'bin/www'
        }).on('start', () => {
            if (!started) {
                cb();
                started = true;
            }
        });
    });

})();
```

#### A Quick Introduction to BrowserSync

{% youtube %}https://youtu.be/heNWfzc7ufQ{% endyoutube %}

#### Using Gulp, SASS and Browser-Sync for you front end web development

{% youtube %}https://youtu.be/Rv5f_v5gqw4{% endyoutube %}

#### Véase

* [Browsersync](https://www.browsersync.io/)
* [Browsersync con Gulp](https://www.browsersync.io/docs/gulp/)
* [Tutorial – How to use Livereload with Nodemon in Gulp to Automatically Reload your Browser and Restart your App](http://jpsierens.com/tutorial-livereload-nodemon-gulp/)

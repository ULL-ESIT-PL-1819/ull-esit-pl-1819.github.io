### Browsersync

Keep multiple browsers and devices in sync when building websites.
Change your code and the page is auto-reloaded. Live reloading works
across many browsers and devices.

BrowserSync creates a small server. Next, it injects a javascript
file on every page; This file makes use of WebSockets to communicate
between the server and the client to watch changes to your code or
browser action. As soon as BrowserSync detects an action it performs
a page reload.


#### Véase

* [How to Use BrowserSync for Faster Development](https://scotch.io/tutorials/how-to-use-browsersync-for-faster-development)
* [Browsersync](https://www.browsersync.io/)
* [Browsersync con Gulp](https://www.browsersync.io/docs/gulp/)
* [Tutorial – How to use Livereload with Nodemon in Gulp to Automatically Reload your Browser and Restart your App](http://jpsierens.com/tutorial-livereload-nodemon-gulp/)

#### Gulpfile.js de Ejemplo para uso con browser-sync
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

#### Vídeo: A Quick Introduction to BrowserSync

{% youtube %}https://youtu.be/heNWfzc7ufQ{% endyoutube %}

#### Vídeo: Using Gulp, SASS and Browser-Sync for you front end web development

{% youtube %}https://youtu.be/Rv5f_v5gqw4{% endyoutube %}


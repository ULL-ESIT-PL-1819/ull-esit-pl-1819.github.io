## El plugin [`gulp-gh-pages`](https://www.npmjs.com/package/gulp-gh-pages) 

  El plugin [`gulp-gh-pages`](https://www.npmjs.com/package/gulp-gh-pages) simplifica el proceso de despliegue en `gh-pages`. Para ello ponemos una tarea:

  ```javascript
    var gulp = require('gulp');
    var ghPages = require('gulp-gh-pages');

    gulp.task('deploy', function() {
      return gulp.src('./minified/**/*')
        .pipe(ghPages());
    });
  ``` 
  `/minified` is the directory we're deploying, and 
  `/**/*` means it will deploy all the files and directories recursively. 

  Now, you should be able to call your task by doing:
  ```she
  gulp deploy
  ```
  All files and directories inside of `/minified` will be pushed to the `gh-pages` branch 
  at remote `origin`. The branch to push can be changed `ghPages({branch: "master"})`.
<!--
  Para saber mas puede ver el tutorial 
  [Deploying To Github Pages With Gulp](http://charliegleason.com/articles/deploying-to-github-pages-with-gulp) que viene acompañado de [un repo de ejemplo](https://github.com/superhighfives/testing-gulp-gh-pages).
-->


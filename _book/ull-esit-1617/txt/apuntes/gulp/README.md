## GULP

### [gulpjs](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

### Getting Started

*If you've previously installed gulp globally, run `npm rm --global gulp` before following these instructions.*

###### Install the `gulp` command

```sh
npm install --global gulp-cli
```

###### Install `gulp` in your devDependencies

Run this command in your project directory:

```sh
npm install --save-dev gulp
```

###### Create a `gulpfile`

Create a file called `gulpfile.js` in your project root with these contents:

```js
var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});
```

###### Test it out

Run the gulp command in your project directory:

```sh
gulp
```

Voila! The default task will run and do nothing.

To run multiple tasks, you can use `gulp <task> <othertask>`.

#### Where do I go now?

- [API Documentation](API.md)
- [Recipes](recipes)
- [Plugins](http://gulpjs.com/plugins/)

##### Referencias 
* [gulp gh pages](gulpghpages.md)
* [gulp linting](gulplinting.md)
* [Tutorial – How to use Livereload with Nodemon in Gulp to Automatically Reload your Browser and Restart your App](http://jpsierens.com/tutorial-livereload-nodemon-gulp/)

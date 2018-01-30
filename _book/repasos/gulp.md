## Preguntas de Repaso de Gulp

1.  Complete las partes que faltan del siguiente `gulpfile.js` en el que
    se lleva a cabo una tarea para la optimización (uglify/minify) de la
    aplicación de la práctica de la temperatura:

```javascript
/tmp/pl-grado-temperature-converter(karma)]$ cat gulpfile.js
var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');
var minifyHTML = require('gulp-minify-html');
var minifyCSS  = require('gulp-minify-css');

gulp.____('minify', function () {
  gulp.___('temperature.js')
  .____(uglify())
  .___(gulp.____('minified'));

  gulp.__('./index.html')
    .___(minifyHTML())
    .___(gulp.___('./minified/'))

  gulp.__('./*.css')
   .___(minifyCSS({keepBreaks:true}))
   .___(gulp.___('./minified/'))
        });
```
* Explique los pasos para publicar un libro GitBook en GitHub usando `gulp`
* Explique los pasos para actualizar automáticamente los HTML del libro GitBook en su máquina virtual del iaas usando `gulp`

# 11. Vulcanize o vulcanizado

Cuando en Polymer se dispone de un fichero html donde se importa una gran cantidad de ficheros externos y se está en fase de producción, al realizarse la búsqueda de todos los ficheros importados, se produce un coste muy alto de búsqueda en el navegador. Para evitar que esto se produzca, se utiliza la herramienta del **vulcanizado** o **vulcanize**.
La herramienta vulcanize, permite añadir todos esos ficheros html que se importan y las etiquetas `<script>` que se añaden, en un único fichero para mejorar el tiempo de búsqueda en fase de producción.
Para instalar vulcanize, se necesita la herramienta npm

`npm install -g vulcanize`

Para conseguir que todos los ficheros htmls, las hojas de estilo y los scripts que se importan y agregarlos en un único fichero html, se utiliza el siguiente comando

```console
vulcanize --inline-scripts --inline-css --strip-comments \
    elements.html > elements.build.html
```

## Gulp y Vulcanize

Para realizar la automatización de todas estas tareas, se utiliza un fichero gulpfile con la tarea vulcanize. La tarea en el fichero gulpfile debería ser similar a las siguiente líneas

```javascript
var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
gulp.task('vulcanize', function() {
  return gulp.src('app/elements/elements.html')
    .pipe(vulcanize({
      stripComments: true,
      inlineScripts: true,
      inlineCss: true
    }))
    .pipe(gulp.dest('dist/elements'));
});
```

### Ejemplo práctico

Acontinuación se muestra un ejemplo práctico que se encuentra en el siguiente enlace [Ejemplo vulcanize](https://www.polymer-project.org/1.0/docs/tools/optimize-for-production#gulp)

```html
<!--index-->

<html>
  <head>
    <script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="elements/elements.html">
  </head>
  <body>
   ...
  </body>
</html>
```

```html
<!--Elements.html-->
<link rel="import" href="x-foo.html">
<link rel="import" href="x-bar.html">
```

```html
<!--x-foo.html-->
<link rel="import" href="../bower_components/polymer/polymer.html">
<dom-module id="x-foo">
  <template>
    <p>Hello from x-foo!</p>
  </template>
  <script>
    Polymer({
      is: 'x-foo'
    });
  </script>
</dom-module>
```

```html
<!--x-bar.html-->
<link rel="import" href="../bower_components/polymer/polymer.html">
<dom-module id="x-bar">
  <template>
    <p>Hello from x-bar!</p>
  </template>
  <script>
    Polymer({
      is: 'x-bar'
    });
  </script>
</dom-module>
```

El resultado al realizar el vulcanize del fichero elements.html (que es el que posee la importación de los elementos) mediante la siguiente línea `vulcanize elements.html -o elements.vulcanized.html` es el siguiente

```html
<dom-module id="x-foo" assetpath="/">
  <template>
    <p>Hello from x-foo!</p>
  </template>
  <script>
    Polymer({is: 'x-foo'});
  </script>
</dom-module>
<dom-module id="x-bar" assetpath="/">
  <template>
    <p>Hello from x-bar!</p>
  </template>
  <script>
    Polymer({is: 'x-bar'});
  </script>
</dom-module>
```

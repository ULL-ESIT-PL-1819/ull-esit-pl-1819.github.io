## Práctica: Comma Separated Values

### Introducción

En esta práctica se introducen varias tecnologías:

 * localStorage,
 * jquery,
 * underscore y ejs,
 * express,
 * sass,
 * heroku

[El repo del que parten](https://github.com/crguezl/csv)  en su asignación de GitHub Classroom 
tiene una ** aplicación que se ejecuta toda en el cliente/browser**
y que resuelve el problema de analizar una entrada de valores separados por comas
generando como salida una tabla con el resultado del análisis.

Se les pide que modifiquen la solución inicial para obtener una **aplicación cliente-servidor**
cuyo funcionamiento debería ser como sigue:

* El servidor tiene dos rutas principales a las que responde: 
  * la raíz `app.get('/', function(req, res) {...}` y 
  * la ruta `app.post('/csv', function(req, res) {...}`
* Cuando se visita con el navegador/browser la raíz `http://localhost:5000/`
el servidor responde con una vista que contiene un
formulario (`<form>`) con un área de texto (`<textarea>`)
en la que se escribe la entrada CSV

```html
        <form action="/csv" method="post">
           .....
           <button type="submit">Submit</button>
        </form>
```
* Cuando el formulario es rellenado y se hace click en el botón de `submit` 
se envía un request `post` a la ruta `/csv`
* En la ruta `/csv`  el servidor procede a hacer las siguientes tareas: 
  1. Analiza el request mediante el middleware [body-parser](https://www.quora.com/What-exactly-does-body-parser-do-with-express-js-and-why-do-I-need-it), que hace que
    el objeto `req.body` se extienda con nuevos atributos cuyos nombres 
se corresponden con los de 
los elementos del formulario. Por ejemplo si el formulario tiene este aspecto
  ```html
          <form action="/" method="post">
             Enter your name:
             <input type="text" name="userName" placeholder="..." autofocus />
             <br/>
             <button type="submit">Submit</button>
          </form>
  ```
  podremos acceder dentro del manejador de la ruta `/csv`
  a los contenidos del campo `input` mediante `req.body.userName`
  ```javascript
      app.post('/', function(req, res){
        var userName = req.body.userName;
        res.render('greet', {userName: userName, title: 'greet'});
      });
  ```
  2. Se hace el análisis de la entrada mediante la función [calculate](https://github.com/crguezl/csv/blob/gh-pages/csv.js#L5-L38) (que ahora se carga como código 
  en el servidor y no en el cliente) la cual devuelve la estructura de datos, el array de arrays, con el resultado
  3. Se devuelve mediante una vista una página con los resultados
* Para hacer estas tareas puede **imitar** el ejemplo en el repositorio [hello-express](https://github.com/SYTW/hello-express). ¡Estúdielo con detalle! 

### Recursos

* El repositorio [hello-express](https://github.com/SYTW/hello-express)
* [Apuntes: Práctica: Comma Separated Values](http://crguezl.github.io/pl-html/node11.html)
* [Véase el Despliegue en `gh-pages` de la aplicación inicial](http://crguezl.github.io/csv/)
* [SASS](http://sass-lang.com/guide)
* [jQuery (en los apuntes)](http://crguezl.github.io/pl-html/node11.html#SECTION04140070000000000000)
  * [Repo de ejemplo de uso de jQuery y SASS](https://github.com/ULL-ESIT-GRADOII-DSI/jquery-simple-example)
* [Underscore](http://underscorejs.org/)
  * [Underscore en los Apuntes](http://crguezl.github.io/pl-html/node11.html#SECTION041400130000000000000)
  * [Templates en Underscore](http://crguezl.github.io/pl-html/node11.html#SECTION041400140000000000000)
* [LocalStorage](../apuntes/localstorage.md)
* [Express](../apuntes/express.md)
* [Heroku](../apuntes/heroku.md)
* Para depurar paso a paso un programa Node.js puede usar el [debugger](../apuntes/node-debugger.md) de línea de comandos
o bien usando la interfaz gráfica proveída por [node-inspector](../apuntes/node-inspector.md) y el comando `node-debug`

### Requisitos

<!--* Use XRegExp para comentar las diferentes partes de la expresión regular. Dele nombres a cada una de las partes-->
* **Despliegue la aplicación en Heroku usando Express.JS**
* Use SASS para generar el CSS
<!-- * Añada pruebas usando Mocha y Chai. No es necesario probar la aplicación cliente-servidor. Sólo la función `calculate`. -->
<!-- * Use Karma para la ejecución de las pruebas  -->
<!-- * Haga un análisis de cubrimiento  -->
<!-- * Despliegue las pruebas en Travis -->
* Use Gulp para la gestión de las tareas
* Se debe usar locaStorage para almacenar las últimas entradas (ya hecho en la versión inicial)
* Se usa [Underscore](http://underscorejs.org/) para los templates en el cliente  y 
[ejs](https://codeforgeek.com/2014/10/express-complete-tutorial-part-2/) para los templates en el servidor


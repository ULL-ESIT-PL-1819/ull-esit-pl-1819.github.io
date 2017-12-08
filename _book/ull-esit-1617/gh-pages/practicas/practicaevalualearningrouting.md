## Práctica: Evaluar Manejo de Rutas en ExpressJS

### Aceptar Tarea

* [Aceptar asignación de la tarea]()

### Forma de trabajo

* Use su portátil o su cuenta en c9 para llevar a cabo los objetivos planteados.
* Esta práctica se divide en objetivos o hitos:  indique al profesor  cuando ha terminado y suba los enlaces a los repos y despliegues.

### Hitos

1. Use el repo de GitHub dado por la asignación de esta tarea. 
2. Escriba un servidor que sirva ficheros estáticos desde el directorio `/public`. Deberá dejar alguna imagen en ese directorio
3. El servidor deberá responder a requests `GET` en las rutas `/user/nombredeusuario` (donde `nombredeusuario` varía) con una página que diga `Hola nombredeusuario` usando el método `render`del objeto `response`
  - La página se elaborara con una vista que debe estar en el directorio `views/` usando el motor de vistas `ejs`
  - La página elaborada en la respuesta tendrá un tag `img` referenciando la imagen  que está en `public/`
4. Escriba un middleware que intercepte en las rutas `/user/nombredeusuario` y que vuelque en la consola información sobre el [request](https://expressjs.com/en/4x/api.html#req): (por ejemplo los atributos  `method`, `path`, etc.)
5. Aisle el código anterior en un fichero `routes/user.js` que sea cargado desde el programa principal

  ```javascript
  var users = require('./routes/user');
  app.use('/users', users);
  ```
6. Despliegue la aplicación en Heroku o en la máquina virtual del iaas

### Recursos
Estudie las rutas en ExpressJS siguiendo estos apuntes:

* El objeto [request](https://expressjs.com/en/4x/api.html#req)
* El directorio `routes` en la rama [basicrouting del repo express-start](https://github.com/crguezl/express-start/tree/basicrouting)
* El directorio `hello` en la rama [basicrouting del repo express-start](https://github.com/crguezl/express-start/tree/basicrouting)
* [Basic Routing](http://expressjs.com/en/starter/basic-routing.html)
* [Routing Guide](http://expressjs.com/en/guide/routing.html)
* [Using Middleware](http://expressjs.com/en/guide/using-middleware.html)
* [Router API Documentation](http://expressjs.com/en/4x/api.html#router)
* [Descripción de la Práctica: Estudiar las Rutas en ExpressJS](practicalearningrouting.md)

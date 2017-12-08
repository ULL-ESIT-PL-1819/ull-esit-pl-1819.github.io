## Práctica: Evaluar Manejo de Cookies y Sessions en ExpressJS

### Aceptar Tarea

* [Aceptar asignación de la tarea]()

### Forma de trabajo

* Use su portátil o su cuenta en c9 para llevar a cabo los objetivos planteados.
* Esta práctica se divide en objetivos o hitos:  indique al profesor  cuando ha terminado y suba los enlaces a los repos y despliegues.

### Hitos

1. Use el repo de GitHub dado por la asignación de esta tarea 
2.  Cree un servidor que use para proveer autenticación 
a los HTML generados a partir de un libro de prueba
3. Encripte los passwords con `bcrypt-nodejs`.
4. Guarde las parejas `usuario: password` en un fichero `users.json`
5. Use un formulario `form` para obtener el usuario y la clave
6. Use vistas en `ejs` o `pug` para el programa
7. Despliegue la aplicación en Heroku o en la máquina virtual del iaas

### Recursos

* [Repositorio con ejemplos de uso de cookies en express](https://github.com/ULL-ESIT-DSI-1617/express-cookies-examples)
* El ejemplo [staticauth.js](https://github.com/ULL-ESIT-DSI-1617/express-cookies-examples/blob/master/staticauth.js) es similar a lo que se pide
  - En este ejemplo el [directorio gbookexample](https://github.com/ULL-ESIT-DSI-1617/express-cookies-examples/tree/master/gbookexample) contiene los markdown fuente para el libro
  - El libro es compilado con: `gitbook build gbookexample/ public/`
  - De manera que los HTML se montan en la ruta `content` y se sirven desde el directorio `public`
* Tiene un ejemplo de formulario en la vista [`login.ejs`](https://github.com/ULL-ESIT-DSI-1617/express-cookies-examples/blob/master/views/login.ejs) que es usada por el ejemplo [`auth-example.js`](https://github.com/ULL-ESIT-DSI-1617/express-cookies-examples/blob/master/auth-example.js#L99-L101)
* [Descripción de la Práctica: Evaluar Manejo de Rutas en ExpressJS](practicalearningcookies.md)
* [Apuntes sobre Cookies y Sessions](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/cookies/)

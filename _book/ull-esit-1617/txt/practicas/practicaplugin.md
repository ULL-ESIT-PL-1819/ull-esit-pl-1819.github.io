## Práctica: Nueva funcionalidad para el Paquete NPM: plugins

<!--sec data-title="Descripción" data-id="sectiondescripcion" data-show=true ces-->

#### Objetivo

El objetivo de esta práctica  es extender el [package NodeJS  publicado](practicanm.md) en [npm](https://www.npmjs.com) en una práctica anterior con una nueva funcionalidad
que permita que los usuarios con conocimientos de NodeJS puedan extender la conducta del ejecutable para que este realice el despliegue en plataformas distintas de las ya consideradas.

**En esta práctica sólo se pide desarrollar el plugin para iaas.ull.es**

#### Punto de partida

El paquete se construye a partir de
* El código que haya desarrollado en la [práctica en la que creamos el package NodeJS](practicanm.md).
* El código que haya desarrollado en la [práctica en Despliegues en iaas y heroku](practicaniaas.md).

#### La opción `--deploy`

* Se trata de añadir al ejecutable `gitbook-start` una opción `--deploy` o `-d` que va seguida de un tipo de despliegue:
```bash
$ gitbook-start --deploy ull-iaas-es --deploy heroku
```
Que indica que nuestro usuario quiere que se le provea de tareas `gulp` denominadas `deploy-ull-iaas-es` y `deploy-heroku` que despliegan el libro en los diferentes  sites. Esto supone que existen módulos [npm](https://www.npmjs.com/) con nombres `gitbook-start-plugin-iaas-ull-es`  y `gitbook-start-plugin-heroku`
<!-- endsec -->

<!--sec data-title="Como Hacerlo" data-id="sectioncomohacerlo" data-show=true ces-->

*  Para implementar la ejecución de la llamada en línea de comandos:
```bash
$ gitbook-start --deploy ull-iaas-es --deploy heroku
```
Esto es, deberán existir plugins `gitbook-start-plugin-iaas-ull-es` y
`gitbook-start-plugin-heroku` que exportan un objeto que dispone de un
método `deploy()`, de manera que si desde un código principal se llama a un código como este:
```bash
var iaas = require("book-start-plugin-iaas-ull-es");
var result = iaas.deploy();
```
se despliega el libro en la máquina virtual de `iaas.ull.es`
* Observe que hay dos fases en este proceso:
  1. cuando se construye la estructura inicial por `gitbook-start` la jerarquía de directorios conteniendo los scripts y ficheros markdown para el libro y
  2. cuando el autor escribe y despliega el libro llamando a `gulp`. Las llamadas a `gulp deploy-...` ocurren en esta segunda fase. El despliegue hace un `require` de los plugins que implementan los despliegues solicitados.

* Es conveniente que el método `deploy()` (llamado en la Fase 2) proveído por el plugin retorne un objeto con atributos describiendo los resultados del despliegue como
  - Salida por `stdout` en la máquina remota
  - Salida por `stderr`en la máquina remota
  - Códigos de error si los hubiera
  - etc. Cualquier información adicional que considere conveniente.

* El método `deploy()` puede obtener información sobre el libro a partir del `package.json` generado. También si lo prefieren pueden pasarle un argumento con la información/estado que hayamos podido recopilar sobre el objeto resultante del `package.json`

* Los plugins deben estar correctamente documentados.
  - Por ejemplo, el plugin del `iaas-ull-es` necesita al menos saber la dirección de la máquina virtual y el camino en dicha máquina hasta el repositorio que contiene el libro
  - Pueden optar por aceptar argumentos adicionales en línea de comandos para esta información

  ```bash
  $ gitbook-start -d iaas-ull-es, --iaas-IP 127.0.25.5 --iaas-path src/chuchu
  ```
  - O bien pueden optar porque simplemente el usuario añada los correspondientes campos en el `package.json`

  ```javascript
  {
    ...
    "iaas-IP", "127.0.25.5",
    "iaas-path", "src/chuchu",
    ...
  }
  ```
  En cualquier caso debe aparecer en la documentación lo que hay que hacer
*  El método `initialize` del objeto plugin.
  - Es conveniente que el objeto  retornado por el `require` del plugin
  ```javascript
  var iaas = require("book-start-plugin-iaas-ull-es");
  var result = iaas.initialize();
  ```
  disponga de un método `initialize` que es llamado por `gitbook-start` en el tiempo de construcción de la jerarquía del libro (Fase 1). Este método puede ser usado para cosas como:
  - En el caso del plugin `iaas` - si se quiere, no se pide para esta práctica - para construir el repositorio en la máquina remota, o bien - tampoco se pide - para generar e instalar la clave y publicarla en la máquina virtual, etc.
  - En el caso del plugin `heroku` para añadir un template con el servidor express que va a correr en la máquina de Heroku, etc.
  - También se puede usar `initialize`para modificar el `gulpfile` a conveniencia, de manera que sea el propio plugin el que escriba la sección `deploy-plugin` y no `gitbook-start`

<!--endsec-->

<!--sec data-title="Referencias" data-id="sectionreferencias" data-show=true ces-->

* [Code Smells](../apuntes/patterns/codesmell.md)
* [Patrones de Diseño](../apuntes/patterns/README.md)
  * [Dependency Injection Pattern](../apuntes/patterns/dependencyinjection.md)
  * [Inversion of Control Pattern](../apuntes/patterns/inversionofcontrol.md)
  * [Strategy Pattern](../apuntes/patterns/strategypattern.md)
* [Principios de Diseño](../apuntes/patterns/designprinciples.md)
* [Creación de Paquetes y Módulos en NodeJS](../apuntes/nodejspackages.md)
* [Gulp](../apuntes/gulp/README.md)
* Para analizar los argumentos pasados en línea de comandos un buen módulo es [minimist](https://github.com/substack/minimist)
* [ejs](https://www.npmjs.com/package/ejs)
para la creación de plantillas
* [Paquetes - como `fs` - para el manejo de archivos en Node.JS](../apuntes/fs.md)
<!--endsec-->

<!--sec data-title="Q&A: Preguntas y Respuestas" data-id="sectionpreguntasyrespuestas" data-show=true ces-->

1. *¿La creación de los dos plugins debe abordarse en dos repositorios diferentes e independientes para cada plugin o paquete npm? Estamos considerando la idea de partir del repositorio de la práctica 2 y modificar la funcionalidad del paquete gitbook-start-team?*

 Cada plugin es un paquete con un repo diferente. Asi el de `iaas` es un repo distinto del de `Heroku`. Cada plugin es un módulo `npm` diferente.

 Creo que tienen permisos para crear repos dentro de la organización GitHub `Sistemas y Tecnologías Web 2016/2017`. Si no es así, si lo prefieren les creo un repo en la organización para el plugin del `iaas` mediante una asignación classroom o bien lo hacen ustedes mismos en su propia cuenta de GitHub. Por supuesto en la entrega deben haber los enlaces correspondientes a los plugins en el `README.md` del repo principal.

 Además de los repos para los plugins está el repo principal que es el del módulo `gitbook-start`

 Para esta práctica **con que hagan un repo-plugin para `iaas` es suficiente**.

2. *Cuando el usuario ejecute el comando `gitbook-start`, ¿debe crearse una estructura inicial de gitbook en el que ahora figuren nuevos archivos con respecto a la práctica 2 como, por ejemplo, `app.js`, `public/`, ...? En ese caso, entendemos que debemos ampliar el contenido del directorio `template/` con nuevos archivos.*

 No.  Si te he entendido `app.js`, `public` se refieren al despliegue en Heroku. Por tanto deberían estar en el repo del plugin de Heroku.
 En esta práctica basta que lo hagan para el `iaas`. Dejamos el plugin para `heroku` para una práctica siguiente.
<!--endsec-->

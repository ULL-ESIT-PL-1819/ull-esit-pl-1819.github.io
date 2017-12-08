## Práctica: Despliegues en iaas y heroku

### Objetivos

El objetivo de esta práctica  es proporcionar un mecanismo de despliegue de un libro [gitbook](../apuntes/gitbooknotas/README.md)
a otros sites.

### Despliegue en Heroku: Sincronización Automática con las gh-pages

Se busca que un `push` a github produzca la actualización
automática de [Heroku](../recursos/heroku.md) de manera parecida a como ocurre con gitboook.com](https://help.gitbook.com/).

* Para lograr este objetivo usaremos la técnica descrita
en el artículo [Colaboración: The Perfect Work-flow with Git, GitHub, and SSH](../apuntes/colaboracion/README.md).

* En el tutorial [Colaboración: The Perfect Work-flow with Git, GitHub, and SSH](../apuntes/colaboracion/README.md) se usa PHP para el código del servidor (que en nuestro caso vamos a hacer que se ejecute en Heroku e iaas). Utilice NodeJS y  [Express](../apuntes/express/README.md) para escribir el servidor.

* Escribiremos un servidor en express que sirve en Heroku los ficheros HTML estáticos generados a partir del libro y que además dispone de una ruta de sincronización
```javascript
app.post('/sync', (request, response) => {
  ...
```

* Una solución es crear en GitHub un segundo repositorio remoto para el directorio `gh-pages` y añadir el servidor `index.js` a dicho directorio. Es este segundo repositorio el que se sincroniza mediante un `webhook` que apunta a la ruta `/sync`

### Despliegue en iaas.ull.es

* En [iaas.ull.es](../recursos/iaas.md), debido a que la IP de la máquina virtual es privada a la red de la ULL, la estrategia explicada en
[Colaboración: The Perfect Work-flow with Git, GitHub, and SSH](../apuntes/colaboracion/README.md)
no funciona.
* Para sincronizar con [iaas.ull.es](../recursos/iaas.md) disponga un script que utilice `ssh` y/o `scp` para actualizar los ficheros necesarios al repositorio del libro en la máquina virtual.

* Este ejemplo usando el comando `ssh` sugiere una forma de hacerlo:

```bash
[~/apuntesgitbook(master)]$ ssh sytw 'cd src/express-start; git ls-files'
.gitignore
README.md
hello/hello.js
hello/package.json
hello/views/index.ejs
routes/Rakefile
routes/app.js
routes/birds.js
routes/gulpfile.js
routes/package.json
routes/public/images/kitten.jpg
```
usando este comando nos conectamos a la máquina virtual iaas `sytw` (previamente hemos hecho un alias ide la IP a `sytw` configurado en `~/.ssh/config`) y ejecutamos en la misma un comando que nos posiciona en el directorio adecuado y llama al comando `git`
* Si se tiene establecida una pareja de claves SSH privada-pública entre la máquina de desarrollo (que se supone en la red de la ULL) y la máquina virtual, es posible usar `ssh` para conectarse a la máquina virtual y hacer un `git pull` en el directorio adecuado.
* Esta solución tampoco trabaja si se está desarrollando en c9, ya que las máquinas de c9 no están en la red de la ULL.


Parta de los códigos escritos en las prácticas anteriores.


### Referencias

* [Colaboración: The Perfect Work-flow with Git, GitHub, and SSH](../apuntes/colaboracion/README.md)
  * [The Perfect Workflow, with Git, GitHub, and SSH](https://code.tutsplus.com/tutorials/the-perfect-workflow-with-git-github-and-ssh--net-19564)
* [Express](../apuntes/express/README.md)
* [Procesos: Ejecutando comandos Unix](../apuntes/processes/README.md)
* [Heroku](../recursos/heroku.md)
* [iaas](../recursos/iaas.md)



Además repase las secciones utilizadas en las prácticas anteriores:

* [Creación de Paquetes y Módulos en NodeJS](../apuntes/nodejspackages.md)
* [Gulp](../apuntes/gulp/README.md)
* Estudie el paquete [ejs](https://www.npmjs.com/package/ejs)
para la creación de plantillas
* Estudie [los paquetes - como `fs` - para el manejo de archivos en Node.JS](../apuntes/fs.md)
* Como se usa el módulo [gh-pages](https://www.npmjs.com/package/gh-pages) para automatizar el despliegue en `gh-pages`
* Como se despliega un libro en [www.gitbook.com](www.gitbook.com),
* [GitBook Plugins](https://plugins.gitbook.com/)

### Preguntas y Respuestas

1. *No entendemos cómo debemos estructurar el directorio de nuestra app y cómo disponer el gitbook en él: ¿debemos poner dentro del directorio `public/` las carpetas `scripts/`, `txt/`, `README.md`, etc?*

  No. Lo que sirves son los HTML que están en el directorio `gh-pages`.

 Ejecutas el servidor sirviendo como directorio de estáticos el directorio `gh-pages` que has generado con el `build`

 En el servidor escribes:

  ```javascript
  app.use(express.static('gh-pages'));
  ```
2. *¿Que URL debo poner en `settings->webhooks` de mi repo de GitHub?*

  Tu servidor sirve como directorio de estáticos el directorio `gh-pages` que has generado con el `build`

  En el servidor escribes:

  ```javascript
  app.use(express.static('gh-pages'));
  ```

  En tu servidor tienes una ruta que se encarga de la sincronización:

  ```javascript
  app.get('/synchronize', (request, response) => {
  // ... call a bash process that makes a pull
  // to the gh-pages branch of the github repository
  // This is executed in the heroku servers, therefore
  // be sure the github remote is defined
  });
  ```

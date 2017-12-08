## Práctica: Creación de un Paquete NPM

### Descripción

El objetivo de esta práctica  es crear un package NodeJS y publicarlo en [npm](https://www.npmjs.com). El paquete se construye a partir de
el código que haya desarrollado en la práctica anterior.

* Se trata de añadir un ejecutable `gitbook-start` (Véase [seccion `bin`en `package.json`](https://docs.npmjs.com/files/package.json#bin))
* Este ejecutable construye una plantilla con la estructura inicial del libro y provee a partir de los argumentos que se le pasen los mecanismos para su fácil despliegue en  
  1. GitHub `gh-pages` y en
  2. [`https://www.gitbook.com/`](https://www.gitbook.com/)
* Para analizar los argumentos pasados en línea de comandos un buen módulo es [minimist](https://github.com/substack/minimist)
* Como deberán darse de alta en el site de [npm](https://www.npmjs.com) asegúrense de ponerle a su paquete un nombre único que no coincida con el de los otros alumnos, por ejemplo `gitbook-start-team-name`
* Añada a los otros miembros del equipo como `contributors`. Véase [las seccion people fields de package.json](https://docs.npmjs.com/files/package.json#people-fields-author-contributors)
* Intente que su paquete funcione independientemente del Sistema Operativo (Linux, MacOS X, Windows, etc.)

### Referencias

* Véase la sección
[Creación de Paquetes y Módulos en NodeJS](../apuntes/nodejspackages.md)
* Véase la sección
[Gulp](../apuntes/gulp/README.md)
* Estudie el paquete [ejs](https://www.npmjs.com/package/ejs)
para la creación de plantillas
* Estudie [los paquetes - como `fs` - para el manejo de archivos en Node.JS](../apuntes/fs.md)

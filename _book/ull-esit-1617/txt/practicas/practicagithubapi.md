## Práctica: GitHub API, Heroku API y SSH en JavaScript

<!--sec data-title="Descripción" data-id="sectiondescripcion" data-show=true ces-->
### Descripción

#### Objetivo

El objetivo de esta práctica  es extender el [package NodeJS  publicado](practicanm.md) en [npm](https://www.npmjs.com) en una práctica anterior con una nueva funcionalidad
que permita

* Crear un token para el programa haciendo uso de la [Authorizations API](https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization). 
  - Repase la sección OAuth del tutorial [GitHub API: Getting Started](https://developer.github.com/guides/getting-started/). 
  - Guarde ese token en `~/.gitbook-start/config.json` y úselo para cualesquiera posteriores comunicaciones con la API de GitHub
* Obtener el email y el nombre del autor
* Crear el repositorio del libro en GitHub
* Generar el libro
* Hacer un push del repositorio inicial, incluyendo las `gh-pages`
* Mejore el plugin `gitbook-start-heroku-...` para que haciendo uso de la API de Heroku cree la aplicación en Heroku, intentando prescindir del [`heroku-toolbelt`](https://devcenter.heroku.com/articles/heroku-command-line)
* Mejore el plugin `gitbook-start-iaas-...` para que haga uso de versiones de `ssh` enteramente escritas en JavaScript intentando prescindir de OpenSSH y del uso de comandos de la `bash`

#### Punto de partida

El paquete se construye a partir de
* El código que haya desarrollado en las prácticas:
  - [Práctica: Nueva funcionalidad para el Paquete NPM: plugins](practicaplugin.md) y
  - [Práctica: Heroku plugin](practicaplugin2.md).

### Referencias

* [REST y REST APIS](../apuntes/rest/README.md)
* [Creación de Paquetes y Módulos en NodeJS](../apuntes/nodejspackages.md)
* [Gulp](../apuntes/gulp/README.md)
* Para analizar los argumentos pasados en línea de comandos un buen módulo es [minimist](https://github.com/substack/minimist)
* [ejs](https://www.npmjs.com/package/ejs)
para la creación de plantillas
* [Paquetes - como `fs` - para el manejo de archivos en Node.JS](../apuntes/fs.md)
<!--endsec-->

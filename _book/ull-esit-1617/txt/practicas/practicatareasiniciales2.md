## Práctica:Primeros pasos en NodeJS  

Reescriba los apuntes realizados en la [Práctica: Tareas Iniciales](practicas/practicatareasiniciales.md)
para seguir una estructura de directorios diferente, simplificando el despliegue en `gh-pages`.

Para ello vamos a partir de un fork del repo [enten/gitbook-boilerplate](https://github.com/enten/gitbook-boilerplate) que ofrece una estructura inicial para la creación de un libro y su despliegue en `gh-pages`.
  * En el directorio `scripts/` se encuentran scripts shell para la construcción y despliegue del libro
  * Este repo utiliza el módulo [gh-pages](https://www.npmjs.com/package/gh-pages) para automatizar el despliegue en `gh-pages` del libro
  * Reescriba los scripts shell en el directorio `scripts/` para la  construcción y despliegue del libro en NodeJS
  * Añada un [`Gulpfile`](https://github.com/gulpjs/gulp) con tareas `build`, `deploy`, `serve`, etc. que automaticen la construcción y despliegue del libro en los diferentes sites
  * [Despliegue el libro en su máquina del iaas](../recursos/iaas.md)
  * Recuerde usar los issues y los projects para la colaboración 
  * Despliegue el libro en su máquina virtual del iaas.ull.es siguiendo las instrucciones en 
    - [SERVICIO IAAS de la ULL](../recursos/iaas.md)
    - [Como Desplegar una Aplicación Web en iaas.ull.es](https://github.com/SYTW/iaas-ull-es)
  <!--* Despliegue el libro en [Heroku](../recursos/heroku.md) -->

### Referencias

* [static-server](https://www.npmjs.com/package/static-server)
* [Express](../apuntes/express/README.md)
* [Procesos: Ejecutando comandos Unix](../apuntes/processes/README.md)
* [Heroku](../recursos/heroku.md)
* [iaas](../recursos/iaas.md)
* [Gulp](../apuntes/gulp/README.md)
* Estudie [los paquetes - como `fs` - para el manejo de archivos en Node.JS](../apuntes/fs.md)
* Como se usa el módulo [gh-pages](https://www.npmjs.com/package/gh-pages) para automatizar el despliegue en `gh-pages`


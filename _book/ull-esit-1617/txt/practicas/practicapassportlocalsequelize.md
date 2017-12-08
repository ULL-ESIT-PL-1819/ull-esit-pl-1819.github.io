## Práctica: LocalStrategy y Base de Datos

<!--sec data-title="Descripción" data-id="sectiondescripcion" data-show=true ces-->
### Objetivo:

El servidor proveído por el plugin (sea `iaas`o `heroku`) deberá autenticar al lector
del libro  usando `LocalStrategy` y una base de datos en la que se guarda la información acerca de los usuarios.

Para la Base de datos  puede usar:

* Una base de datos y un módulo node que la soporte, por ejemplo Sqlite y `sqlite-node`
* Un ORM como Sequelize encima de cualquier base de datos relacional
* Una *not only SQL* o NoSQL base de datos como MongoDB

* En esta práctica, use un [proyecto GitHub](../apuntes/github/README.md) para la organización de las incidencias

<!-- endsec -->

<!--sec data-title="Ejemplos y Referencias" data-id="sectionejemplos" data-show=true ces-->

### Ejemplos

#### Fichero
* [Express 4.x app using Passport for authentication with username and password](https://github.com/ULL-ESIT-SYTW-1617/express-4.x-local-example)

#### Sqlite

* [Sqlite](../apuntes/db/sqlite/README.md) en los apuntes

#### Sequelize

* [An example app using express, sequelize and passport](https://github.com/ga-wdi-lessons/express-passport-sequelize) and the corresponding [video in Vimeo](https://vimeo.com/137368290)
  <!-- - {% video %}https://vimeo.com/137368290{% endvideo %} -->
* [Authentication Quickstart with Express, Passport and Sequelize](https://github.com/stribny/auth-quickstart): See the corresponding [blog](http://stribny.name/blog/2015/09/authentication-quickstart-with-express-passport-and-sequelize) about this quick-start.

* The purpose of this [tutorial](https://youtu.be/vDdJBpOhTNo) is to show the basics of hashing a user's password, Sequelize validations, hooks, and basic access control:

  {% youtube %}https://www.youtube.com/watch?v=vDdJBpOhTNo&feature=youtu.be{% endyoutube %}

#### MongoDB
* [A simple demo app using express, mongoose, passport for beginners](https://github.com/madhums/node-express-mongoose-demo). Véase el [despliegue en Heroku](http://nodejs-express-demo.herokuapp.com/)

### Referencias

* [Authentication: OAuth y Passport](../apuntes/authentication/README.md)
* [Bases de Datos](../apuntes/db/README.md)

### Módulos npm que pueden ser útiles

* [Passport-Local Mongoose](https://github.com/saintedlama/passport-local-mongoose)
  is a [Mongoose](http://mongoosejs.com/) [plugin](http://mongoosejs.com/docs/plugins.html) 
  that simplifies building username and password login with [Passport](http://passportjs.org)
* [passport-local-sequelize. Sequelize plugin that simplifies building username and password login with Passport](https://www.npmjs.com/package/passport-local-sequelize)


<!-- endsec -->

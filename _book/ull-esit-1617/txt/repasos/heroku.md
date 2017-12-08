## Preguntas de Repaso de Heroku

1.  Una vez instalado el Heroku cli nos debemos autenticar en
    heroku con el cliente. ¿Cual es el comando para autenticarnos?

2.  ¿Cual es el comando para crear nuestra aplicación en Heroku
    (suponemos que ya esta bajo el control de `git`? ¿Qué remoto
    tendremos definido después de crear nuestra aplicación en Heroku?

3.  ¿Cual es el comando para desplegar nuestra aplicación en Heroku?

4.  Si la versión que queremos publicar en heroku no está en la rama
    `master` sino que está en la rama `tutu` ¿Como debemos modificar el
    comando anterior?

5.  ¿Con que comando puedo abrir una ventana en el navegador que visite
    la aplicación desplegada? ¿Que formato tiene la URL para nuestra
    aplicación?

6.  ¿Con que comando puedo ver los logs de la aplicación desplegada?

7.  ¿Como se debe llamar el fichero en el que explicito que comando debe
    usarse para arrancar nuestra aplicación en Heroku?

8.  Heroku se percata que nuestra aplicación es una aplicación
    desarrollada con `Node.js` por la presencia de un cierto fichero.
    ¿De que fichero estamos hablando?

9.  ¿Cual es la mejor forma de ejecutar en local una aplicación
    express.js que va a ser desplegada en Heroku?
10. Explique los pasos para desplegar una aplicación en Heroku
11. Explique como resolver los problemas que pueden surgir cuando la aplicación desplegada en Heroku no funciona correctamente
12. [¿Como consulto el token para hacer uso de la API de Heroku?](../recursos/heroku.md)
13. [¿Cómo creo una app en Heroku usando la API de Heroku?](../recursos/heroku.md)
  - [Véase](https://devcenter.heroku.com/articles/setting-up-apps-using-the-heroku-platform-api#creating-an-app-setup)
  - With a source tarball, which contains an app.json, call the https://api.heroku.com/app-setups endpoint to setup the app.json enabled application on Heroku. The request body must contain a source URL that points to the tarball of your application’s source code.
  - Let’s use cURL to call the app-setups endpoint:
    ```
    $ curl -n -X POST https://api.heroku.com/app-setups \
    -H "Content-Type:application/json" \
    -H "Accept:application/vnd.heroku+json; version=3" \
    -d '{"source_blob": { "url":"https://github.com/heroku/ruby-rails-sample/tarball/master/"} }'
    ```
* Explique los pasos para publicar un libro GitBook en Heroku

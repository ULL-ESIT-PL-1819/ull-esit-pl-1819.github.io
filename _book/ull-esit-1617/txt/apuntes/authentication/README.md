## Sessions y Authentication

Véase la sección [Cookies y Autenticación](../cookies/README.md)
en estos apuntes


## OAuth

* [Introducción a OAuth](http://nereida.deioc.ull.es/~lpp/perlexamples/node773.html) (Apuntes del profesor)

## Passport

### Introducción

* [Passport](http://passportjs.org/) is authentication middleware for Node.js. 
* Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. 
* A comprehensive set of strategies support authentication using 
   * a [username and password](http://passportjs.org/docs/username-password), 
   * [Facebook](http://passportjs.org/docs/facebook), 
   * [Twitter](http://passportjs.org/docs/twitter), 
   * [GitHub](https://github.com/cfsghost/passport-github), 
   * and [more](http://passportjs.org/docs/providers).

### Tutoriales

* [Example of how to use Express 4.x and Passport to authenticate users using GitHub](https://github.com/ULL-ESIT-SYTW-1617/express-4.x-github-example)
* [GitHub repo demonstrating how to use Express 4.x and Passport to authenticate users using Facebook](https://github.com/ULL-ESIT-DSI-1617/express-4.x-facebook-example)
* [Example of how to use Express 4.x and Passport for authentication with username and password](https://github.com/ULL-ESIT-SYTW-1617/express-4.x-local-example)
* [Easy Node Authentication: Setup and Local](https://scotch.io/tutorials/easy-node-authentication-setup-and-local)
* [Authenticating Node.js Applications With Passport](http://code.tutsplus.com/tutorials/authenticating-nodejs-applications-with-passport--cms-21619)
  * [Repositorio con el código del tutorial](https://github.com/tutsplus/passport-mongo)

### Notas sobre como Configurar una WebApp en Facebook

* [Facebook App Development Guide](https://developers.facebook.com/docs/apps/)
  - [Facebook: Register and Configure an App](https://developers.facebook.com/docs/apps/register)
* StackOverflow: [How to Test Facebook Connect Locally](http://stackoverflow.com/questions/2459728/how-to-test-facebook-connect-locally)
  - Facebook → Settings → Basic:

    write "localhost" in the "App Domains" field then click on "+Add Platform" choose "Web Site".

    After that, in the "Site Url" field write your localhost url 
    (e.g.: `http://localhost:3000/login/facebook/return`).
    This will allow you to test your facebook plugins locally.
* StackOverflow: [Facebook Site URL?](http://stackoverflow.com/questions/8107911/facebook-site-url)

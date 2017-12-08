## Práctica: Passport y LocalStrategy

<!--sec data-title="Descripción" data-id="sectiondescripcion" data-show=true ces-->
### Objetivo:

* El servidor proveído por el plugin (sea `iaas`o `heroku`) deberá autenticar al lector
del libro  usando `LocalStrategy`. 
  - El uso de la `LocalStrategy` para autenticación debería ser opcional
  - Se supone que se guarda la información sobre los usuarios `{login, name, password (encrypted)}` que pueden acceder al libro en un fichero JSON.
  - Añada una ruta al servidor `/login/password` para que el usuario pueda cambiar la password. En esta ruta se despliega una vista con un formulario que permite al lector cambiar la clave
  - En el caso de Heroku la volatilidad de la máquina virtual hace que esta solución tenga problemas. Se pueden hacer los cambios permanentes asegurandose que los cambios son añadidos y empujados al repo de Heroku o mas general, guardándo el fichero de claves en algún servicio privado externo (dropbox, google-drive, github, ...) al que se accede vía la correspondiente API

<!-- endsec -->

<!--sec data-title="Ejemplos" data-id="sectionejemplos" data-show=true ces-->

### Ejemplos

#### Express 4.x app using Passport for authentication with username and password

* [Express 4.x app using Passport for authentication with username and password](https://github.com/ULL-ESIT-SYTW-1617/express-4.x-local-example)
  - [Gestión de Sesiones HTTP](http://crguezl.github.io/apuntes-ruby/node402.html)
  - [express-session: npm providing simple session middleware for Express](https://github.com/expressjs/session)
  - [Understanding passport.js authentication flow (2013)](http://toon.io/understanding-passportjs-authentication-flow/)
  - [Passport exposes a logout() function on req (also aliased as logOut())](http://passportjs.org/docs/logout)
  - [connect-ensure-login: npm Login session ensuring middleware for Connect and Express](https://github.com/jaredhanson/connect-ensure-login)
  - [StackOverflow: How to know if user is logged in with passport.js?](http://stackoverflow.com/questions/18739725/how-to-know-if-user-is-logged-in-with-passport-js)
  - [process.nextTick(callback[, ...args])](https://nodejs.org/api/process.html#process_process_nexttick_callback_args)

#### Ejemplo de uso de `inquirer`

```javascript
'use strict';
var inquirer = require('inquirer');

var questions = [
  {
    type: 'input',
    name: 'first_name',
    message: 'What\'s your first name'
  },
  {
    type: 'input',
    name: 'last_name',
    message: 'What\'s your last name',
    default: function () {
      return 'Doe';
    }
  },
  {
    type: 'input',
    name: 'phone',
    message: 'What\'s your phone number',
    validate: function (value) {
      var pass = value.match(/^\d+$/i);
      if (pass) {
        return true;
      }

      return 'Please enter a valid phone number';
    }
  }
];

inquirer.prompt(questions).then(function (answers) {
  console.log(JSON.stringify(answers, null, '  '));
});
```
Ejemplo de ejecución:
```bash
[~/local/src/javascript/learning/use-credential(master)]$ node input.js 
? What's your first name Casiano
? What's your last name Doe
? What's your phone number 111222
{
  "first_name": "Casiano",
  "last_name": "Doe",
  "phone": "111222"
}
```

#### Ejemplo de uso de `credential` e `inquirer`

```javascript
var inquirer = require('inquirer');
var credential = require('credential'),
  pw = credential(),
  pass = 'chuchu';

pw.hash(pass, function (err, hash) {
  if (err) { throw err; }
  console.log('Store the password hash:\n', hash);
  var questions = [{ message: "Enter your password", type: 'password', name: 'password'}];
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    var userPass = userInput.password;
    console.log(userPass);
    pw.verify(hash, userPass, function (err, isValid) {
      var msg;
      if (err) { throw err; }
      msg = isValid ? 'Passwords match!' : 'Wrong password.';
      console.log(msg);
    });
  });
});
```
El resultado de una ejecución es parecido a este:

```bash
[~/local/src/javascript/learning/use-credential(master)]$ node hash.js 
Store the password hash:
{
  "hash":"lFPjexO2wJKgliHvoGC4hTdrb6PbwZfKskhY9DP0GA2sHS8BfkZel0JlQ4YNNKvykDox7Bwwpvdx6Pxic84L6Oby",
  "salt":"gQ+LdSLI5Qxx9owI/ulxd/Qn5uiBfkEof1UzUCWCT8FJCA7LsCZSzn4fMxB/Lb+grqRBwPA24tE5MtKyw49PnfPo",
  "keyLength":66,
  "hashMethod":"pbkdf2",
  "iterations":340230
 }
? Enter your password ******
{ password: 'chuchu' }
chuchu
Passwords match!
```

### Ejemplo de uso de `bcrypt-nodejs`

Creemos un programa como este:
```bash
[~/local/src/javascript/learning/use-credential(master)]$ cat use-bcrypt.js 
```

```javascript
// Synchronous

var bcrypt = require("bcrypt-nodejs");

/*
  * hashSync(data, salt)
    - data - [REQUIRED] - the data to be encrypted.
    - salt - [REQUIRED] - the salt to be used in encryption.
*/
var hash = bcrypt.hashSync("bacon");
 
/*
  * compareSync(data, encrypted)
    - data - [REQUIRED] - data to compare.
    - encrypted - [REQUIRED] - data to be compared to.
*/
var ra = bcrypt.compareSync("bacon", hash); // true
console.log(ra);
var wa = bcrypt.compareSync("veggies", hash); // false
console.log(wa);

// Asynchronous

/*
  * hash(data, salt, progress, cb)
    - data - [REQUIRED] - the data to be encrypted.
    - salt - [REQUIRED] - the salt to be used to hash the password.
    - progress - a callback to be called during the hash calculation to signify progress
    - callback - [REQUIRED] - a callback to be fired once the data has been encrypted.
    - error - First parameter to the callback detailing any errors.
    - result - Second parameter to the callback providing the encrypted form.
*/
bcrypt.hash("bacon", null, null, function(err, hash) {
  /*
    * compare(data, encrypted, cb)
      - data - [REQUIRED] - data to compare.
      - encrypted - [REQUIRED] - data to be compared to.
      - callback - [REQUIRED] - a callback to be fired once the data has been compared.
      - error - First parameter to the callback detailing any errors.
      - result - Second parameter to the callback providing whether the data and encrypted forms match [true | false].
  */
  bcrypt.compare("bacon", hash, function(err, res) {
    console.log(res); // res == true
  });
   
  bcrypt.compare("veggies", hash, function(err, res) {
    console.log(res); // res = false
  });
});
```
Ejecución:

```bash
[~/local/src/javascript/learning/use-credential(master)]$ node use-bcrypt.js 
true
false
true
false
```
<!-- endsec -->

<!--sec data-title="Referencias" data-id="sectionreferencias" data-show=true ces-->
### OAuth y Passport

* [Authentication: OAuth y Passport](../apuntes/authentication/README.md)
* [passport-local](https://github.com/jaredhanson/passport-local) en GitHub

### Hashing para guardar las claves

* [credential npm module: Easy password hashing and verification in Node. Protects against brute force, rainbow tables, and timing attacks.](https://www.npmjs.com/package/credential)
* [bcrypt: A bcrypt library for NodeJS.](https://www.npmjs.com/package/bcrypt)
* [bcrypt-nodejs: A native JS bcrypt library for NodeJS](https://www.npmjs.com/package/bcrypt-nodejs)

### Lecturas desde STDIN

* [inquirer](https://www.npmjs.com/package/inquirer): Inquirer.js strives to be an easily embeddable and beautiful command line interface for Node.js (and perhaps the "CLI Xanadu").
  - [Ejemplos](https://github.com/SBoudrias/Inquirer.js/tree/master/examples)
  - [Ejemplo de Password](https://github.com/SBoudrias/Inquirer.js/blob/master/examples/password.js)
* [read: npm module para leer passwords](https://www.npmjs.com/package/read)

### Sistemas de Almacenamiento en la Nube

##### Dropbox

* [Dropbox Platform developer guide](https://www.dropbox.com/developers-v1/reference/devguide)
* [npm: dropbox](https://www.npmjs.com/package/dropbox)
  - [Dropbox JavaScript SDK Documentation](http://dropbox.github.io/dropbox-sdk-js/)
  - [Ejemplos en Node.js](https://github.com/dropbox/dropbox-sdk-js/tree/master/examples/node)
    1. [Get a token: click the "Get Token" button on the top right and copy the token](https://dropbox.github.io/dropbox-api-v2-explorer/#files_list_folder)
    2. [download.js](https://github.com/dropbox/dropbox-sdk-js/blob/master/examples/node/download.js)

```javascript
    var Dropbox = require('dropbox');
    var fs = require('fs');
    var prompt = require('prompt');

    prompt.start();

    prompt.get({
      properties: {
        accessToken: {
          description: 'Please enter an API V2 access token'
        },
        sharedLink: {
          description: 'Please enter a shared link to a file'
        }
      }
    }, function (error, result) {
      var dbx = new Dropbox({ accessToken: result.accessToken });
      dbx.sharingGetSharedLinkFile({ url: result.sharedLink })
        .then(function (data) {
          fs.writeFile(data.name, data.fileBinary, 'binary', function (err) {
            if (err) { throw err; }
            console.log('File: ' + data.name + ' saved.');
          });
        })
        .catch(function (err) {
          throw err;
        });
    });
```
  3. [upload.js](https://github.com/dropbox/dropbox-sdk-js/blob/master/examples/node/upload.js)

  ```javascript
      var Dropbox = require('dropbox');
      var fs = require('fs');
      var path = require('path');
      var prompt = require('prompt');

      prompt.start();

      prompt.get({
        properties: {
          accessToken: {
            description: 'Please enter an API V2 access token'
          }
        }
      }, function (error, result) {
        var dbx = new Dropbox({ accessToken: result.accessToken });

        fs.readFile(path.join(__dirname, '/basic.js'), 'utf8', function (err, contents) {
          if (err) {
            console.log('Error: ', err);
          }

          // This uploads basic.js to the root of your dropbox
          dbx.filesUpload({ path: '/basic.js', contents: contents })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (err) {
              console.log(err);
            });
        });
      });
  ```
  - [Ejemplos en el browser](https://github.com/dropbox/dropbox-sdk-js/tree/master/examples)
    To run the examples in your development environment:

    1. [Get a token: click the "Get Token" button on the top right and copy the token](https://dropbox.github.io/dropbox-api-v2-explorer/#files_list_folder)
    2. Clone this repo
    3. Run `npm install`
    4. From the root of your repository, start the development server with
       `npm start`.
    5. Point your browser to <http://0.0.0.0:8080/>
* Este otro módulo [node-dropbox: A simple Dropbox API client for node.js](https://www.npmjs.com/package/node-dropbox)
no parece muy actualizado

##### Google

* [Google APIs Node.js Client](https://github.com/google/google-api-nodejs-client)
* [Node.js library to access Google Drive's API](https://github.com/niftylettuce/node-google-drive)
<!-- endsec -->

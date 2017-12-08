## Preguntas de Passport

* ¿Que es OAuth?
  - OAuth provides a method for users to grant third-party limited access (in scope, duration, etc.) access to their resources without sharing their passwords
* ¿Quienes son los cuatro roles que aparecen en una autenticación con OAuth?
  1. resource owner: An entity capable of granting access to a protected resource. When the resource owner is a person, it is referred to as an end-user. (El usuario)
  2. resource server: The server hosting the protected resources, capable of accepting and responding to protected resource requests using access tokens. (El servidor de Pinterest)
  3. client: An application making protected resource requests on behalf of the resource owner and with its authorization (por ejemplo, un cliente de pinterest en el teléfono). The term " client" does not imply any particular implementation characteristics (e.g., whether the application executes on a server, a desktop, or other devices).
  4. authorization server: The server issuing access tokens to the client after successfully authenticating the resource owner and obtaining authorization (por ejemplo, Facebook, cuando nos autenticamos con Facebook)
* ¿Qué tres elementos de información suelen ser necesarios a la hora de registrar nuestra aplicación ante un proveedor de  OAuth?
  - Before using OAuth with your application, you must register your application with the service.
  - This is done through a registration form in the developer or API portion of the service's website, where you will provide the following information (and probably details about your application):
    1. Application Name
    2. Application Website
    3. Redirect URI or Callback URL
*  ¿Que se debe poner en *Redirect URI or Callback URL* cuando se está registrando nuestra aplicación?
  - The redirect URI is where the service will redirect the user after they authorize (or deny) your application, and therefore the part of your application that will handle authorization codes or access tokens.
* Una vez que registramos la aplicación, el servicio provee las credenciales del cliente. ¿En que consisten esas credenciales?
  - Once your application is registered, the service will issue client credentials in the form of a client identifier and a client secret.
  - The Client ID is a publicly exposed string that is used by the service API to identify the application, and is also used to build authorization URLs that are presented to users.
  - The Client Secret is used to authenticate the identity of the application to the service API when the application requests to access a user's account, and must be kept private between the application and the API.
* ¿Que es *passport*, que funcionalidades provee  y como funciona?
  - Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.
*  Rellene las partes que faltan:

  ```javascript
  var passport = require('passport');
  var Strategy = require('_______________').Strategy;
  var github = require('octonode');
  ....
  var datos_config = JSON.parse(JSON.stringify(config));

  passport.use(new Strategy({
      clientID: datos_config.clientID,
      clientSecret: datos_config.clientSecret,
      callbackURL: callbackURL_
    },
    function(accessToken, refreshToken, profile, cb) {

        var token = datos_config.token;
        var client = github.client(_____);

        var ghorg = client.___('ULL-ESIT-SYTW-1617');

        ghorg.______(profile.username, (err,result) =>
        {
            if(err) console.log(err);
            console.log("Result:"+result);
            if(result == true)
              return cb(null, profile);
            else {
              return cb(null,null);
            }
        });
  }));
  ```
  - Respuesta:

  ```javascript
  var passport = require('passport');
  var Strategy = require('passport-github').Strategy;
  var github = require('octonode');
  ....
  var datos_config = JSON.parse(JSON.stringify(config));

  passport.use(new Strategy({
      clientID: datos_config.clientID,
      clientSecret: datos_config.clientSecret,
      callbackURL: callbackURL_
    },
    function(accessToken, refreshToken, profile, cb) {

        var token = datos_config.token;
        var client = github.client(token);

        var ghorg = client.org('ULL-ESIT-SYTW-1617');

        ghorg.member(profile.username, (err,result) =>
        {
            if(err) console.log(err);
            console.log("Result:"+result);
            if(result == true)
              return cb(null, profile);
            else {
              return cb(null,null);
            }
        });
      // return cb(null, profile);
  }));
  ```

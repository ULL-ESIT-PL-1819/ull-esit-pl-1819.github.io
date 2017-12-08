1. ¿Que es OAuth?
\
1. ¿Quienes son los cuatro roles que aparecen en una autenticación con OAuth?
\
1. ¿Qué tres elementos de información suelen ser necesarios a la hora de registrar nuestra aplicación ante un proveedor de  OAuth?
\
1.  ¿Que se debe poner en *Redirect URI or Callback URL* cuando se está registrando nuestra aplicación?
\
1. Una vez que registramos la aplicación, el servicio provee las credenciales del cliente. ¿En que consisten esas credenciales?
\
1. ¿Que es *passport*, que funcionalidades provee  y como funciona?
\
1.  Rellene las partes que faltan:

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
                      if(result == true)
                        return cb(null, profile);
                      else {
                        return cb(null,null);
                      }
                  });
            }));


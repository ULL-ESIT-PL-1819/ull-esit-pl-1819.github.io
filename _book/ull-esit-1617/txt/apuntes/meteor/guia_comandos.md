# 8. Guía de comandos Meteor

- **meteor create <nombre_app>**: Crea una nueva aplicación meteor.

- **meteor**: Lanza la aplicación.

- **meteor mongo**: Lanza la shell de Mongo para la gestión de la Base de datos.

- **meteor shell**: Lanza la shell del servidor.

- **meteor add "autor":"paquete"**: Nos permite instalar nuevos paquetes o frameworks.

- **meteor search**:  Nos permite buscar paquetes de Meteor denominados "paquetes de terceros"(subidos por otros usuarios al servidor de paquetes de Meteor).

- **meteor reset**: Nos permite borrar la base de datos y resetear el proyecto.

- **meteor deploy <"nombre_app".meteor.com>**: Nos permite desplegar en Meteor nuestra aplicación. Posteriormente a ejecutar este comando vamos a poder acceder a la app desde el navegador escribiendo en la barra de navegación: *"<http://nombre_app.meteor.com>"*

- **meteor deploy <"nombre_app".meteor.com>**: Nos permite desplegar nuestra aplicación en Meteor. Tenemos que registrarmos previamente como usuarios de Meteor en la web oficial. Meteor recomienda el despliegue en varios  servicios como puede ser: Modulus(PAAS), en el servidor de Meteor o en el servidor personal(para ello se dispone del paquete Meteor Up, que nos permite configurar el despliegue a nuestro servidor).

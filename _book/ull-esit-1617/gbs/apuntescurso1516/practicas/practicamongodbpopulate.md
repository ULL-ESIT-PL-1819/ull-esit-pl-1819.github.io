<!-- toc -->
## Mongoose y Populations

### Requisitos de la Práctica

A los requisitos de la práctica [CSV usando MongoDB](practicamongodb.md)
anterior, le añadimos una colección de `usuarios`: un usuario tiene un `nombre` y varios (no mas de cuatro) `ejemplos`. Cada `ejemplo` pertenece a un único usuario.

La secuencia de pasos debe ser parecida a esta:

1. Inicialmente se solicita se rellene en la vista de entrada el nombre de usuario 
2. Cuando se rellena el cliente hace un request Ajax al servidor
3. El servidor busca dicho nombre en la colección de usuarios y si no lo encuentra crea un nuevo usuario y lo guarda en la base de datos. Su colección de ejemplos asociada es vacía
4. En cualquier caso el servidor responde al request con 
los nombres de los ejemplos asociados con dicho usuario
5. El cliente muestra los botones con los ejemplos de dicho usuario.
6. No se pide ninguna forma de autenticación en esta práctica
7. El resto de botones y conductas es como en la práctica anterior

### Véase

* [Populations en la Documentación de Mongoose](http://mongoosejs.com/docs/populate.html)
* La sección [Mongoose](../apuntes/db/mongo/mongoose.md)
  * La sección [Populations](../apuntes/db/mongo/mongoose.md#population)
* [Understanding Mongoose Deep Population](http://frontendcollisionblog.com/mongodb/2016/01/24/mongoose-populate.html)
* La sección [MongoDB](../apuntes/db/mongo/mongodb.md)
* [Ejemplos de routing en Express](https://github.com/SYTW/basic-routing-express)
* [Express: Sirviendo varias rutas con un solo middleware](../apuntes/express.md#sirviendo-varias-rutas-con-un-solo-middleware)
* [Express Routing - Advanced Techniques](http://jilles.me/express-routing-advanced-techniques/)






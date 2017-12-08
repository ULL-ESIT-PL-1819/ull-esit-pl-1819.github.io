<!-- toc -->
## CSV usando MongoDB

### Requisitos de la Práctica

A los requisitos de la práctica [CSV usando Ajax](practicaajaxcsv.md)
anterior, le añadimos 

* Un botón `guardar`. Cuando se hace click en dicho botón se guarda la entrada actual en una base de datos [MongoDB](../apuntes/db/mongo/mongodb.md). 
  * El `contenido`de la  entrada actual se guarda con un `nombre` que se solicita previamente al usuario
  * Usaremos [Mongoose](../apuntes/db/mongo/mongoose.md) para acceder a la base de datos
  
* Sólo se guardan hasta un límite de cuatro ejemplos en la Base de Datos. 
  Cuando el número excede del límite se borra uno de los anteriores y se guarda la nueva entrada
* Al igual que en la práctica [CSV usando Ajax](practicaajaxcsv.md) habrán botones de selección de ejemplo. 
  * Pondremos tantos botones como registros hay en la Base de Datos. 
  * Al hacer click en uno de estos botones se carga el ejemplo con ese nombre desde la base de datos en la `textarea` de entrada
    * Para trabajar las rutas que sirven los ejemplos cuando se pulsa uno de los botones de selección de ejemplo se puede usar algo como esto:

    ```javascript
    // Supongamos que se visita con GET la ruta /mongo/input1
    get('/mongo/:ejemplo', function(req, res) { 
      console.log(req.params.ejemplo); /* input1 */
      /* ... Consultar la base de datos y retornar contenidos de input1 ... */
    });
    ```
* Despliegue su aplicación en [c9.io](https://c9.io). En los enlaces de entrega (`README.md`y taller) especifique la URL de [c9.io](https://c9.io)


!INCLUDE "../apuntes/expressroutes.md"

### Véase

* La sección [MongoDB](../apuntes/db/mongo/mongodb.md)
* La sección [Mongoose](../apuntes/db/mongo/mongoose.md)
* [Ejemplos de routing en Express](https://github.com/SYTW/basic-routing-express)
* [Express: Sirviendo varias rutas con un solo middleware](../apuntes/express.md#sirviendo-varias-rutas-con-un-solo-middleware)
* [Express Routing - Advanced Techniques](http://jilles.me/express-routing-advanced-techniques/)





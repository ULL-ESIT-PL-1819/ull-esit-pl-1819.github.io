# 5. Colecciones en Meteor

Aspetos que se van a tratar:

- Colecciones como característica central de Meteor.

- Sincronización de datos en Meteor.

- Integración de colecciones y plantillas.

- Aplicación en tiempo real.

## Qué es una colección

Una colección es una estructura de datos que nos permite almacenar los datos de forma permanente y sincronizar datos en tiempo real con el navegador del usuario.

En Meteor, usaremos MongoDB en el servidor. A modo de  mantener el código organizado, sería una buena política crear un directorio 'collections/' dentro de 'lib' y dentro de este un fichero .js con la nueva collection.

```bash
touch lib/collections/posts.js
```

La **sintaxis** para definir una nueva collection es la siguiente:

```JavaScript
<nombre de la collection> = new Mongo.Collection('<nombre en mongo de la collection>');
```

En primera instancia exponemos el nombre con el que vamos a acceder a la collection desde cualquier fichero de nuestra aplicación. En segunda instancia, especificamos el nombre con el que vamos a acceder a la misma pero a través de la shell de mongo.

*Ejemplo*:

```JavaScript

Posts = new Mongo.Collection('posts');
Users = new Mongo.Collection('users');

```

Si quiero acceder a cualquiera de estas collections definidas a través de la shell de Mongo, debemos ejecutar lo siguiente:

```bash
meteor mongo
```

Una vez dentro, si quiero realizar operaciones(insertar, borrar, actualizar, etc) accederé a la collection del siguiente modo:

```bash
PROMPT METEOR> db.posts.find();
PROMPT METEOR> db.users.find().count();
```

## Cliente y Servidor

Todo aquel código que no se encuentre ni dentro del directorio client/ ni server/ se va a ejecutar en los dos contextos, es decir, tanto en el cliente como en el servidor. De este modo, tanto la colección Posts como Users estarán disponible en los dos ámbitos aunque su funcionalidad es diferente en cada uno de ellos:

- En el servidor: En el servidor, la colección tiene la tarea de hablar con la base de datos MongoDB y leer y escribir cualquier cambio.

- En el cliente:  La colección es una copia de un subconjunto de la colección canónica. Cuando declaramos una collection, lo que se está creando es una caché local dentro del navegador de la colección real de Mongo, que contiene un subconjunto de los datos, y ofrece un acceso muy rápido.
  - Una colección del lado del cliente consiste en un **subconjunto** de todos los documentos almacenados en la colección de Mongo.
  - Los documentos se almacenan en la memoria del navegador, lo que significa que el acceso a ellos es prácticamente instantáneo.

## Sincronización de los datos

**¿Cómo se comunican los datos de la colección del cliente con la colección del servidor?**

En el caso de una inserción, por ejemplo, la colección del cliente informa de un nuevo documento en la colección al servidor, el cual distribuye el mismo entre la base de datos Mongo y todos los clientes conectados a la colección correspondiente.

**Ejemplos**: Volcando una colección de libros.

*Fichero server/carga.js:*

```javascript

  //Base de datos vacía => Insertamos en Mongo nuevos campos
  if(Libros.find().count() === 0)
  {
    Libros.insert({
      titulo: "El Perro",
      autor: "Figueroa"
    });
    Libros.insert({
      titulo: "La fortaleza digital",
      autor: "Dawn Brown"
    });
    Libros.insert({
      titulo: "Canción de Hielo y Fuego",
      autor: "George RR Martin"
    });
  }
```

*Llamamos al template para mostrar los libros en el fichero client/main.html:*

```html
  <div id="main">
      {{> postLibros}} <!--Llamamos al template postLibros -->
  </div>
```

*Configuramos template postLibros en fichero client/template/postLibros.html:*

```html
<template name="postLibros">
  <div class="posts">
    {{ #  each Libros}} <!--Iterador each -->
      {{> postLibroItem}}
    {{/each}}
  </div>
</template>
```

*Configuramos template postLibroItem en fichero client/template/postLibroItem.html:*

```html
  <template name="postLibroItem">
    <div class="post">
      <div class="post-content">
          <h3>{{ titulo }}</h3>
          <h4>{{ autor }}</h4>
      </div>
    </div>
  </template>
```

*Configurando el ayudante. Fichero client/templates/postLibro.js:*

```javascript
Template.postLibros.helpers({
  Libros: Libros.find();
});
```

## Publicaciones y suscripciones

**Paquete autopublish:** Paquete habilitado por defecto en Meteor. Básicamente hace que todas las conexiones sean compartidas entre todos los clientes conectados.
Cuando nuestra aplicación se va consolidando es aconsejable deshabilitar este paquete, puesto que en función del cliente o la situación(privacidad, seguridad, escalabilidad) nos puede interesar determinar que colecciones se muestran y cuáles que no.

```bash
meteor remove autopublish
```

Ahora los datos de nuestras colecciones no aparecerán en nuestra publicación.

Para determinar que colecciones y documentos pueden ver los usuarios debemos configurar las funciones **publish()**:

**¡¡¡En el servidor publicamos y en el cliente nos suscribimos a dicha publicación!!!**
*Fichero server/publicaciones.js:*

```javascript
Meteor.publish('libros', function(){
  return Libros.find();
});
```

*Fichero client/main.js:*

```javascript
Meteor.subscribe('libros');
```

En el caso de que publiquemos una colección desde el servidor, pero no realizemos la suscripción correctamente, no visualizaremos los datos desde el cliente.

Podemos realizar publicaciones desde el servidor añadiendo filtros que vuelquen datos determinados. Podemos ver los siguientes ejemplos:

```javascript
Meteor.publish('Libros', function(){
  return Posts.find({'autor':'Juan'}, {fields: {
    date: false
  }});
});
```

Esta metodología publicación/suscripción (**DDP, Protocolo de Datos Distribuidos**), hace referencia a lo que Meteor llama **"base de datos en todas partes"** lo cual implica lo siguiente:

- Envío de datos actuales en bruto (**data on the wire**). Servidor envía datos en bruto al cliente y éste se ocupa de ellos y los renderiza usando los templates o plantillas.

- El hecho de tener una copia de la base de datos en el Cliente posibilita que con MiniMongo se pueda acceder y modificar los documentos de las colecciones sin esperar al servidor (**lantecy compensation**).

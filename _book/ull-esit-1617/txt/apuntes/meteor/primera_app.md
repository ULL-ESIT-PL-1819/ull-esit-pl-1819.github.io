# 6. Construyendo una app

## Instalamos y creamos nuestra app

Podemos ver todos los pasos que tenemos que seguir para la instalación de la herramienta y la configuración inicial accediendo al [capítulo 1](instalando.md).

## Creamos estructura

 Pese a que la estructura es prácticamente libre(exceptuando los directorios **client/** y **server/**, que tienen funciones muy específicas), una posible estructura podría ser la siguiente:

![estructuraaconsejable](http://i.imgur.com/9pWEIrG.png)

## Definimos plantillas

En este caso, por ejemplo, vamos a imprimir una lista de animales especificando el nombre del animal y algunas de sus características como: familia, número de patas, tipo, etc. Podemos acceder al repositorio haciendo click en el siguiente [enlace](https://github.com/JosueTC94/animalesMeteor.git).

Podríamos crear las siguientes plantillas(*esto es libre, es decir, cada uno puede abordar las plantillas y sus estilos como guste*):

*Plantilla base. Fichero templates/post_animales.html*:

```html
<template name="postsList">
  <div class="posts">
    {{# each animales}}
      {{> postItem}}
    {{/each}}
  </div>
</template>
```

*Plantilla postAnimalesItem. Fichero templates/post_animales_item.html*:

```html
<template name="postItem">
  <div class="post">
    <div class="animal-content">
      Nombre: {{nombre}}, Tipo: {{tipo}}, Familia: {{familia}}
    </div>
  </div>
</template>
```

## Configuramos los helpers

Los helpers proveerán de datos a los templates, las cuales, sin estos no harían absolutamente nada. En este sentido, los helpers dotan de utilidad a las plantillas.

*Fichero templates/post_animales.js*:

```javascript
Meteor.postsList.helpers({
  animales: function()
  {
    return Animales.find();
  }
});
```

## Eliminamos el paquete autopublish

No queremos que todos nuestros datos se envíen y publiquen. En casos en los que la base de datos sea enorme o se disponga de datos confidenciales que no deben ser expuestos ni accesibles por parte de los usuarios, debemos filtrar que colecciones y documentos se envíen el cliente.

El paquete autopublish precisamente da pie al envío masivo de todos nuestros datos, por lo que debemos desactivarlo:

```bash
meteor remote autopublish
```

## Creamos y publicamos la colección Animales

*Fichero server/main.js. Creando colección*:

```javascript
Animales = new Mongo.Collection('animales');
```

*Fichero server/publications.js*:

```javascript
Meteor.publish('animales', function()
{
  return Animales.find();
});
```

## Suscripciones desde el cliente

Pese a que el servidor haya publicado los datos, en el cliente se debe suscribir a la publicación correspondiente:

```javascript
Meteor.subscribe('animales');
```

Si no hacemos esto no se mostrarán en el navegador cliente los datos.

## Carga inicial de datos

Si se desea, puede hacer una carga inicial de animales en la base de datos de Mongo. Para ello podemos crear un fichero *server/cargaBD.js* que haga lo siguiente:

```javascript
if(Animales.find().count() === 0)
{
  Animales.insert({
    Nombre: "Tigre",
    Familia: "Felinos",
    Tipo: "Mamífero carnívoro"
  });
  Animales.insert({
    Nombre: "Tiburón",
    Familia: "Pez cartilaginoso",
    Tipo: "Carnívoro"
  });
  //.........
}
```

**Podemos encontrar este ejemplo completo en Github haciendo click en el siguiente [enlace](https://github.com/JosueTC94/animalesMeteor.git).**

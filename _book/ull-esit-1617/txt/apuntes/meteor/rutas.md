# 7. Rutas en Meteor

## Iron router

Paquete de enrutado por excelencia de Meteor. Sencillo y potente. Permite al usuario:

- Crear rutas sencillas.

- Crear rutas con parámetros.

- Se hace cargo de filtros(acciones a algunas rutas).

- Administrar suscripciones: definir a qué datos pueden acceder las rutas.

Este paquete trabaja tanto en el servidor como en el navegador y se ha diseñado específicamente para Meteor.

**Instalación del paquete:**

Para instalarlo sólo tenemos que ejecutar el siguiente comando en la terminal:

```bash
meteor add iron:router
```

## Elementos clave en el enrutamiento en Meteor

- **Routes**: Pieza de construcción básica del enrutamiento. Conjunto de instrucciones que le dicen a la aplicación a dónde ir y qué hacer cuando se encuentra la URL.

- **Paths**: Dirección URL dentro de la aplicación. Dos tipos: estáticas y dinámicas. Pueden incluir parámetros de consulta.

- **Segments**: Las diferentes partes de un path. Se encuentran separados por el delimitador */*.

- **Hooks**: Se definen cómo aquellas acciones o procesos que se ejecutan antes, después o durante el proceso de enrutamiento. Ejemplos:

- **Filters**: Acciones o Hooks globales para todas las rutas.

- **Route Template**: Plantilla a la que apunta la ruta. En el caso de que no se indique una plantilla, Meteor busca una que tenga por nombre el de la ruta.

- **Layouts**: Marco de contenido. Aquel contenido que visualizaremos siempre independientemente de la plantilla actual.

- **Controllers**: Algunas veces, nos daremos cuenta de que muchas de nuestras plantillas utilizan los mismos parámetros. En lugar de duplicar el código, podemos dejar que todas estas rutas se hereden desde un solo controlador de enrutamiento que contendrá toda la lógica necesaria.

## Sintaxis de una ruta

```javascript
Router.route('<path>', function()
{
    //Resto de código
});
```

Ejemplo de rutas:

```javascript
Router.route('/', function(){
  this.render('MyTemplate');
});
```

```javascript
Router.route('/home', function()
{
  name: "home",
  data: {
    libros: function()
    {
      return Libros.find();
    }
  }
});
```

```javascript
Router.route('/items/:_id', function(){
  var item = Item.findOne({_id: this.params._id});
  this.render('ShowItem', {data: item});
});
```

Un aspecto muy interesante que tiene el router es una función o propiedad llamada **"waitOn"**, especialmente útil para subscribirnos a las publicaciones(lado del cliente) que se configuran en el servidor. Principalmente cuando se produce la primera petición a la Base de Datos desde el cliente y hay que esperar a que el cliente se subscriba a la publicación de la colección y llegue los datos.

## Mapeos de rutas a plantillas

Además de construir los diseños a partir de plantillas fijas (*\{\{\> Libro \}\}*), es posible controlar el < body > de nuestras vistas indicando al router que apunte a una plantilla especial que contiene un ayudante **\{\{ \> yield \}\}**.

Básicamente, \{\{ \> yield \}\} permite definir una zona dinámica especial que mostrará automáticamente lo que corresponde a la ruta actual. De ahí que se conozca como "route template"(**plantilla de ruta**).

![routeTemplate]([Imgur](http://i.imgur.com/z4jvgqZ.png)

## Configurando nuestras primeras rutas

```javascript
Router.configure({
  layoutTemplate: "baseLayout", //Template que se carga por defecto para todas las "vistas"
  waitOn: function()
  {
    return Meteor.subscribe("librosPublicados");
  }
});

Router.route('/', {name: 'mostrandoLibros'})
```

En primer lugar, se establece el template *baseLayout* como diseño predeterminado para todas las rutas.

En segundo lugar, se ha creado una nueva ruta *mostrandoLibros* y se ha mapeado a */*.

Como podemos observar además de definir la ruta */* le hemos dado un nombre: *mostrandoLibros*. El hecho de otorgar un nombre a la ruta permite utilizar algunas características de Iron Router que hacen que sea más fácil construir enlaces dentro de la aplicación.

Entra en juego ahora el ayudante de **Spacebars**: \{\{ pathFor '<nombre_ruta>' \}\} . Este ayudante tiene por función devolver los componentes del **path** de cualquier ruta. Es realmente útil cuando, por ejemplo, cambiamos los paths de las rutas, lo cual utilizando \{\{ pathFor '<nombre_ruta>' \}\} es indiferente si conocemos el nombre que le hemos asignado a dicha ruta.

## Mejorando nuestras rutas

Ademas de los aspectos comentados, Meteor nos ofrece posibilidades y herramientas para administrar aspectos como los siguientes:

- **Tiempo de espera durante la carga de datos**: Meteor nos permite ofrecer algo de información visual de lo que pasa hasta que se cargan los datos y pueden visualizarse, tiempo en el cual el usuario espera. Para ello podemos añadir la funcionalidad **waitOn** a la configuración de nuestras rutas:

```javascript
  Router.configure({
    layoutTemplate: 'baseLayout',
    waitOn: function() { return Meteor.subscribe('libros')}
  });
```

Básicamente, cualquier ruta necesita subscribirse a la publicación "libros" para poder que el renderizado de las plantillas sea correcto y muestren los datos correctamente, es decir, etamos seguro de que los datos van a estar siempre disponibles para el usuario.

- **Carga de datos más amena**: Además, Meteor nos permite configurar una plantilla de carga que se visualice cuando el usuario accede a una ruta y los datos se encuentren en proceso de carga y renderizado.

Para poder configurar una **plantilla de carga** necesitamos instalar el paquete spin ejecutando:

```bash
meteor add sacha:spin
```

*Plantilla de carga -> loading.html:*

```html
<template name="loading">
    {{> spinner}}
</template>
```

*Configurando rutas y añadiendo plantilla de carga:*

```javascript
Router.configure({
  layoutTemplate: 'baseLayout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('libros')}
});
```

- **¿Y si no se encuentra la ruta especificada?**: Meteor nos permite configurar las rutas globalmente de modo que si el usuario intenta acceder a una ruta que no existe el usuario visualice una plantilla alternativa:

```html
<template name="notFound">
  <div class="not-found page jumbotron">
    <h2>404</h2>
    <p>Sorry, we couldn't find a page at this address.</p>
  </div>
</template>
```

```javascript
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('posts'); };
});
```
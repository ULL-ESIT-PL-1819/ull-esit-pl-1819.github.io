# 4. Plantillas en Meteor

## Spacebars

Spacebars es el nombre con el que conocemos el sistema de plantillas utilizado en Meteor. Se basa en el uso de patrones para el volcado de los datos almacenados.

En definitiva, Spacebars es HTML y 3 aspectos más: inclusiones, expresiones y bloques de ayuda(block helpers).

**Bloques de ayuda en la definición de templates en Meteor**:

- **Each**: Opera sobre un array o un cursor.

Ejemplo:

```html
<template name="listaLibros">
  <div class="libros">
      {{ # each libros}}
        Nombre: {{name}}, Autor: {{autor}}
      {{/each}}
  </div>
</template>
```

*IMPORTANTE*:

- **Each** además de iterar los datos, establece el valor de **this** dentro del bloque al objeto que está siendo iterado.

- **With o if/else**.

Ejemplo:

```html
<template name="listaLibros">               <template name="listaLibros">
  <div class="libros">                         <div class="libros">
    {{#with libro}}                            {{#if libro}}
      Nombre: {{name}}, Autor: {{autor}}          Nombre: {{name}}, Autor: {{autor}}
    {{else}}                                    {{else}}
      No existe ningún libro                      No existe ningún libro
    {{/with}}                                   {{/if}}
  </div>                                        </div>
</template>                                 </template>
```

- **Unless**: Opuesto de if.

Ejemplo:

```html
<template name="pet">
   {{ # unless dog.sleeping}}
      {{dog.name}} is awake!
    {{else}}
      {{dog.name}} is sleeping!
   {{/unless}}
</template>
```

## Inclusión en plantillas y usos

Básicamente se trata de llamar a otra plantilla dentro de la actual para mostrar los datos. Las inclusiones avisan a Meteor que debe reemplazar la inclusión por la plantilla especificada.

Ejemplo:

```html
<template name="list">          <template name="listItem">
  {{ # each items}}                 {{name}} - {{colour}}<br>
    {{> listItem}}              </template>
  {{/each}}
</template>
```

En este ejemplo se pone de manifiesto otro de los aspectos que constituyen Spacebars: las **expresiones** ({{name}}, {{colour}}). Su función principal es llamar a una propiedad del objeto actual o bien el valor de retorno de un ayudante(helper).

En el siguiente ejemplo llamamos a la plantilla userList pasándole datos, en este caso, "users":

```html
<template name="overview">   <template name="userList">
  {{> userList users}}          {{ # each this}}
</template>                       {{name}}<br>
                                {{/each}}
                              </template>
```

En este caso, además, le pasamos nuevos parámetros distintos a los proveídos por el helper o controlador:

```html
<template name="overview">                                  <template name="userList">
  {{> userList users=users title="Usurios de mi app"}}          <p>  {{ title }} </p>
</template>                                                     {{ # each users}}
                                                                  {{name}} <br>
                                                                {{/each}}
                                                            </template>
```

Si queremos añadir comentarios a nuestras plantillas debemos incluir un signo de exclamación siguiendo la sintaxis:

```html
{{! Comentario }}
```

## Creando plantillas

Es una buena política definir todas nuestras plantillas dentro de un directorio que creemos para tal fin, con el nombre "templates", por ejemplo. Este directorio lo ubicaremos dentro de **"client/"**.

**¿Cómo encuentra las plantillas Meteor?**

Una de las ventajas de esta herramienta es su gran eficiencia a la hora de encontrar archivos. Independientemente del lugar dónde ubiquemos nuestra plantilla dentro del directorio "client/", Meteor la encontrará y renderizará los datos pertinentes.
En este sentido, el programador se puede desentender totalmente de la necesidad de estar escribiendo manualmente rutas para que la aplicación encuentro los ficheros CSS o JavaScript.
En definitiva, lo que importa en meteor es el **nombre del template**, no el nombre del fichero dónde se haya declarado la misma.

## Ayudantes de plantillas

A diferencia de otros lenguajes, Meteor tiene las plantillas y la lógica de las mismas separadas. Es decir, las plantillas por sí solas no van a hacer nada.
Es en este punto dónde intervienen los ayudantes de plantillas.
Mientras que las plantillas lo único que hacen es mostrar o iterar sobre variables, los **ayudantes** son los que **asignan los valores a dichas variables**.

Se suele tomar la política de llamar al ayudante de plantilla del mismo nombre que el fichero que contiene a ésta última salvo que la extensión cambia de .html a .js

## Sintaxis para declarar un ayudante de plantilla

Tomaremos como nombre de plantilla "listLibros", por ejemplo.

*Código de ayudante de plantilla listLibros.js en client/templates*:

En el caso de que los datos sean dinámicos        En el caso de que los datos sean estáticos

```javascript
Template.listLibros.helpers({                     var BDLibros = [
  libros: return Libros.find();                   {
});                                                   autor: "Juan",
                                                      name: "Aprendiendo Meteor"
                                                  });
                                                  Template.listLibros.helpers({
                                                    libros: BDLibros
                                                  });
```

*Código de plantilla listLibros.html en client/templates*:

```html
<template name="listLibros">                       <template name="listLibrosItem">
    <div class="libros">                            <div class="libro_item">
        {{ # each libros}}                               Autor:{{autor}}, Titulo: {{titulo}}
            {{> listLibrosItem}}                    </div>
        {{/each}}                                  </template>
    </div>
</template>
```
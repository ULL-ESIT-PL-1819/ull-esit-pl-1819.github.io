# 5. HTML Template

HTML Template, es una característica fundamental para crear tu propio elemento en Polymer. Con la etiqueta `<nombreElemento></nombreElemento>` se puede llamar al elemento y acceder a todas sus característica mediante javascript. Estos elementos propios, se encuentran almacenados en otros ficheros .html que no son el **index.html**.

La estructura típica de un elemento creado por un usuario es la siguiente

```html
<link rel="import" href="../bower_components/polymer/polymer.html">
<!-- Defines element markup -->
<dom-module id="hello-world">
    <template>
      <style>
        /*CSS rules for the element*/
      </style>
      <p>Hello :)</p>
      </template>
</dom-module>

<!-- Registers custom element -->
<script>
Polymer({
    is: 'hello-world',
    properties: {
        who: {
            type: String,
            value: 'World'
        }
    }
});
</script>
```

Como se puede apreciar, se trata de un simple hola mundo utilizando nuestro propio elemento. Para poder hacerlo funcional, lo primero que hay que realizar es la importación del componente polymer que se encuentra en `bower_components/polymer`. A continuación, se utiliza  la etiqueta `<dom-module id="nombreModulo">` que permitirá que se carguen todas las características que posee el elemento creado en el [Local DOM](./localDom.md).

Finalmente, mediante el script y la llamada a `Polymer is: 'nombreElemento'` se permitirá que desde cualquier fichero .html se llame al elemento creado utilizando únicamente la etiqueta  `<nombreModulo></nombremodulo>`  e importando el archivo html donde se encuentre .

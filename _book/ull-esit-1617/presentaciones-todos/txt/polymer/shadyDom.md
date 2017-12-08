# 8. Qué es el Shady Dom

Como ya se comentó anteriormente, el [shadow Dom](./shadowDom.md) es una de las características principales para la creación de web components pero, el uso del shadow dom si no se es un desarrollador experimentado es tedioso y complicado de usar.
Polymer, además de trabajar con el shadow dom, también permite trabajar con lo que se le denomina **Shady DOM**. El shady dom, permite acceder al arbol dom que se crea del componente de una manera más facil que como se haría utilizando el shadow dom.

## Uso del this.$

Para acceder a los elementos del DOM de el elemento creado sólo basta con acceder mediante la utilización de la sentencia `this.$.identificador del elemento a acceder`. A continuación, se muestra un ejemplo práctico del uso del shady DOM

```html
<!--starwars.html-->
<link rel="import" href="bower_components/polymer/polymer.html">
<dom-module id="star-wars">
  <template>
    <article id="main">
      <h3 id="name">Luke Skywalker</h3>
      <ul id="description">
        <li><b>especie:</b> <span id="specie">humana</span></li>
        <li><b>planeta natal:</b> <span id="homeworld">Tatooine</span></li>
        <li><b>ocupación:</b> <span id="occupation">maestro jedy</span></li>
      </ul>
    </article>
  </template>
  <script>
  Polymer({
    is: "star-wars"
  });
  </script>
</dom-module>
```

Para acceder al elemento con id specie por ejemplo, habría que áñadir la siguiente sentencia

```javascript
nombrefuncion: function () {
  this.$.specie.style.color="#123456"
}
```

Esto permitirá de una manera simple acceder a cualquier nodo de nuestro elemento simplemente utilizando `this.$.id` , haciendo mucho más fácil la modificación del nodo de nuestro elemento el arbol local que se crea.

### Uso del this.$$

La sentencia this.$ funciona cuando el nodo está incluído dentro del template del elemento que se esta creando. En caso de que se quiera acceder al nodo de un elemento que se cree  posteriormente dentro de una función por ejemplo, habría que añadir la sentencia `this.$$.(id del nodo)`. A continuación, se muestra un ejemplo claro de cómo funcionaría this.$$ .

```javascript
  nombrefuncion: function() {
    var item = document.createElement('li');
    item.innerHTML = "<b>notas:</b> <span id='notes'>su padre es Darth Vader</span>";
    Polymer.dom(this.$.description).appendChild(item);
  }
```

Polymer para crear nodos dentro de un elemento posee su propia API y tiene una serie de funciones que se detallan en [Polymer.dom](./polymerDom.md). En esta ocasión, se está creando un elemento del tipo `li` que es hijo del nodo `description` y que lo que hace es mostrar una información con respecto a lo que contiene ese elemento.
En esta ocasión, si se quisiera utilizar la sentencia  `this.$.notes.style.color="#123456"` daría error, ya que el nodo no está creado en el template como tal sino que está creado posteriormente. Para modificar el nodo, se debe utilizar la sentencia `this.$$("#notes").style.color = "#123456"`

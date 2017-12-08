# 10. Qué es un behavior

Un behavior, es la manera de extender un custom element para compartir el código entre diferentes componentes de Polymer. Esta manera de compartir código permite añadir nuevas características al componente que se este desarrollando utilizando lo que otro desarrollador haya realizado en un componente totalmente distinto.
Para añadir un behavior a un elemento que se está creando, se tiene que añadir las siguientes líneas.

```javascript
Polymer({
  is: 'nombreElemento',
  behaviors: [SuperBehavior]
});
```

En caso de que como desarrollador se quiera crear un propio behavior, sólo hay que crear un nuevo documento html `mi-behavior.html` el cual sólo contendrá código javascript para añadir las funciones que se exportarán a los elementos que usen el behavior. La sintaxis para crear un behavior estándar es poner como mayúscula la primera letra del mismo. A continuación, se muestra un ejemplo de la creación de un behaviour.

```html
<script >
ValidadorBehavior = {
  esdni: function(dni) {
    if(dni.length < 9){
      return false;
    }
    return /^[XYZ]?\d{5,8}[A-Z]$/.test(dni);
  },
  esName: function(name) {
    if(name.length <= 1 || name.length > 100)
      return false;
    return true;
  }
};
</script>
```

Este behavior permite comprobar que si los datos que se introducen de una persona (nombre y dni) son correctos. Para añadir este behavior en un elemento que se esté desarrollando, se debe añadir en otro fichero html la siguiente estructura.

```html
<dom-module id="formulario-registro">
  <template>
    <style>
      /*Añaidr el estilo al componente*/
    </style>
    <!--Añadir características del elemento-->
  </template>
  <script>
    Polymer({
      is: 'formulario-registro',
      behaviors: [ValidadorBehavior],
      properties: {
        name: String,
        dni: String
      },
      saveUser: function() {
        if(this.esName(this.name) && this.esdni(this.dni)) {
          //se comprueba el nombre y el DNI/NIE mediante los métodos del behavior
        }
      }
    });
  </script>
</dom-module>
```

Además, aunque no se muestra en el ejemplo anterior,los behavior también permiten añadir funciones de eventos listeners,observers, etc. sólo habría que añadir como función o como propiedad las siguientes líneas.

```html
<script >
  HighlightBehavior = {
    properties: {
      isHighlighted: {
        type: Boolean,
        value: false,
        notify: true,
        observer: '_highlightChanged'  //se añade el evento como propiedad
      }
    },
    //se añade el evento como función del behavior
    listeners: {
      click: '_toggleHighlight'
    }
  };
</script>
```

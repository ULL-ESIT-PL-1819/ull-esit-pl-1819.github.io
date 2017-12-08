## Práctica: Eliminando Switch Smell
En la práctica anterior modificamos el código del conversor de temperaturas para que usara objetos y herencia.

En dicha práctica definimos las clases `Medida`, `Temperatura`(que hereda de `Medida`) así como las clases `Celsius`, `Fahrenheit`, `Kelvin`, etc. que heredan de `Temperatura.`

En la solución que aportó en la práctica de iniciación a la OOP en JavaScript 
posiblemente  usaba bien un `switch`, bien un `if else`para 
a partir de la entrada determinar el tipo de conversión necesaria: ¿Que clase usar? `Celsius` o `Kelvin`? y también para determinar ¿Que método usar `toFahrenheit` o `toCelsius`?. Algo parecido a esto:


```javascript
exports.convertir = function() {
    var valor     = document.getElementById('convert').value,
        elemento  = document.getElementById('converted'),
        regexp = XRegExp('...'); /* ... código suprimido */
        valor = XRegExp.exec(valor, regexp);

     switch (tipo) {
        case 'c':
          var celsius = new Celsius(numero);
          if(destino == 'c')
            elemento.innerHTML = numero.toFixed(2) + " Celsius";
          if(destino == 'f')
            elemento.innerHTML = celsius.toFahrenheit().toFixed(2) + " Fahrenheit";
          if(destino == 'k')
            elemento.innerHTML = celsius.toKelvin().toFixed(2) + " Kelvin";
          break;
        case 'f':
          var fahrenheit = new Fahrenheit(numero);
          if(destino == 'f')
            elemento.innerHTML = numero.toFixed(2) + " Fahrenheit";
          if(destino == 'c')
            elemento.innerHTML = fahrenheit.toCelsius().toFixed(2) + " Celsius";
          if(destino == 'k')
            elemento.innerHTML = fahrenheit.toKelvin().toFixed(2) + " Kelvin";
          break;
        case 'k':
          var kelvin = new Kelvin(numero);
          if(destino == 'k')
            elemento.innerHTML = numero.toFixed(2) + " Kelvin";
          if(destino == 'c')
            elemento.innerHTML = kelvin.toCelsius().toFixed(2) + " Celsius";
          if(destino == 'f')
            elemento.innerHTML = kelvin.toFahrenheit().toFixed(2) + " Fahrenheit";
          break;
        default:
          elemento.innetHTML = ".";
      }
  /* .... código suprimido */
}
```

## Debilidades

Existen varias debilidades en este código:

* Es mejor que la función `convertir` reciba un parámetro de entrada y retorne el resultado y no dependa de elementos externos como el DOM de manera que se pueda aislar en una librería

* La expresión regular se computa  cada vez que se llama a `convertir`. Esto conlleva un tiempo de cómputo innecesario 
ya que la expresión regular es una constante que puede sacarse fuera de `convertir`

* Es mejor tener aisladas las clases en distintos ficheros. Una posible solución es tener un fichero para `Medida` otro para `Temperatura` (en el que guardar todas las clases `Temperatura`) y quizá otro para el programa principal (`main`).

* Ahora `convertir`es una función global, un método del objeto `window`. Es mejor encapsularlo algo mas y que sea un *método de clase* de la clase `Medida`. El código principal podría quedar algo similar a esto:

```javascript
(function(exports) {
  "use strict";
  function main() {
      var valor     = document.getElementById('convert').value,
          elemento  = document.getElementById('converted');
      elemento.innerHTML = Medida.convertir(valor);
      return false;
  }
  exports.main = main;
})(this);
```

* Como señalamos en la sección [Code Smells](../apuntes/codesmell.md) el uso de un `switch` con dependencia de las clases es siempre un punto débil: si introducimos nuevas clases, por ejemplo, `Rankine` deberemos modificar además del código de las clases `Temperature` el código de conversión introduciendo un nuevo `case`. Viola el principio *Open/Closed*.

* Aunque no aparece en el código anterior, la expresión regular usada en el código original:
```javascript
regexp = XRegExp('^(\\s*) \n' +
                  '(?<valor> [-+]?[0-9]+(\.[0-9]+)?(?:e[+-]?[0-9]+)?) \n' +
                  '(\\s*)                                             \n' +
                  '(?<tipo> [fck])                                    \n' +
                  '(\\s*)                                             \n' +
                  '(to)?                                              \n' +
                  '(\\s*)                                             \n' +
                  '(?<to> [fck])                                      \n' +
                  '(\\s*)$','ix');
```
también presenta varias debilidades.
  * Una de ellas es que es que no escala si se introducen nuevas clases. La clase usada `[fck]` impide que, por ejemplo, 
en el futuro, una `r` para `Rankine` sea aceptada.
  * Otra es que la expresión regular se construye dentro del código de la función `convertir`.
    cada vez que `convertir`es llamada la `XRegExp` es compilada. Podemos convertirla en una constante de la clase y compilarla una sola vez evitando así un coste innecesario de re-computo
* El uso excesivo de constantes de tipo `String` como `'k'`, `'c'`, etc. Corremos el riesgo de escribirlas de forma inconsistente en algún momento.

* De hecho, en el diseño de algunas prácticas de los alumnos he podido ver que 
métodos como `toCelsius` o `toKelvin` devuelven un `String`con la conversión.
Sería mas consistente que `toCelsius`devolviera un objeto de la clase `Celsius`y `toKelvin`uno de la clase `Kelvin`

## El principio *Open/Closed*

"software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification"; 
that is, such an entity can allow its behaviour to be extended without modifying its source code.

## Solución: `Strategy Design Pattern`

  La solución es usar el `strategy design pattern`. Vea como hacerlo en este vídeo.
  Preste especial atención al *code smell* **Switch Statement Smell** desde el minuto 11:37 al 29:15.

  {% youtube %}https://www.youtube.com/watch?v=JVlfj7mQZPo{% endyoutube %}

Pueden encontrar las [trasparencias](http://elijahmanor.com/talks/js-smells/#/) de la presentación en [http://elijahmanor.com/talks/js-smells/#/](http://elijahmanor.com/talks/js-smells/#/).

The basic idea  of the `strategy design pattern` is to **delegate tasks to encapsulated algorithms which are interchangable at runtime**.

In the Strategy pattern we have an object (the *context*) that is trying to get something done. But to get that thing done, we need to supply the context with a second object, called the *strategy*, that helps￼ to get the thing done.

  1. Define a family of objects which all do the same thing
  2. Ensure the family of objects share the same interface so that they are interchangable.

Otro ejemplo, también de Elijah Manor se encuentra en el artículo [Switching to the Strategy Pattern in JavaScript](http://elijahmanor.com/switching-to-the-strategy-pattern-in-javascript/).

Esto es un ejemplo de como podría quedar la parte principal del código de conversión después de aplicar `strategy design pattern`:


```javascript

Medida.convertir = function(valor) {
  var measures = Medida.measures;

  var match = Medida.match(valor);
  if (match) {
    var numero = match.numero,
        tipo   = match.tipo,
        destino = match.destino;

    try {
      var source = new measures[tipo](numero);  // new Fahrenheit(32)
      var target = "to"+measures[destino].name; // "toCelsius"
      return source[target]().toFixed(2) + " "+target; // "0 Celsius"
    }
    catch(err) {
      return 'Desconozco como convertir desde "'+tipo+'" hasta "'+destino+'"';
    }
  }
  else
    return "Introduzca una temperatura valida: 330e-1 F to C";
};
```

En este código comprobamos además la presencia de errores. Por ejemplo: ¿Que pasa si `measures[tipo]` o `measures[destino]` son `undefined`? ¿Que ocurre si el método llamado `source[target]()` no existe?

## Requisitos

Modifique el código de la práctica anterior de manera que:

* Se eliminen todos los *Switch Smell*
* Se eliminen todas las debilidades señaladas en la [sección Debilidades](#debilidades)
* Se distribuyan las clases en ficheros separados de una manera racional
* Recuerde que un requisito de la práctica anterior era que el constructor de `Medida` pudiera llamarse con un sólo argumento:
```javascript
console.log(new Medida("32F")); // Prueba polimorfismo del constructor de Medida
```
  La expresión regular necesaria para usar es un prefijo de la expresión regular usada en la conversión. Se plantea así el requisito de reciclar 
la expresión regular factorizando el código de las mismas.
* En esta tarea no se pide que use pruebas, ni cubrimiento, ni  Karma ni Travis.


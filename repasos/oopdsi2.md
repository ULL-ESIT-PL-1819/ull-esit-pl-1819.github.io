## Preguntas de Programación Orientada a Objetos

1.  Escriba un código JavaScript que defina una clase `Persona` con
    atributos `nombre` y `apellidos` y que disponga de un método
    `saluda`.

2. Escriba una clase `Programador` que hereda de `Persona`

3.  Escriba un código ECMA6 que defina una clase `Persona` con atributos
    `nombre` y `apellidos` y que disponga de un método `saluda`.

4. Usando ECMA6 escriba una clase `Programador` que hereda de `Persona`

5. Explique las diferencias en la salida entre este código 

```
      function Person() {
        this.age = 0;

        function growUp() {
          this.age += 10;
        }
        growUp();
        console.log(this.age);
      }
      var p = new Person();
```
y este otro:
```
      function Person() {
        this.age = 0;

        var growUp = () => {
          this.age += 10;
        }
        growUp();
        console.log(this.age);
      }

      var p = new Person();
```
Justifique su respuesta.

6. Explique que hacen los métodos `bind`, `apply` y `call` y cuales son sus similitudes y diferencias
7. ¿Cual es el significado del primer argumento del método `Object.cretate`? ¿Y el segundo? 
8. Todo objeto JavaScript tiene una propiedad `"prototype"` ¿verdadero o falso?
5. La propiedad `prototype` de una función es un objeto de tipo `Function` ¿verdadero o falso?
9. El `prototype` de una función es un objeto de tipo `Function` ¿verdadero o falso?
10. ¿Cual es el problema con este código? ¿Como se arregla el problema?
```
Object.prototype.nonsense = "hi";
for (var name in map)
  console.log(name);
```
<!---
for (var name in map) {
  if (map.hasOwnProperty(name)) {
    // ... this is an own property
  }
}-->
11. ¿Que significa que una propiedad es no-enumerable?
<!-- Object.defineProperty(Object.prototype, "hiddenNonsense",
                      {enumerable: false, value: "hi"});
-->
12. ¿Como puedo crear un objeto que carezca de prototipo?
<!-- Object.create(null); -->

13. El argumento `descriptor` del método 
```
Object.defineProperty(obj, prop, descriptor)
```
puede ser de uno de dos tipos: **data descriptors** o **accessor descriptors**.

  - Un `data descriptor` es una propiedad que tiene un  `value`, que puede o no
ser `writable`. 
  - Un `accessor descriptor` es una propiedad 
que describe un par de funciones getter-setter. 

Un  descriptor puede ser de uno de estos tipos pero no puede ser ambos.

Explique cuales de estas propiedades pertenecen a que tipo (accesor o data descriptor), cual es su valor por defecto  y que describen:

  1.  `configurable`
  <!-- true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.
  Defaults to false.
  -->
  2. `enumerable`
  <!-- true if and only if this property shows up during enumeration of the properties on the corresponding object.
  Defaults to false.
  -->
  3. `value`
  <!-- The value associated with the property. Can be any valid JavaScript value (number, object, function, etc).
    Defaults to undefined.
  -->
  4. `writable`
  <!-- true if and only if the value associated with the property may be changed with an assignment operator.
  Defaults to false.
  -->
  5. `get`
  <!-- An accessor descriptor also has the following optional keys:
  A function which serves as a getter for the property, or undefined if there is no getter. The function return will be used as the value of property.
  Defaults to undefined.
  -->
  6. `set`
  <!--A function which serves as a setter for the property, or undefined if there is no setter. The function will receive as only argument the new value being assigned to the property.
  Defaults to undefined.
  -->

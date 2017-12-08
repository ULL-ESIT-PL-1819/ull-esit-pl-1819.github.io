# 6. Iteradores

Esta nueva característica de JavaScript nos permite definir cómo iteramos sobre un objeto. La sintaxis es similar a la de Ruby, tenemos que poner un `*` en el nombre de la función, y poner un `yield` cuando queramos devolver un valor.

```JavaScript
function* miFuncionIteradora(){
  yield 'Hola!'
  yield 'Que'
  yield 'Tal'
}
```

Cada vez que se llame a `miFuncionIteradora()`, se irá devolviendo poco a poco el saludo.

Veamos otro ejemplo. En esta función, se devuelven los números de Fibonacci de forma indefinida usando `yield`:

{% console %}{% endconsole %}

```JavaScript
function* fibonacci(){
  let [ a, b ] = [1, 1]
  while (true){
    [ a, b ] = [a + b, a]
    yield b
  }
}

let sequence = fibonacci()

console.log(sequence.next().value)
console.log(sequence.next().value)
console.log(sequence.next().value)
console.log(sequence.next().value)
console.log(sequence.next().value)
console.log(sequence.next().value)
console.log(sequence.next().value)
console.log(sequence.next().value)
console.log(sequence.next().value)
console.log(sequence.next().value)
console.log(sequence.next().value)
console.log(sequence.next().value)
```

## Completación con bucles

Cuando instanciamos un objeto, podemos definir la clave `Symbol.iterator` como una función iteradora. Sería como el `def each do |i|` de Ruby. Por ejemplo, esta clase va retornando de forma alternativa los elementos de dos arrays:

{% console %}{% endconsole %}

```JavaScript
class Join {
  constructor(arr1, arr2) {
    this.arr1 = arr1
    this.arr2 = arr2
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.arr1.length && i < this.arr2.length; i++) {
      yield this.arr1[i]
      yield this.arr2[i]
    }
  }
}

let join = new Join([1, 2, 3], ['uno', 'dos', 'tres'])

for (let element of join) {
  console.log(element)
}
```

## Iterando en un objeto {#iterando-objeto}

El siguiente ejemplo muestra como iterar sobre un objeto usando un iterador:

{% console %}{% endconsole %}

```JavaScript
// using a generator function
function* entries(obj) {
   for (let key of Object.keys(obj)) {
     yield [key, obj[key]];
   }
}

let myObj = {x: 1, y: 2};
for (let [key, value] of entries(myObj)) {
   console.log(key+":"+value);
}
```

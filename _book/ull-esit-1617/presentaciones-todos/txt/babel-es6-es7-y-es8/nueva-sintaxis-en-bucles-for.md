# 7. Nueva sintaxis en bucles for

Antiguamente, se usaba la palabra clave `in` para iterar sobre un array:

{% console %}{% endconsole %}

```JavaScript
function foo(array) {
  for (var i in array) {
    console.log(array[i])
  }
  console.log(i) // 3!!
}

foo(['Jose', 'Juan', 'Javier', 'Jorge'])
```

Pero declarar la variable usando `var` hace que se nos ensucie el scope que está dentro del `for`. Para solucionar esto podemos usar `let`, pero aún así al iterar tenemos que indexar el array, además de que se iteran sobre strings.

{% console %}{% endconsole %}

```JavaScript
function foo(array) {
  for (let i in array) {
    if (i === 0) return // No sale porque i es de tipo String :(
    console.log(array[i])
  }
  console.log(i) // Not defined :) !!
}

foo(['Jose', 'Juan', 'Javier', 'Jorge'])
```

Usando las nuevas funciones de los arrays, como `forEach`, podemos iterar de forma sencilla sobre un array mediante el uso de una callback.

{% console %}{% endconsole %}

```JavaScript
function foo(array) {
  array.forEach(element => {
    console.log(element)
    if (element === 'Javier') return // No vuele a la línea 10! :(
  })
}

let arr = ['Jose', 'Juan', 'Javier', 'Jorge']
arr.foo = 'Alguien'
foo(arr)
```

El problema de iterar usando `forEach`, es que si queremos romper las iteraciones no podemos hacer un simple return, ya que devolveríamos la callback pero se seguiría iterando.

Por último, podemos usar la nueva sintaxis del bucle for, que es con `of` en vez de `in`:

{% console %}{% endconsole %}

```JavaScript
function foo(array) {
  for (let element of array) {
    console.log(element)
    if (element === 'Javier') return // Ahora sí vuelve :)
  }
}

foo(['Jose', 'Juan', 'Javier', 'Jorge'])
```

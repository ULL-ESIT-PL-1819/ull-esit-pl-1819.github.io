# 5. Operador de Dispersión

El operador de dispersión nos permite extrar el "resto" de parámetros de un array o un objeto.

## Uso con un Array

Podemos separar el contenido de un array usando este operador, por ejemplo, si tenemos el array:

```JavaScript
let arr = [1, 2, 3, 4, 5]
```

Para separarlo, podemos usar el operador de dispersión:

{% console %}{% endconsole %}

```JavaScript
let arr = [1, 2, 3, 4, 5]
let [a, b, ...rest] = arr
console.log(a)
console.log(b)
console.log(rest)
```

En este punto, `a` valdría `1`, `b` valdría `2`, y en `res` se almacena el resto del array, es decir `[3, 4, 5]`.

## Uso con objetos

De manera similar, también podemos extraer las claves de un objecto, si por ejemplo tenemos:

```JavaScript
let obj = {a: 1, b: 2, c: 3, d: 4}
```

Podemos extraer algunas claves, e incluir el resto del objeto en otra variable:

```JavaScript
let obj = {a: 1, b: 2, c: 3, d: 4}
let {a, b, ...rest} = obj
console.log(a)
console.log(b)
console.log(rest)
```

Al hacer esto, en `a` se guardaría `1`, en `b` `2`, y en `rest` el resto del objeto, `{c: 3, d: 4}`.

## Uso en funciones

Esta estracción la podemos realizar en los parámetros de las funciones. Lo que se hacía normalmente era iterar sobre el objeto `arguments`, que almacena en un array los parámetros de la función.

{% console %}{% endconsole %}

```JavaScript
function foo(usuario, apellidos) {
  console.log(usuario)
  console.log(apellidos)
  for (var i=2; i < arguments.length; i++) {
    console.log(arguments[i])
  }

}

foo('Jose', 'Jiménez')

foo('Juan', 'Jerez', 658329832, 'Calle Wallaby 32, Sydney')
```

Con el nuevo operador, podemos añadir un tercer parámetro haciendo uso del nuevo operador:

{% console %}{% endconsole %}

```JavaScript
function foo(usuario, apellidos, ...other) {
  console.log(usuario)
  console.log(apellidos)
  for (let param of other) console.log(param)
}

foo('Jose', 'Jiménez')

foo('Juan', 'Jerez', 658329832, 'Calle Wallaby 32, Sydney')
```

Por lo que en la variable `other`, se almacenan en forma de array el resto de parámetros que se le pasen a la función.

## Valores por defecto en un objeto

El operador `...` también lo podemos usar a la hora de crear un objeto, y la principal utilidad de esto es crear unos valores por defecto para un objeto. Por ejemplo, cuando recojemos las opciones por `argv` con `minimist`, tendríamos algo así:

{% console %}{% endconsole %}

```JavaScript
function miPrograma (argv) {
  var options =   {
    autor: argv.autor || 'Tu nombre',
    titulo: argv.titulo || 'Titulo del Libro',
    descripcion: argv.descripcion || 'Descripción breve del gitbook'
  }
  console.log(options)
  // Hacer algo con las opciones
}


var argv = {
  autor: 'Jose Jiménez'
}

miPrograma(argv)
```

Usamos el circuito corto para construir el objeto `options`. Usando `...`, podemos sobreescribir los parámetros que se nos indiquen.

```JavaScript
function miPrograma (argv) {
  let options = {
    autor: 'Tu nombre',
    titulo: 'Titulo del Libro',
    descripcion: 'Descripción breve del gitbook',
    ...argv
  }
  console.log(options)
  // Hacer algo con las opciones
}


let argv = {
  autor: 'Jose Jiménez'
}

miPrograma(argv)
```

Al hacer esto, las claves que existan en `argv` que estén en `options`, se verán reemplazadas.

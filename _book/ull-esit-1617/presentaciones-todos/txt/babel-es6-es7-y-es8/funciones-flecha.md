# 3. Funciones Flecha

Las funciones flecha es un nuevo modo de escribir funciones incluído en ES6, que además presentan unas características peculiares que nos pueden ayudar a desarrollar nuestro código.

## Preservan el entorno

Cuando escribimos una función en JavaScript y la ejecutamos, el objecto `this` apunta a la función en la que nos encontramos actualmente. En algunas situaciones, esto puede ser problemático,  por ejemplo cuando hacemos un `setTimeout` y queremos acceder al `this` padre.

{% console %}{% endconsole %}

```JavaScript
function Person() {
  this.age = 0

  setTimeout(function growUp() {
    this.age++ // this.age es undefined!
  }, 100)
}

var p = new Person()

setTimeout(function print() {
  console.log(p.age) // p vale 0! :(
}, 200)
```

La manera clásica de solucionar este problema, es guardar el `this` padre en una variable, y luego acceder mediante ésta.

{% console %}{% endconsole %}

```JavaScript
function Person() {
  let that = this
  that.age = 0

  setTimeout(function growUp() {
    that.age++
  }, 100)
}

var p = new Person()

setTimeout(function print() {
  console.log(p.age)
}, 200)
```

Esto está considerado una práctica anti-pattern, pero lo podemos solucionar con funciones flecha.

{% console %}{% endconsole %}

```JavaScript
function Person() {
  this.age = 0

  setTimeout(() => { // Función flecha!
    this.age++
  }, 100)
}

var p = new Person()

setTimeout(function print() {
  console.log(p.age)
}, 200)
```

Ahora cuando se ejecuta, sí se incremente correctamente la variable, ya que al usar la función flecha se ha preservado el entorno de la función `Person`.

## Return en una única línea

Otra característica de las funciones flecha, es devolver el valor de retorno de la última línea ejecutada, sólo en caso de que haya una línea, es decir:

{% console %}{% endconsole %}

```JavaScript
const a = () => {
  return '1'
}

a()
```

Lo podríamos transformar en:

{% console %}{% endconsole %}

```JavaScript
const a = () => '1'

a()
```

Como podemos ver, al ser de una sola línea, también podemos quitar los corchetes.

Este tipo de uso es muy común cuando se hace un uso funcional de JavaScript (`.map`, `.filter`, `.sort`, etc..).

{% console %}{% endconsole %}

```JavaScript
var coches = [
  {
    marca: 'Volkswagen',
    modelo: 'Golf'
  },
  {
    marca: 'Volkswagen',
    modelo: 'Tiguan'
  },
  {
    marca: 'Volkswagen',
    modelo: 'Polo'
  },
  {
    marca: 'Seat',
    modelo: 'Ibiza'
  },
  {
    marca: 'Seat',
    modelo: 'Toledo'
  },
  {
    marca: 'Seat',
    modelo: 'Cordoba'
  },
  {
    marca: 'Renault',
    modelo: 'Clio'
  },
  {
    marca: 'Renault',
    modelo: 'Megane'
  },
  {
    marca: 'Renault',
    modelo: 'Talisman'
  }
]

var cochesSeat = coches.filter(function (c) { return c.marca === 'Seat' })
console.log(cochesSeat)
```

El filtrado de la penúltima línea lo podemos resumir mucho usando una función flecha, tal que dicha línea la podemos transformar en lo siguiente:

{% console %}{% endconsole %}

```JavaScript
var coches = [
  {
    marca: 'Volkswagen',
    modelo: 'Golf'
  },
  {
    marca: 'Volkswagen',
    modelo: 'Tiguan'
  },
  {
    marca: 'Volkswagen',
    modelo: 'Polo'
  },
  {
    marca: 'Seat',
    modelo: 'Ibiza'
  },
  {
    marca: 'Seat',
    modelo: 'Toledo'
  },
  {
    marca: 'Seat',
    modelo: 'Cordoba'
  },
  {
    marca: 'Renault',
    modelo: 'Clio'
  },
  {
    marca: 'Renault',
    modelo: 'Megane'
  },
  {
    marca: 'Renault',
    modelo: 'Talisman'
  }
]

let cochesSeat = coches.filter(c => c.marca === 'Seat')
console.log(cochesSeat)
```

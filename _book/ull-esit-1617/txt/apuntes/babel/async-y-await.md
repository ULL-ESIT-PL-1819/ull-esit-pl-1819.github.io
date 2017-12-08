# 11. Async y Await

Esta nueva sintaxis, es una de las mejores novedades que se le están añadiendo al lenguaje. Está inspirado en [TypeScript](https://www.typescriptlang.org/docs/release-notes/typescript-1.7.html) el leguaje de Microsoft.

## Código de ejemplo

Como ejemplo, vamos leer el `README.md`, copiarlo en dos ficheros `borrame1.md` y `borrame2.md` y luego eliminarlos. Al finalizar imprimimos "Hecho".

## Usando callbacks

```JavaScript
var fs = require('fs')

fs.readFile('README.md', function (data) {
  fs.writeFile('borrame1.md', data, function () {
    fs.writeFile('borrame2.md', data, function () {
      fs.unlink('borrame1.md', function () {
        fs.unlink('borrame2.md', function () {
          console.log('Hecho')
        })
      })
    })
  })
})
```

Mediante el uso de callbacks, nos queda un código a muy anidado, o sea, un [callback hell](http://callbackhell.com)

## Usando promesas

```JavaScript
const fs = require('fs-promise')

fs.readFile('README.md').then(data => {
  let promises = [
    fs.writeFile('borrame1.md', data),
    fs.writeFile('borrame2.md', data)
  ]
  Promise.all(promises).then(() => {
    let promises = [
      fs.unlink('borrame1.md'),
      fs.unlink('borrame2.md')
    ]
    Promise.all(promises).then(() => {
      console.log('Hecho')
    }).catch(err => {
      throw err
    })
  }).catch(err => {
    throw err
  })
}).catch(err => {
  throw err
})
```

Usando promesas nos queda un código menos anidado, pero aún así es bastante complicado, sobretodo respecto al manejo de excepciones.

## Usando iteradores

```JavaScript
const fs = require('fs-promise')
const gensync = require('../other/generatorsUtils')

const asyncFunc = gensync(function* () {
  const data = yield fs.readFile('README.md')
  yield Promise.all([
    fs.writeFile('borrame1.md', data),
    fs.writeFile('borrame2.md', data)
  ])
  yield Promise.all([
    fs.unlink('borrame1.md'),
    fs.unlink('borrame2.md')
  ])
  yield 'Hecho'
});

asyncFunc().then(console.log)
```

Esto es un pequeño truco que podemos usar mediante las funciones genradoras. Como podemos ver, el código nos queda casi perfecto. Normalmente si queremos usar esto, usamos una librería como [`co`](https://github.com/tj/co)

## `async` y `await`

Por último, tenemos la nueva sintaxis, que ya está disponible en node usando la flag `--harmony`.

`async` se usa para declarar una función asíncrona, y `await` para esperar a que se resuelva una promesa.

{% es6 -%}
const fs = require('fs-promise')

async function asyncFunc() {
  const data = await fs.readFile('README.md')
  await Promise.all([
    fs.writeFile('borrame1.md', data),
    fs.writeFile('borrame2.md', data)
  ])
  await Promise.all([
    fs.unlink('borrame1.md'),
    fs.unlink('borrame2.md')
  ])
  return 'Hecho'
}

asyncFunc().then(console.log).catch(console.error)
{%- endes6 %}

Una función asíncrona siempre devuelve una promesa, que se resuelve con el `return` y se rechaza mediante un `throw`.

# 1. Proceso de Introducción de Nuevas Características

JavaScript es un dialecto del estándar ECMAScript. En este estándar se van añadiendo distintas características que poco a poco son implementadas en los distintos motores de JavaScript.

## Proceso TC39

* [Organización](https://github.com/tc39)

El TC39 (Technical Committee 39) es el comité responsable de evolucionar la especificación de ECMAScript. El comité opera mediante conceso entre distintas empresas, y los cambios que se van ideando pasan por distintos estados.

### `stage-0 - Strawman`

En este estado se suben ideas del comité TC39 o de alguien registrado como contribuidor. De estas características algunas se llegan a implementar, y otras son descartadas.

### `stage-1 - proposal`

El "jefe" (llamado *champion* en inglés) se convierte en el responsable de la propuesta. En este punto ya existe una descripción formal de la idea, descrita en forma de ejemplos, una API, semántica y algoritmos.

### `stage-2 - draft`

Es una primera versión de lo que se incluirá en la especificación. Normalmente cuando se llega a este punto suele ser segura su inclusión en el estándar. Se necesita tene una descripción usando el lenguaje de ECMAScript. Además, se requiren dos implementaciones experimentales, pero una de ellas puede ser haciendo uso de un transpilador como [Babel](https://babeljs.io/).

### `stage-3 - candidate`

La propuesta está casi finalizada y ahora se necesitan las opiniones de los usuarios de las implenetaciones para progresar. El texto de la especificación debe estar completo. Los evaluadores designados por el TC39 deben finalizar la especificación. Debe haber al menos dos implemetaciones funcionales. Los cambios sólo se harán en respuesta a problemas críticos que se hayan descubierto por las implemetaciones y su uso.

### `stage-4 - finished`

La propuesta está lista para ser incluida en el estándar.

## Implementación de V8

* [Repo](https://github.com/v8/v8)

V8 es un motor de código abierto para JavaScript creado por Google e implementa el estándar ECMAScript. Existen otros motores de JavaScript, como [ChakraCore](https://github.com/Microsoft/ChakraCore) o [SpiderMonkey](http://hg.mozilla.org/mozilla-central/file/tip/js/src)

## Node.js

* [Repo](https://github.com/nodejs/node)

Node.js es un entorno en tiempo de ejecución consutrído sobre el motor V8. La principal característica es su interfaz asíncrona y orientada a eventos. Cada versión de node implementa alguna versión de V8. Esta versión se puede averiguar usando la variable `process.versions.v8`. También existen versiones de Node.js en otros motores de JavaScript, como en [node-chakracore](https://github.com/nodejs/node-chakracore).

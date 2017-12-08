# 1. Introducción a Polymer y sus conceptos

Polymer es un proyecto open-source para el desarrollo del front-end de los sitios web mediante el uso de HTML,CSS y Javascript para la creación de Web Components. Está liderado por Google para trasladar el material-design desde los dispositivos móviles hacia el entorno web.

## Web Component

Un web component es un estándar del `W3C`, y que su expansión va en auge con respecto evoluciona el estándar HTML5. Un web component permite crear elementos web propios y encapsular los componentes,  mediante etiquetas HTML5. Un web component está formado por cuatro pilares indispensables:

* Templates
* HTML import
* Shadow DOM
* Custom Elements

Una característica fundamental en un web component es la creación del HTML, el CSS y el Javascript, se realizan todo en un mismo bloque y no separados en diferentes ficheros como suele estar acostumbrado el desarrollador .

## Polyfill

Polymer posee un conjunto de librerías conocidas como `Polyfills` que permiten añadir nuevas funcionalidades a los navegadores web. Un polyfill es un fragmento de código, plugin o paquete, que permite añadir  características del estándar HTML5 a navegadores que no lo poseen de manera nativa.

## Vulcanize o vulcanizado

A la hora de realizar un despliegue de una aplicación web es conveniente tener los componentes separados en diferentes ficheros, ya que al hacer peticiones al servidor es recomendable hacer el menor número de peticiones posibles. El vulcanizado o vulcanize une todos los ficheros que se tiene  separados en un único fichero, para así hacer el menor número de peticiones y tener una gran respuesta del servidor.

## NodeJs

Nodejs es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Permite ejecutar código de Javascript en el lado servidor y utilizar un ecosistema de paquetes denominado **npm**, considerado el ecosistema más grande de librerías de código abierto del mundo.

## NodeJs y Vulcanize

La herramienta Vulcanize está construida como paquete para NodeJs por el equipo de desarrollo de Polymer.

`npm install -g vulcanize`

Uso de Vulcanize

```vulcanize --inline-scripts --inline-css --strip-comments \
    elements.html > elements.build.html```

Además, vulcanize también puede ser añadido mediante tarea Gulp a un fichero gulpfile .

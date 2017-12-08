## Práctica: Creación de Paquetes NPM y Strategy Pattern

### Descripción

Uno de los objetivos de esta práctica  es aprender a crear packages NodeJS y publicarlos en [npm](https://www.npmjs.com). El paquete se construye a partir de
el código que se desarrolló en la [práctica evaluar strategy pattern](practicaevaluastrategypattern.md).

* Se trata de construir un primer módulo npm `ull-shape` con el código de la clase `Shape`
* Se construirá un módulo npm `ull-shape-triangle` que contenga la clases `Triangle`
* En general, para cada tipo particular de forma geométrica `x` se construirá un módulo npm `ull-shape-x` que contenga la clase `X`
* La implantación del módulo principal `ull-shape` se hace primero y de forma colaborativa. 
  - Cada miembro del equipo implantará el solo al menos uno de los plugin `ull-shape-x`: si hay tres miembros cada uno implantará al menos una forma distinta, etc. 
  - La implantación de los plugin `ull-shape-x` no debería conllevar ,a modificación del código del módulo principal `ull-shape`(principio Open/Close)
* Como deberán publicar en el site de [npm](https://www.npmjs.com) los módulos creen una organización `ull-team-name` pública y pongan sus módulos en ese ámbito
  - Añadan a todos los miembros del equipo a la organización
  <!--* Añada a los otros miembros del equipo como `contributors`. Véase [las seccion people fields de package.json](https://docs.npmjs.com/files/package.json#people-fields-author-contributors) -->
* Escriba documentación para cada uno de los módulos (Véase [documentation.js](http://documentation.js.org/), [jsdoc](https://www.npmjs.com/package/jsdoc), [docco](http://jashkenas.github.io/docco/))
* Añada pruebas para cada uno de los módulos
* Integre usando Travis
* En esta tarea deberá trabajar con varios repos, uno para el módulo principal `ull-shape` y uno para cada shape específica: cree los diferentes repos dentro de la organización `ULL-ESIT-DSI-1617` siguiendo el patrón `creacion-de-paquetes-npm-team` para el módulo principal y `creacion-de-paquetes-npm-team-triangle` para el del triángulo, etc.

### Referencias

* Véase la sección
[Creación de Paquetes y Módulos en NodeJS](../apuntes/npm/nodejspackages.md)
* Documentación:  [documentation.js](http://documentation.js.org/), [jsdoc](https://www.npmjs.com/package/jsdoc), [docco](http://jashkenas.github.io/docco/))
* Véase la sección [Gulp](../apuntes/gulp/README.md)
* [Apuntes: Code Smells](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/codesmell.html)
* [Principios de Diseño](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/designprinciples.html)
* [Patrones de Diseño](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/)
* [ECMAScript 6 Power Tutorial: Class and Inheritance](https://code.tutsplus.com/tutorials/ecmascript-6-power-tutorial-class-and-inheritance--cms-24117)
* [Object-Oriented JavaScript — A Deep Dive into ES6 Classes](https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/)
* [Strategy Pattern](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/strategypattern.html)
* [Apuntes: Pruebas. Mocha](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/mocha.html)
* [Apuntes: Pruebas. Should](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/mocha.html#shouldl)
* [Apuntes: Integración Contínua. Travis](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/travis.html)



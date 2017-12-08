## Práctica: Mocha y Chai 

Para realizar esta práctica, lea primero 
el artículo [Testing your frontend JavaScript code using mocha, chai, and sinon](https://nicolas.perriault.net/code/2013/testing-frontend-javascript-code-using-mocha-chai-and-sinon/)
por Nicolas Perriault.

Puede encontrar un repositorio en GitHub que ilustra las ideas del artículo de Perriault en
[crguezl/mocha-chai-sinon--example](https://github.com/crguezl/mocha-chai-sinon--example).

En este repo hay seis ramas:

      $ git branch -a
        async         # Example of asynchronous testing
        blanket       # Covering
      * master        # Simple example
        sinon         # Example of mocking with sinon
        karma         # Example of how to use karma
        travis        # Example of how to use karma with travis

La parte de *[testing asynchronous code](https://mochajs.org/#asynchronous-code)* probablemente esté mas clara en la propia página 
de [mocha](https://mochajs.org/). 

En esta práctica el objetivo es **añadir pruebas usando Mocha y Chai** a la 
[Práctica: Eliminando Switch Smell](noswitchsmell.md) realizada anteriormente así como hacer
un análisis de cubrimiento usando [blanketjs](http://blanketjs.org/). 

Lea también 

* [Get your Frontend JavaScript Code Covered](https://nicolas.perriault.net/code/2013/get-your-frontend-javascript-code-covered/) por Nicolas Perriault
* [Blanket: Getting Started Guide (browser version)](https://github.com/alex-seville/blanket/blob/master/docs/getting_started_browser.md)
* La sección [Manejando tareas en JS: Gulp](http://crguezl.github.io/pl-html/node9.html#SECTION041200270000000000000) de los apuntes.
* [Gulp: the modern frontend factory](https://www.gitbook.com/book/davinov/gulp-book/details) por David Nowinsky

### Requisitos

* Asegúrese de realizar pruebas para cada una de las clases definidas y cada uno de los métodos dentro de dichas clases.

* Haga un análisis de Cubrimiento usando [blanketjs](http://blanketjs.org/). Mire la rama 
`blanket` del repositorio [crguezl/mocha-chai-sinon--example](https://github.com/crguezl/mocha-chai-sinon--example)
* Añada un `gulpfile.js` con tareas `minify` para compactar el HTML, el CSS y el JavaScript,
dejando los ficheros compactados en un subdirectorio `minified/` así como una tarea
`clean` que borre los contenidos de dicho directorio.

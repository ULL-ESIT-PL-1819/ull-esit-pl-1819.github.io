## Práctica: Analizador Usando PEG.js

### Descripción

Diseñe un lenguaje de programación sencillo. Escriba un analizador sintáctico que genere un árbol de análisis abstracto para dicho lenguaje. 

##### Posibles puntos de partida

* [ Niklaus Wirth's PL/0](https://en.wikipedia.org/wiki/Recursive_descent_parser) in the Wikipedia. 
* [Tiny Basic](https://en.wikipedia.org/wiki/Tiny_BASIC)

##### Requisitos

1. Escriba un PEG para dicho lenguaje
2. Deberá devolver el árbol de análisis sintáctico
3. El lenguaje debe tener 
  - declaraciones (aunque no tiene que ser necesariamente tipeado). Esto es, deberían poder declararse objetos como variables, constantes (opcional) y funciones
  - sentencias `if`, 
  - `condiciones` como `a <= b`, 
  - `asignaciones`, 
  - alguna forma de bucle, 
  - `funciones` y  llamadas a funciones, 
  - etc.
4. Escriba pruebas  para el código desarrollado

### Recursos

* [Apuntes de PL: PEGs](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pegjs/PEGS.html)
* [Mocha](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/mocha.html)
* [Chai](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/chai.html)
* [Covering](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/covering.html)
* [Blanket](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/blanket.html)


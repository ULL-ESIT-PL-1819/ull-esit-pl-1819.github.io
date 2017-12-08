<!-- toc -->
## Proyecto Procesadores de Lenguajes

### Objetivo

Escriba un analizador del lenguaje PL0 usando PEGjs así como las tecnologías vistas 
durante el curso: ECMA6, Node.js, expressJS, MongoDB, Mongoose, SASS, etc. 
La salida debe ser el árbol de análisis sintáctico del programa de entrada

### Recursos

* Página de [PEG.js](http://pegjs.majda.cz/)
* [Gramática de PL0 en la Wikipedia](http://en.wikipedia.org/wiki/Recursive_descent_parser).  No es forzoso ceñirse estrictamente a la misma, aunque debe ser similar.
* En este repo GitHub [Computing the AST for a calculator-like language using PEGjs](https://github.com/crguezl/pegjscalc)
puede encontrar un ejemplo (en Ruby/Sinatra) del que partir

  ```bash
  [~/local/src/javascript/PLgrado/pegjscalc(develop)]$ pwd -P
  /Users/casiano/local/src/javascript/PLgrado/pegjscalc
  ```
* Su proyecto debe tener un aspecto similar a este despliegue en Heroku [http://pegjspl0.herokuapp.com/](http://pegjspl0.herokuapp.com/) del repo "[Computing the AST for a calculator-like language using PEGjs](https://github.com/crguezl/pegjscalc)"

### Mejoras

Pueden introducir las mejoras que les resulten interesantes. Siguen algunas sugerencias:

* Ampliación de la gramática de PL0:
  * Se pide modificar la gramática del lenguaje PL/0 para que acepte las sentencias `if-then-else` y maneje argumentos en los procedimientos (PROCEDURE y CALL).
* Análisis semántico
  * Comprobar que las variables han sido declaradas antes de su uso
  * Comprobar que las llamadas tienen el mismo número de argumentos que en su declaración
* Uso de otras tecnologías, por ejemplo [MathJax](https://www.mathjax.org/) para poner fórmulas matemáticas en la documentación, [Editores como Ace](https://ace.c9.io/) o [codemirror](https://codemirror.net/) para facilitar la entrada, realizar pruebas en el cliente y/o en el servidor, etc.


### Proyectos Procesadores de Lenguajes 15/16

Recuerde 
¡**DEBE ENTREGAR SU PROYECTO EN EL REPO DE LA ORGANIZACIÓN**!

1. Equipo [adrian_adexe](https://github.com/ULL-ESIT-GRADOII-PL/proyecto-adrian_adexe)
1. Equipo [edu-daniel](https://github.com/ULL-ESIT-GRADOII-PL/proyecto-edu-daniel)
1. Equipo [ele-daniel-1](https://github.com/ULL-ESIT-GRADOII-PL/proyecto-ele-daniel-1)
1. Equipo [equipo-com](https://github.com/ULL-ESIT-GRADOII-PL/proyecto-equipo-com)
1. Equipo [ga](https://github.com/ULL-ESIT-GRADOII-PL/proyecto-ga)
1. Equipo [ivan_garcia](https://github.com/ULL-ESIT-GRADOII-PL/proyecto-ivan_garcia)
1. Equipo [juan-fran-2-0](https://github.com/ULL-ESIT-GRADOII-PL/proyecto-juan-fran-2-0)
1. Equipo [luisdaomar](https://github.com/ULL-ESIT-GRADOII-PL/proyecto-luisdaomar)
1. Equipo [nataliealexis](https://github.com/ULL-ESIT-GRADOII-PL/proyecto-nataliealexis)
1. Equipo [norberto_albano](https://github.com/ULL-ESIT-GRADOII-PL/proyecto-norberto_albano)
1. Equipo [ra-team](https://github.com/ULL-ESIT-GRADOII-PL/proyecto-ra-team)
1. Equipo [sergio-jonathan](https://github.com/ULL-ESIT-GRADOII-PL/proyecto-sergio-jonathan)

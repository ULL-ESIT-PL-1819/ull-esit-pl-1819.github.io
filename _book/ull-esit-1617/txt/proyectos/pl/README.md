<!-- toc -->
## Proyecto Procesadores de Lenguajes

### Objetivo

Escriba un analizador del lenguaje PL0 usando PEGjs así como las tecnologías vistas 
durante el curso

### Recursos

* Página de [PEG.js](http://pegjs.majda.cz/)
* [Gramática de PL0 en la Wikipedia](http://en.wikipedia.org/wiki/Recursive_descent_parser).  No es forzoso ceñirse estrictamente a la misma, aunque debe ser similar.
* En este repo GitHub [Computing the AST for a calculator-like language using PEGjs](https://github.com/crguezl/pegjscalc) puede encontrar un ejemplo (en Ruby/Sinatra) del que partir. 
Aquí puede encontrar el correspondiente este despliegue en Heroku [http://pegjspl0.herokuapp.com/](http://pegjspl0.herokuapp.com/) del repo "[Computing the AST for a calculator-like language using PEGjs](https://github.com/crguezl/pegjscalc)" 

  ```bash
  [~/local/src/javascript/PLgrado/pegjscalc(develop)]$ pwd -P
  /Users/casiano/local/src/javascript/PLgrado/pegjscalc
  ```

### Mejoras

Pueden introducir las mejoras que les resulten interesantes. Siguen algunas sugerencias:

* Ampliación de la gramática de PL0:
  * Se pide modificar la gramática del lenguaje PL/0 para que acepte las sentencias `if-then-else` y maneje argumentos en los procedimientos (PROCEDURE y CALL).
* Análisis semántico
  * Comprobar que las variables han sido declaradas antes de su uso
  * Comprobar que las llamadas tienen el mismo número de argumentos que en su declaración
* Generación de Código
  * Recorrer el árbol generando Código JavaScript 


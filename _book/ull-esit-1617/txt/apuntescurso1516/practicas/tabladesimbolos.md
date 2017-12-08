## Tabla de Símbolos

Construya las tablas de símbolos para cada uno de los bloques del AST. 

* Parta de la rama [clase12052016](git@github.com:crguezl/pegjscalc.git) del 
repo [crguezl/pegjscalc](https://github.com/crguezl/pegjscalc/tree/clase12052016)
* Cada nodo bloque se decora con un atributo `symbolTable`. Las entradas son los identificadores 
de objetos declarados en ese bloque (constantes, variables, funciones, ...) los valores son toda la información que pueda recolectar sobre dicho objeto.
* El objeto referenciado por el atributo `symbolTable` de un bloque 
tiene un atributo `father` que referencia la tabla de símbolos del bloque que lo anida  
* El `father` de la tabla de símbolos principal es `null`
* Añada un directorio `lib/` al proyecto. Guarde ahí la gramática y el parser generado.
* En ese directorio cree un fichero `semantic.js` con el código que se encargará de la fase semántica
* Por ahora, vamos a desarrollar en NodeJS: compruebe que puede cargar el módulo `lib/semantic.js` desde
`mainfromfile.js`
* Escriba en `lib/semantic.js` una función `eachBlockPre(tree, callbackAction, f, ...)` 
que recorre los bloques/funciones del AST ejecutando sobre cada nodo bloque la acción `callbackAction`
que se pasa como parámetro
* La callback `callbackAction` recibe como primer argumento el nodo siendo visitado `tree` ademas de cualesuiera otros parámetros que hayan sido pasados a `eachBlockPre`
* Utilice el `eachBlockPre` anterior para construir la tabla de símbolos
* Durante la construcción de la tabla de símbolos es posible detectar símbolos cuya declaración está duplicada:
  ```bash
  [~/srcPLgrado/pegjscalc(symboltable)]$ rake node; ./mainfromfile.js tests/twicedecl.pl0 
  pegjs lib/pl0.pegjs lib/pl0node.js
  Processing <***
   1 const A = 4, 
   2       B = 30,
   3       A = 6;
   4 var b, n;
   5 function fact(n);
   6   var t;
   7   function tutu(a,b,c);
   8     return 4;
   9   { 
  10     if n <= 1 then return 1 
  11     else return n*fact(n-1);
  12   };
  13 {
  14   n = 9;
  15   b = fact(n);
  16 }
  17 
  ***>
  Constant definition "A" duplicated at line 3
  ```

* Para mejorar los mensajes de error modifique la fase de análisis sintáctico y 
añada el atributo `location` a los identificadores. Para ello use la función PegJS `location`
  * The code inside the predicate can also access location information using the
`location` function. 
  * It returns an object like this:

  ```javascript
  {
    start: { offset: 23, line: 5, column: 6 },
    end:   { offset: 23, line: 5, column: 6 }
  }
  ```
  * The `start` and `end` properties both refer to the current parse position. 
  * The `offset` property contains an offset as a zero-based index and 
  * `line` and `column` properties contain a line and a column as one-based indices.```
* Mejore los mensajes de error poniéndoles nombres a las reglas

![ejemplo de tabla de símbolos](http://image.slidesharecdn.com/symboltabledesign-120903114359-phpapp02/95/symbol-table-design-compiler-construction-20-728.jpg?cb=1346673018)

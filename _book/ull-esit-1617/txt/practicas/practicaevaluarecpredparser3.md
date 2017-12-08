### Aceptar Tarea

* [Aceptar asignación de la tarea]()

### Forma de trabajo

* Use su portátil o su cuenta en c9 para llevar a cabo los objetivos planteados.
* Esta práctica se divide en objetivos o hitos:  indique al profesor  cuando ha terminado y suba los enlaces a los repos y despliegues.
* Use el repo de GitHub dado por la asignación de esta tarea 

### Descripción

Este programa extiende la gramática vista en la práctica anterior [EVALUA PDR 2](https://classroom.github.com/classrooms/19915186-ull-esit-pl-1617/assignments/evalua-pdr-2) con múltiples expresiones separadas por comas:  `2*3, 4+5+2, 8-1`.  La coma es un operador en la mayoría de los lenguajes: `e1, e2` descarta `e1`y retorna `e2`. 

Esta es la gramática:

1.  Σ = { ADDOP, MULOP, '(', ')', NUM, ',' },
2.  V = {  comma, expression, term, factor }
3.  Productions:
    1.  comma →  expression (',' expression)*
    2.  expression → term ( ADDOP term)* 
    3.  term → factor (MULOP factor)*
    4.  factor → '(' comma ')' | NUM

Donde:

            ADDOP = /[+-]/
            MULOP = /[*\/]/
            NUM = /\d+/


Su fichero `README.md` debe contener su gramática final.

### Hitos:

Tu nuevo lenguaje debe incluir:

1. Los identificadores y las expresiones de asignación de forma que podamos escribir frases como esta:  `a = 4, b = 3*a +2`
   - Necesitarás guardar una  tabla con las parejas `nombre:valor` en un objeto/hash: `{a: 4, b:14}`
2. El programa mostrará como resultado los valores finales de las variables inicializadas
3. Añada los operadores de comparación: `a = 4, b = a < 5, c = a >= 4, d = a ==  4`
  - Cualquier número distinto de cero se considera verdadero 
  - El cero es falso
4. Añada constantes `true` y `false` a su lenguaje que se asimilan a los valores 0 y 1. Dado que son constantes no pueden ser modificadas. 
  - Ejemplo:  `a = true, c = (5 < 5) == false`
  - Esta operación debería dar un error o no efectuarse:  `true = 0`
5. Añada expresiones condicionales:  `d = if 2<a then b else c`  
6. Modifique las pruebas para que comprueben el buen funcionamiento de su código
7. Su fichero `README.md` debe contener su gramática final.

### Recursos

* [Apuntes de PL: Análisis Sintáctico Predictivo Recursivo](http://crguezl.github.io/pl-html/node22.html)
* [Repo con una solución a un lenguaje similar](https://github.com/crguezl/prdcalc)
  -  [Despliegue en Heroku](http://predictiveparser.herokuapp.com/)
  - [Fichero main.js con un parser similar al que se solicita](https://github.com/crguezl/prdcalc/blob/master/views/main.js)
* [Mocha](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/mocha.html)
* [Chai](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/chai.html)
* [Covering](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/covering.html)
* [Blanket](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/blanket.html)

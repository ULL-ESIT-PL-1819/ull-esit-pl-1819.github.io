# Práctica Evaluar Analizador Descendente Predictivo Recursivo (2)

Este repo contiene el código de partida para la práctica de laboratorio
*Evaluar Analizador Descendente Predictivo Recursivo (2)*

### Forma de trabajo

* Use su portátil o su cuenta en c9 para llevar a cabo los objetivos planteados.
* Esta práctica se divide en objetivos o hitos:  indique al profesor  cuando ha terminado y suba los enlaces a los repos y despliegues.
* Use el repo de GitHub dado por la asignación de esta tarea 

### Descripción

Extienda la gramática vista en la práctica anterior [EVALUA PDR](https://classroom.github.com/classrooms/19915186-ull-esit-pl-1617/assignments/evalua-pdr). El fichero `README.md` debe contener su gramática final.

### Hitos:

Tu nuevo lenguaje debe incluir:

1. Múltiples expresiones separadas por comas:  `2*3, 4+5+2, 8-1`
2. Los identificadores y las expresiones de asignación de forma que podamos escribir frases como esta:  `a = 4, b = 3*a +2`
   - Necesitarás guardar una  tabla con las parejas `nombre:valor` en un objeto/hash: `{a: 4, b:14}`
3. El programa mostrará como resultado los valores finales de las variables inicializadas
4. Añada los operadores de comparación: `a = 4, b = a < 5, c = a >= 4, d = a ==  4`
  - Cualquier número distinto de cero se considera verdadero 
  - El cero es falso
5. Añada constantes `true` y `false` a su lenguaje que se asimilan a los valores 0 y 1. Dado que son constantes no pueden ser modificadas. 
  - Ejemplo:  `a = true, c = (5 < 5) == false`
  - Esta operación debería dar un error o no efectuarse:  `true = 0`
6. Añada expresiones condicionales:  `d = if 2<a then b else c`  
7. Modifique las pruebas para que comprueben el buen funcionamiento de su código

### Gramática Inicial

1.  Σ = { ADDOP, MULOP, '(', ')', NUM },
2.  V = {  comma, expression, term, factor }
3.  Productions:
    1.  expression → term ( ADDOP term)* 
    2.  term → factor (MULOP factor)*
    3.  factor → '(' expression ')' | NUM

### Recursos

* [Apuntes de PL: Análisis Sintáctico Predictivo Recursivo](http://crguezl.github.io/pl-html/node22.html)
* [Repo con una solución a un lenguaje similar](https://github.com/crguezl/prdcalc)
  -  [Despliegue en Heroku](http://predictiveparser.herokuapp.com/)
  - [Fichero main.js con un parser similar al que se solicita](https://github.com/crguezl/prdcalc/blob/master/views/main.js)
* [Mocha](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/mocha.html)
* [Chai](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/chai.html)
* [Covering](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/covering.html)
* [Blanket](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/blanket.html)



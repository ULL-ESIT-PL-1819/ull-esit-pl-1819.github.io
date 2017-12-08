### Aceptar Tarea

* [Aceptar asignación de la tarea]()

### Forma de trabajo

* Use su portátil o su cuenta en c9 para llevar a cabo los objetivos planteados.
* Esta práctica se divide en objetivos o hitos:  indique al profesor  cuando ha terminado y suba los enlaces a los repos y despliegues.

### Descripción

Esta es la gramática para la que tiene que escribir un analizador recursivo descendente predictivo:

1.  Σ = { ADDOP, MULOP, '(', ')', NUM },
2.  V = {  expression, term, factor }
3.  Productions:
    1.  expression → term ( ADDOP term)* 
    2.  term → factor (MULOP factor)*
    3.  factor → '(' expression ')' | NUM

Donde:

            ADDOP = /[+-]/
            MULOP = /[*\/]/
            ID = /[a-z_]\w*/i
            NUM = /\d+/

### Hitos

1. Use el repo de GitHub dado por la asignación de esta tarea 
2. Escriba un analizador sintáctico para la gramática dada: : rellene las partes que faltan en el fichero [public/main.js](https://github.com/ULL-ESIT-PL-1617/evalua-pdr/blob/master/public/main.js)
3. Modifique el código para que evalúe las expresiones
4. Modifique las pruebas para que funcionen

### Recursos

* [Apuntes de PL: Análisis Sintáctico Predictivo Recursivo](http://crguezl.github.io/pl-html/node22.html)
* [Repo con una solución a un lenguaje similar](https://github.com/crguezl/prdcalc)
  -  [Despliegue en Heroku](http://predictiveparser.herokuapp.com/)
  - [Fichero main.js con un parser similar al que se solicita](https://github.com/crguezl/prdcalc/blob/master/views/main.js)
* [Mocha](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/mocha.html)
* [Chai](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/chai.html)
* [Covering](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/covering.html)
* [Blanket](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/blanket.html)
* [Repo con la solución](https://github.com/ULL-ESIT-PL-1617/solution-evalua-pdr)


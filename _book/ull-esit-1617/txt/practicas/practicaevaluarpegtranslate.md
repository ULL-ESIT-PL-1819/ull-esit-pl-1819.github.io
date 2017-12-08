### Aceptar Tarea

* [Aceptar asignación de la tarea]()

### Forma de trabajo

* Use su portátil o su cuenta en c9 para llevar a cabo los objetivos planteados.
* Esta práctica se divide en objetivos o hitos:  indique al profesor  cuando ha terminado y suba los enlaces a los repos y despliegues.

### Descripción

Este es el PEG de partida::

```
start
  = comma

comma 
  = assign COMMA comma 
  / assign

assign
  = ID ASSIGN additive
  / additive

additive
  = multiplicative (ADDOP multiplicative)*
  / multiplicative

multiplicative
  = primary (MULOP primary)*
  / primary

primary
  = integer
  / ID
  / LEFTPAR comma RIGHTPAR

integer "integer"
  = NUMBER

_ = $[ \t\n\r]*

ADDOP = PLUS / MINUS
MULOP = MULT / DIV
COMMA = _","_
PLUS = _"+"_
MINUS = _"-"_
MULT = _"*"_
DIV = _"/"_
LEFTPAR = _"("_
RIGHTPAR = _")"_
NUMBER = _ $[0-9]+ _
ID = _ $([a-z_]i$([a-z0-9_]i*)) _
ASSIGN = _ '=' _
```

### Hitos

1. Construya el árbol de análisis sintáctico abstracto
2. Escriba una función `genCode` que recorra el árbol de análisis sintáctico abstracto retornado 
produciendo como salida una función javascript que computa las expresiones especificadas:
3.  Ejemplo de entrada:
```javascript
a = 4,
b = 5+a,
c = 2*a
```
4. Ejemplo de salida para la entrada anterior:
```javascript
module.exports = () => {
  var sym = {};
  sym['a'] = 4,
  sym['b'] = 5+sym['a'],
  sym['c'] = 2*sym['a']
  return sym;
}
```
5. Añada funciones y llamadas a función
6. Modifique las pruebas para que comprueben el buen funcionamiento de su código
7. Su fichero `README.md` debe contener su gramática final.

### Recursos

* [PEGs](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pegjs/PEGS.html)
* [Repo del que parte esta asignación](https://github.com/ULL-ESIT-PL-1617/evaluar-pegjs-translate)
* [Mocha](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/mocha.html)
* [Chai](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/chai.html)
* Rakefile:
```bash
[~/srcPLgrado/pegjs-calc-translate(master)]$ rake -T
rake clean    # rm grammar.js
rake compile  # Compile grammar.pegjs
rake exe      # Run main.js
rake run      # Run mainfromfile.js input1
```

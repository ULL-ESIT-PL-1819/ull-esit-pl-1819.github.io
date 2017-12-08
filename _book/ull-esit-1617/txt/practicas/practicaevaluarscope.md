### Aceptar Tarea

* [Aceptar asignación de la tarea]()

### Forma de trabajo

* Use su portátil o su cuenta en c9 para llevar a cabo los objetivos planteados.
* Esta práctica se divide en objetivos o hitos:  indique al profesor  cuando ha terminado y suba los enlaces a los repos y despliegues.

### Descripción

Este es el PEG de partida::

`start
  = comma

comma
  = assign COMMA comma
  / assign
assign
  = ID ASSIGN assign
  / additive

additive
  = multiplicative (ADDOP multiplicative)*

multiplicative
  = primary (MULOP primary)*

primary
  = integer
  / ID LEFTPAR args RIGHTPAR
  / ID
  / LEFTPAR params ARROW assign
  / LEFTPAR comma RIGHTPAR
  / QUOTE NOQUOTE QUOTE

args = !COMMA assign? (COMMA assign)*

params = (ID COMMA)* ID? RIGHTPAR

integer "integer"
  = NUMBER

_ = ([ \t\n\r]+ / ("#" [^\n\r\u2028\u2029]*)+)*


ADDOP = PLUS / MINUS
MULOP = MULT / DIV
QUOTE = _ ["] _
NOQUOTE = $[^"]+
COMMA = _","_
PLUS = _"+"_
MINUS = _"-"_
MULT = _"*"_
DIV = _"/"_
LEFTPAR = _"("_
RIGHTPAR = _")"_
NUMBER = _ $[0-9]+ _
ID = _ $([a-z_]i$([a-z0-9_]i*)) _
ARROW = _ '=>' _
ASSIGN = _ '=' _``
```

### Hitos

1. Añada una categoría gramátical `defs` que permita definir variables en el lenguaje que hemos usado en clase. 
Algo así:

````yacc
defs = ( ID DEFINE additive SEMICOLON)*
...
DEFINE = _ ":=" _
SEMICOLON = _ ";" _
```
2. Las definiciones pueden aparecer al comienzo de un paréntesis y serán locales a ese paréntesis. 
Por ejemplo:
```
(
  a := 4;                          # definición de a
  b := (x,y) => (z := 3; x+y+z+a), # x e y están declarados
  a = b(2,3),                      # comma expression
  z = a                            # Error! z no está definido ni es un parámetro
)
```
3. Así  pues habría que modificar la regla de los paréntesis:
```
primary
  = integer
  / ID LEFTPAR args RIGHTPAR
  / ID
  / LEFTPAR params ARROW assign
  / LEFTPAR defs comma RIGHTPAR
  / QUOTE NOQUOTE QUOTE
```
4. En esta nueva versión del lenguaje todo identificador debe estar **declarado** o **definido**
antes de su uso
5. En las definiciones de función se considera que la enumeración de los parámetros los **declara**. En el ejemplo anterior dentro de la función `b` los usos de `x`e `y` son correctos por que se han declarado previamente 
en la lista `(x, y)`
6. Escriba una función `scopeAnalysis` que compruebe que todo identificador es declarado o definido 
antes de su uso. Su compilador deberá detectar los usos erróneos de identificadores
7. Las funciones de la run-time library como `print`, `sqrt`, etc. deben ser pre-insertadas en la tabla de símbolos global para que no le den errores. No hace falta que lo haga con todas, basta con que preinserte `print` para los ejemplos de prueba
7. Su fichero `README.md` debe contener su gramática final.

### Recursos

* [Repo del que parte esta asignación](https://github.com/ULL-ESIT-PL-1617/solution-pegjs-translate/tree/functions). Rama `functions`
* [PEGs](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pegjs/PEGS.html)

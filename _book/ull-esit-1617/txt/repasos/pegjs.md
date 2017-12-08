### Ejercicios sobre PEGs

* ¿Que opción debemos pasar a `pegjs` para que admita que las acciones semánticas se especifiquen en `CoffeeScript`?
* Escriba en PEGJS un traductor de expresiones aritméticas a postfijo.  Una expresión como `a = 4*b+c` se debe traducir por `4 b * c + &a = `
* Escriba un PEGJS que traduzca secuencias de expresiones aritméticas separadas por puntos y comas 
a JavaScript.  Una secuencia de expresiones como 
```
b = 5;
c = 2;
a = 4*b+c;
b+c+a 
```
se debería traducir como:

```
var b = 5;
var c = 2;
var a = 4*b+c;
b+c+a
```
* Escriba un peg que reconozca las sentencias `if then ...` e `if then ... else ...` asociando cada `else` con el `if` mas cercano
```
if a then if b then o else o
```
* Explique como se le puede pasar información al objeto Parser generado por PEG.js
* Escriba un peg que reconozca los comentarios Pascal anidados
* Escriba un peg que reconozca el lenguaje
$$ \{ a^nb^nc^n / n \ge 1 \} $$
* Indique como es la estructura de tabla de símbolos de un compilador y como se construye.
Explique como el anidamiento de las tablas de símbolos refleja el ámbito de las variables
* Indique como se hace el análisis de tipos en un compilador mediante la decoración del árbol con el atributo `tipo`. Señale las diferentes formas en la que se pueden resolver las cincompatibilidades de tipos

#### Ejercicio: Llamadas a función en PL0.1

En el PEGjs en [pl0.pegjs](https://github.com/crguezl/pegjscalc/blob/clase09052016/lib/pl0.pegjs)
de la rama [clase09052016](https://github.com/crguezl/pegjscalc/tree/clase09052016) se añaden así 
llamadas a funciones:

```javascript
factor = NUMBER
       / id:ID LEFTPAR a:assign? r:(COMMA assign)* RIGHTPAR
```
El problema con esta regla es que acepta [entradas como esta](https://github.com/crguezl/pegjscalc/blob/clase09052016/tests/simple1err.pl0) con una coma inicial:

```javascript
  while (a < 10) do a = fact(,a+1,b);
```
Obviamente el problema es fácil de arreglar usando dos reglas:
```javascript
       / ID LEFTPAR RIGHTPAR
       / ID LEFTPAR assign (COMMA assign)* RIGHTPAR
```
**¿Sabría como resolver el problema usando <u>una sola regla?</u>**

Puede editar el texto que sigue y pulsar `Submit` para comprobar si su solución coincide con la del 
profesor. Si cree tener la solución puede comentarla en este párrafo (signo de `+` a la derecha del párrafo, es necesario estar registrado en GitBook).

{% regexp width="100%", height="100%", color="#0b3136" , editorHeight="350px" %}
{% editor %}
factor = NUMBER
       / id:ID LEFTPAR a:assign? r:(COMMA assign)* RIGHTPAR /* llamada a función*/
         {
           let c = a? [a] : [];
           c= c.concat(r.map(([_, t]) => t));
           return {
             type: 'CALL',
             name: id,
             children: c
           }
         }
       / ID
       / LEFTPAR t:assign RIGHTPAR   { return t; }
{% solution %}
Solución aún no publicada
{% validation %}
/\&\{\s*return\s+a;?\s*\}\s+r:\(COMMA\s+assign\)/
{% endregexp %}


#### Ejercicio: Acción Semántica para las Declaraciones de funciones en PL0.1

En el PEGjs en [pl0.pegjs](https://github.com/crguezl/pegjscalc/blob/clase10052016/lib/pl0.pegjs)
de la rama [clase09052016](https://github.com/crguezl/pegjscalc/tree/clase10052016) se añaden así 
las declaraciones de funciones:

```javascript
functionDeclaration = FUNCTION id:ID LEFTPAR !COMMA p1:ID? r:(COMMA ID)* RIGHTPAR block SC
                        {
                        }
```
Complete el código que falta. Aplane los bloques de manera que cuando se le de como entrada un  programa como este:

```javascript
const A = 4, 
      B = 30;
var b, n;
function fact(n);
  var t;
  function tutu(a,b,c);
    return 4;
  { 
    if n <= 1 then return 1 
    else return n*fact(n-1);
  };
{
  n = 9;
  b = fact(n);
}
```

Produzca un árbol de salida similar a este:

```javascript
{ type: 'BLOCK',
  constants: [ [ 'A', 4 ], [ 'B', 30 ] ],
  variables: [ 'b', 'n' ],
  functions: 
   [ { name: 'fact',
       params: [ 'n' ],
       type: 'BLOCK',
       constants: [],
       variables: [ 't' ],
       functions: 
        [ { name: 'tutu',
            params: [ 'a', 'b', 'c' ],
            type: 'BLOCK',
            constants: [],
            variables: [],
            functions: [],
            main: { type: 'RETURN', children: [ { type: 'NUM', value: 4 } ] } } ],
       main: 
        { type: 'COMPOUND',
          children: 
           [ { type: 'IFELSE',
               c: 
                { type: '<=',
                  left: { type: 'ID', value: 'n' },
                  right: { type: 'NUM', value: 1 } },
               st: { type: 'RETURN', children: [ { type: 'NUM', value: 1 } ] },
               sf: 
                { type: 'RETURN',
                  children: 
                   [ { type: '*',
                       left: { type: 'ID', value: 'n' },
                       right: 
                        { type: 'CALL',
                          name: 'fact',
                          arguments: 
                           [ { type: '-',
                               left: { type: 'ID', value: 'n' },
                               right: { type: 'NUM', value: 1 } } ] } } ] } } ] } } ],
  main: 
   { type: 'COMPOUND',
     children: 
      [ { type: '=',
          left: { type: 'ID', value: 'n' },
          right: { type: 'NUM', value: 9 } },
        { type: '=',
          left: { type: 'ID', value: 'b' },
          right: 
           { type: 'CALL',
             name: 'fact',
             arguments: [ { type: 'ID', value: 'n' } ] } } ] } }
```

Si cree tener la solución puede comentarla en este párrafo (signo de `+` o `#nº` a la derecha del párrafo, es necesario estar registrado en GitBook).





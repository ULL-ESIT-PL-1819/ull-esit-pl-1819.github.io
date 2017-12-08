<!-- toc -->
## PEGs

### Apuntes de PEG.js

* [Introducción a los PEGs](http://crguezl.github.io/pl-html/node31.html)
* [PEGJS](http://crguezl.github.io/pl-html/node32.html)
* [La Calculadora Simple](http://crguezl.github.io/pl-html/node33.html)
* [Eliminación de la Recursividad por la Izquierda en PEGs](http://crguezl.github.io/pl-html/node37.html#SECTION04472000000000000000)
* [Dangling else: Asociando un else con su if mas cercano](http://crguezl.github.io/pl-html/node38.html#SECTION04482000000000000000)

#### PEG.js Example

`altjs.coffee` is the code for the "AltJS language in 5 minutes" section
presented in the second half of the talk.

#### Extra Special Bonus!

`idgrep.coffee` (and `idgrep.js`) is another example of using Esprima
to do static analysis on JavaScript code.


###  Repositorios

* [Ejemplos en PEGjs](https://github.com/crguezl/pegjs/tree/master/examples)
  ```bash
  [~/local/src/javascript/PLgrado/pegjs/examples(master)]$ pwd -P
  /Users/casiano/local/src/javascript/PLgrado/pegjs/examples
  ```

### Bactracking en los PEGs

!INCLUDE "pegjsbacktracking.md"


### Ejemplos

```javascript
> parser = PEG.buildParser(`d = 'c'\ns = ('a' / 'b')+\n`, {allowedStartRules: ['d', 's']})
{ SyntaxError: [Function: peg$SyntaxError],
  parse: [Function: peg$parse] }
> r = parser.parse('c')
'c'
> r = parser.parse('aba', {startRule: "s"})
[ 'a', 'b', 'a' ]
> parser = PEG.buildParser(`d = 'c'\ns = ('a' / 'b')+\n`, {allowedStartRules: ['d', 's'], output: "source"}); typeof parser
'string'
```

```bash
[~/pegjs/examples(master)]$ cat initializer.js
```

```javascript
"use strict";
const PEG = require("pegjs");
const grammar = `
 {                             
   const util = require("util");     
                               
   var g = "visible variable"; 
   console.log("Inside Initializer! options = "+util.inspect(options)); 
 }                             
 start = 'a' { console.log('g = '+g); return 1; } 
       /  &  { console.log('inside predicate: g = '+g); return true; } 'b' { return 2; }
`;

console.log("GRAMMAR:\n"+grammar);

const parser = PEG.buildParser(grammar);

console.log("PARSING 'a'");
let r = parser.parse("a", { x: 'hello' });
console.log(r); 
console.log("PARSING 'b'");
r = parser.parse("b");
console.log(r); 
```

### Borrador

* [borrador](pegjs.md) (work in progress. Don't look here)


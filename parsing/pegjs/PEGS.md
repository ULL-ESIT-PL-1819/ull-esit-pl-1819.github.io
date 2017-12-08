<!-- toc -->
## PEGs

### Apuntes de PEG.js

* [Documentación del Módulo PEG.js](https://pegjs.org/documentation)
* [Introducción a los PEGs](http://crguezl.github.io/pl-html/node31.html)
  - 0.10.0 `s/buildParser/generate/`
  - 0.10.0 Se necesita poner `--format`: `pegjs --format globals -e pl0 -o public/pl0.js -e pl0 lib/pl0.pegjs`
* [PEGJS](http://crguezl.github.io/pl-html/node32.html)
* [La Calculadora Simple](http://crguezl.github.io/pl-html/node33.html)
* [Eliminación de la Recursividad por la Izquierda en PEGs](http://crguezl.github.io/pl-html/node37.html#SECTION04472000000000000000)
* [Dangling else: Asociando un else con su if mas cercano](http://crguezl.github.io/pl-html/node38.html#SECTION04482000000000000000)


###  Repositorios

* [Ejemplos en PEGjs](https://github.com/ULL-ESIT-PL-1617/pegjs-examples)
* [Viejos Ejemplos en PEGjs](https://github.com/crguezl/pegjs/tree/master/examples)
  ```bash
  [~/local/src/javascript/PLgrado/pegjs/examples(master)]$ pwd -P
  /Users/casiano/local/src/javascript/PLgrado/pegjs/examples
  ```

### Herramientas

* [@ull-esit-pl/pegjs-strip](https://www.npmjs.com/package/@ull-esit-pl/pegjs-strip)
* [pegjs-strip](https://www.npmjs.com/package/pegjs-strip)
* [pegjs-util](https://www.npmjs.com/package/pegjs-util)

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

#### Patrick Dubroy: Parsing, Compiling, and Static Metaprogramming

* [Patrick Dubroy: Parsing, Compiling, and Static Metaprogramming](http://2013.jsconf.eu/speakers/patrick-dubroy-parsing-compiling-and-static-metaprogramming.html) Video
* [Patrick Dubroy: Parsing, Compiling, and Static Metaprogramming](https://speakerdeck.com/pdubroy/parsing-compiling-and-static-metaprogramming) Slides
* `altjs.coffee` is the code for the "AltJS language in 5 minutes" section
presented in the second half of the talk.
  * [altjs.coffee](https://github.com/pdubroy/jsconfeu-talk/blob/master/altjs.coffee)
* `idgrep.coffee` (and `idgrep.js`) is another example of using Esprima
to do static analysis on JavaScript code.
  * [idgrep.js](https://github.com/pdubroy/jsconfeu-talk/blob/master/idgrep.js)

### Tree Transformations

* [TreeHugger](https://github.com/ajaxorg/treehugger)
* [recast](https://github.com/benjamn/recast)


### Borrador

* [borrador](pegjs.md) (work in progress. Don't look here)


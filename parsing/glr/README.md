### Gruffalo

* [Gruffalo](https://github.com/no-context/gruffalo)

Based on the RNGLR algorithm described in the paper [Right Nulled GLR Parsers](https://pdfs.semanticscholar.org/ae18/fa7080e85922fa916591bc73cd100ff5e861.pdf) (Elizabeth Scott & Adrian Johnstone, ACM, 2006).

RNGLR parsers accept any context-free grammar, while still being (nearly?) as fast as LR parsers (e.g. yacc).


### Maitreya

* [maitreya en GitHub](https://github.com/hackwaly/maitreya)


Maitreya is a [generalized LR parser](https://en.wikipedia.org/wiki/GLR_parser) generator written in javascript.

## Features

- Accept GLR grammars, not limited to LR(k) grammars.
- Support incremental (not yet) / streaming parsing.
- Can do both scanner less parsing and token based parsing.
- Can build grammar on the fly by using parser combinators.
- Support both interpretation and code genearation.

## Example

```javascript
import {defineGrammar, def, ref, many1, regex, choice} from 'maitreya/grammar';
import {GLRParser} from 'maitreya/interpret';

let grammar = defineGrammar(() => {
  def('exp', [ref('num')], ([num]) => num);
  def('exp', [ref('exp'), ref('op'), ref('exp')], ([lhs, op, rhs]) => op(lhs, rhs));
  def('num', [many1(regex(/^[0-9]/))], ([digits]) => Number(digits.join('')));
  def('op', [choice('+', '-')], ([op]) => {
    return {
      ['+'](lhs, rhs) { return lhs + rhs; },
      ['-'](lhs, rhs) { return lhs - rhs; }
    }[op];
  });
});

let parser = new GLRParser(grammar);
parser.feed('3+2-5');
console.log(parser.results);
```
Look at the [API Reference](https://github.com/hackwaly/maitreya/wiki/API-Reference)



*  PEG parsers don't backtrack like other recursive-descent parsers or Prolog do. 
* Rather, when confronted with a choice, a PEG parser will try every option until one succeeds.
* **Once one succeeds, it will commit to it no matter how the rule was invoked**.

El siguiente ejemplo ilustra el backtracking en los PEGs:

```javascript
var PEG = require ("pegjs");
var grammar1 = `
start = "test" / "test ;"
`;
var parser = PEG.buildParser(grammar1);
var input = 'test';
console.log("OK: "+parser.parse(input));
try {
  // This input will not be accepted 
  var input = 'test ;';
  console.log(parser.parse(input));
}
catch (e) {
  console.log(e);
}
var grammar2 = `
start = "test" !" ;" / "test ;"
`;
var parser = PEG.buildParser(grammar2);
var input = 'test ;';
console.log("OK: "+parser.parse(input));
```

Cuando se ejecuta produce la salida:
```bash
[~/srcPLgrado/pegjs/examples(master)]$ node backtracking.js 
OK: test
{ [SyntaxError: Expected end of input but " " found.]
  message: 'Expected end of input but " " found.',
  expected: [ { type: 'end', description: 'end of input' } ],
  found: ' ',
  offset: 4,
  line: 1,
  column: 5,
  name: 'SyntaxError' }
OK: test ;
```


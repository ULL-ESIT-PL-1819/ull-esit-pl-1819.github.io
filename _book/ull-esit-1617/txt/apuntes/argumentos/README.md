## minimist


* [minimist](https://www.npmjs.com/package/minimist)

```js
#!/usr/bin/env node

console.log(process.argv);
console.log(process.argv.slice(2));
var argv = require('minimist')(process.argv.slice(2));
console.dir(argv);
```

Ejecuciones:

```bash
[~/src/javascript/learning/minimist]$ ./example.js -d a -d b c
[ '/usr/local/bin/node',
  '/Users/casiano/local/src/javascript/learning/minimist/example.js',
  '-d',
  'a',
  '-d',
  'b',
  'c' ]
[ '-d', 'a', '-d', 'b', 'c' ]
{ _: [ 'c' ], d: [ 'a', 'b' ] }
```

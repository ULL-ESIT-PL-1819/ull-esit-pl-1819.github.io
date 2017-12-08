## Ejecutando Comandos del Sistema Operativo con `child_process`

```bash
[~/src/javascript/expressjs/useshelljs]$ pwd
/Users/casiano/src/javascript/expressjs/useshelljs
```

```javascript
// http://nodejs.org/api.html#_child_processes
var exec = require('child_process').exec;
var child;
// executes `pwd`
child = exec("pwd", function (error, stdout, stderr) {
  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});


// or more concisely
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { console.log(stdout) }
exec("ls -la", puts);
```

Ejecución:

```bash
~/src/javascript/expressjs/useshelljs]$ node unixcommand.js
stdout: /Users/casiano/src/javascript/expressjs/useshelljs

stderr:
total 256
drwxr-xr-x  12 casiano  staff    408  4 oct 11:49 .
drwxr-xr-x  27 casiano  staff    918  4 oct 11:22 ..
-rw-------   1 casiano  staff  12288  4 oct 11:41 .checkgit.js.swp
-rw-r--r--   1 casiano  staff  12288  4 oct 11:31 .hello.js.swp
-rw-r--r--   1 casiano  staff  12288  4 oct 11:24 .package.json.swp
-rw-------   1 casiano  staff  12288  4 oct 11:49 .unixcommand.js.swp
-rw-r--r--   1 casiano  staff    315  4 oct 11:40 checkgit.js
-rw-r--r--   1 casiano  staff    542  4 oct 11:31 hello.js
drwxr-xr-x  59 casiano  staff   2006  4 oct 11:23 node_modules
-rw-r--r--   1 casiano  staff    299  4 oct 11:23 package.json
-rw-r--r--   1 casiano  staff  61891  4 oct 11:21 salida
-rw-r--r--   1 casiano  staff    466  4 oct 11:49 unixcommand.js
```

## El módulo `shelljs`

### Ejemplo: Comprobando si `git`está instalado

```javascript
var util = require('util');
require('shelljs/global');
var z = which('git');
if (!z) {
  echo('Sorry, this script requires git');
  console.log(z);
  exit(1);
}
else {
  console.log(z);
  console.log(String(z));
  //console.log(util.inspect(z, {depth: null}));
  console.log(z.stdout);
  console.log(z.stdout);
}
```
Ejecución:

```bash
[~/src/javascript/expressjs/useshelljs]$ node checkgit.js
{ [String: '/usr/local/bin/git']
  stdout: '/usr/local/bin/git',
  stderr: null,
  code: 0,
  cat: [Function: bound ],
  head: [Function: bound ],
  tail: [Function: bound ],
  to: [Function: bound ],
  toEnd: [Function: bound ],
  sed: [Function: bound ],
  sort: [Function: bound ],
  uniq: [Function: bound ],
  grep: [Function: bound ],
  exec: [Function: bound ] }
/usr/local/bin/git
/usr/local/bin/git
/usr/local/bin/git
```

### Ejemplo con `express`

```javascript
require('shelljs/global');
var express = require('express');
var util = require('util');

var app = express();

app.get('/', function (req, res) {
  console.log(util.inspect(req, {depth: null}));
  res.send('Hello World!');
});

app.get('/command', function (req, res) {
  console.log(util.inspect(req, {depth: null}));
  console.log(util.inspect(req.url, {depth: null}));
  console.log(util.inspect(ls('-l')));
  res.send(util.inspect(ls('-l')));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
```

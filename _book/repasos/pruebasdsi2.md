## Preguntas de Repaso de Pruebas con Mocha, Chai y Should

1.  ¿Como creamos el directorio con el esqueleto inicial para las
    pruebas con mocha?
<!-- mocha init test
/mocha\s+init\s+\w+/i
-->
2.  En este ejemplo se usa Chai assert. 
Rellene lo que falta en estas pruebas del código del conversor de temperatura:

```
var assert = chai.______;

suite('temperature', function() {
    test('[1,{a: 2}] == [1,{a: 2}]', function() {
      assert._________([1, {a:2}], [1, {a:2}]);
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert._____(converted.innerHTML, /ERROR/);
    });
});
```

<!-- primera: assert, segunda: deepEqual, tercera: match -->

3.  Este es un fichero `test/index.html` apto para ejecutar las pruebas
    con Mocha y Chai en la práctica de la Temperatura en un navegador. Rellene las
    partes que faltan 
    - Sugerencias: El id es el usado por mocha para producir su salida de las pruebas, es necesario cargar `chai` y `mocha` y  establecer el estilo de pruebas (`tdd`, `bdd`, etc.) y por útlimo ejecutar `mocha`

```
[~/srcPLgrado/temperature(karma)]$ cat tests/index.html
<!DOCTYPE html>
<html>
  <head>
    <title>Mocha</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="mocha.css" />
  </head>
  <body>
    <div id="_____"></div>   <!-- para la salida de las pruebas -->
    <input id="original" placeholder="32F" size="50">
    <span class="output" id="converted"></span>

    <script src="________"></script>
    <script src="________"></script>
    <script src="../temperature.js"></script>
    <script>mocha._____('___')</script>
    <script src="tests.js"></script>

    <script>
      mocha.___();
    </script>
  </body>
</html>
```

<!--
<html>
  <head>
    <title>Mocha</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="mocha.css" />
  </head>
  <body>
    <div id="mocha"></div>
    <input id="original" placeholder="32F" size="50">
    <span class="output" id="converted"></span>
    <script src="../node_modules/chai/chai.js"></script> 
    <script src="mocha.js"></script>
    <script src="../temperature.js"></script>
    <script>mocha.setup('tdd')</script>
    <script src="tests.js"></script>

    <script>
      mocha.run();
    </script>
  </body>
</html>
-->
4.  Rellene las partes que faltan del fichero con las pruebas TDD en
    Mocha y Chai para la práctica de la temperatura:

```
        [~/srcPLgrado/temperature(karma)]$ cat tests/tests.js
        var assert = ____.assert;

        _____('temperature', function() {

            ____('32F = 0C', function() {
                original.value = "32F";
                calculate();
                assert._________(converted.innerHTML, "0.0 Celsius");
            });
        });
```
<!-- The TDD interface provides suite(), test(), suiteSetup(), suiteTeardown(), setup(), and teardown() 
The BDD interface provides describe(), context(), it(), specify(), before(), after(), beforeEach(), and afterEach().
-->

5.  ¿Como puedo ejecutar las pruebas escritas usando Mocha y Chai usando
    el comando `npm test`?. (no se asume el uso de Karma en esta
    pregunta) Explique como hacerlo.

<!--
 "scripts": {
    "test": "./node_modules/.bin/mocha --reporter spec"
  },

"scripts": {
    "test": "./node_modules/mocha/bin/mocha --require should"
  },

etc.
-->
6. El siguiente ejemplo corresponde al ejemplo de pruebas que vimos para
la renderización de una tabla correspondiente al capítulo *The Secret Life Of Objects*
que usa `mocha`y `should`.  Rellena las partes que faltan:

```
________("drawTable", function() {
  __("must draw the checkerboard correctly", function() {
    /* There are 5 columns and 5 rows and a white space between columns*/
    drawTable(checkerboard()).should._____(/^(([# ]{2}(\s|$)){5}){5}$/);
  })
});
```
<!--
describe("drawTable", function() {
  it("must draw the checkerboard correctly", function() {
    /* There are 5 columns and 5 rows and a white space between columns*/
    drawTable(checkerboard()).should.match(/^(([# ]{2}(\s|$)){5}){5}$/);
  })
});
-->

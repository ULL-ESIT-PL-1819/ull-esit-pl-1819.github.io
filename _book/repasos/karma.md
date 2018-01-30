## Preguntas de Repaso de Karma

1.  Explique como funciona Karma

2.  ¿Con que comando puedo crear el fichero de configuración de Karma?

3.  ¿Que debemos poner en la entrada `frameworks` de karma para el
    ejemplo de la temperatura?

            frameworks: ['_____'],

4.  La librería/plugin `karma-mocha` provee el adapter de Karma para
    Mocha. ¿Como le pasamos opciones para configurar Mocha desde Karma?
    Rellene las partes que faltan:


```javascript
client: {
  args: ['--grep', 'pattern'], // solo pruebas que casan con pattern
  mocha: {
    __: '___'
  }
},
```


5.  Explique que debe ponerse (y que no) en la sección `files` del
    fichero de configuración de Karma ¿Donde son cargados dichos
    ficheros?:

            files: [ ... ],

6.  Los preprocesadores en Karma nos permiten procesar los ficheros en
    `files` antes de que sean cargados en el navegador.

```javascript
          preprocessors = {
            '**/*.coffee': 'coffee',
            '**/*.html': 'html2js'
          };
```

    ¿Que hace el preprocesador `html2js`? ¿Que hace el preprocesador
    `coffee`?

7.  Complete la función `setup` de las pruebas de la práctica de la
    temperatura con Mocha, Chai y Karma:


```javascript
setup(function(){
  if (typeof ________ !== 'undefined') {
      document.body.innerHTML = ________['tests/test.html'];
      original = document.______________('original');
      converted = document.______________('converted');
  }
});
```


¿Como se llama la variable en la que se guardan los HTML de los
ficheros cargados en los navegadores?

8.  ¿Que es PhantomJS? ¿Como funciona?

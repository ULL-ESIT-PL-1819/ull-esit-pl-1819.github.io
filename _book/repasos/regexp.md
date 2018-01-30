## Preguntas de Repaso de Expresiones Regulares

1. Escriba expresiones regulares que casen con las siguientes especificaciones:

    1. car and cat
    1. pop and prop
    1. ferret, ferry, and ferrari
    1. Any word ending in ious
    1. A whitespace character followed by a dot, comma, colon, or semicolon
    1. A word longer than six letters
    1. A word without the letter e
1.  Escriba una expresión regular que reconozca las cadenas de doble comillas. Debe permitir la presencia de comillas y caracteres escapados. 
2. Escriba una expresión regular que reconozca los números en punto flotante (por ejemplo `-2.3e-1`, `-3e2`, `23`, `3.2`). numbers = /^ ... $/, matching exacto
4. Escriba una expresión regular que case con los números no primos expresados en unario. Pruebe con `1111`, `111`, `111111`, `1111111`, ...
5. Escriba una expresión regular que case con los comentarios JavaScript. 
1.  Escriba una expresión JavaScript que permita reemplazar todas las

1.  Rellene las partes que faltan:


```javascript
> re = /d(b+)(d)/ig
/d(b+)(d)/gi
> z = "dBdxdbbdzdbd"
'dBdxdbbdzdbd'
> result = re.exec(z)
[ ______, _____, ______, index: __, input: 'dBdxdbbdzdbd' ]
> re.lastIndex
______
> result = re.exec(z)
[ ______, _____, ______, index: __, input: 'dBdxdbbdzdbd' ]
> re.lastIndex
______
> result = re.exec(z)
[ ______, _____, ______, index: __, input: 'dBdxdbbdzdbd' ]
> re.lastIndex
______
> result = re.exec(z)
_____
```

2.  Escriba la expresión regular `r` para que produzca el resultado
    final:


```javascript
> x = "hello"
> r = /l(___)/
> z = r.exec(x)
[ 'l', index: 3, input: 'hello' ]
```


3.  Rellene el valor que falta:


```javascript
> z = "dBdDBBD"
> re = /d(b+)(d)/ig
> re.lastIndex = ________
> result = re.exec(z)
[ 'DBBD',
  'BB',
  'D',
  index: 3,
  input: 'dBdDBBD' ]
```

4.  Conteste:

    1.  Explique que hace el siguiente fragmento de código:

            > RegExp.prototype.bexec = function(str) {
            ...   var i = this.lastIndex;
            ...   var m = this.exec(str);
            ...   if (m && m.index == i) return m;
            ...   return null;
            ... }
            [Function]

    2.  Rellene las salidas que faltan:

```javascript
> re = /d(b+)(d)/ig
/d(b+)(d)/gi
> z = "dBdXXXXDBBD"
'dBdXXXXDBBD'
> re.lastIndex = 3
> re.bexec(z)
_____________________________________________________
> re.lastIndex = 7
> re.bexec(z)
_____________________________________________________
```


5.  Escriba una expresión JavaScript que permita reemplazar todas las
    apariciones de palabras consecutivas repetidas (como `hello hello`)
    por una sóla aparición de la misma

6.  ¿Cual es la salida?

        > "bb".match(/b|bb/)

        > "bb".match(/bb|b/)

    Justifique su respuesta.

7.  El siguiente fragmento de código tiene por objetivo escapar las
    entidades HTML para que no sean intérpretadas como código HTML.
    Rellene las partes que faltan.


```javascript
var entityMap = {
    "&": "&___;",
    "<": "&__;",
    ">": "&__;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

function escapeHtml(string) {
  return String(string).replace(/_________/g, function (s) {
    return ____________;
  });
```
2.  Se quiere poner un espacio en blanco después de la aparición de cada coma:

        > x = "a,b,c,1,2,d, e,f"
        'a,b,c,1,2,d, e,f'
        > x.replace(/,/g,", ")
        'a, b, c, 1, 2, d,  e, f'

    Se pide que si hay ya un espacio después de la coma, no se duplique.
3. Se pide una expresión regular que case con expresiones del tipo
`identifier = number` y retorne con cada paréntesis el identificador
y el número. Pruebe con `h     = 4`, `  temp = 5.6`, `  x23= -2.3e1`
y `z += 3`

4. Imagine you have written a story and used single quotation marks
throughout to mark pieces of dialogue. Now you want to replace all
the dialogue quotes with double quotes, while keeping the single
quotes used in contractions like *aren’t*.
Think of a pattern that distinguishes these two kinds of quote usage
and craft a call to the replace method that does the proper
replacement.
```
var text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
var result = text.replace(/.../g, '...');
console.log(result);
var expected = `"I'm the cook," he said, "it's my job."`;
if (expected === result) console.log("OK")
else console.log("ERROR!");
```

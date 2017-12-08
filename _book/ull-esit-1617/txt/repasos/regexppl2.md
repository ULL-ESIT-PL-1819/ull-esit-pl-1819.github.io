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
    apariciones de palabras consecutivas repetidas (como `hello hello`)
    por una sóla aparición de la misma

2.  ¿Cual es la salida?

        > "bb".match(/b|bb/)

        > "bb".match(/bb|b/)

    Justifique su respuesta.

3.  El siguiente fragmento de código tiene por objetivo escapar las
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

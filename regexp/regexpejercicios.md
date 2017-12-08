## Ejercicios de Expresiones Regulares {#section:ejercicioslastindex}

### Ejercicios de EloquentJS

1. Haga los ejercicios de expresiones regulares en 
[Eloquent JavaScript](http://eloquentjavascript.net/09_regexp.html#h_TcUD2vzyMe)

### Ejercicios de Cursos Anteriores

1. Haga los ejercicios de expresiones regulares en los apuntes de otros años
[http://crguezl.github.io/pl-html/node7.html](http://crguezl.github.io/pl-html/node7.html)

### Cadenas

1.  Escriba una expresión regular que reconozca las cadenas de doble
    comillas. Debe permitir la presencia de comillas y caracteres
    escapados.

### Números
1.  Escriba una expresión regular que reconozca los números en punto flotante (por ejemplo `-2.3e-1`, `-3e2`, `23`, `3.2`)
2.  El siguiente ejemplo comprueba la validez de números de teléfono:

        [~/local/src/javascript/PLgrado/regexp]$ pwd -P
        /Users/casiano/local/src/javascript/PLgrado/regexp
        [~/local/src/javascript/PLgrado/regexp]$ cat phone.html
        <!DOCTYPE html>
        <html>  
          <head>  
            <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">  
            <meta http-equiv="Content-Script-Type" content="text/javascript">  
            <script type="text/javascript">  
              var re = /\(?\d{3}\)?([-\/\.])\d{3}\1\d{4}/;  
              function testInfo(phoneInput){  
                var OK = re.exec(phoneInput.value);  
                if (!OK)  
                  window.alert(RegExp.input + " isn't a phone number with area code!");  
                else
                  window.alert("Thanks, your phone number is " + OK[0]);  
              }  
            </script>  
          </head>  
          <body>  
            <p>Enter your phone number (with area code) and then click "Check".
                <br>The expected format is like ###-###-####.</p>
            <form action="#">  
              <input id="phone"><button onclick="testInfo(document.getElementById('phone'));">Check</button>
            </form>  
          </body>  
        </html>


### Circuito Corto

1.  ¿Cual es la salida? ¿Porqué?

        > "bb".match(/b|bb/)

        > "bb".match(/bb|b/)

### Paréntesis 

1. Paréntesis en la cadena de reemplazo

        > str = "John Smith"
        'John Smith'
        > newstr = str.replace(re, "$2, $1")
        'Smith, John'

11.  ¿Que casa con cada paréntesis en esta regexp para los  pares nombre-valor?

            > x = "h     = 4"
            > r = /([^=]*)(\s*)=(\s*)(.*)/
            > r.exec(x)
            >

### lastIndex

2.  El método `exec`.

  If your regular expression uses the `g` flag, you can use the `exec`
  method multiple times to find successive matches in the same string.
  When you do so, the search starts at the substring of str specified
  by the regular expression’s `lastIndex` property.

        > re = /d(b+)(d)/ig
        /d(b+)(d)/gi
        > z = "dBdxdbbdzdbd"
        'dBdxdbbdzdbd'
        > result = re.exec(z)
        [ 'dBd', 'B', 'd', index: 0, input: 'dBdxdbbdzdbd' ]
        > re.lastIndex
        3
        > result = re.exec(z)
        [ 'dbbd', 'bb', 'd', index: 4, input: 'dBdxdbbdzdbd' ]
        > re.lastIndex
        8
        > result = re.exec(z)
        [ 'dbd', 'b', 'd', index: 9, input: 'dBdxdbbdzdbd' ]
        > re.lastIndex
        12
        > z.length
        12
        > result = re.exec(z)
        null

### Paréntesis de lookahead {#lookahead}

3.  JavaScript tiene lookaheads:

        > x = "hello"
        'hello'
        > r = /l(?=o)/
        /l(?=o)/
        > z = r.exec(x)
        [ 'l', index: 3, input: 'hello' ]

### Paréntesis de lookbehind {#lookbehind}

4.  JavaScript no tiene lookbehinds:

        > x = "hello"
        'hello'
        > r = /(?<=l)l/
        SyntaxError: Invalid regular expression: /(?<=l)l/: Invalid group
        > .exit

        [~/Dropbox/src/javascript/PLgrado/csv(master)]$ irb
        ruby-1.9.2-head :001 > x = "hello"
         => "hello" 
        ruby-1.9.2-head :002 > r = /(?<=l)l/
         => ll 
        ruby-1.9.2-head :008 > x =~ r
         => 3 
        ruby-1.9.2-head :009 > $&
         => "l" 

### Backtracking. Paréntesis **dentro de una RegExp** {#backtracking}

6.  ¿Con que cadenas casa la expresión regular `/^(11+)\1+$/`?

        > '1111'.match(/^(11+)\1+$/) # 4 unos
        [ '1111',
          '11',
          index: 0,
          input: '1111' ]
        > '111'.match(/^(11+)\1+$/) # 3 unos
        null
        > '11111'.match(/^(11+)\1+$/) # 5 unos
        null
        > '111111'.match(/^(11+)\1+$/) # 6 unos
        [ '111111',
          '111',
          index: 0,
          input: '111111' ]
        > '11111111'.match(/^(11+)\1+$/) # 8 unos
        [ '11111111',
          '1111',
          index: 0,
          input: '11111111' ]
        > '1111111'.match(/^(11+)\1+$/)
        null
        > 

### Funciones en el Argumento de Reemplazo {#reemplazofunciones}

7.  Busque una solución al siguiente ejercicio (véase ’Regex to add
    space after punctuation sign’ en [PerlMonks](http://www.perlmonks.org/?node_id=319742)) Se quiere poner un espacio en
    blanco después de la aparición de cada coma:

        > x = "a,b,c,1,2,d, e,f"
        'a,b,c,1,2,d, e,f'
        > x.replace(/,/g,", ")
        'a, b, c, 1, 2, d,  e, f'

    pero se quiere que la sustitución no tenga lugar si la coma esta
    incrustada entre dos dígitos. Además se pide que si hay ya un
    espacio después de la coma, no se duplique.
  -  La siguiente solución logra el segundo objetivo, pero estropea los números:

            > x = "a,b,c,1,2,d, e,f"
            'a,b,c,1,2,d, e,f'
            > x.replace(/,(\S)/g,", $1")
            'a, b, c, 1, 2, d, e, f'

  -  Esta otra funciona bien con los números pero no con los espacios ya existentes:

            > x = "a,b,c,1,2,d, e,f"
            'a,b,c,1,2,d, e,f'
            > x.replace(/,(\D)/g,", $1")
            'a, b, c,1,2, d,  e, f'

  -  Explique cuando casa esta expresión regular:

            > r = /(\d[,.]\d)|(,(?=\S))/g
            /(\d[,.]\d)|(,(?=\S))/g

  - Aproveche que el método `replace` puede recibir como segundo
    argumento una función (vea
    [replace](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global~O~bjects/String/replace)):

            > z = "a,b,1,2,d, 3,4,e"
            'a,b,1,2,d, 3,4,e'
            > f = function(match, p1, p2, offset, string) { return (p1 || p2 + " "); }
            [Function]
            > z.replace(r, f)
            'a, b, 1,2, d, 3,4, e'

## Preguntas de Repaso de Ajax


1.  What method of the `req` object returns a boolean value that is
    `true` if the request’s `X-Requested-With` header field is
    `XMLHttpRequest`, indicating the intent to retrieve data from the
    URL without having to do a full page refresh?.

    Fill the gap:

```javascript
        app.get('/chuchu', function (req, res) {
          var isAjaxRequest = req.______________;
          ...
        }
```

2.  La siguiente vista incluye el código JavaScript de un request Ajax:


```javascript
        <!doctype html>
        <html>
          <head>
            <title><%- title %></title>
          </head>
          <body>
            <h1><%- title  %></h1>
            <ul>
              <li><a href="http://jquery.com/" id="jq">jQuery</a>
              <li><a href="/chuchu">Visit chuchu!</a>
            </ul>
            <div class="result"></div>
            <script src="https://code.jquery.com/jquery-2.1.3.js"></script>
            <script>
              $( document ).ready(function() {
                  $( "#jq" ).click(function( event ) {
                      event.preventDefault();
                      $.get( "/chuchu", {nombres: ["juan", "pedro"]}, function( data ) {
                        $( ".result" ).html( data["answer"]);
                        console.log(data);
                      }, 'json');
                  });
              });
            </script>
          </body>
        </html>
```

    Supongamos que el servidor express.js responde al request con:

```javascript
        res.send('{"answer": "Server responds: hello world!"}')
```

    1.  ¿Como podemos acceder en el servidor express.js al objeto
        `{nombres: ["juan", "pedro"]` enviado desde el cliente como
        segundo argumento de `$.get`?

    2.  ¿Cuando se ejecuta la callback asociada con la llamada a
        `$.get`?

    3.  ¿Que contendrá el parámetro `data` pasado a la callback?

    4.  ¿Que hace el cuarto parámetro de `$.get`?

3.  En el código de la práctica de Ajax CSV cuando se hacía click en uno
    de los botones con los nombres de los ficheros de ejemplo se
    ejecutaba en el cliente la función `dump`:

```javascript
        const dump = (fileName) => {
          $.get(fileName,function (data){
            $("#original").val(data);
          });
        };
```

    ¿En que ruta/middleware del servidor express son servidos estos
    requests?. Explique el funcionamiento de este código.

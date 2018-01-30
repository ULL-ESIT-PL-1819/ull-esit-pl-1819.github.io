## Preguntas de Repaso de localStorage

1.  ¿Que diferencias y que similitudes hay entre los cookies y
    localStorage?

2.  ¿Que diferencias hay entre localStorage y sessionStorage?

3.  ¿En que consiste las reglas de segregación conocidas como
    <span>*same origin policy*</span>? ¿Como se relacionan con
    localStorage?

4.  ¿Como guardo en localStorage el contenido de una variable `chuchu`?
    ¿Como leo el contenido almacenado en localStorage con clave
    `chuchu`?

5.  ¿Como borro una clave almacenada en localStorage?

6.  1.  ¿Que es LocalStorage? ¿Que hace la siguiente línea?

              if (window.localStorage) localStorage.original  = temp;

    2.  ¿Cuando se ejecutará esta callback? ¿Que hace?

```
            window.onload = function() {
              // If the browser supports localStorage and we have some stored data
              if (window.localStorage && localStorage.original) {
                document.getElementById("original").value = localStorage.original;
              }
            };
```

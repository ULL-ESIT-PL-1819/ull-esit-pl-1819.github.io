1. Escriba un PEGJS que recibe como entrada una gramática escrita en un lenguaje como este:
  
          a -> b 'c' | c 'b';
          b -> 'b' b | '' ;
          c -> 'c' c | '';

  * Las variables sintácticas como `a`, `b` y `c` figuran en la parte izquierda, 
  * la flecha `->` indica *produce* y 
  * las alternativas de la parte derecha van separadas por barras `|`. 
  * Las partes derechas son concatenaciones de cadenas como `'c'`, `'b'` o la cadena vacía `''`  y de variables sintácticas como `a`, `b` y `c`
  * Las reglas se terminan con un punto y coma `;`
  * El programa debe retornar como salida  el programa PEG.js equivalente a la gramática de entrada.  Para el ejemplo arriba, la salida sería:

          a = b 'c' / c 'b';
          b = 'b' b / '' ;
          c = 'c' c / '';

   * Los alumnos que no hayan superado la parte práctica deben explicar como se compila la gramática y escribir un programa que haga uso del parser generado


2. Escriba un analizador descendente recursivo predictivo que resuelva el problema
anterior.
    * Los alumnos que no hayan superado la 2ª parte  o la parte práctica deberán escribir el analizador léxico
    * Si tiene pendientes las prácticas procure especialmente la precisión y claridad en todo el código de esta prueba. 


<!--el código de un analizador descendente predictivo recursivo. Para el ejemplo anterior sería algo como esto:

```
let a = function() {
  if (lh in first("b 'c'")) {
    b(); match('c');
  }
  else if (lh in first("c 'b'")) {
    c(); match('b');
  }
  else error();
};
let b = function() {
  if (lh in first("'b' b")) {
    match('b'); b();
  }
  else { 
    match('')
  };
}
let c = function() {
  if (lh in first("'c' c")) {
    match('c'); c();
  }
  else {
    match('');
  };
}
```

Las funciones `first` y `match` se suponen ya escritas. El analizador léxico y la variable `lh` se suponen 
dados.
-->

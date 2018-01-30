### Ejercicios sobre PEGs

1. Escriba un PEGJS que traduzca secuencias de expresiones aritméticas 
(asignaciones, sumas, restas, productos, divisiones, paréntesis, números y variables)
separadas por dos puntos
a JavaScript.  Debe respetar la precedencia y asociatividad naturales.
Una secuencia de expresiones como 
```
b <- 5:
c <- 2:
a <- 4*b+c:
b+c+a 
```
se debería traducir como:
```
let $a,$b,$c;
$b = 5;
$c = 2;
$a = 4*$b+$c;
$b+$c+$a
```

### Ejercicios sobre Analizadores Predictivos 

1. Construya un traductor como el descrito en el ejemplo anterior usando un analizador sintáctico descendente predictivo recursivo





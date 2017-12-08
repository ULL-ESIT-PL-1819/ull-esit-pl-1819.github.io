## Práctica: Programación Orientada a Objetos y Herencia en JavaScript

* Modifique la práctica anterior de la Temperatura para que use objetos y herencia.

* Defina una clase `Medida` cuyos objetos tienen un `valor` numérico (p.  ej. `4.5e2`) y un tipo dado por una cadena (p. ej "`Km`" por Kilómetros o "`m3`" por metros cúbicos o "`F`" por grados Fahrenheit).

* Las clase `Temperatura` hereda de `Medida`.
* Las clases `Celsius`, `Fahrenheit`, `Kelvin`, etc. heredan de `Temperatura`
* En la entrada se deberán admitir grados `Kelvin` además de los de la práctica anterior
* En la entrada se podrán escribir entradas como `32C to K` para convertir de Celsius a Kelvin o bien `-1.43e2f to C` para convertir de Fahrenheit a Celsius.
* La palabra `to`es opcional pudiendo omitirse. Así se aceptarán entradas como 
`32C K` o bien `-1.43e2f  C`
* Sólo se muestra como resultado el solicitado. Si no se especifica el resultado se deberá emitir un mensaje de error
* Use expresiones regulares extendidas
* Procure que el código quede bien encapsulado
* Reescriba el código para que use las clases.
* Opcionalmente, si se desea se puede hacer que permita otras conversiones (por ejemplo, `metros` a `pulgadas`)
* Puede encontrar la asignación de esta tarea en [Github Classroom](https://classroom.github.com/group-assignment-invitations/56f6b297702591e8713c6fae890b84bc)
* En esta tarea no se pide que use pruebas, ni cubrimiento, ni  Karma ni Travis.


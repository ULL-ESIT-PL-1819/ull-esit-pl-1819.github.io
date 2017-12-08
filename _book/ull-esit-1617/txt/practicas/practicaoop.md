## Práctica: Programación Orientada a Objetos y Herencia en JavaScript

* Modifique el [conversor de Temperaturas](http://crguezl.github.io/pl-html/node9.html) en este [repo](https://github.com/crguezl/ull-etsii-grado-pl-1213-temperature-converter/tree/master) para que use objetos y herencia.

* Defina una clase `Medida` cuyos objetos tienen un `valor` numérico (p.  ej. `4.5e2`) y un tipo dado por una cadena (p. ej "`Km`" por Kilómetros o "`m3`" por metros cúbicos o "`F`" por grados Fahrenheit).

* Las clase `Temperatura` hereda de `Medida`.
* Las clases `Celsius`, `Fahrenheit`, `Kelvin`, etc. heredan de `Temperatura`
* En la entrada se deberán admitir grados `Kelvin` además de los de la práctica anterior
* En la entrada se podrán escribir entradas como `32C to K` para convertir de Celsius a Kelvin o bien `-1.43e2f to C` para convertir de Fahrenheit a Celsius.
* La palabra `to`es opcional pudiendo omitirse. Así se aceptarán entradas como 
`32C K` o bien `-1.43e2f  C`
* Sólo se muestra como resultado el solicitado. Si no se especifica el resultado se deberá emitir un mensaje de error
<!--* Use expresiones regulares extendidas -->
* Procure que el código quede bien encapsulado
* Reescriba el código para que use las clases.
* Opcionalmente, si se desea se puede hacer que permita otras conversiones (por ejemplo, `metros` a `pulgadas`)
* En esta tarea no se pide que use pruebas, ni cubrimiento, ni  Karma ni Travis.
* Despliegue su conversor en GitHub pages
* Elabore sus apuntes del curso con lo aprendido de OOP. Despliéguelo en Heroku.
Los apuntes deberán estar protegidos con usuario `dsi1617` y clave `dsi1617password`

###  Recursos

* [Apuntes: OOP en JavaScript](../apuntes/oop/README.md)
* [Apuntes del Conversor de Temperaturas (http://crguezl.github.io/pl-html)](http://crguezl.github.io/pl-html/node9.html)
* [Conversor de Temperaturas: Repo en GitHub](https://github.com/crguezl/ull-etsii-grado-pl-1213-temperature-converter)
* [Conversor de Temperatura: despliegue en gh-pages](http://crguezl.github.io/ull-etsii-grado-pl-1213-temperature-converter/)

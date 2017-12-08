# 2. Babel

Lo deseable sería poder escribir programas en JavaScript usando las últimas características del lenguaje, pero el problema de hacer esto es que puede que dicha característica no se haya implementado en algunos navegadores, o puede que algún usuario tenga su navegador desactualizado (IE7-10 tiene un uso global del ~3%) o incluso que algunas características estén en desarrollo.

Para solucionar este problema podemos hacer uso de Babel, aunque existen otras herramientas, como [Traceur](https://github.com/google/traceur-compiler).

Babel es un paquete de Node.js que nos sirve para transpilar código JavaScript de una versión del estándar a otra. Incluso no tiene por qué ser JavaScript exactamente lo que desarrollemos, como en el caso de React con [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html).

## Plugins

Babel funciona mediante un sistema de plugins. Cada plugins que se añade a babel realiza una transformación de código determinada, por ejemplo [`transform-es2015-arrow-functions`](https://babeljs.io/docs/plugins/transform-es2015-arrow-functions/) nos transforma las funciones flecha en funciones normales de modo que sus características se preserven.

Babel desarrolla una serie de plugins por defecto, pero se pueden instalar otros que sean desarrollados por la comunidad.

## Presets

Los presets son conjuntos de plugins de babel. Por ejemplo, el preset [`preset-es2015`](https://babeljs.io/docs/plugins/preset-es2015/) nos incluye todos los plugins necesarios para transformar nuestro código a ES2015. Otro preset interesante es el [`preset-stage-0`](http://babeljs.io/docs/plugins/preset-stage-0/), que nos incluye características que están desde `stage-0` hasta el 4.

## Probar Babel

Babel tiene una página interactiva en la que podemos ver cómo se transforma el código y podemos probar distintos presets.

* [Enlace](http://babeljs.io/repl)

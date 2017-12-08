## Preguntas de Como crear y publicar un paquete npm 

1. ¿Cuales son los pasos para escribir y publicar un paquete `npm`?
2. ¿Cómo instalo una versión anterior de un package npm?
```
npm install <package>@<version>
```
3. [¿Cómo encuentro la versión de un paquete NodeJs instalado?](http://stackoverflow.com/questions/10972176/find-the-version-of-an-installed-npm-package)
4. ¿Que se entiende por `scope` de un paquete npm? 
    1. ¿Cual es la notación para referenciar un paquete `somepackage` que se aloja en el ámbito `somescope`?
    1. ¿Como se hace un `require`de un paquete `somepackage` que se aloja en el ámbito `somescope`?
    2. Cualquier usario npm puede publicar sus módulos en cualquier ámbito: ¿Verdadero o falso?
    3. ¿Cómo puedes hacer para tener varios ámbitos npm?
    4. ¿Cual es el tipo de acceso por defecto de mi paquete con ámbito: público o privado? <!-- --access public with the initial publication. -->
    5. ¿Cómo indico a la hora de publicar mi paquete con ámbito que quiero que sea de acceso público? <!-- --access public with the initial publication. -->
    6. ¿Que hace este comando?

             npm login --registry=http://reg.example.com --scope=@myco
    6. ¿Que hace este comando?

             npm init --scope=username

    6. ¿Que hace este comando?

             npm config set scope username
5. ¿Que hace este comando?

         npm version patch -m "Upgrade to %s for reasons"
    1. Cuando el comando anterior se ejecuta en un git repo, ¿Crea un commit? ¿Crea un tag? 
    2.  If `preversion`, `version`, or `postversion` are in the scripts property of the package.json, they will be executed as part of running npm `version`. Take the following example:

             "scripts": {
               "preversion": "npm test",
               "version": "npm run build && git add -A dist",
               "postversion": "git push && git push --tags && rm -rf build/temp"
             }
    Describe the set of actions that will happen when running `npm version`

## JsDoc

1. ¿Cual es la sintáxis de los comentarios de documentación en JSDoc? ¿Como empiezan?
2. ¿Donde debo ubicar un comentario de documentación JSDoc para documentar un cierto código?
3. Special *JSDoc tags* can be used to give more information. For example, 
    1. If the function is a constructor for a class, you can indicate this by adding a ____________ tag (fill the gap)
    2. ¿Cómo se documenta un parámetro de una función?
    3. ¿Que hace esta documentación JSDoc?

            /**
             * See {@tutorial gettingstarted} 
             */
            function myFunction() {}
    4. ¿Que hace esta documentación JSDoc?

            /**
             * See {@link MyClass} and [MyClass's foo property]{@link MyClass#foo}.
             * Also, check out {@link http://www.google.com|Google} and
             * {@link https://github.com GitHub}.
             */
            function myFunction() {}

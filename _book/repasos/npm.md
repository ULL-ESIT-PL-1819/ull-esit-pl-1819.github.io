## Preguntas de Repaso de npm 

1.  ¿Con que comando creo el fichero `package.json`?

2.  Explique en consiste el versionado semántico/semantic versioning.
    ¿Cual es el nombre en inglés de los tres números de version? ¿Como
    cambian?

3.  ¿Que se guarda en el campo `"dependencies": {}` de `package.json`?

4.  ¿Que opción debo añadir al comando `npm install` para que la
    librería instalada se añada como dependencia en el fichero
    `package.json`?

5.  ¿Que se guarda en el campo `"devDependencies": {}` de
    `package.json`?

6.  ¿Que opción debo añadir al comando `npm install` para que la
    librería instalada se añada como `"devDependencies"` en el fichero
    `package.json`?

7.  Explique que significan en los objetos que describen las
    dependencias dentro `package.json` las siguientes notaciones:

    1.  `*`

    2.  `latest`

8.  ¿Cual es la salida? ¿Como actúa el operador `~`?

        > var semver = require('semver')
        undefined
        > semver.toComparators('~1.2.3')
        [ [ '_______', '______' ] ]

9.  ¿Cual es la salida? ¿Como actúa el operador `^`?

```javascript
        > var semver = require('semver')
        undefined
        > semver.toComparators('^1.2.3')
        [ [ '_______', '______' ] ]
```
!INCLUDE "pubnpm.md"

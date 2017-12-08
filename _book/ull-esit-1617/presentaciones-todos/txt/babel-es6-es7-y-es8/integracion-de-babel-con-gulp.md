# 12. Integración de Babel con Gulp

Podemos usar estas nuevas características en nuestro Gulpfile usando Babel. Para ello tenemos que reenombrar el gulpfile a `gulpfile.babel.js`. Con este nombre, Gulp se dará cuenta de que necesita transpilar el código antes de ejecutarlo.

## Creando tareas

Para crear una tarea, lo único que tenemos que hacer es exportar una función con el nombre de la tarea, por ejemplo:

```JavaScript
import { exec } from 'child-process-promise'

export default async function dir () {
  console.log((await exec('dir')).stdout)
}
```

Esto nos creará la tarea por defecto llamada `dir`. Si queremos exportar otras tareas, simplemente hacemos `export function <nombretarea>` o incluso `export const tarea = () => src(...).pipe(...)`.

[Ejemplo de un Gulpfile usando Babel](https://gist.github.com/CodeTheory/cc7d79d1dad0622a9f9c)

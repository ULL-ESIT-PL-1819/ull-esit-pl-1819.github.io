##Instrucciones para la co-evaluación de los Talleres/Workshops

* Califique cada uno de los apartados especificados en la rúbrica. proveída por el profesor
* Intente ayudar a sus compañeros con el mensaje de retroalimentación indicando en que pueden mejorar.

Además de los apartados de la rubrica siempre tenga en cuenta estos aspectos generales:

* Valore la organización del repositorio 
* ¿El fichero `README.md` existe?  ¿Tienen enlaces a las páginas web del alumno y del despliegue de la práctica?, ¿Tiene un enlace a la descripción de la práctica en el campusvirtual? 
* ¿Hay ficheros en el repo que no deberían estar como: ficheros de backup del editor, `node_modules`, pdfs,  etc.?)
* La página web del alumno. ¿Esta organizada por asignaturas y prácticas de la asignatura? ¿Tiene un buen estilo? ¿Se ha actualizado para incluir todas las prácticas de la asignatura?
* Valore los issues ¿Usan etiquetas? ¿Hay abiertos y cerrados? ¿Se han asignado a alguno de los colaboradores? ¿Se han asociado con un milestone?.
* ¿Se usa el repo de la organización para la entrega? Si es que no ¿El repo de la organización está sincronizado con el repo entregado?
* En aquellos casos en los que la rama principal debe ser `gh-pages` deberían modificarse los settings del repo para que cuando se visita el repo en github la rama por defecto sea 
`gh-pages`:

* En general, los *commits* del repo, los *logs*, la sección *graphs*  y la sección *pulse* del repo deberían reflejar un trabajo en equipo equilibrado
* Utilice `lints` para validar la calidad de los JS, HTML y CSS que forman el proyecto 
* En la sección [Code Smells/Código Hediondo: Clasificación de Code Smells](../apuntes/codesmell.md#clasificaci&#xF3;n-de-code-smells) se enumeran algunas malas prácticas cuya presencia indican un fallo en el diseño de la solución proveída

### Criterios sobre el Cubrimiento

En el cubrimiento, 

* ¿Se logra un  porcentaje de cubrimiento mayor del 90%? 
* ¿En alguna de las pruebas se usa `sinon`?
* ¿Se hace alguna prueba `edge` o `boundary`
([Click aquí para ver que es una prueba `edge`](https://casianorodriguezleon.gitbooks.io/pl1516/content/covering.html))?

### Criterios sobre Smelling

* ¿Se ha eliminado correctamente el *Switch Smell* haciendo uso del *Strategy Pattern*? 
* ¿Es posible incorporar nuevas clases sin tocar el código de las otras clases?
* ¿Se respeta el principio Open/Closed? 
* ¿El constructor admite un número variable de argumentos?
* ¿Son **puras** la casi totalidad de las funciones?
* ¿Se han factorizado el código (DRY principle)?

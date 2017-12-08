## CSV usando Ajax

### Requisitos de la Práctica

A los requisitos de la práctica [Comma Separated Values. CSV](csv.md)
anterior, le añadimos 

* El requisito de practicar un *request* AJAX usando jQuery: El navegador/cliente lee la cadena con los datos de entrada y se los envía usando AJAX al servidor, el cual calcula y devuelve en JSON la tabla (el array de arrays) que finalmente es insertada en la página por el cliente/navegador.
* Aisle el cálculo de la tabla en un `modulo` Node.js
* El volcado de la salida en el cliente debe hacerse usando [underscore](http://underscorejs.org/) evitando concatenación de cadenas
* Utilice tantas características de [ECMA6](../apuntes/ecma6.md) como le sea posible
* Añada botones/enlaces/menu de selección que permitan cargar un fichero específico de una lista de ficheros en la texarea de entrada como en el ejemplo en [crguezl/expressloadfileontotextarea](https://github.com/crguezl/expressloadfileontotextarea)
* Añada una zona de Drag-and-Drop a la que se pueda arrastrar el fichero a analizar. Véa el ejemplo `draganddrop.html`
en la sección [Ficheros](../apuntes/files.md)
* Añada un botón de lectura de fichero  `<input type="file" />` para cargar la entrada desde fichero

### Véase

* La sección [AJAX](../apuntes/ajax.md)
* La sección [Modulos en Node.js](../apuntes/packages/modulesnodejs.md)
* La sección [ECMA6 new features](../apuntes/ecma6.md)
* La sección [Ficheros](../apuntes/files.md)
* La sección [Manejadores de Eventos](../apuntes/manejadoresdeeventos.md)
* [Repo con el código de la práctica](https://github.com/ULL-ESIT-GRADOII-DSI/csv-ajax) (Expect 404!)
* Su práctica final debería parecerse a este [Despliegue de *Comma Separated Values usando Ajax (heroku)*](https://cvsajax.herokuapp.com/)




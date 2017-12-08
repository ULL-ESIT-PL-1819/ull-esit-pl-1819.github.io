# 2. Bower

Bower es un gestor de paquetes destinado al desarrollo de front-end y que permite instalar paquetes de una manera similar a como se haría en el entorno de desarrolo de NodeJs. Para instalar paquetes y poder utilizar bower correctamente, se debe tener un fichero bower.json con las dependecias que se van a utilizar para el desarrollo del front-end. Para instalar bower, hay que tener Node y Npm instalado como dependecia global, una vez instalados, se procederá a la instalación de bower mediante el siguieten comando

`npm install -g bower`

Una vez instalado como dependencia global, ya se podrá instalar cualquier paquete mediante el comando `bower install <nombrePaquete>`, esto creará un directorio llamado **bower_components/** con el paquete instlado. Además, si se dispone de un fichero `bower.json` configurado correctamente,si el paquete se instala como dependencia mediante la inclusión de `--save <nombrePaquete>`  se añadirá al fichero bower.json automáticamente como dependencia.

## La importancia de Bower con Polymer

Para crear un componente en Polymer es imprescindible tener bower instalado ya que mediante la inclusión de paquetes, puede ser necesario utilizar característias de otros paquetes en el elemento que se esté desarrollando. Para introducir un paquete de bower en el elemento que se está desarrollando se debe añadir la siguiente línea en el archivo html.

```html
<link rel="import" href="../../bower_components/paper-progress/paper-progress.html">
```

Esta línea, añade un elemento de polymer llamado paper-progress que está diseñado para que cualquier usuario pueda añadirlo en su web component sin romper ningún tipo de derechos de autor.

### Pasos para usar Polymer y Bower

* Instalar Node y Npm de forma global para poder usar la instalación de paquetes npm
* Instalar Bower de manera global mediante el comando

  `npm install -g bower`

* Crear un fichero boer.json mediante la línea

  `bower init`

* Si se va a usar la version 1.0 de Polymer, se puede añadir Polymer como dependencia

  `bower install --save Polymer/polymer`

* Si se quisiera descargar el paquete de inicio que proporciona google para empezar a desarrollar en Polymer, puede añadirlo como dependencia añadiendo la siguiente línea

  `bower install --save PolymerElements/polymer-starter-kit`

  Este paquete añadirá una serie de paquetes de google para desarrollar nuestro primer elemento.

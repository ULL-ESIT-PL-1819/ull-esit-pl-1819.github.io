# 3. HTML import

Html import es parte del modelo de creación de web components en Polymer y lo que permite es incluir documentos html en otros ficheros html. Para utilizar el html import sólo hay que añadir la siguiente línea al código de un archivo html cualquiera.

```html
<link rel="import" href="/rutaArchivoHtml">
```

Normalmente, si no se usara el html import, se tendría que añadir un link rel para la carga del archivo css y una etiqueta script por cada archivo de Javascript que se utilice en la aplicación.

```html
<link type="text/css" rel="stylesheet" href="hojaEstilo.css">
<script type="text/javascript" src="archivoJavascript"></script>
```

Por tanto, la utilización de html import permite agilizar la carga del sitio web que se navega, permitiendo realizar solo la búsqueda de un único fichero html donde está incluido tanto el estilo como el código de Javascript correspondiente a dicho fichero.

# 6. Local DOM

Cuando un elemento de Polymer creado por el usuario maneja elementos del árbol DOM se dice que el elemento está manejando el LocalDom. El DOM, es un árbol que se crea al cargar una página web y que muestra el sitio web mediante un árbol donde se encuentran las diferentes características de la web.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <title>Página sencilla</title>
  </head>

  <body>
    <p>Esta página es <strong>muy sencilla</strong></p>
  </body>
</html>
```

[Imagen del arbol DOM del ejemplo anterior](http://librosweb.es/img/ajax/f0401.gif)

En Polymer, se pueden implementar múltiples instancias de Local DOM donde cada uno de los árboles DOM creado tiene sus características. Para utilizar el Local DOM en un elemento de Polymer, sólo hay que añadir en el elemento que se vaya a crear la etiqueta `<dom-module></dom-module>`. Una vez se haya añadido esta etiqueta, se puede añadir las características que poseerá el elemento a crear mediante el uso de css (usando la etiqueta `<style>` dentro del módulo y los elementos que posea elemento creado <parrafo,listas,etc>)

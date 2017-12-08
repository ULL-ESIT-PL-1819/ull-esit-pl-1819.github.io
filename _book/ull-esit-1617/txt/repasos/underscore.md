## Preguntas de Repaso de Underscore

1.  ¿Que argumentos espera el método `template` de Underscore? ¿Cual es
    la función de cada uno de ellos?

2.  ¿Que diferencia hay entre `<% ... %>`, `<%= ... %>` y `<%- ... %>`?

{% raw %}
3.  El atributo `templateSettings` de Underscore puede ser usado para
    configurar los templates. Rellene las expresiones regulares que
    faltan para que se usen delimitadores con llaves como `{{ ... }}`
    para evaluar, `{{= ... }}` para interpolar y `{{- ... }}` para
    interpolar y escapar el HTML:
{% endraw %}


```javascript
_.templateSettings = {
       interpolate: /____________________/gim,
       evaluate:    /____________________/gim
       escape:      /____________________/gim
}
```

4.  Queremos mostrar una lista de `items` en una tabla con dos columnas.
    En la primera columna va el número de orden y en la segunda el
    nombre del item. El template Underscore se carga desde el elemento
    `#usageList` del DOM y el resultado del template se vuelca en el
    elemento `#target` como sigue:

```javascript
        var items = [ {name:"Alejandro"}, {name:"......."}, {name:"Zacarias"} ];
        var template = usageList.innerHTML;
        target.innerHTML = _.template(template,{items:items});
```

Complete el identificador del `<script>`, el identificador del
`<div>` usado para la salida y la parte que falta entre las
etiquetas `<tbody>`:


```html
<script type="text/html" id='_________'>
    <table>
      <thead>
         <tr>
            <th> Id </th> <th>Name</th>
         </tr>
      </thead>
      <tbody>







    </tbody >
   </table>
</script>
<!-- Create your target -->
<div id="______"></div>
```


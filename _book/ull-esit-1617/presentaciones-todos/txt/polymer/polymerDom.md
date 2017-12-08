# 9. API DOM Polymer

Polymer posee una API propia para realizar todas las manipulaciones con el árbol DOM. Para manipular el DOM del elemento que se está desarrollando, se debe utilizar esta api para realizar el manejo de los nodos del mismo.

## Métodos que proporciona la DOM API de Polymer

Para añadir y eliminar nodos hijos, se utilizan los siguientes métodos.

* `Polymer.dom(parent).appendChild(node)`
* `Polymer.dom(parent).insertBefore(node, beforeNode)`
* `Polymer.dom(parent).removeChild(node)`

Para trabajar con nodos padres e hijos, los métodos que proporciona la api dom de polymer son los siguientes.

* `Polymer.dom(parent).childNodes`
* `Polymer.dom(parent).children`
* `Polymer.dom(node).parentNode`
* `Polymer.dom(node).firstChild`
* `Polymer.dom(node).lastChild`
* `Polymer.dom(node).firstElementChild`
* `Polymer.dom(node).lastElementChild`
* `Polymer.dom(node).previousSibling`
* `Polymer.dom(node).nextSibling`
* `Polymer.dom(node).textContent`
* `Polymer.dom(node).innerHTML`

Con cada uno de los métodos mencionados, se permite modificar el shadyDom que genera el elemento creado y permite añadir o eliminar características dependiendo de la acción que se realice.
# 7. Shadow DOM

Shadow DOM es la capacidad que tiene un elemento de crear un subarbol DOM a partir del árbol DOM [LocalDom](./localDom.md) que se genera a partir de este elemento.
La peculiaridad de este subarbol que se crea, es que no se puede acceder desde el exterior a ninguna de las partes de su código,es decir, que el shadow DOM es una manera de encapsular el código de un elemento para no ser accesible desde el exterior.
En cada elemento del shadow DOM, a su vez se pueden crear subárboles creando una estructura de shadow DOM dentro de otro shadow DOM permitiendo realizar diferentes configuraciones a diferentes elementos del elemento creado sin que interfiera con el exterior.
[Demostración ShadowDOm](https://shop.polymer-project.org/)

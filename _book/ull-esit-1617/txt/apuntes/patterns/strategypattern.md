## El principio *Open/Closed*

* *"software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification"*;
that is, such an entity can allow its behaviour to be extended without modifying its source code.

## Strategy Design Pattern

La solución es usar el `strategy design pattern`. Vea como hacerlo en este vídeo.
Preste especial atención al *code smell* **Switch Statement Smell** desde el minuto 11:37 al 29:15.

{% youtube %}https://www.youtube.com/watch?v=JVlfj7mQZPo{% endyoutube %}

The basic idea  of the `strategy design pattern` is to **delegate tasks to encapsulated algorithms which are interchangable at runtime**.

In the Strategy pattern we have an object (the *context*) that is trying to get something done. But to get that thing done, we need to supply the context with a second object, called the *strategy*, that helps￼ to get the thing done.

  1. Define a family of objects which all do the same thing
  2. Ensure the family of objects share the same interface so that they are interchangable.

Otro ejemplo, también de Elijah Manor se encuentra en el artículo [Switching to the Strategy Pattern in JavaScript](http://elijahmanor.com/switching-to-the-strategy-pattern-in-javascript/).

## Ejemplo

* [ULL-ESIT-GRADOII-DSI/temperature-oop-noswitch](https://github.com/ULL-ESIT-GRADOII-DSI/temperature-oop-noswitch/tree/sepfiles)

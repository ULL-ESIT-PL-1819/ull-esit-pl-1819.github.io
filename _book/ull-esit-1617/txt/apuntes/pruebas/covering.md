<!-- toc -->
### Pruebas: Cubrimiento /Covering

In computer science, *code coverage* 
is a measure used to describe the degree to which the source code of a program 
is tested by a particular test suite. 

A program with high code coverage has been more thoroughly tested and has a lower chance of containing software bugs than a program with low code coverage. 

Many different metrics can be used to calculate code coverage; 
some of the most basic are:
  * the percent of program subroutines and 
  * the percent of program statements called during execution of the test suite.

#### Edge case

* In programming, an *edge case* typically involves input values that require special handling in an algorithm behind a computer program.

*  As a measure for validating the behavior of computer programs in such cases, unit tests are usually created; they are testing *boundary conditions* of an algorithm, function or method. 

* A series of edge cases around each "boundary" can be used to give reasonable coverage and confidence using the assumption that if it behaves correctly at the edges, it should behave everywhere else.

* For example, a function that divides two numbers might be tested using both very large and very small numbers. This assumes that if it works for both ends of the magnitude spectrum, it should work correctly in between.

* Agunos *Edge Cases* en la *Práctica de la Temperatura*: 
  * ¿Cómo se comporta el código cuando las entradas son erróneas?
  * La entrada conforma a la expresión regular pero no existe la clase fuente o la clase destino . Por ejemplo una entrada como: `32F to Km`
  * El valor de la temperatura  es menor que el cero absoluto
  * ¿Se le ocurre algún ejemplo más? (Si es así, coméntelo aquí haciendo click en el botón `+` a la derecha del párrafo. Para comentarlo debe estar dado de alta en `gitbook`)

####  Smoke Testing

* Smoke testing (also **confidence testing**, **sanity testing**) is preliminary testing to reveal simple failures severe enough to (for example) reject a prospective software release. 

* A smoke tester will select and run a subset of test cases that cover the most important functionality of a component or system, to ascertain if crucial functions of the software work correctly. 

### Tools

* [Blanket](blanket.md)
* [Istanbul](istanbul.md)

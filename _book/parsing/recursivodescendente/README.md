## Analizadores Descendentes Recursivos 

### Apuntes sobre Analizadores Descendentes Recursivos 

* [Apuntes de PL: Analizadores Descendentes Predictivos en JavaScript](http://crguezl.github.io/pl-html/node20.html)
  - [Análisis Sintáctico Predictivo Recursivo](http://crguezl.github.io/pl-html/node22.html)
* [Apuntes de PL de la II. Derivaciones a vacio](http://nereida.deioc.ull.es/~pl/perlexamples/node88.html)
* [Construcción de los FIRST y los FOLLOW](http://nereida.deioc.ull.es/~pl/perlexamples/node89.html)
* [repo prdcalc](https://github.com/crguezl/prdcalc)
  - Este es un repo en con una aplicación web en Ruby Sinatra con un parser RDP escrito en CoffeeScript
  - [Fichero `main.coffee` del repo prdcalc](https://github.com/crguezl/prdcalc/blob/master/views/main.coffee)
  - [Fichero `main.js` del repo prdcalc](https://github.com/crguezl/prdcalc/blob/master/views/main.js)
  - [Despliegue en Heroku](https://predictiveparser.herokuapp.com/) (Puede estar caído o eliminado)
* [Repo ULL-ESIT-PL-1617/solution-evalua-pdr](https://github.com/ULL-ESIT-PL-1617/solution-evalua-pdr) (privado)

### Enlaces a los Apuntes de PL en la II (en nereida) sobre Análisis Sintáctico Predictivo Recursivo (En Perl)
La siguiente fase en la construcción del analizador es la fase de 
análisis sintáctico. Esta toma como entrada el flujo de terminales
y construye como salida el árbol de análisis sintáctico abstracto.

<P>
El árbol de análisis sintáctico abstracto es una representación  compactada del árbol 
de análisis sintáctico concreto que contiene la misma información que éste.

<P>
Existen diferentes métodos de análisis sintáctico. La mayoría caen en una de dos categorías:
ascendentes y descendentes. Los ascendentes construyen el árbol desde las hojas
hacia la raíz. Los descendentes lo hacen en modo inverso. El que describiremos
aqui es uno de los mas sencillos: se denomina método de análisis predictivo descendente 
recursivo.

<!--Table of Child-Links-->
<UL CLASS="ChildLinks">
<LI><A NAME="tex2html2382"
  HREF="http://nereida.deioc.ull.es/~pl/perlexamples/node85.html">Introducción</A>
<LI><A NAME="tex2html2383"
  HREF="http://nereida.deioc.ull.es/~pl/perlexamples/node86.html">Ejercicio: Recorrido del árbol en un ADPR</A>
<LI><A NAME="tex2html2384"
  HREF="http://nereida.deioc.ull.es/~pl/perlexamples/node87.html">Ejercicio: Factores Comunes</A>
<LI><A NAME="tex2html2385"
  HREF="http://nereida.deioc.ull.es/~pl/perlexamples/node88.html">Derivaciones a vacío</A>
<LI><A NAME="tex2html2386"
  HREF="http://nereida.deioc.ull.es/~pl/perlexamples/node89.html">Construcción de los conjuntos de Primeros y Siguientes</A>
<LI><A NAME="tex2html2387"
  HREF="http://nereida.deioc.ull.es/~pl/perlexamples/node90.html">Ejercicio: Construir los FIRST</A>
<LI><A NAME="tex2html2388"
  HREF="http://nereida.deioc.ull.es/~pl/perlexamples/node91.html">Ejercicio: Calcular los FOLLOW</A>
<LI><A NAME="tex2html2389"
  HREF="http://nereida.deioc.ull.es/~pl/perlexamples/node92.html">Práctica: Construcción de los FIRST y los FOLLOW</A>
<LI><A NAME="tex2html2390"
  HREF="http://nereida.deioc.ull.es/~pl/perlexamples/node93.html">Gramáticas LL(1)</A>
<LI><A NAME="tex2html2391"
  HREF="http://nereida.deioc.ull.es/~pl/perlexamples/node94.html">Ejercicio: Caracterización de una gramática LL(1) </A>
<LI><A NAME="tex2html2392"
  HREF="http://nereida.deioc.ull.es/~pl/perlexamples/node95.html">Ejercicio: Ambiguedad y LL(1)</A>
<LI><A NAME="tex2html2393"
  HREF="http://nereida.deioc.ull.es/~pl/perlexamples/node96.html">Práctica: Un analizador APDR</A>
<LI><A NAME="tex2html2394"
  HREF="http://nereida.deioc.ull.es/~pl/perlexamples/node97.html">Práctica: Generación Automática de Analizadores Predictivos</A>
<UL>
<LI><A NAME="tex2html2395"
  HREF="http://nereida.deioc.ull.es/~pl/perlexamples/node97.html#SECTION008613010000000000000">Objetivo</A>
<LI><A NAME="tex2html2396"
  HREF="http://nereida.deioc.ull.es/~pl/perlexamples/node97.html#SECTION008613020000000000000">El Módulo <TT>Grammar</TT></A>
<LI><A NAME="tex2html2397"
  HREF="http://nereida.deioc.ull.es/~pl/perlexamples/node97.html#SECTION008613030000000000000">Descripción del objetivo: La función <TT>gap</TT></A>
<LI><A NAME="tex2html2398"
  HREF="http://nereida.deioc.ull.es/~pl/perlexamples/node97.html#SECTION008613040000000000000">Descripción del objetivo: La función <TT>parser</TT></A>
<LI><A NAME="tex2html2399"
  HREF="http://nereida.deioc.ull.es/~pl/perlexamples/node97.html#SECTION008613050000000000000">Cálculo de los First y los Follow con <TT>PL::FirstFollow</TT></A>
<LI><A NAME="tex2html2400"
  HREF="http://nereida.deioc.ull.es/~pl/perlexamples/node97.html#SECTION008613060000000000000">Uso de Templates</A>
<LI><A NAME="tex2html2401"
  HREF="http://nereida.deioc.ull.es/~pl/perlexamples/node97.html#SECTION008613070000000000000">Concatenación y Documentos <TT>HERE</TT></A>
<LI><A NAME="tex2html2402"
  HREF="http://nereida.deioc.ull.es/~pl/perlexamples/node97.html#SECTION008613080000000000000">Descarga de los Módulos Necesarios</A>
</UL></UL>

#### Repo con la solución de la *Práctica: Analizador Descendente Predictivo Recursivo*

Recuerde que una gramática $$G$$ es una cuaterna $$G =(\Sigma,V,P,S)$$.

1.  $$\Sigma$$ es el conjunto de terminales.
2.  $$V$$ es un conjunto (disjunto de $$\Sigma$$) que se denomina
    conjunto de *variables sintácticas* o *categorías gramáticales*,
3.  $$P$$ es un conjunto de pares de $$V \times (V \cup \Sigma)^*$$. En vez de escribir un par usando la notación $$(A, \alpha) \in P$$ se escribe $$A \rightarrow \alpha$$. Un elemento de $$P$$ se denomina producción.
4.  Por último, $$S$$ es un símbolo del conjunto $$V$$ que se denomina
    símbolo de arranque.

Dada una gramática $$G=(\Sigma,V,P,S)$$ se denota por $$L(G)$$ o lenguaje
generado por $$G$$ al lenguaje: 

$$L(G) = \{ x \in \Sigma^* : S \stackrel{*}{\Longrightarrow} x \}$$

Esto es, el lenguaje generado por la gramática $$G$$ esta
formado por las cadenas de terminales que pueden ser <i>derivados</i> 
desde el símbolo de arranque.

Esta es la gramática para nuestra práctica:

1.  $$\Sigma = \{ ; =, ID, P, +, *, (, ), NUM \}$$,
2.  $$V = \{ statements, statement, expression, term, factor \}$$
3.  Productions:
    1.  statements $$ \rightarrow$$ statement ';' statements $$\vert$$
        statement
    2.  statement $$ \rightarrow$$ ID '=' expression $$\vert$$ P
        expression
    3.  expression $$ \rightarrow$$ term '+' expression $$\vert$$ term
    4.  term $$ \rightarrow$$ factor '*' term $$\vert$$ factor
    5.  factor $$ \rightarrow$$ '(' expression ')' $$\vert$$ ID $$
        \vert$$ NUM

4.  Start symbol: $$statements$$

* [Descripción de la *Práctica: Analizador Descendente Predictivo Recursivo*](http://crguezl.github.io/pl-html/node26.html)
* [Repo parser-pdr-example](https://github.com/ULL-ESIT-PL-1617/parser-pdr-example)
  - [despliegue en Heroku](https://pdr-example.herokuapp.com/) (Puede estar caído o eliminado)

### Ejercicios

* [ Ejercicios Universidad de Huelva](http://www.uhu.es/francisco.moreno/gii_pl/docs/Tema_3_solucion.pdf)

### Tutoriales

* [Wikipedia: Recursive descent parser](https://en.wikipedia.org/wiki/Recursive_descent_parser)
* [Tutorialspoint: Compiler Design - Top-Down Parser](https://www.tutorialspoint.com/compiler_design/compiler_design_top_down_parser.htm)


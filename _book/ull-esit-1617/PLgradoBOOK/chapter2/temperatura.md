[sectionpractica:conversordetemperaturas]

[parrafo:dondetemperatura] Véase . Este repo en bitbucket es privado del
profesor. El de es público pero no está completo.

    ~/local/src/javascript/PLgrado/temperature(master)]$ git remote -v
    github  git@github.com:crguezl/ull-etsii-grado-pl-1213-temperature-converter.git (fetch)
    github  git@github.com:crguezl/ull-etsii-grado-pl-1213-temperature-converter.git (push)
    origin  ssh://git@bitbucket.org/casiano/pl-grado-temperature-converter.git (fetch)
    origin  ssh://git@bitbucket.org/casiano/pl-grado-temperature-converter.git (push)

Hay varias ramas (2015):

    [~/local/src/javascript/PLgrado/temperature(master)]$ git branch -a
      gh-pages
      html5pattern
      karma
    * master
      remotes/github/gh-pages
      remotes/github/master
      remotes/origin/html5pattern
      remotes/origin/karma
      remotes/origin/master
    [~/local/src/javascript/PLgrado/temperature(master)]$

-   En la rama `master` está la versión mas simple.

-   En la rama `html5pattern` se muestra como usar el atributo `pattern`
    (HTML5) en el tag `input`.

    En 29/09/2015 está disponible en el .

    Véase también .

-   Las pruebas están en el directorio `tests/` en la rama master que
    hay en GitHub

-   En la rama `karma` (no visible al alumno, no está en GitHub en 2015)
    se encuentra como usar Karma para la ejecución de las pruebas. En
    una práctica posterior se introduce Karma.

En mi portátil (29/09/2015) un clon del repo se encuentra en:

    [~/srcPLgrado/temperature(master)]$ pwd -P
    /Users/casiano/local/src/javascript/PLgrado/temperature # 27/01/2014

    <html>
      <head>
         <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <title>JavaScript Temperature Converter</title>
         <link href=normalize.css" rel="stylesheet" type="text/css">
         <link href="global.css" rel="stylesheet" type="text/css">

         <script type="text/javascript" src="temperature.js"></script>
      </head>
      <body>
        <h1>Temperature Converter</h1>
        <table>
          <tr>
            <th>Enter  Temperature (examples: 32F, 45C, -2.5f):</th>
            <td><input id="original" autofocus onchange="calculate();" placeholder="32F" size="50"></td>
          </tr>
          <tr>
            <th>Converted Temperature:</th>
            <td><span class="output" id="converted"></span></td>
          </tr>
        </table>
      </body>
    </html>
        

Escribir HTML es farragoso. Una solución es usar algún plugin para su
editor favorito.

Emmet existe para diversos editores, entre ellos para

-   En el caso de vim podemos usar decargandolo desde .

-   Para : podemos usar

    -   de Atom

    -   Véase el artículo .

-   En cloud9 () el plugin ya viene instalado

<!-- -->

-   -   

<!-- -->

-   The tag specifies an input field where the user can enter data.

-   `<input>` elements are used within a `<form>` element to declare
    input controls that allow users to input data.

-   An input field can vary in many ways, depending on the `type`
    attribute.

-   The `type` attribute specifies the type of `<input>` element to
    display. The default type is `text`.

    Other values are:

    -   button

    -   checkbox

    -   color

    -   date

    -   datetime

    -   datetime-local

    -   email

    -   file

    -   hidden

    -   image

    -   month

    -   number

    -   password

    -   radio

    -   range

    -   reset

    -   search

    -   submit

    -   tel

    -   text

    -   time

    -   url

    -   week

-   The elements used to create controls generally appear inside a
    `<form>` element, but may also appear outside of a `<form>` element
    declaration.

The `onchange` event occurs when the value of an element has been
changed.

-   The `<link>` tag defines a link between a document and an external
    resource.

             <link href="global.css" rel="stylesheet" type="text/css">

-   The `rel` attribute is required. It specifies the relationship
    between the current document and the linked document

-   The `<link>` tag is used to link to external CSS style sheets.

         <link href="global.css" rel="stylesheet" type="text/css">

stands for and is a separate, but complementary, language to HTML. CSS
is what we use to apply styles to the content on our web page.

    [~/srcPLgrado/temperature(master)]$ cat global.css 
    th, td      { vertical-align: top; text-align: right; font-size:large; }     /* Don't center table cells  */
    #converted  { color: red; font-weight: bold; font-size:large;          }     /* Calculated values in bold */
    input       { 
                  text-align: right;       /* Align input to the right  */
                  border: none; 
                  border-radius: 20px 20px 20px 20px;
                  padding: 5px  5px;
                  font-size:large;       }
    body
    {
     background-color:#b0c4de;  /* blue */
     font-size:large;
     font-family: "Lucida Sans Typewriter", "Lucida Console", Monaco, "Bitstream Vera Sans Mono", monospace;
    }

    h1 {
        font-weight: normal;
        font-family: "Brush Script MT", cursive;
        background: #3C5681;
        padding: 5px 15px;
        color: white;
        display:inline-block;
        border-radius: 10px 10px 10px 10px;
    }
        

    th, td      { vertical-align: top; text-align: right; font-size:large; }     /* Don't center table cells  */

What you see above is referred to as a .

-   Notice the curly braces. Also, notice that each declaration inside
    the curly braces has a semicolon. Everything inside the curly braces
    is called a .

-   The portion prior to the first curly brace is what defines which
    part of the web page we are styling. This is referred to as the .

    Here we’re using commas to separate our selectors `th` and `td`.
    This is a useful method to use to combine multiple selectors in a
    single rule set. In this case, the styles will apply to all `<th>`
    and `<td>` elements,

-   Each of the three declarations in the declaration block is referred
    to as a .

-   Additionally, each declaration consists of a (the part before the
    colon) and a (the part after the colon).

-   Each CSS declaration ends with a semicolon.

<!-- -->

-   A selector of `nav` would match all HTML `<nav>` elements, and a
    selector of `ul` would match all HTML unordered lists, or `<ul>`
    elements.

-   An ID selector is declared using a hash, or pound symbol (`#`)
    preceding a string of characters. The string of characters is
    defined by the developer. This selector matches any HTML element
    that has an `ID` attribute with the same value as that of the
    selector, but minus the hash symbol.

    The rule:

        #converted  { color: red; font-weight: bold; font-size:large; } /* Calculated values in bold */

    applies to:

        <span class="output" id="converted">

-   An ID element on a web page should be unique.

Usa para encontrar las respuestas a las preguntas.

-   :

    Dado el selector

        #container .box {
           float: left;
           padding-bottom: 15px;
        }

    ¿A que elementos de este HTML se aplica?

        <div id="container">
          <div class="box"></div>
          <div class="box-2"></div>
        </div>

        <div class="box"></div>

    This declaration block will apply to all elements that have a class
    of box that are inside an element with an `ID` of container. It’s
    worth noting that the `.box` element doesn’t have to be an immediate
    child: there could be another element wrapping `.box`, and the
    styles would still apply.

-   (targets immediate child elements):

    Dada esta regla

        #container > .box {
           float: left;
           padding-bottom: 15px;
        }

    In this example, the selector will match all elements that have a
    class of `box` and that are immediate children of the `#container`
    element. That means, unlike the descendant combinator, there can’t
    be another element wrapping `.box`: it has to be a direct child
    element.

    ¿A que elementos de este HTML se aplica?

        <div id="container">
          <div class="box"></div>
          <div>
            <div class="box"></div>
          </div>
        </div>

    In this example, the CSS from the previous code example will apply
    only to the first `<div>` element that has a class of `box`.

    As you can see, the second `<div>` element with a class of box is
    inside another `<div>` element. As a result, the styles will not
    apply to that element, even though it too has a class of `box`.

-   A general matches elements based on sibling (hermanos)
    relationships. That is to say, the selected elements are beside each
    other in the HTML.

    Dada esta regla

        h2 ~ p { margin-bottom: 20px; }

    This type of selector is declared using the tilde character (`~`).
    In this example, all paragraph elements (`<p>`) will be styled with
    the specified rules, but only if they are siblings of `<h2>`
    elements. There could be other elements in between the `<h2>` and
    `<p>`, and the styles would still apply.

    ¿A que elementos de este HTML se aplica?

        <h2>Title</h2>
        <p>Paragraph example 1.</p>
        <p>Paragraph example 2.</p>
        <p>Paragraph example 3.</p>
        <div class="box">
          <p>Paragraph example 4.</p>
        </div>

-   The uses the plus symbol (`+`), and is almost the same as the
    general sibling selector. The difference is that the targeted
    element must be an immediate sibling, not just a general sibling.

    Dada esta regla

        p+ p {
        text-indent: 1.5em; margin-bottom: 0;
        }

    This example will apply the specified styles only to paragraph
    elements that immediately follow other paragraph elements. the first
    paragraph element on a page would not receive these styles. Also, if
    another element appeared between two paragraphs, the second
    paragraph of the two wouldn’t have the styles applied.

    ¿A que elementos de este HTML se aplica?

        <h2>Title</h2>
        <p>Paragraph example 1.</p>
        <p>Paragraph example 2.</p>
        <p>Paragraph example 3.</p>
        <div class="box">
          <p>Paragraph example 4.</p>
          <p>Paragraph example 5.</p>
        </div>

-   The targets elements based on the presence and/or value of HTML
    attributes, and is declared using square brackets.

    There should not be a space before the opening square bracket unless
    you intend to use it along with a <span>*descendant
    combinator*</span>.

    Dada esta regla:

        input[type="text"] {
           background-color: #444;
           width: 200px;
        }

    The attribute selector targets elements based on the presence and/or
    value of HTML attributes, and is declared using square brackets.

    ¿A que elementos de este HTML se aplica?

          <input type="text">
          <input type="submit">

-   A uses a colon character to identify a pseudo-state that an element
    might be in.

    Dada esta regla:

        a:hover {
           color: red;
        }

    ¿Que porción del selector es conocido como ? ¿Cuando se aplica la
    regla a un ancla `<a>`?

    In this case, the pseudo-class portion of the selector is the
    `:hover` part. Here we’ve attached this pseudo-class to all anchor
    elements (`<a>` elements). This means that when the user hovers
    their mouse over an `<a>` element, the color property for that
    element will change to red.

    This type of pseudo-class is a , because it occurs only in response
    to user interaction—in this case, the mouse moving over the targeted
    element.

    It’s important to recognize that these types of selectors do not
    just select elements; *they select elements that are in a particular
    state*.

-   Exprese con palabras a que elementos del documento se aplicará la
    siguiente regla:

        #form [type=text] { border: solid 1px #ccc; }

    This selector combines the `ID` selector with the attribute
    selector.

    This will target all elements with a type attribute of `text` that
    are inside an element with an `ID` of `form`.

<!-- -->

-   Supuesto que una hoja de estilo contiene estas reglas:

        p { font-size: 20px; }
        p { font-size: 30px; } 

    ¿Cual será el tamaño de font que se aplique a los elementos párrafo?

    .

-   Supuesto que una hoja de estilo contiene estas reglas:

        div p { color: blue; }
        p{ color: red; }

    ¿Cual será el color que se aplique a los elementos párrafo? In this
    instance, the color value for paragraph elements inside of `<div>`
    elements will be blue, despite the fact that the second color
    declaration appears later in the document.
    <span>**specificity**</span> of the first rule set.

-   Supuesto que una hoja de estilo contiene estas reglas:

        #main {
           color: green;
        }
        body div.container {
           color: pink;
        }

    ¿Cual será el color que se aplique a este elemento `<div>`?

        <div id="main" class="container"></div>

    and thus takes precedence over the second rule set.

Every browser applies certain styles to elements on a web page by
default.

For example, if you use an un-ordered list (the `<ul>` element) the
browser will display the list with some existing formatting styles,
including bullets next to the individual list items (the `<li>` elements
inside the `<ul>`).

By using a at the top of your CSS file, you can reset all these styles
to a bare minimum.

Two of the most popular CSS resets are and

        <title>JavaScript Temperature Converter</title>
        <link href=normalize.css" rel="stylesheet" type="text/css">
        <link href="global.css" rel="stylesheet" type="text/css">

The refers to the usually invisible rectangular area that is created for
each HTML element. This area has four basic components

\<img src=“cssboxmodel.png” align=“middle” /\>

-   The content portion of the box model holds the actual content.

    The content can be text, images, or whatever else is visible on a
    web page.

-   The `padding` of an element is defined using the `padding` property.
    The `padding` is the space around the content.

    It can be defined for an individual side (for example,
    `padding-left: 20px`) or for all four sides in one declaration
    `padding: 20px 10px 30px 20px`, for instance.

    When declaring all four sides, you’re using a .

    Often when a CSS property takes multiple values like this, . So, in
    the example just cited, this would apply `20px` of padding to the
    top, `10px` to the right, `30px` to the bottom, and `20px` to the
    left.

    See .

-   The border of an element is defined using the border property.

    This is a that defines the element’s `border-width`, `border-style`,
    and `border-color`. For example,

        border: 4px dashed orange.

-   Margins are similar to padding, and are defined using similar syntax

        margin-left: 15px

    or

         margin: 10px 20px 10px 20px

    The margin portion of an element exists outside the element.

    .

<!-- -->

-   Dadas las declaraciones:

        .example {
          border-style: dashed;
          border-width: 2px;
          border-color: blue;
        }
        .example {
          border: solid;
          color: green;
        }

    ¿De que color queda el borde de los elementos de clase `example`?
    ¿Que `border-style` tendrán? ¿Que `border-width` tendrán?

    Here we’ve used the same selector on two different rule sets.

    The second rule set will take precedence over the first, overriding
    any styles that are the same in both rule sets.

    In the first rule set, we’ve defined all three `border-related`
    properties in longhand, setting the values to display a dashed
    border that’s 2px wide and colored blue.

    But what’s the result of these two rule sets? Well, the border will
    become 3px wide (the default border width for a visible border,) and
    it’ll be colored green, not blue.

    This happens because the second rule set uses shorthand to define
    the `border-style` as solid, *but doesn’t define the other two
    properties* (`border-width` and `border-color`).

    See

    -   -   

-   Dada la declaración:

        .example {
          margin: 10px 20px;
        }

    ¿De que tamaño quedarán `margin-top` `margin-right`, `margin-bottom`
    y `margin-left` para los elementos de clase `example`?

    Another thing to understand about shorthand is that for certain
    shorthand properties, the missing values are inherited based on the
    existing values.

    We’re omitting the bottom and left, so they’ll inherit from the top
    and right values.

Depurar estilos puede ser complicado. Lea el artículo .

While you can not “debug” CSS, because it is not a scripting language,
you can utilize the Chrome DevTools Elements panel to inspect an element
and view the Styles pane on the right.

This will give you insights as to the styles being overridden or ignored
(line threw).

The Styles pane is also useful because of it’s ability to LiveEdit the
document being inspected, which may help you iron out the issues.

If the styles are being overridden, you can then view the Computed Style
pane to see the CSS that is actually being utilized to style your
document.

-   in Chrome developer pages.

-   -   en YouTube by LearnCode.academy

HTML elements fall under two categories: or .

-   Block-level elements include elements like `<div>`, `<p>`, `h1`,
    `li` and `<section>`. A block-level element is more of a structural,
    layout related element.

    .

-   . Inline elements behave like words and letters within of a
    paragraph.

    Inline elements include `<span>`, `<b>`, and `<em>`.

    It’s worth noting that inline elements are subject to CSS properties
    that affect text.

    For example, `line-height` and `letter-spacing` are CSS properties
    that can be used to style inline elements.

    However, those same properties wouldn’t affect block elements.

-   See

    -   -   

<!-- -->

-   The property sets the vertical alignment of an element.

-   The property specifies the horizontal alignment of text in an
    element.

-   The property specifies the font for an element.

    The font-family property can hold several font names as a “fallback”
    system. If the browser does not support the first font, it tries the
    next font.

<!-- -->


    "use strict"; // Use ECMAScript 5 strict mode in browsers that support it
    function calculate() {
      var result;
      var original       = document.getElementById("........");
      var temp = original.value;
      var regexp = /.............................../;
      
      var m = temp.match(......);
      
      if (m) {
        var num = ....;
        var type = ....;
        num = parseFloat(num);
        if (type == 'c' || type == 'C') {
          result = (num * 9/5)+32;
          result = ..............................
        }
        else {
          result = (num - 32)*5/9;
          result = ............................
        }
        converted.innerHTML = result;
      }
      else {
        converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
      }
    }

        

\<pre\> \<span class=“s2”\>&quot;use strict&quot;\</span\>\<span
class=“p”\>;\</span\> \<span class=“c1”\>// Use ECMAScript 5 strict mode
in browsers that support it\</span\> \<span
class=“kd”\>function\</span\> \<span
class=“nx”\>calculate\</span\>\<span class=“p”\>()\</span\> \<span
class=“p”\>

\</span\> \<span class=“kd”\>var\</span\> \<span
class=“nx”\>result\</span\>\<span class=“p”\>;\</span\> \<span
class=“kd”\>var\</span\> \<span class=“nx”\>original\</span\> \<span
class=“o”\>=\</span\> \<span class=“nb”\>document\</span\>\<span
class=“p”\>.\</span\>\<span class=“nx”\>getElementById\</span\>\<span
class=“p”\>(\</span\>\<span
class=“s2”\>&quot;........&quot;\</span\>\<span class=“p”\>);\</span\>
\<span class=“kd”\>var\</span\> \<span class=“nx”\>temp\</span\> \<span
class=“o”\>=\</span\> \<span class=“nx”\>original\</span\>\<span
class=“p”\>.\</span\>\<span class=“nx”\>value\</span\>\<span
class=“p”\>;\</span\> \<span class=“kd”\>var\</span\> \<span
class=“nx”\>regexp\</span\> \<span class=“o”\>=\</span\> \<span
class=“sr”\>/.............................../\</span\>\<span
class=“p”\>;\</span\>

\<span class=“kd”\>var\</span\> \<span class=“nx”\>m\</span\> \<span
class=“o”\>=\</span\> \<span class=“nx”\>temp\</span\>\<span
class=“p”\>.\</span\>\<span class=“nx”\>match\</span\>\<span
class=“p”\>(......);\</span\>

\<span class=“k”\>if\</span\> \<span class=“p”\>(\</span\>\<span
class=“nx”\>m\</span\>\<span class=“p”\>)\</span\> \<span
class=“p”\><span>\</span\> \<span class=“kd”\>var\</span\> \<span
class=“nx”\>num\</span\> \<span class=“o”\>=\</span\> \<span
class=“p”\>....;\</span\> \<span class=“kd”\>var\</span\> \<span
class=“nx”\>type\</span\> \<span class=“o”\>=\</span\> \<span
class=“p”\>....;\</span\> \<span class=“nx”\>num\</span\> \<span
class=“o”\>=\</span\> \<span class=“nb”\>parseFloat\</span\>\<span
class=“p”\>(\</span\>\<span class=“nx”\>num\</span\>\<span
class=“p”\>);\</span\> \<span class=“k”\>if\</span\> \<span
class=“p”\>(\</span\>\<span class=“nx”\>type\</span\> \<span
class=“o”\>==\</span\> \<span class=“s1”\>&\#39;c&\#39;\</span\> \<span
class=“o”\>||\</span\> \<span class=“nx”\>type\</span\> \<span
class=“o”\>==\</span\> \<span class=“s1”\>&\#39;C&\#39;\</span\>\<span
class=“p”\>)\</span\> \<span class=“p”\><span>\</span\> \<span
class=“nx”\>result\</span\> \<span class=“o”\>=\</span\> \<span
class=“p”\>(\</span\>\<span class=“nx”\>num\</span\> \<span
class=“o”\>\*\</span\> \<span class=“mi”\>9\</span\>\<span
class=“o”\>/\</span\>\<span class=“mi”\>5\</span\>\<span
class=“p”\>)\</span\>\<span class=“o”\>+\</span\>\<span
class=“mi”\>32\</span\>\<span class=“p”\>;\</span\> \<span
class=“nx”\>result\</span\> \<span class=“o”\>=\</span\> \<span
class=“p”\>..............................\</span\> \<span
class=“p”\></span>\</span\> \<span class=“k”\>else\</span\> \<span
class=“p”\><span>\</span\> \<span class=“nx”\>result\</span\> \<span
class=“o”\>=\</span\> \<span class=“p”\>(\</span\>\<span
class=“nx”\>num\</span\> \<span class=“o”\>-\</span\> \<span
class=“mi”\>32\</span\>\<span class=“p”\>)\</span\>\<span
class=“o”\>\*\</span\>\<span class=“mi”\>5\</span\>\<span
class=“o”\>/\</span\>\<span class=“mi”\>9\</span\>\<span
class=“p”\>;\</span\> \<span class=“nx”\>result\</span\> \<span
class=“o”\>=\</span\> \<span
class=“p”\>............................\</span\> \<span
class=“p”\></span>\</span\> \<span class=“nx”\>converted\</span\>\<span
class=“p”\>.\</span\>\<span class=“nx”\>innerHTML\</span\> \<span
class=“o”\>=\</span\> \<span class=“nx”\>result\</span\>\<span
class=“p”\>;\</span\> \<span class=“p”\></span>\</span\> \<span
class=“k”\>else\</span\> \<span class=“p”\><span>\</span\> \<span
class=“nx”\>converted\</span\>\<span class=“p”\>.\</span\>\<span
class=“nx”\>innerHTML\</span\> \<span class=“o”\>=\</span\> \<span
class=“s2”\>&quot;ERROR! Try something like &\#39;-4.2C&\#39;
instead&quot;\</span\>\<span class=“p”\>;\</span\> \<span
class=“p”\></span>\</span\> \<span class=“p”\>

\</span\> \</pre\>

-   Deberá desplegar la aplicación en GitHub Pages como página de
    proyecto. Vea la sección <span>*GitHub Project Pages*</span>
    [subsection:githubprojectpages].

<!-- -->

-   Mocha, Chai y Sinon

    -   by Nicolas Perriault

    -   by Nicolas Perriault

    -   with Nicolas examples

    -   Podemos encontrar un ejemplo de unit testing en JavaScript en el
        browser con el testing framework Mocha y Chai en el repositorio
        :

    -   

-   Gulp

    -   -   SitePoint

    -   -   

-   Karma

    -   Screencast.

    -   . YouTube.

-   is a headless WebKit scriptable with a JavaScript API. It has fast
    and native support for various web standards: DOM handling, CSS
    selector, JSON, Canvas, and SVG.



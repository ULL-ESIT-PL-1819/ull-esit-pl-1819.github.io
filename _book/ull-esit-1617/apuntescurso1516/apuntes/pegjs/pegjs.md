Introducción a los PEGs
=======================

In computer science, a , or , is a type of analytic formal grammar, i.e.
it describes a formal language in terms of a set of rules for
recognizing strings in the language.

The formalism was introduced by and is closely related to the family of
top-down parsing languages introduced in the early 1970s.

Syntactically, PEGs also look similar to context-free grammars (CFGs),
but they have a different interpretation:

-   the choice operator selects the first match in PEG, while it is
    ambiguous in CFG.

-   This is closer to how string recognition tends to be done in
    practice, e.g. by a recursive descent parser.

Unlike CFGs, PEGs cannot be ; <span>*if a string parses, it has exactly
one valid parse tree*</span>.

It is conjectured that there exist context-free languages that cannot be
parsed by a PEG, but this is not yet proven.

Syntax
------

Formally, a parsing expression grammar consists of:

-   A finite set $$N$$ of nonterminal symbols.

-   A finite set $$\Sigma$$ of terminal symbols that is disjoint from $$N$$.

-   A finite set $$P$$ of parsing rules.

-   An expression $$e_S$$ termed the starting expression.

Each parsing rule in $$P$$ has the form $$A \leftarrow e$$, where $$A$$ is a
nonterminal symbol and $$e$$ is a .

A parsing expression is a hierarchical expression similar to a regular
expression, which is constructed in the following fashion:

1.  An atomic parsing expression consists of:

    1.  any terminal symbol,

    2.  any nonterminal symbol, or

    3.  the empty string $$\epsilon$$.

2.  Given any existing parsing expressions $$e$$, $$e_1$$, and $$e_2$$, a new
    parsing expression can be constructed using the following operators:

    1.  Sequence: $$e1 e2$$

    2.  Ordered choice: $$e1 / e2$$

    3.  Zero-or-more: $$e*$$

    4.  One-or-more: $$e+$$

    5.  Optional: $$e?$$

    6.  And-predicate: $$\&e$$

    7.  Not-predicate: $$!e$$

Semantics
---------

The fundamental difference between context-free grammars and parsing
expression grammars is that the PEG’s choice operator is <span>
ordered</span>:

1.  If the first alternative succeeds, the second alternative is
    ignored.

2.  Thus ordered choice is not commutative, unlike unordered choice as
    in context-free grammars.

3.  The consequence is that if a CFG is transliterated directly to a
    PEG, any ambiguity in the former is resolved by deterministically
    picking one parse tree from the possible parses.

4.  By carefully choosing the order in which the grammar alternatives
    are specified, a programmer has a great deal of control over which
    parse tree is selected.

5.  PEGs can <span> look ahead</span> into the input string without
    actually consuming it

6.  The and-predicate expression $$\&e$$ invokes the sub-expression $$e$$,
    and then succeeds if $$e$$ succeeds and fails if $$e$$ fails, <span>*but
    in either case never consumes any input*</span>.

7.  The not-predicate expression $$!e$$ succeeds if $$e$$ fails and fails if
    $$e$$ succeeds, <span>*again consuming no input in either
    case*</span>.

Implementing parsers from parsing expression grammars
-----------------------------------------------------

Any parsing expression grammar can be converted directly into a .

Due to the unlimited lookahead capability that the grammar formalism
provides, however, the resulting parser <span> could exhibit exponential
time performance in the worst case</span>.

It is possible to obtain better performance for any parsing expression
grammar by converting its recursive descent parser into <span> a , which
always runs in linear time</span>, at the cost of substantially greater
storage space requirements.

<span>*A packrat parser is a form of parser similar to a recursive
descent parser in construction, except that during the parsing process
the intermediate results of all invocations of the mutually recursive
parsing functions*</span>, ensuring that each parsing function is only
invoked at most once at a given input position.

Because of this memoization, a packrat parser has the ability to parse
many context-free grammars and any parsing expression grammar (including
some that do not represent context-free languages) in linear time.

Examples of memoized recursive descent parsers are known from at least
as early as 1993.

Note that this analysis of the performance of a packrat parser
<span>**assumes that enough memory is available to hold all of the
memoized results**</span>; in practice, if there were not enough memory,
some parsing functions might have to be invoked more than once at the
same input position, and consequently the parser could take more than
linear time.

It is also possible to build LL parsers and LR parsers from parsing
expression grammars, with better worst-case performance than a recursive
descent parser, but the unlimited lookahead capability of the grammar
formalism is then lost. Therefore, not all languages that can be
expressed using parsing expression grammars can be parsed by LL or LR
parsers.

Lexical Analysis
----------------

Parsers for languages expressed as a CFG, such as LR parsers, require a
separate tokenization step to be done first, which breaks up the input
based on the location of spaces, punctuation, etc.

The tokenization is necessary because of the way these parsers use
lookahead to parse CFGs that meet certain requirements in linear time.

PEGs do not require tokenization to be a separate step, and tokenization
rules can be written in the same way as any other grammar rule.

Left recursion
--------------

PEGs cannot express left-recursive rules where a rule refers to itself
without moving forward in the string. For example, the following
left-recursive CFG rule:

    string-of-a -> string-of-a 'a' | 'a'

can be rewritten in a PEG using the plus operator:

    string-of-a <- 'a'+

The process of rewriting indirectly left-recursive rules is complex in
some packrat parsers, especially when semantic actions are involved.

Referencias y Documentación
---------------------------

-   Véase

-   -   -   Michael’s Blog: . The PEG.js Tutorial

-   -   . Véanse @nathanuniversity y @nathanclosures

-   

PEGJS
=====

is a parser generator for JavaScript that produces parsers.

generates a parser from a Parsing Expression Grammar describing a
language.

We can specify what the parser returns (using semantic actions on
matched parts of the input).

To use the pegjs command, install globally:

    $ npm install -g pegjs

To use the JavaScript API, install locally:

    $ npm install pegjs

To use it from the browser, download the library ( or ).

    [~/srcPLgrado/pegjs/examples(master)]$ pegjs --help
    Usage: pegjs [options] [--] [<input_file>] [<output_file>]

    Generates a parser from the PEG grammar specified in the <input_file> and writes
    it to the <output_file>.

    If the <output_file> is omitted, its name is generated by changing the
    <input_file> extension to ".js". If both <input_file> and <output_file> are
    omitted, standard input and output are used.

    Options:
      -e, --export-var <variable>        name of the variable where the parser
                                         object will be stored (default:
                                         "module.exports")
          --cache                        make generated parser cache results
          --allowed-start-rules <rules>  comma-separated list of rules the generated
                                         parser will be allowed to start parsing
                                         from (default: the first rule in the
                                         grammar)
      -o, --optimize <goal>              select optimization for speed or size
                                         (default: speed)
          --plugin <plugin>              use a specified plugin (can be specified
                                         multiple times)
          --extra-options <options>      additional options (in JSON format) to pass
                                         to PEG.buildParser
          --extra-options-file <file>    file with additional options (in JSON
                                         format) to pass to PEG.buildParser
      -v, --version                      print version information and exit
      -h, --help                         print help and exit

    [~/srcPLgrado/pegjs/examples(master)]$ node
    > PEG = require("pegjs")
    { VERSION: '0.8.0',
      GrammarError: [Function],
      parser: 
       { SyntaxError: [Function: SyntaxError],
         parse: [Function: parse] },
      compiler: 
       { passes: 
          { check: [Object],
            transform: [Object],
            generate: [Object] },
         compile: [Function] },
      buildParser: [Function] }

    > parser = PEG.buildParser("start = ('a' / 'b')+")
    { SyntaxError: [Function: SyntaxError],
      parse: [Function: parse] }

Using the generated parser is simple — just call its `parse` method and
pass an input string as a parameter.

The method will return

-   a parse result (the exact value depends on the grammar used to build
    the parser) or

-   throw an if the input is invalid.

    The exception will contain `offset`, `line`, `column`, `expected`,
    `found` and `message` properties with more details about the error.

You can tweak parser behavior by passing a second parameter with an
`options` object to the `parse` method.

Only one option is currently supported:

`startRule` which is the name of the rule to start parsing from.

    > parser.parse("abba"); 
    [ 'a', 'b', 'b', 'a' ]
    > 

Specifying we can set the rules the parser will be allowed to start
parsing from (default: the first rule in the grammar).

    [~/srcPLgrado/pegjs/examples(master)]$ cat allowedstartrules.js 
    var PEG = require("pegjs");
    var grammar = "a = 'hello' b\nb = 'world'"; //"a = 'hello' b\nb='world';
    console.log(grammar); // a = 'hello' b
                          // b = 'world'
    var parser = PEG.buildParser(grammar,{ allowedStartRules: ['a', 'b'] });
    var r = parser.parse("helloworld", { startRule: 'a' });
    console.log(r); // [ 'hello', 'world' ]
    r = parser.parse("helloworld")
    console.log(r); // [ 'hello', 'world' ]

    r =  parser.parse("world", { startRule: 'b' })
    console.log(r); // 'world'

    try {
      r = parser.parse("world"); // Throws an exception
    }
    catch(e) {
      console.log("Error!!!!");
      console.log(e);
    }

    [~/srcPLgrado/pegjs/examples(master)]$ node allowedstartrules.js 
    a = 'hello' b
    b = 'world'
    [ 'hello', 'world' ]
    [ 'hello', 'world' ]
    world
    Error!!!!
    { message: 'Expected "hello" but "w" found.',
      expected: [ { type: 'literal', value: 'hello', description: '"hello"' } ],
      found: 'w',
      offset: 0,
      line: 1,
      column: 1,
      name: 'SyntaxError' }

The contains

-   message

-   expected,

-   found

-   offset,

-   line,

-   column,

-   name

and properties with more details about the error.

-   When `output` is set to , the method will return generated parser
    object;

        > PEG = require("pegjs")
        > grammar = "a = 'hello' b\nb='world'"
        'a = \'hello\' b\nb=\'world\''
        > console.log(grammar)
        a = 'hello' b
        b='world'
        > parser = PEG.buildParser(grammar,{ output: "parser"})
        { SyntaxError: [Function: SyntaxError],
          parse: [Function: parse] }
          > parser.parse("helloworld")
          [ 'hello', 'world' ]

-   if set to , it will return parser source code as a string

        > parser = PEG.buildParser(grammar,{ output: "source"})
        > typeof parser
        'string'
        > console.log(parser.substring(0,100))
        (function() {
          /*
           * Generated by PEG.js 0.8.0.
           *
           * http://pegjs.majda.cz/
           */

-   (default: `parser`).

La opción indica que plugin se van a usar.

    $ pegjs --plugin pegjs-coffee-plugin remove_left_recursive.pegjs 

is a plugin for PEG.js to use CoffeeScript in actions.

    [~/srcPLgrado/pegjs_examples(master)]$ cat plugin.coffee 
    #!/usr/bin/env coffee
    PEG = require 'pegjs'
    coffee = require 'pegjs-coffee-plugin'
    grammar = """
    a = 'hello' _ b { console.log 3; "hello world!" }
    b = 'world'     { console.log 2 }
    _ = [ \t]+      { console.log 1 }
    """
    parser = PEG.buildParser grammar, plugins: [coffee]
    r = parser.parse "hello world"
    console.log("r = #{r}")

La ejecución nos muestra además el orden de abajo - arriba y de
izquierda -derecha en la ejecución de las acciones semánticas:

    [~/srcPLgrado/pegjs_examples(master)]$ coffee plugin.coffee 
    1
    2
    3
    r = hello world!

    [~/Dropbox/src/javascript/PLgrado/pegjs/examples(master)]$ npm install -g pegjs-coffee-plugin

    [~/Dropbox/src/javascript/PLgrado/pegjs-coffee-plugin/examples(master)]$ cat simple.pegjs 
    { 
      @reduce = (left, right)->  
        sum = left
        for t in right
          op = t[0]
          num = t[1]
          switch op 
            when '+' then sum += num; break
            when '-' then sum -= num; break
            when '*' then sum *= num; break
            when '/' then sum /= num; break
            else console.log("Error! "+op)
        sum
      
    }
    sum   = left:product right:([+-] product)* { @reduce(left, right); }
    product = left:value right:([*/] value)*   { @reduce(left, right); }
    value   = number:[0-9]+                    { parseInt(number.join(''),10) }
            / '(' sum:sum ')'                  { sum }

    [~/Dropbox/src/javascript/PLgrado/pegjs-coffee-plugin/examples(master)]$  cat use_simple.coffee 
    PEG = require("./simple.js")
    r = PEG.parse("2+3*(2+1)-10/2")
    console.log(r)

    [~/srcPLgrado/pegjs/examples/coffee-plugin-examples(master)]$ pegjs --plugin pegjs-coffee-plugin simple.pegjs
    [~/srcPLgrado/pegjs/examples/coffee-plugin-examples(master)]$ coffee use_simple.coffee
    input = 3-1-2 result = 0
    input = 2+3*(2+1)-10/2 result = 6

-   en GitHub

If `true`, makes the parser cache results, avoiding exponential parsing
time in pathological cases but making the parser slower (default:
`false`).

Selects between optimizing the generated parser for parsing speed
(`speed`) or code size (`size`) (default: `speed`).

Un Ejemplo Sencillo {#section:UnEjemploSencillo}
===================

    [~/srcPLgrado/pegjs/examples(master)]$ pwd -P
    /Users/casiano/local/src/javascript/PLgrado/pegjs/examples
    [~/srcPLgrado/pegjs/examples(master)]$ git remote -v
    dmajda  https://github.com/dmajda/pegjs.git (fetch)
    dmajda  https://github.com/dmajda/pegjs.git (push)
    origin  git@github.com:crguezl/pegjs.git (fetch)
    origin  git@github.com:crguezl/pegjs.git (push)

The grammar syntax is similar to JavaScript in that it is not
line-oriented and ignores whitespace between tokens.

You can also use JavaScript-style comments (`// ...` and `/* ... */`).

Let’s look at example grammar that recognizes simple arithmetic
expressions like `2*(3+4)`.

A parser generated from this grammar computes their values.

    [~/Dropbox/src/javascript/PLgrado/pegjs/examples(master)]$ cat arithmetics.pegjs 
    /*
     * Classic example grammar, which recognizes simple arithmetic expressions like
     * "2*(3+4)". The parser generated from this grammar then computes their value.
     */

    start
      = additive

    additive
      = left:multiplicative PLUS right:additive { return left + right; }
      / left:multiplicative MINUS right:additive { return left - right; }
      / multiplicative

    multiplicative
      = left:primary MULT right:multiplicative { return left * right; }
      / left:primary DIV right:multiplicative { return left / right; }
      / primary

    primary
      = integer
      / LEFTPAR additive:additive RIGHTPAR { return additive; }

    integer "integer"
      = NUMBER

    _ = $[ \t\n\r]*

    PLUS = _"+"_
    MINUS = _"-"_
    MULT = _"*"_
    DIV = _"/"_
    LEFTPAR = _"("_
    RIGHTPAR = _")"_
    NUMBER = _ digits:$[0-9]+ _ { return parseInt(digits, 10); }

    [~/Dropbox/src/javascript/PLgrado/pegjs/examples(master)]$ cat main.js 
    var PEG = require("./arithmetics.js");
    var r = PEG.parse("(2+9-1)/2");
    console.log(r);

    [~/Dropbox/src/javascript/PLgrado/pegjs/examples(master)]$ cat Rakefile 
    PEGJS = "../bin/pegjs"
    task :default => :run

    desc "Compile arithmetics.pegjs"
    task :compile do
      sh "#{PEGJS} arithmetics.pegjs"
    end

    desc "Run and use the parser generated from arithmetics.pegjs"
    task :run => :compile do
      sh "node main.js"
    end

    [~/Dropbox/src/javascript/PLgrado/pegjs/examples(master)]$ rake
    ../bin/pegjs arithmetics.pegjs
    node main.js
    5

Asociación Incorrecta para la Resta y la División
-------------------------------------------------

Una cuando existe una derivación
$$A \stackrel{*}{\Longrightarrow} A \alpha$$.

En particular, es recursiva por la izquierda si contiene una regla de
producción de la forma $$A \rightarrow A \alpha$$. En este caso se dice
que la recursión por la izquierda es directa.

Cuando la gramática es , el método de análisis recursivo descendente
predictivo no funciona. En ese caso, el procedimiento `A` asociado con
$$A$$ ciclaría para siempre sin llegar a consumir ningún terminal.

Es por eso que hemos escrito las reglas de la calculadora con
recursividad a derechas,

    additive
      = left:multiplicative PLUS right:additive { return left + right; }
      / left:multiplicative MINUS right:additive { return left - right; }
      / multiplicative

    multiplicative
      = left:primary MULT right:multiplicative { return left * right; }
      / left:primary DIV right:multiplicative { return left / right; }
      / primary

pero eso da lugar a árboles hundidos hacia la derecha y a una aplicación
de las reglas semánticas errónea:

    [~/pegjs/examples(master)]$ cat main.js 
    var PEG = require("./arithmetics.js");
    var r = PEG.parse("5-3-2");
    console.log(r);

    [~/pegjs/examples(master)]$ node main.js
    4

Reescriba el PEG de la calculadora presentado en la sección
[section:UnEjemploSencillo] para que compute las operaciones aritméticas
con la asociatividad correcta.

Códigos de los que partir:

-   -   

Sintáxis y Semántica de PEG.js
==============================

-   On the top level, the grammar consists of .

-   Each rule has a name (e.g. `primary`) that identifies the rule, and
    a

-   e.g.

        integer / LEFTPAR additive:additive RIGHTPAR { return additive; }

    that defines a pattern to match against the input text and possibly
    contains some JavaScript code that determines what happens when the
    pattern matches successfully.

-   A rule can also contain name that is used in error messages (in our
    example, only the `integer` rule has a human-readable name).

        integer "integer"
          = NUMBER

-   The parsing starts at the first rule, which is also called the .

<!-- -->

-   A rule name must be a JavaScript identifier.

-   It is followed by an equality sign (`=`) and a parsing expression.

-   If the rule has a human-readable name, it is written as a JavaScript
    string between the name and separating equality sign.

        integer "integer" = NUMBER

-   Rules need to be separated only by whitespace (their beginning is
    easily recognizable), but a semicolon (`;`) after the parsing
    expression is allowed.

<!-- -->

-   Rules can be preceded by an — a piece of JavaScript code in curly
    braces (`{` and `}`).

-   -   All variables and functions defined in the initializer are
    accessible in rule actions and semantic predicates (the
    `& { predicate }` and `! { predicate }` are called )

-   The code inside the initializer can access options passed to the
    parser using the `options` variable.

-   .

-   This example illustrates what we said about initializers:

        [~/srcPLgrado/pegjs_examples(master)]$ cat initializer.js 
        var PEG = require("pegjs");
        var grammar = [
        ' {                             ',
        '   util = require("util");     ',
        '                               ',
        '   var g = "visible variable"; ',
        '   console.log("Inside Initializer! options = "+util.inspect(options)); ',
        ' }                             ',
        " start = 'a' { console.log(g); return 1; } ",
        "       / &   { console.log('inside predicate: '+g); return true; } 'b' { return 2; }"
        ];

        grammar = grammar.join('\n');
        console.log("GRAMMAR:\n"+grammar);

        var parser = PEG.buildParser(grammar);
        var r = parser.parse("a", { x: 'hello' });
        console.log(r); 
        r = parser.parse("b");
        console.log(r); 

    Produces the following output:

        [~/srcPLgrado/pegjs_examples(master)]$ node initializer.js 
        GRAMMAR:
         {                             
           util = require("util");     
                                       
           var g = "visible variable"; 
           console.log("Inside Initializer! options = "+util.inspect(options)); 
         }                             
         start = 'a' { console.log(g); return 1; } 
               / &   { console.log('inside predicate: '+g); return true; } 'b' { return 2; }
        Inside Initializer! options = { x: 'hello' }
        visible variable
        1
        Inside Initializer! options = {}
        inside predicate: visible variable
        2

-   -   To begin it is empty, then all declarations from the
        `initializer` are added.

    -   Afterwards you can add and remove stuff (Using for instance
        `delete myObject.property`) as much as you like.

    -   This scope is there even if you don’t use the `initializer`.

    -   So you can do something like the following:

            start = a { @result }
            a = "a" { @result = "awesome" }

        And this will correctly return `awesome` if you call
        `parse("a")`.

    -   Also all variable assignments in an action are safely scoped to
        the action.

        `{ result = "awesome" }` becomes
        `{ var result; result = "awesome" }`

    -   This gives you the ability to explicitly share variables with
        other actions via `this` and the security to just assign
        variables for local use like you are used to when writing
        CoffeeScript.

    -   This is the Coffee version of the former JavaScript example:

            [~/srcPLgrado/pegjs_examples(master)]$ cat initializer.coffee
            PEG = require('pegjs')
            coffee = require 'pegjs-coffee-plugin'
            grammar = '''
               {                             
                 util = require("util")     
                 @g = "visible variable" 
                 console.log("Inside Initializer! options = "+util.inspect(options))
               }                             
               start = 'a' { console.log(@g); 1 } 
                     / &   { 
                             console.log("inside predicate: '#{@g}''")
                             true 
                           } 'b' { 2 }
            '''
            parser = PEG.buildParser(grammar, plugins: [coffee])
            r = parser.parse('a', x: 'hello')
            console.log r
            r = parser.parse('b')
            console.log r

    -   When executed produces:

            [~/srcPLgrado/pegjs_examples(master)]$ coffee initializer.coffee
            Inside Initializer! options = { x: 'hello' }
            visible variable
            1
            Inside Initializer! options = {}
            inside predicate: 'visible variable''
            2

The parsing expressions of the rules are used to match the input text to
the grammar.

There are various types of expressions — matching characters or
character classes, indicating optional parts and repetition, etc.

Expressions can also contain references to other rules.

If an expression successfully matches a part of the text when running
the generated parser, it produces a , which is a JavaScript value.

-   .

-   .

-   The match results propagate through the rules when the rule names
    are used in expressions, up to the start rule.

-   The generated parser returns start rule’s match result when parsing
    is successful.

One special case of parser expression is a — a piece of JavaScript code
inside curly braces (`{` and `}`) that .

<span>*This value is considered match result of the preceding expression
(in other words, the parser action is a match result
transformer)*</span>.

In our arithmetics example, there are many parser actions.

Consider this action:

    digits:[0-9]+ { return parseInt(digits.join(""), 10); }

-   It takes the match result of the expression `[0-9]+`, , as its
    parameter.

-   It joins the digits together to form a number and converts it to a
    JavaScript number object.

There are several types of parsing expressions, some of them containing
subexpressions and thus forming a recursive structure:

-   "literal"
        'literal'

    Match exact literal string and return it. The string syntax is the
    same as in JavaScript.

    Appending `i` right after the literal makes the match
    case-insensitive:

        [~/srcPLgrado/pegjs_examples(master)]$ cat ignorecase.coffee 
        PEG = require('pegjs')
        coffee = require 'pegjs-coffee-plugin'
        grammar = '''
        start = a:'a'i 
        '''
        parser = PEG.buildParser(grammar, plugins: [coffee])
        r = parser.parse('A')
        console.log r
        parser = PEG.buildParser(grammar, plugins: [coffee])
        r = parser.parse('a')
        console.log r

    when executed produces:

        [~/srcPLgrado/pegjs_examples(master)]$ coffee ignorecase.coffee 
        A
        a

-   .

    Match exactly one character and return it as a string:

        ~/srcPLgrado/pegjs_examples(master)]$ cat dot.coffee 
        PEG = require('pegjs')
        coffee = require 'pegjs-coffee-plugin'
        grammar = '''
        start = a: ..
        '''
        parser = PEG.buildParser(grammar, plugins: [coffee])
        r = parser.parse('Ab')
        console.log r
        parser = PEG.buildParser(grammar, plugins: [coffee])
        r = parser.parse("\n\t")
        console.log r

    When executed produces:

        [~/srcPLgrado/pegjs_examples(master)]$ coffee dot.coffee 
        [ 'A', 'b' ]
        [ '\n', '\t' ]

-   `[characters]`

    -   Match one character from a set and return it as a string.

    -   The characters in the list can be escaped in exactly the same
        way as in JavaScript string.

    -   The list of characters can also contain ranges (e.g. `[a-z]`
        means all lowercase letters).

    -   Preceding the characters with `^` inverts the matched set (e.g.
        `[^a-z]` means <span>*"all character but lowercase
        letters*</span>).

    -   Appending `i` right after the literal makes the match
        case-insensitive.

    -   Example:

        \<pre\>
        [ /srcPLgrado/pegjs~e~xamples(master)]$ cat regexp.coffee 
        PEG = require('pegjs')
        coffee = require 'pegjs-coffee-plugin'
        grammar = '''
        start = a: [aeiou\u2661]i . [^x-z] 
        '''
        parser = PEG.buildParser(grammar, plugins: [coffee])
        r = parser.parse('Abr')
        console.log r
        r = parser.parse('♡br')
        console.log r
        [~/srcPLgrado/pegjs_examples(master)]$ coffee regexp.coffee [
        ’A’, ’b’, ’r’ ] [ ’♡’, ’b’, ’r’ ] \</pre\>

-   `rule`

    Match a parsing expression of a rule recursively and return its
    match result.

-   `( expression )`

    Match a subexpression and return its match result.

-   expression *

    Match zero or more repetitions of the expression and . .

-   expression +

    Match one or more repetitions of the expression and . The matching
    is greedy, i.e. the parser tries to match the expression as many
    times as possible.

-   expression ?

    Try to match the expression. If the match succeeds, return its match
    result, otherwise return `null`.

-   `& expression`

    Try to match the expression. If the match succeeds, just return
    `undefined` and do not advance the parser position, otherwise
    consider the match failed.

-   `! expression`

    Try to match the expression. If the match does not succeed, just
    return `undefined` and do not advance the parser position, otherwise
    consider the match failed.

    -   Here is an example recognizing JavaScript whitespaces and
        comments:

            [~/srcPLgrado/pegjs/examples(master)]$ cat notpredicate.pegjs 
            __ = (whitespace / eol / comment)*

            /* Modeled after ECMA-262, 5th ed., 7.4. */
            comment "comment"
              = singleLineComment
              / multiLineComment

            singleLineComment
              = "//" (!eolChar .)*   { return text(); }

            multiLineComment
              = "/*" (!"*/" .)* "*/" { return text(); }


            /* Modeled after ECMA-262, 5th ed., 7.3. */
            eol "end of line"
              = "\n"
              / "\r\n"
              / "\r"
              / "\u2028"
              / "\u2029"

            eolChar
              = [\n\r\u2028\u2029]

            whitespace "whitespace"
              = [ \t\v\f\u00A0\uFEFF\u1680\u180E\u2000-\u200A\u202F\u205F\u3000]

    -   Once it is compiled we can call it from our main program:

            [~/srcPLgrado/pegjs/examples(master)]$  cat mainnotpredicate.js 
            var PEG = require("./notpredicate.js");
            var input = process.argv[2] || "// one comment\n"+
                                           "// another comment \t/\n"+
                                           "/* a\n"+
                                           "   third comment */";
            console.log("\n*****\n"+input+"\n*****\n");
            var r = PEG.parse(input);
            console.log(r);

    -   This is the output:

            [~/srcPLgrado/pegjs/examples(master)]$ pegjs notpredicate.pegjs 
            [~/srcPLgrado/pegjs/examples(master)]$ node mainnotpredicate.js 

            *****
            // one comment
            // another comment      /
            /* a
               third comment */
            *****

            [ '// one comment',
              '\n',
              '// another comment \t/',
              '\n',
              '/* a\n   third comment */' ]

-   `& { predicate }`

    -   .

    -   It gets the match results of labeled expressions in preceding
        expression as its arguments.

    -   It should return some JavaScript value using the `return`
        statement.

    -   If the returned value evaluates to `true` in boolean context,
        just return `undefined` and do not advance the parser position;
        otherwise consider the match failed.

    -   The code inside the predicate can access all variables and
        functions defined in the initializer at the beginning of the
        grammar.

    -   The code inside the predicate can also access the current parse
        position using the `offset` function. The `offset` function
        returns a zero-based character index into the input string.

    -   The code can also access the current line and column using the
        `line` and `column` functions. Both return one-based indexes.

    -   The code inside the predicate can also access options passed to
        the parser using the `options` variable.

    -   Note that curly braces in the predicate code must be balanced.

    -   The following CoffeeScript example illustrates all these points:

            [~/srcPLgrado/pegjs_examples(master)]$ cat semantic_predicate.coffee 
            PEG = require('pegjs')
            coffee = require 'pegjs-coffee-plugin'
            grammar = '''
               {                             
                 @util = require("util")     
                 @g = "visible variable" 
                 console.log("Inside Initializer! options = "+@util.inspect(options))
               }                             
               start = 'a' { console.log(@g); 1 } 
                     / c:'c' '\\n' &   { 
                                   console.log("inside predicate: @g = '#{@g}' c = '#{c}'")
                                   console.log("options = #{@util.inspect(options)}")
                                   console.log("offset = #{offset()}")
                                   console.log("line = #{line()}")
                                   console.log("column = #{column()}")
                                   true 
                                 } 'b' { 2 }
            '''
            parser = PEG.buildParser(grammar, plugins: [coffee])
            r = parser.parse('a', x: 'hello')
            console.log r
            r = parser.parse("c\nb", y : 'world')
            console.log r

        When executed produces the following output:

            [~/srcPLgrado/pegjs_examples(master)]$ coffee semantic_predicate.coffee 
            Inside Initializer! options = { x: 'hello' }
            visible variable
            1
            Inside Initializer! options = { y: 'world' }
            inside predicate: @g = 'visible variable' c = 'c'
            options = { y: 'world' }
            offset = 2
            line = 2
            column = 1
            2

-   `! { predicate }`

    -   The predicate is a piece of JavaScript code that is executed as
        if it was inside a function.

    -   It gets the match results of labeled expressions in preceding
        expression as its arguments.

    -   It should return some JavaScript value using the `return`
        statement.

    -   If the returned value evaluates to `false` in boolean context,
        just return `undefined` and do not advance the parser position;
        otherwise consider the match failed.

    -   The code inside the predicate can access all variables and
        functions defined in the initializer at the beginning of the
        grammar.

    -   The code inside the predicate can also access the current parse
        position using the `offset` function. The `offset` function
        returns a zero-based character index into the input string.

    -   The code can also access the current line and column using the
        `line` and `column` functions. Both return one-based indexes.

    -   The code inside the predicate can also access options passed to
        the parser using the `options` variable.

    -   Note that curly braces in the predicate code must be balanced.

-   $ expression

    Try to match the expression. If the match succeeds, .

-   `label : expression`

    -   Match the expression and remember its match result under given
        `label`.

    -   The label must be a JavaScript identifier.

    -   Labeled expressions are useful together with actions, where
        saved match results can be accessed by action’s JavaScript code.

-   `expression1 expression2 ... expressionn`

    Match a sequence of expressions and return their match results in an
    array.

-   `expression { action }`

    -   Match the expression. If the match is successful, run the
        `action`, otherwise consider the match failed.

    -   The `action` is a piece of JavaScript code that is executed as
        if it was inside a function.

    -   It gets the match results of labeled expressions in preceding
        expression as its arguments.

    -   The action should return some JavaScript value using the
        `return` statement.

    -   This value is considered match result of the preceding
        expression.

    -   To indicate an error, the code inside the action can invoke the
        `expected` function, which makes the parser throw an exception.

        The function takes one parameter — a `description` of what was
        expected at the current position. This` description` will be
        used as part of a message of the thrown exception.

    -   The code inside an action can also invoke the `error` function,
        which also makes the parser throw an exception. The function
        takes one parameter — an `error` message. This message will be
        used by the thrown exception.

    -   The code inside the action can access all variables and
        functions defined in the initializer at the beginning of the
        grammar.

    -   Curly braces in the action code must be balanced.

    -   The code inside the action can also access the string matched by
        the expression using the `text` function.

    -   The code inside the action can also access the parse position at
        the beginning of the action’s expression using the `offset`
        function. It returns a zero-based character index into the input
        string.

    -   The code can also access the line and column at the beginning of
        the action’s expression using the `line` and `column` functions.
        Both return one-based indexes.

    -   The code inside the action can also access options passed to the
        parser using the `options` variable.

    -   Note that curly braces in the action code must be balanced.

-   expression1 / expression2 / ... / expressionn

    Try to match the first expression, if it does not succeed, try the
    second one, etc. Return the match result of the first successfully
    matched expression. If no expression matches, consider the match
    failed.

La Gramática de PEG.js
----------------------

    [~/srcPLgrado/pegjs(master)]$ cat src/parser.pegjs 
    grammar
      = __ initializer? rule+ 

    initializer
      = action semicolon? 

    rule
      = identifier string? equals expression semicolon? 

    expression
      = choice

    choice
      = sequence (slash sequence)* 

    sequence
      = labeled* action 
      / labeled* 

    labeled
      = identifier colon prefixed 
      / prefixed

    prefixed
      = dollar suffixed 
      / and action 
      / and suffixed 
      / not action 
      / not suffixed 
      / suffixed

    suffixed
      = primary question 
      / primary star 
      / primary plus 
      / primary

    primary
      = identifier !(string? equals) 
      / literal
      / class
      / dot 
      / lparen expression rparen 

    /* "Lexical" elements */

    action "action"
      = braced __ 

    braced
      = "{" (braced / nonBraceCharacters)* "}"

    nonBraceCharacters
      = nonBraceCharacter+

    nonBraceCharacter
      = [^{}]

    equals    = "=" __ 
    colon     = ":" __ 
    semicolon = ";" __ 
    slash     = "/" __ 
    and       = "&" __ 
    not       = "!" __ 
    dollar    = "$" __ 
    question  = "?" __ 
    star      = "*" __ 
    plus      = "+" __ 
    lparen    = "(" __ 
    rparen    = ")" __ 
    dot       = "." __ 

    /*
     * Modeled after ECMA-262, 5th ed., 7.6, but much simplified:
     *
     * * no Unicode escape sequences
     *
     * * "Unicode combining marks" and "Unicode connection punctuation" can't be
     *   part of the identifier
     *
     * * only [a-zA-Z] is considered a "Unicode letter"
     *
     * * only [0-9] is considered a "Unicode digit"
     *
     * The simplifications were made just to make the implementation little bit
     * easier, there is no "philosophical" reason behind them.
     *
     * Contrary to ECMA 262, the "$" character is not valid because it serves other
     * purpose in the grammar.
     */
    identifier "identifier"
      = (letter / "_") (letter / digit / "_")* __ 

    /*
     * Modeled after ECMA-262, 5th ed., 7.8.4. (syntax & semantics, rules only
     * vaguely).
     */
    literal "literal"
      = (doubleQuotedString / singleQuotedString) "i"? __ 

    string "string"
      = (doubleQuotedString / singleQuotedString) __ 

    doubleQuotedString
      = '"' doubleQuotedCharacter* '"' 

    doubleQuotedCharacter
      = simpleDoubleQuotedCharacter
      / simpleEscapeSequence
      / zeroEscapeSequence
      / hexEscapeSequence
      / unicodeEscapeSequence
      / eolEscapeSequence

    simpleDoubleQuotedCharacter
      = !('"' / "\\" / eolChar) . 

    singleQuotedString
      = "'" singleQuotedCharacter* "'" 

    singleQuotedCharacter
      = simpleSingleQuotedCharacter
      / simpleEscapeSequence
      / zeroEscapeSequence
      / hexEscapeSequence
      / unicodeEscapeSequence
      / eolEscapeSequence

    simpleSingleQuotedCharacter
      = !("'" / "\\" / eolChar) . 

    class "character class"
      = "[" "^"? (classCharacterRange / classCharacter)* "]" "i"? __ 

    classCharacterRange
      = classCharacter "-" classCharacter 

    classCharacter
      = bracketDelimitedCharacter 

    bracketDelimitedCharacter
      = simpleBracketDelimitedCharacter
      / simpleEscapeSequence
      / zeroEscapeSequence
      / hexEscapeSequence
      / unicodeEscapeSequence
      / eolEscapeSequence

    simpleBracketDelimitedCharacter
      = !("]" / "\\" / eolChar) . 

    simpleEscapeSequence
      = "\\" !(digit / "x" / "u" / eolChar) . 

    zeroEscapeSequence
      = "\\0" !digit 

    hexEscapeSequence
      = "\\x" hexDigit hexDigit)

    unicodeEscapeSequence
      = "\\u" hexDigit hexDigit hexDigit hexDigit)

    eolEscapeSequence
      = "\\" eol 

    digit
      = [0-9]

    hexDigit
      = [0-9a-fA-F]

    letter
      = lowerCaseLetter
      / upperCaseLetter

    lowerCaseLetter
      = [a-z]

    upperCaseLetter
      = [A-Z]

    __ = (whitespace / eol / comment)*

    /* Modeled after ECMA-262, 5th ed., 7.4. */
    comment "comment"
      = singleLineComment
      / multiLineComment

    singleLineComment
      = "//" (!eolChar .)*

    multiLineComment
      = "/*" (!"*/" .)* "*/"

    /* Modeled after ECMA-262, 5th ed., 7.3. */
    eol "end of line"
      = "\n"
      / "\r\n"
      / "\r"
      / "\u2028"
      / "\u2029"

    eolChar
      = [\n\r\u2028\u2029]

    /* Modeled after ECMA-262, 5th ed., 7.2. */
    whitespace "whitespace"
      = [ \t\v\f\u00A0\uFEFF\u1680\u180E\u2000-\u200A\u202F\u205F\u3000]

Acciones Intermedias
====================

Supongamos que queremos poner una acción semántica intermedia en un
programa :

    [~/srcPLgrado/pegjs/examples(master)]$ cat direct_intermedia.pegjs 
    a = 'a'+ { console.log("acción intermedia"); } 'b'+ { 
                         console.log("acción final"); 
                         return "hello world!";
                       }

Al compilar nos da un mensaje de error:

    [~/srcPLgrado/pegjs/examples(master)]$ pegjs direct_intermedia.pegjs 
    1:48: Expected "/", ";", end of input or identifier but "'" found.

Usando Predicados Semánticos
----------------------------

La solución es sencilla: añadimos la acción como un predicado semántico.
Véase este ejemplo:

    [~/srcPLgrado/pegjs/examples(master)]$ coffee semantic_intermedia.coffee 
    acción intermedia. a = aa
    acción final. b = bb
    r = aabb
    [~/srcPLgrado/pegjs/examples(master)]$ cat semantic_intermedia.coffee 
    PEG = require 'pegjs'

    grammar = """
    a = a:$'a'+ 
        & { console.log("acción intermedia. a = "+a); return true; } 
        b:$'b'+ { 
                 console.log("acción final. b = "+b); 
                 return text();
              }
    """
    parser = PEG.buildParser grammar
    r = parser.parse "aabb"
    console.log("r = #{r}")

Cuando se ejecuta produce esta salida:

    [~/srcPLgrado/pegjs/examples(master)]$ coffee semantic_intermedia.coffee 
    acción intermedia. a = aa
    acción final. b = bb
    r = aabb

Usando Variable Sintáctica Intermedia
-------------------------------------

Otra posible solución consiste en introducir una variable sintáctica en
medio que derive a la palabra vacía y que tenga asociada la
correspondiente acción semántica:

    [~/srcPLgrado/pegjs/examples(master)]$ cat intermedia.pegjs 
    a = 'a'+ temp 'b'+ { 
                         console.log("acción final"); 
                         return "hello world!";
                       }
    temp = { console.log("acción intermedia"); }

Este es el programa que usa el parser generado:

    [~/srcPLgrado/pegjs/examples(master)]$ cat main_intermedia.js 
    var parser = require("intermedia");
    var input = process.argv[2] || 'aabb';
    var result = parser.parse(input);
    console.log(result);

al ejecutar tenemos:

    [~/srcPLgrado/pegjs/examples(master)]$ pegjs intermedia.pegjs 
    [~/srcPLgrado/pegjs/examples(master)]$ node main_intermedia.js 
    acción intermedia
    acción final
    hello world!

PegJS en los Browser
====================

-   ~/srcPLgrado/pegjs/examples(master)]$ pwd -P
        /Users/casiano/local/src/javascript/PLgrado/pegjs/examples

-   [~/srcPLgrado/pegjs/examples(master)]$ git remote -v
        dmajda  https://github.com/dmajda/pegjs.git (fetch)
        dmajda  https://github.com/dmajda/pegjs.git (push)
        origin  git@github.com:crguezl/pegjs.git (fetch)
        origin  git@github.com:crguezl/pegjs.git (push)

-   -   

Podemos usar directamente las versiones para los browser:

-   -   

<!-- -->

    [~/Dropbox/src/javascript/PLgrado/jison]$ pegjs --help
    Usage: pegjs [options] [--] [<input_file>] [<output_file>]

    Generates a parser from the PEG grammar specified in the <input_file> and
    writes it to the <output_file>.

    If the <output_file> is omitted, its name is generated by changing the
    <input_file> extension to ".js". If both <input_file> and <output_file> are
    omitted, standard input and output are used.

    Options:
      -e, --export-var <variable>  name of the variable where the parser object
                                   will be stored (default: "module.exports")
          --cache                  make generated parser cache results
          --track-line-and-column  make generated parser track line and column
      -v, --version                print version information and exit
      -h, --help                   print help and exit

Le indicamos que el parser se guarde en `calculator`:

    [~/Dropbox/src/javascript/PLgrado/pegjs/examples(master)]$ rake web
    ../bin/pegjs -e calculator arithmetics.pegjs

    [~/srcPLgrado/pegjs/examples(master)]$ head -5 arithmetics.js 
    calculator = (function() {
      /*
       * Generated by PEG.js 0.7.0.
       *
       * http://pegjs.majda.cz/

Ahora, desde el JavaScript que llama al parser accedemos al objeto
mediante la variable `calculator`:

    [~/srcPLgrado/pegjs/examples(master)]$ cat calc.js 
    $(document).ready(function() {
      $('#eval').click(function() {
        try {
          var result = calculator.parse($('#input').val());
          $('#output').html(result);
        } catch (e) {
          $('#output').html('<div class="error"><pre>\n' + String(e) + '\n</pre></div>');
        }
      });

      $("#examples").change(function(ev) {
        var f = ev.target.files[0]; 
        var r = new FileReader();
        r.onload = function(e) { 
          var contents = e.target.result;
          
          input.innerHTML = contents;
        }
        r.readAsText(f);
      });

    });

El PEG describe una calculadora:

    [~/Dropbox/src/javascript/PLgrado/pegjs/examples(master)]$ cat arithmetics.pegjs 
    /*
     * Classic example grammar, which recognizes simple arithmetic expressions like
     * "2*(3+4)". The parser generated from this grammar then computes their value.
     */

    start
      = additive

    additive
      = left:multiplicative PLUS right:additive { return left + right; }
      / left:multiplicative MINUS right:additive { return left - right; }
      / multiplicative

    multiplicative
      = left:primary MULT right:multiplicative { return left * right; }
      / left:primary DIV right:multiplicative { return left / right; }
      / primary

    primary
      = integer
      / LEFTPAR additive:additive RIGHTPAR { return additive; }

    integer "integer"
      = NUMBER

    _ = $[ \t\n\r]*

    PLUS = _"+"_
    MINUS = _"-"_
    MULT = _"*"_
    DIV = _"/"_
    LEFTPAR = _"("_
    RIGHTPAR = _")"_
    NUMBER = _ digits:$[0-9]+ _ { return parseInt(digits, 10); }

    [~/srcPLgrado/pegjs/examples(master)]$ cat calculator.html 
    <!DOCTYPE HTML>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>pegjs</title>
        <link rel="stylesheet" href="global.css" type="text/css" media="screen" charset="utf-8" />
      </head>
      <body>
        <h1>pegjs</h1>
        <div id="content">
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
          <script src="arithmetics.js"></script>
          <script src="calc.js"></script>

          <p>
          Load an example:
          <input type="file" id="examples" />
          </p>

          <p>
          <table>
            <tr>
              <td>
                <textarea id="input" autofocus cols = "40" rows = "4">2+3*4</textarea> 
              </td>
              <td class="output">
                <pre>
                  <span id="output"></span> <!-- Output goes here! --> 
                </pre>
              </td>
              <td><button id="eval" type="button">eval</button></td>
            </tr>
          </table>
          </p>
        </div>
      </body>
    </html>

\<img src=“pegjs.png”\>

[fig:pegjs]

Eliminación de la Recursividad por la Izquierda en PEGs
=======================================================

Eliminación Usando Operadores de Repetición
-------------------------------------------

-   [~/srcPLgrado/pegjs-coffee-plugin/examples(master)]$ pwd -P
        /Users/casiano/local/src/javascript/PLgrado/pegjs-coffee-plugin/examples

-   [~/srcPLgrado/pegjs-coffee-plugin/examples(master)]$ git remote -v
        dignifiedquire  git@github.com:Dignifiedquire/pegjs-coffee-plugin.git (fetch)
        dignifiedquire  git@github.com:Dignifiedquire/pegjs-coffee-plugin.git (push)
        origin  git@github.com:crguezl/pegjs-coffee-plugin.git (fetch)
        origin  git@github.com:crguezl/pegjs-coffee-plugin.git (push)

-   

Consideremos el siguiente esquema de traducción implementado en :

    [~/srcPLgrado/pegjs-coffee-plugin/examples(master)]$ cat leftrec.jison 
    /*
    Exercise: Find a PEG equivalent to the following left-recursive
    grammar:
    */
    %lex
    %%

    \s+               { /* skip whitespace */ }
    y                 { return 'y';}
    .                 { return 'x';}

    /lex

    %{
      do_y = function(y)   { console.log("A -> 'y'   do_y("+y+")"); return y; }
      do_x = function(a, x){ console.log("A -> A 'x' do_x("+a+", "+x+")"); return a+x; }
    %}

    %%
    A : A 'x' { $$ = do_x($1, $2); } 
      | 'y'   { $$ = do_y($1); }
    ;

    [~/srcPLgrado/pegjs-coffee-plugin/examples(master)]$ jison leftrec.jison 
    [~/srcPLgrado/pegjs-coffee-plugin/examples(master)]$ ls -ltr leftrec.j*
    -rw-r--r--  1 casiano  staff    441 18 mar 20:22 leftrec.jison
    -rw-r--r--  1 casiano  staff  20464 18 mar 20:34 leftrec.js

    [~/srcPLgrado/pegjs-coffee-plugin/examples(master)]$ cat main_leftrec.js 
    var parser = require('./leftrec');
    input = "y x x x";
    var r = parser.parse(input);

    [~/srcPLgrado/pegjs-coffee-plugin/examples(master)]$ node main_leftrec.js 
    A -> 'y'   do_y(y)
    A -> A 'x' do_x(y, x)
    A -> A 'x' do_x(yx, x)
    A -> A 'x' do_x(yxx, x)

Es posible modificar la gramática para eliminar la recursión por la
izquierda. En este apartado nos limitaremos al caso de recursión por la
izquierda directa. La generalización al caso de recursión por la
izquierda no-directa se reduce a la iteración de la solución propuesta
para el caso directo.

Consideremos una variable $A$ con dos producciones:

$$A   \rightarrow A \alpha |\ \beta$$

donde $$\alpha, \beta \in (V \cup \Sigma)^*$$ no comienzan por $$A$$. Estas
dos producciones pueden ser sustituidas por:

$$A   \rightarrow \beta \alpha * $$

eliminando así la recursión por la izquierda.

    [~/pegjs-coffee-remove-left(master)]$ cat -n remove_left_recursive.pegjs 
         1  /*
         2  
         3  Exercise: Find a PEG equivalent to the following left-recursive
         4  grammar:
         5  
         6  A : A 'x' { $$ = do_x($1, $2); } | 'y' { $$ = do_y($1); }
         7  
         8  */
         9  
        10  {
        11    @do_y = (y)   -> console.log("do_y(#{y})"); y
        12    @do_x = (a, x)-> console.log("do_x(#{a}, #{x})"); a+x
        13  }
        14  
        15  A = y:'y' xs:('x'*) 
        16       {
        17          a = @do_y(y)
        18          for x in xs
        19            a = @do_x(a, x)
        20          a
        21       }

    [~/pegjs-coffee-remove-left(master)]$ pegjs --plugin pegjs-coffee-plugin remove_left_recursive.pegjs 
    [~/pegjs-coffee-remove-left(master)]$ ls -ltr | tail -1
    -rw-rw-r--  1 casiano  staff   8919  3 jun 10:42 remove_left_recursive.js

    [~/pegjs-coffee-remove-left(master)]$ cat use_remove_left.coffee 
    PEG = require("./remove_left_recursive.js")
    inputs = [
               "yxx"
               "y"
               "yxxx"
             ]

    for input in inputs 
      console.log("input = #{input}")
      r = PEG.parse input
      console.log("result = #{r}\n")

    [~/pegjs-coffee-remove-left(master)]$ coffee use_remove_left.coffee 
    input = yxx
    do_y(y)
    do_x(y, x)
    do_x(yx, x)
    result = yxx

    input = y
    do_y(y)
    result = y

    input = yxxx
    do_y(y)
    do_x(y, x)
    do_x(yx, x)
    do_x(yxx, x)
    result = yxxx

Eliminado la Recursividad por la Izquierda en la Calculadora Usando Operadores de Repetición
--------------------------------------------------------------------------------------------

    [~/Dropbox/src/javascript/PLgrado/pegjs/examples(master)]$ cat simple.pegjs 
    /* From the Wikipedia
    Value   ← [0-9]+ / '(' Expr ')'
    Product ← Value (('*' / '/') Value)*
    Sum     ← Product (('+' / '-') Product)*
    Expr    ← Sum
    */
    { 
      function reduce(left, right) {
        var sum = left;
        // console.log("sum = "+sum);
        for(var i = 0; i < right.length;i++) {
          var t = right[i];
          var op = t[0];
          var num = t[1];
          switch(op) {
            case '+' : sum += num; break;
            case '-' : sum -= num; break;
            case '*' : sum *= num; break;
            case '/' : sum /= num; break;
            default : console.log("Error! "+op);
          }
          // console.log("sum = "+sum);
        }
        return sum;
      }
    }

    sum   = left:product right:($[+-] product)* { return reduce(left, right); }
    product = left:value right:($[*/] value)*   { return reduce(left, right); }
    value   = number:$[0-9]+                    { return parseInt(number,10); }
            / '(' sum:sum ')'                   { return sum; }

Es posible especificar mediante llaves un código que este disponible
dentro de las acciones semánticas.

Ejecución:

    [~/pegjs/examples(master)]$ cat use_simple.js 
    var PEG = require("./simple.js");
    var r = PEG.parse("2-3-4");
    console.log(r);

    [~/pegjs/examples(master)]$ node use_simple.js 
    -5

Veamos otra ejecución:

    [~/Dropbox/src/javascript/PLgrado/pegjs/examples(master)]$ cat use_simple.js 
    var PEG = require("./simple.js");
    var r = PEG.parse("2+3*(2+1)-10/2");
    console.log(r);

    [~/Dropbox/src/javascript/PLgrado/pegjs/examples(master)]$ ../bin/pegjs simple.pegjs 
    [~/Dropbox/src/javascript/PLgrado/pegjs/examples(master)]$ node use_simple.js 
    6

Eliminación Usando Predicados Semánticos: Sólo Sintáxis {#subsection:eliminaleftrec}
-------------------------------------------------------

La sección anterior da una forma sencilla de resolver el problema
respetando la semántica. Si no se dispone de operadores de repetición la
cosa se vuelve mas complicada. Las siguientes secciones muestran una
solución para transformar un esquema de traducción recursivo por la
izquierda en otro no recursivo por la izquierda respetando el orden en
el que se ejecutan las acciones semánticas. Por último se ilustra como
se puede aplicar esta técnica en `pegjs` (aunque obviamente es mucho
mejor usar la ilustrada anteriormente).

Es posible modificar la gramática para eliminar la recursión por la
izquierda. En este apartado nos limitaremos al caso de recursión por la
izquierda directa. La generalización al caso de recursión por la
izquierda no-directa se reduce a la iteración de la solución propuesta
para el caso directo.

Consideremos una variable $$A$$ con dos producciones:

$$A   \rightarrow A \alpha |\ \beta$$

donde $$\alpha, \beta \in (V \cup \Sigma)^*$$ no comienzan por $$A$$. Estas
dos producciones pueden ser sustituidas por:

  ------------------------------------------
  $$A   \rightarrow \beta R$$
  $$R   \rightarrow  \alpha R\ |\ \epsilon$$
  ------------------------------------------

eliminando así la recursión por la izquierda.

La producción $$R   \rightarrow  \alpha R$$ se dice .

Las producciones recursivas por la derecha dan lugar a árboles que se
hunden hacia la derecha. Es mas difícil traducir desde esta clase de
árboles operadores como el menos, que son asociativos a izquierdas.

Elimine la recursión por la izquierda de la gramática

  -----------------------------------
  $$expr   \rightarrow expr  -  NUM$$
  $$expr   \rightarrow NUM$$
  -----------------------------------

Eliminación de la Recursión por la Izquierda Incluyendo la Semántica {#subsection:eliminarecesquem}
--------------------------------------------------------------------

La eliminación de la recursión por la izquierda es sólo un paso: debe
ser extendida a esquemas de traducción, de manera que no sólo se
preserve el lenguaje sino la secuencia de acciones. Supongamos que
tenemos un esquema de traducción de la forma:

  ---------------------------- --------------------
  $$A   \rightarrow A \alpha$$   `{ alpha_action }`
  $$A   \rightarrow A \beta$$    `{ beta_action }`
  $$A   \rightarrow \gamma$$     `{ gamma_action }`
  ---------------------------- --------------------

para una sentencia como $$\gamma \beta \alpha$$ la secuencia de acciones
será:

`gamma_action  beta_action alpha_action`

¿Cómo construir un esquema de traducción para la gramática resultante de
eliminar la recursión por la izquierda que ejecute las acciones
asociadas en el mismo orden?. Supongamos para simplificar, que las
acciones no dependen de atributos ni computan atributos, sino que actúan
sobre variables globales. En tal caso, la siguiente ubicación de las
acciones da lugar a que se ejecuten en el mismo orden:

  --------------------------------------------------
  $$A   \rightarrow \gamma$$ `{ gamma_action }` $$R$$
  $$R   \rightarrow \beta$$ ` { beta_action }` $$R$$
  $$R   \rightarrow \alpha$$ ` { alpha_action }` $$R$$
  $$R   \rightarrow \epsilon$$
  --------------------------------------------------

Si hay atributos en juego, la estrategia para construir un esquema de
traducción equivalente para la gramática resultante de eliminar la
recursividad por la izquierda se complica. Consideremos de nuevo el
esquema de traducción de infijo a postfijo de expresiones aritméticas de
restas:

  ------------------------------------- -------------------------------------------------
  $$expr   \rightarrow expr_1  -  NUM$$   `{ $expr{T} = $expr[1]{T}+" "+$NUM{VAL}+" - "}`
  $$expr   \rightarrow NUM$$              `{ $expr{T} = $NUM{VAL} }`
  ------------------------------------- -------------------------------------------------

En este caso introducimos un atributo `H` para los nodos de la clase $$r$$
el cuál acumula la traducción a postfijo hasta el momento. Observe como
este atributo se computa en un nodo $$r$$ a partir del correspondiente
atributo del el padre y/o de los hermanos del nodo:

$$expr   \rightarrow NUM$$ `{ $r{H} = $NUM{VAL} }` $r$
`{ $expr{T} = $r{T} }`\
$r   \rightarrow - NUM$ `{ $r_1{H} = $r{H}+" "+$NUM{VAL}." - " }` $r_1$
`{ $r{T} = $r_1{T} }`\
$r \rightarrow \epsilon$ `{ $r{T} = $r{H} }`

El atributo `H` es un ejemplo de atributo heredado.

Atributos Heredados y PEGJS
---------------------------

PegJS no permite acciones intermedias aunque si predicados semánticos.
Tampoco se puede acceder al atributo de la parte izquierda. Por eso, a
la hora de implantar la solución anterior debemos introducir predicados
semánticos.

Además nos obliga a usar variables visibles por todas las reglas
semánticas para emular el acceso a los atributos de la parte izquierda
de una regla de producción.

El siguiente ejemplo ilustra como eliminar la recursión por la izquierda
respetando la asociatividad de la operación de diferencia:

    [~/srcPLgrado/pegjs/examples(master)]$ cat inherited2.pegjs 
    {
      var h = 0, number = 0;
    }

    e = NUMBER &{ h = number; return true; } r { return h; }

    r = '-' NUMBER &{ h -= number; return true; } r  { return h; } / /* empty */

    NUMBER = _ digits:$[0-9]+ _  { number = parseInt(digits, 10); return number; }

    _ = $[ \t\n\r]*

Aquí `h` - aún cuando se trata de una variable compartida - es usado
como si fuera un atributo de los símbolos del PEG. Un tal atributo se
denomina .

Este es el código para usar el PEG anterior:

    [~/srcPLgrado/pegjs/examples(master)]$ cat use_inherited2.js 
    var PEG = require("./inherited2.js");
    var input = process.argv[2] || "5-1-2";
    var r = PEG.parse(input);
    console.log(r);

Al ejecutarlo obtenemos:

    [~/srcPLgrado/pegjs/examples(master)]$ pegjs inherited2.pegjs 
    [~/srcPLgrado/pegjs/examples(master)]$ node use_inherited2.js 4-3-1
    0
    [~/srcPLgrado/pegjs/examples(master)]$ node use_inherited2.js 7-1-2
    4

Eliminado la Recursividad por la Izquierda en la Calculadora Usando Predicados Semánticos
-----------------------------------------------------------------------------------------

En este ejemplo ilustramos como podemos insertar predicados semánticos
entre los operadores de repetición para obtener la semántica deseada:

    [~/srcPLgrado/pegjs/examples(master)]$ cat simple2.pegjs 
    {
      var sum = 0;
      var initsum = function(first) { 
        sum = first; 
        return true; 
      };
      var add = function(op, p) {
        switch(op) {
            case '+':
                sum += p; 
                break;
            case '-':
                sum -= p; 
                break;
            default:
                error('"+" or "-" expected');
        }
        return true;
      };
    }

    sum     = first:value &{ return initsum(first); } (op:[+-] product:value & { return add(op, product); })* { return sum; } 
    value   = number:$[0-9]+                     { return parseInt(number,10); }
            / '(' sum:sum ')'                    { return sum; }

El primer predicado `first:value &{ return initsum(first); }` inicializa
la suma. A continuación y aprovechando el cierre `*` se ejecuta en bucle
el segundo predicado
`(op:[+-] product:value & { return add(op, product); })` que va
acumulando el resultado. La acción semántica final se limita a retornar
el resultado acumulado.

    [~/srcPLgrado/pegjs/examples(master)]$ cat use_simple2.js
    var PEG = require("./simple2.js");
    var input = process.argv[2] || "5-1-2";
    var r = PEG.parse(input);
    console.log(r);

    [~/srcPLgrado/pegjs/examples(master)]$ pegjs simple2.pegjs 
    [~/srcPLgrado/pegjs/examples(master)]$ node use_simple2.js 3-1-5
    -3

La variable `sum` es excesivamente visible. Podemos encapsularla un poco
mas:

    [~/srcPLgrado/pegjs/examples(master)]$ cat simple3.pegjs 
    {
      var sum = (function() {
        var sum = 0;
        var get = function() { return sum; };
        var set = function(first) { 
          sum = first; 
          return true; 
        };
        var add = function(op, p) {
          switch(op) {
              case '+':
                  sum += p; 
                  break;
              case '-':
                  sum -= p; 
                  break;
              default:
                  error('"+" or "-" expected');
          }
          return true;
        };
        return {s: set, a: add, g: get };
      })();
    }

    sum     = first:value &{ return sum.s(first); } (op:[+-] product:value & { return sum.a(op, product); })* { return sum.g(); } 
    value   = number:$[0-9]+                     { return parseInt(number,10); }
            / '(' sum:sum ')'                    { return sum; }

    [~/srcPLgrado/pegjs/examples(master)]$ cat use_simple3.js 
    var PEG = require("./simple3.js");
    var input = process.argv[2] || "5-1-2";
    var r = PEG.parse(input);
    console.log(r);

    [~/srcPLgrado/pegjs/examples(master)]$ pegjs simple3.pegjs 
    [~/srcPLgrado/pegjs/examples(master)]$ node use_simple3.js 4-1-1
    2
    [~/srcPLgrado/pegjs/examples(master)]$ node use_simple3.js 4-1-4
    -1

Reconocimiento de Lenguajes con PEGjs
=====================================

PEGs versus Gramáticas {#subsection:pegvsgrammars}
----------------------

Una gramática y un PEG con las mismas reglas no definen el mismo
lenguaje. Véase este ejemplo:

    [~/srcPLgrado/pegjs/examples(master)]$ cat grammarvspeg.coffee 
    #!/usr/bin/env coffee
    PEG = require 'pegjs'
    coffee = require 'pegjs-coffee-plugin'
    grammar = """
    a =  b 'c'           
    b = 'b' / 'b' 'a'   
    """
    parser = PEG.buildParser grammar, plugins: [coffee]
    r = parser.parse "bc"
    console.log("r = #{r}")
    r = parser.parse "bac"
    console.log("r = #{r}")
    [~/srcPLgrado/pegjs/examples(master)]$ coffee grammarvspeg.coffee 
    r = b,c
    SyntaxError: Expected "c" but "a" found.

Obsérvese que la correspondiente gramática genera el lenguaje:

    { 'bc', 'bac' }

Mientras que el PEG acepta el lenguaje `'bc'`.

: Asociando un else con su if mas cercano
-----------------------------------------

The dangling else is a problem in computer programming in which an
optional `else clause` in an `If–then(–else)` statement results in
nested conditionals being ambiguous.

Formally, the reference context-free grammar of the language is
ambiguous, meaning there is more than one correct parse tree.

In many programming languages one may write conditionally executed code
in two forms:

the `if-then` form, and the `if-then-else` form – the `else` clause is
optional:

                  if a then s
                  if a then s1 else s2

This gives rise to an ambiguity in interpretation when there are nested
statements, specifically whenever an `if-then` form appears as `s1` in
an `if-then-else` form:

                  if a then if b then s else s2

In this example, `s` is unambiguously executed when `a` is `true` and
`b` is `true`, but one may interpret `s2` as being executed when `a` is
`false`

-   (thus attaching the `else` to the first `if`) or when

-   `a` is `true` and `b` is `false` (thus attaching the `else` to the
    second `if`).

In other words, one may see the previous statement as either of the
following expressions:

    if a then (if b then s) else s2

or

    if a then (if b then s else s2)

This is a problem that often comes up in compiler construction,
especially scannerless parsing.

The convention when dealing with the dangling `else` is to attach the
`else` to the nearby `if` statement.

Programming languages like Pascal and C follow this convention, so there
is no ambiguity in the semantics of the language, though the use of a
parser generator may lead to ambiguous grammars. In these cases , such
as `begin...end` in Pascal and `{...}` in C.

Here follows a solution in PEG.js:

    $ cat danglingelse.pegjs 
    /*
    S ← 'if' C 'then' S 'else' S / 'if' C 'then' S
    */

    S =   if C:C then S1:S else S2:S { return [ 'ifthenelse', C, S1, S2 ]; }
        / if C:C then S:S            { return [ 'ifthen', C, S]; }
        / O                          { return 'O'; }
    _ = ' '*
    C = _'c'_                        { return 'c'; }
    O = _'o'_                        { return 'o'; }
    else = _'else'_                 
    if = _'if'_
    then = _'then'_

    $ cat use_danglingelse.js 
    var PEG = require("./danglingelse.js");
    var r = PEG.parse("if c then if c then o else o");
    console.log(r);

    $ ../bin/pegjs danglingelse.pegjs 
    $ node use_danglingelse.js 
    [ 'ifthen', 'c', [ 'ifthenelse', 'c', 'O', 'O' ] ]

-   [~/srcPLgrado/pegjs/examples(master)]$ pwd -P
        /Users/casiano/local/src/javascript/PLgrado/pegjs/examples

-   [~/srcPLgrado/pegjs/examples(master)]$ git remote -v
        dmajda  https://github.com/dmajda/pegjs.git (fetch)
        dmajda  https://github.com/dmajda/pegjs.git (push)
        origin  git@github.com:crguezl/pegjs.git (fetch)
        origin  git@github.com:crguezl/pegjs.git (push)

-   

Si invertimos el orden de las alternativas:

    [~/srcPLgrado/pegjs/examples(master)]$ cat danglingelse2.pegjs 
    /*
    S ← 'if' C 'then' S 'else' S / 'if' C 'then' S
    */

    S =   if C:C then S:S            { return [ 'ifthen', C, S]; }
        / if C:C then S1:S else S2:S { return [ 'ifthenelse', C, S1, S2 ]; }
        / O                          { return 'O'; }
    _ = ' '*
    C = _'c'_                        { return 'c'; }
    O = _'o'_                        { return 'o'; }
    else = _'else'_                 
    if = _'if'_
    then = _'then'_

el lenguaje reconocido cambia (vease el ejemplo en la sección
[subsection:pegvsgrammars]):

    [~/srcPLgrado/pegjs/examples(master)]$ pegjs danglingelse2.pegjs 
    [~/srcPLgrado/pegjs/examples(master)]$ cat use_danglingelse2.js 
    var PEG = require("./danglingelse2.js");
    var r = PEG.parse("if c then if c then o else o");
    console.log(JSON.stringify(r));

    [~/srcPLgrado/pegjs/examples(master)]$ node use_danglingelse2.js 

    /Users/casiano/local/src/javascript/PLgrado/pegjs/examples/danglingelse2.js:513
          throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
                ^
    SyntaxError: Expected " " or end of input but "e" found.

Not Predicate: Comentarios Anidados
-----------------------------------

The following recursive program matches Pascal-style nested comment
syntax:

    (* which can (* nest *) like this *)

    [~/srcPLgrado/pegjs/examples(master)]$ cat pascal_comments.pegjs 
    /* Pascal nested comments */

    P     =   prog:N+                       { return prog; }
    N     =   chars:$(!Begin .)+            { return chars;}
            / C
    C     = Begin chars:$T* End             { return "C: "+chars; }
    T     =   C 
            / (!Begin !End char:.)          { return char;}
    Begin = '(*'
    End   = '*)'

    $ cat use_pascal_comments.js 
    var PEG = require("./pascal_comments.js");
    var r = PEG.parse(
      "not bla bla (* pascal (* nested *) comment *)"+
      " pum pum (* another comment *)");
    console.log(r);

    $ ../bin/pegjs pascal_comments.pegjs 
    $ node use_pascal_comments.js 
    [ 'not bla bla ',
      ' pascal  nested  comment ',
      ' pum pum ',
      ' another comment ' ]

-   [~/srcPLgrado/pegjs/examples(master)]$ pwd -P
        /Users/casiano/local/src/javascript/PLgrado/pegjs/examples

-   [~/srcPLgrado/pegjs/examples(master)]$ git remote -v
        dmajda  https://github.com/dmajda/pegjs.git (fetch)
        dmajda  https://github.com/dmajda/pegjs.git (push)
        origin  git@github.com:crguezl/pegjs.git (fetch)
        origin  git@github.com:crguezl/pegjs.git (push)

-   

Un Lenguaje Dependiente del Contexto
------------------------------------

El lenguaje $$\{ a^n b^n c^n / n \in \mathcal{N} \}$$ no puede ser
expresado mediante una gramática independiente del contexto.

    [~/srcPLgrado/pegjs/examples(master)]$ cat anbncn.pegjs 
    /*
      The following parsing expression grammar describes the classic 
      non-context-free language : 
                   { a^nb^nc^n / n >= 1 }
    */

    S = &(A 'c') 'a'+ B:B !.  { return B; }
    A = 'a' A:A? 'b' { if (A) { return A+1; } else return 1; }
    B = 'b' B:B? 'c' { if (B) { return B+1; } else return 1; }

Este ejemplo puede ser obtenido desde GitHub:

    [~/Dropbox/src/javascript/PLgrado/pegjs/examples(master)]$ git remote -v
    dmajda  https://github.com/dmajda/pegjs.git (fetch)
    dmajda  https://github.com/dmajda/pegjs.git (push)
    origin  git@github.com:crguezl/pegjs.git (fetch)
    origin  git@github.com:crguezl/pegjs.git (push)

Veamos un ejemplo de uso:

    [~/srcPLgrado/pegjs/examples(master)]$ cat use_anbncn.js 
    #!/usr/bin/env node
    var PEG = require("./anbncn.js");

    if (process.argv.length > 2) {
      try {
        var r = PEG.parse(process.argv[2]);
        console.log("ok "+JSON.stringify(r));
      }
      catch (e) {
        console.log("Grr...."+e);
      }
      process.exit(0);
    }
    var inputs = ["aabbcc", 
                  "aabbc",     // error
                  "aaabbbccc",
                  "aaaabbbccc"  // not accepted
                 ];

    for(var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      try {
        var r = PEG.parse(input);
        console.log("ok "+JSON.stringify(r));
      }
      catch (e) {
        console.log("Grr...."+e);
      }
    }

Ejecución:

    [~/srcPLgrado/pegjs/examples(master)]$ node use_anbncn.js
    ok 2
    Grr....SyntaxError: Expected "c" but end of input found.
    ok 3
    Grr....SyntaxError: Expected undefined but "a" found.

Reescriba el analizador sintáctico del lenguaje PL0 realizado en la
práctica [practica:pl0] usando .

[practica:pl0ampliado] Reescriba el analizador sintáctico del lenguaje
PL0 realizado en la práctica [practica:pl0] usando .

-   -   -   [~/srcPLgrado/pegjscalc(master)]$ pwd -P
        /Users/casiano/local/src/javascript/PLgrado/pegjscalc

-   [~/srcPLgrado/pegjscalc(master)]$ git remote -v
        heroku  git@heroku.com:pegjspl0.git (fetch)
        heroku  git@heroku.com:pegjspl0.git (push)
        origin  git@github.com:crguezl/pegjscalc.git (fetch)
        origin  git@github.com:crguezl/pegjscalc.git (push)

<!-- -->

-   Modifique `block` y `statement` para que los `procedure` reciban
    argumentos y las llamadas a procedimiento puedan pasar argumentos.
    Añada `if ... then ... else ...`.

-   Actualice la documentación de la gramática para que refleje la
    gramática ampliada

-   Limite el número de programas que se pueden salvar a un número
    prefijado, por ejemplo 10. Si se intenta salvar uno se suprime uno
    al azar y se guarda el nuevo.

-   Las pruebas deben comprobar que la asociatividad a izquierdas
    funciona bien y probar todos los constructos del lenguaje así como
    alguna situación de error

<!-- -->

-   Véase el capítulo <span>*Heroku*</span> [chapter:heroku]

-   -   Véase el capítulo <span>*DataMapper*</span> [chapter:datamapper]

This lab illustrates a problem that arises in C++. The C++ syntax does
not disambiguate between expression statements (`stmt`) and declaration
statements (`decl`). The ambiguity arises when an expression statement
has a function-style cast as its left-most subexpression. Since C does
not support function-style casts, this ambiguity does not occur in C
programs. For example, the phrase

`int (x) = y+z;`

parses as either a `decl` or a `stmt`.

The disambiguation rule used in C++ is that <span>*if the statement can
be interpreted both as a declaration and as an expression, the statement
is interpreted as a declaration statement.* </span>

The following examples disambiguate into <span>*expression*</span>
statements when the potential <span>*declarator*</span> is followed by
an operator different from equal or semicolon (`type_spec` stands for a
type specifier):

<span>|p<span>3.5cm</span>|p<span>4.5cm</span>|</span> expr & dec\

    type_spec(i)++;      
    type_spec(i,3)<<d;  
    type_spec(i)->l=24;

&

    type_spec(*i)(int); 
    type_spec(j)[5];   
    type_spec(m) = { 1, 2 }; 
    type_spec(a);              
    type_spec(*b)();          
    type_spec(c)=23;         
    type_spec(d),e,f,g=0;   
    type_spec(h)(e,3);     

\

Regarding to this problem, Bjarne Stroustrup remarks:

> Consider analyzing a statement consisting of a sequence of tokens as
> follows:
>
>                   type_spec (dec_or_exp) tail
>
> Here `dec_or_exp` must be a declarator, an expression, or both for the
> statement to be legal. This implies that `tail` must be a semicolon,
> something that can follow a parenthesized declarator or something that
> can follow a parenthesized expression, that is, an initializer,
> `const`, `volatile`, `(`, `[`, or a postfix or infix operator. The
> general cases cannot be resolved without backtracking, nested grammars
> or similar advanced parsing strategies. In particular, the lookahead
> needed to disambiguate this case is not limited.

The following grammar depicts an oversimplified version of the C++
ambiguity:

    $ cat CplusplusNested.y 
    %token ID INT NUM

    %right '='
    %left '+'

    %%
    prog:
        /* empty */
      | prog stmt
    ;

    stmt: 
        expr ';' 
      | decl    
    ;

    expr:
        ID 
      | NUM
      | INT '(' expr ')' /* typecast */ 
      | expr '+' expr
      | expr '=' expr
    ;

    decl:
        INT declarator ';'
      | INT declarator '=' expr ';'
    ;

    declarator:
        ID 
      | '(' declarator ')'
    ;

    %%

Escriba un programa PegJS en CoffeeScript que distinga correctamente
entre declaraciones y sentencias. Este es un ejemplo de un programa que
usa una solución al problema:

    [~/Dropbox/src/javascript/PLgrado/pegjs-coffee-plugin/examples(master)]$ cat use_cplusplus.coffee 
    PEG = require("./cplusplus.js")
    input = "int (a); int c = int (b);"

    r = PEG.parse(input)
    console.log("input = '#{input}'\noutput="+JSON.stringify r)

    input = "int b = 4+2  ;  "
    r = PEG.parse(input)
    console.log("input = '#{input}'\noutput="+JSON.stringify r)

    input = "bum = caf = 4-1;\n"
    r = PEG.parse(input)
    console.log("input = '#{input}'\noutput="+JSON.stringify r)

    input = "b2 = int(4);"
    r = PEG.parse(input)
    console.log("input = '#{input}'\noutput="+JSON.stringify r)

    input = "int(4);"
    r = PEG.parse(input)
    console.log("input = '#{input}'\noutput="+JSON.stringify r)

Y este un ejemplo de salida:

    $ pegcoffee cplusplus.pegjs 
    $ coffee use_cplusplus.coffee 
    input = 'int (a); int c = int (b);'
    output=["decl","decl"]
    input = 'int b = 4+2  ;  '
    output=["decl"]
    input = 'bum = caf = 4-1;
    '
    output=["stmt"]
    input = 'b2 = int(4);'
    output=["stmt"]
    input = 'int(4);'
    output=["stmt"]

El objetivo de esta práctica es crear un lenguaje de programación
imperativa sencillo de estilo . Para ello lea el capítulo del de . Haga
todos los ejercicios e implemente el lenguaje descrito.

Puede encontrar una solución a la práctica en GitHub en el repositorio
de . Usela como guía cuando se sienta desorientado.

-   por Nathan Whitehead

-   Repositorio con las soluciones a esta práctica.

    -   Blog de

-   Repositorio con las soluciones a esta práctica.

-   Repositorio con contenidos del curso PL101

-   -   Sobre Nathan Whitehead

    -   -   -   



<!-- toc -->

### Parsing, Compiling, and Static Metaprogramming 

Talk by Patrick Dubroy: Parsing, Compiling, and Static Metaprogramming 
given during JSConf EU 2013. A fantastic introduction to *Language Processors* 
including PEG.js

{% youtube %}https://youtu.be/UqTlToUYK1E{%endyoutube %}


* [This repository](https://github.com/pdubroy/jsconfeu-talk) contains code samples from the talk 
[Parsing, Compiling, and Static Metaprogramming](https://youtu.be/UqTlToUYK1E) at [JSConfEU 2013](http://2013.jsconf.eu/speakers/videos.html). 

* You can find [slides for the
talk on Speaker Deck](https://speakerdeck.com/pdubroy/parsing-compiling-and-static-metaprogramming).

* [Video of the talk at JSConfEU 2013](http://2013.jsconf.eu/speakers/patrick-dubroy-parsing-compiling-and-static-metaprogramming.html)

#### Esprima Examples

* `checkstyle.coffee` and `logging.coffee` contain the original source code for
the style checker and logging examples presented in the talk. 
* `checkstyle.js` and `logging.js` are the slightly simplified JS versions that were shown in
the talk.

#### Esprima, Estraverse, Escope y Escodegen

* [Esprima](http://esprima.org/)
* [Estraverse](https://github.com/estools/estraverse)
* [Escope](https://github.com/estools/escope)
* [Escodegen](https://github.com/estools/escodegen)
* [ast-types](https://www.npmjs.com/package/ast-types) an efficient, modular, Esprima-compatible implementation of the abstract syntax tree type hierarchy pioneered by the [Mozilla Parser API](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API).

#### Tutoriales

* [Getting Started with Esprima](http://thejackalofjavascript.com/getting-started-esprima/)
* [JQuerySF - Ariya Hidayat & Mike Sherov - JavaScript Syntax Tree Demystified](https://youtu.be/954lRqSI_Ro)


#### AST Specification

* [This document specifies the core ESTree AST node types that support the ES5 grammar](https://github.com/estree/estree/blob/master/spec.md)

#### Análisis Estático /Static Analysis

* [Fun with Esprima and Static Analysis](http://tobyho.com/2013/12/02/fun-with-esprima/)
* Javascript Code Analysis with Esprima
  * {% youtube %}https://youtu.be/ACYZFkvq0Sk{% endyoutube %}
  * [Trasparencias de "JavaScript Parser Infrastructure for Code Quality Analysis"](http://www.slideshare.net/ariyahidayat/javascript-parser-infrastructure-for-code-quality-analysis)

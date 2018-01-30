## Preguntas de Repaso de Análisis Léxico

1. Escriba un método `bexec` para los objetos `RegExp`que funcione como `exec`
pero sólo case en la posición `lastIndex`:

```
        RegExp.prototype.bexec = function(str) {
          __________________________
          __________________________
          __________________________
          __________________________
          __________________________
          __________________________
          __________________________
        };
```

2. Basándose en el método `bexec` del ejercicio anterior escriba las partes que faltan del 
método `tokens` que implementa  un analizador léxico para un lenguaje de tipo JavaScript 
en el que `if`  y `then` son palabras reservadas:

```
  String.prototype.tokens = function() {
    var RESERVED_WORD, from, getTok, i, key, m, make, n, result, rw, tokens, value;
    from = 0;
    i = 0;
    n = 0;
    m = 0;
    result = [];
    tokens = {
      WHITES: ____________________________________________,
      ID: ____________________________________________,
      NUM: ____________________________________________,
      STRING: ____________________________________________,
      ONELINECOMMENT: ____________________________________________,
      MULTIPLELINECOMMENT: ____________________________________________,
      COMPARISONOPERATOR: ____________________________________________,
      ONECHAROPERATORS: /([=()&|;:,{}[\]])/g,
      ADDOP: /[+-]/g,
      MULTOP: /[*\/]/g
    };
    RESERVED_WORD = {
      "if": "IF",
      then: "THEN"
    };
```

Explique como se usa en el análisis el objeto `RESERVED_WORD` y para que sirve.
Observe su uso en el bucle

```
    make = function(type, value) {
      return {
        type: type,
        value: value,
        from: from,
        to: i
      };
    };
    getTok = function() {
      var str;
      str = m[0];
      i += _____________________;
      return str;
    };
    if (!this) {
      return;
    }
    while (i < this.length) {
      for (key in tokens) {
        value = tokens[key];
        ________________________
      }
      from = __________;
      if (m = tokens.WHITES.bexec(this) || 
         (m = tokens.ONELINECOMMENT.bexec(this)) || 
         (m = tokens.MULTIPLELINECOMMENT.bexec(this))) {
        _________________________________;
      } else if (m = tokens.ID.bexec(this)) {
        rw = RESERVED_WORD[m[0]];
        if (rw) {
          result.push(make(rw, getTok()));
        } else {
          result.push(_____________________________________);
        }
      } else if (m = tokens.NUM.bexec(this)) {
        n = +getTok();
        if (isFinite(n)) {
          result.push(____________________________________);
        } else {
          make("NUM", m[0]).error("Bad number");
        }
      } else if (m = tokens.STRING.bexec(this)) {
        result.push(make("STRING", getTok().replace(_______________________/g, "")));
      } else if (m = tokens.COMPARISONOPERATOR.bexec(this)) {
        result.push(make("COMPARISON", getTok()));
      } else if (m = tokens.ADDOP.bexec(this)) {
        result.push(make("ADDOP", getTok()));
      } else if (m = tokens.MULTOP.bexec(this)) {
        result.push(make("MULTOP", getTok()));
      } else if (m = tokens.ONECHAROPERATORS.bexec(this)) {
        result.push(make(m[0], getTok()));
      } else {
        throw "Syntax error near '" + (this.substr(i)) + "'";
      }
    }
    return result;
  };
```

/*
This example illustrates a problem 
that arises in C++.
The C++ syntax does not disambiguate between expression
statements (stmt) and declaration statements (decl). 
The ambiguity arises when an expression
statement has a function-style cast as its left-most subexpression.
Since C does not support function-style casts, this ambiguity does not occur
in C programs.
For example, the phrase 
             int (x) = y+z;
parses as either a decl or a stmt.

The disambiguation rule used in C++ is that 
"if the statement can be interpreted both as a declaration and
as an expression, the statement is interpreted as a 
declaration statement."

The following simplified grammar summarizes the problem:

%token ID INT NUM

%right '='
%left '+'

%%
prog:
    
  | prog stmt
;

stmt: 
    expr ';' 
  | decl    
;

expr:
    ID 
  | NUM
  | INT '(' expr ')' 
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

*/

prog = s:(stmt *) _           {  s  }
stmt = 
    decl                      {  'decl' }
  / e:expr SEMICOLON          {  'stmt' }

expr = assign (ASSIGN assign)*  

assign = t1:term t2:(ADDOP term)*   

term = value (MULOP value)*   

value   = NUM                      
        / LEFTPAR expr RIGHTPAR   
        / INT LEFTPAR expr RIGHTPAR  
        / ID
decl =
    INT dec:declarator SEMICOLON      
  / INT dec:declarator ASSIGN e:expr SEMICOLON  

declarator = 
    id:ID                                  
  / LEFTPAR dec:declarator RIGHTPAR       


_   "whites" = [ \t\n\r]*

ASSIGN = _ '='              { '=' }

ID  = _ id:([a-zA-Z_] [a-zA-Z_0-9]*)   { id[0]+id[1].join('') }

NUM "number" = _ num:[0-9]+ { num.join('') }

INT = _ 'int'               { 'int' }

SEMICOLON = _ ';'           { ';' }

LEFTPAR   = _ '('

RIGHTPAR   = _ ')'

ADDOP   "additive operator" = _ [+-]

MULOP "multiplicative operator" = _ [*/]

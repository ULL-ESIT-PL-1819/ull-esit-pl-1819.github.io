## Preguntas de Repaso de ECMA6

1.  Observemos este ejemplo:

```javascript
  class Contact {
     constructor(name, email, button) {
       this.name = name;
       this.email = email;

       button.onclick = function(event) {
         sendEmail(this.email);
       }
     }
   }
```

  1.  ¿Cuanto vale `this` en la línea 6?

  2.  ¿Como podemos reescribir este código en ECMA6 para que `this`
      refiera al objeto `Contact`?

2.  ¿Que se entiende por Hoisting en JS? ¿Que efectos indeseables
    conlleva? ¿Como se soluciona en ECMA6?

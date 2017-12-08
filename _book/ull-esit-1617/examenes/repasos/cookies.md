## Preguntas de Repaso de Cookies

1. Defina y explique el concepto de Cookie
2. Defina y explique el concepto de Cookie para la Gestión de una Sesión
3. Defina y explique el concepto de Cookie para la Autenticación en un Website
3.  ¿Que es un secure cookie? (cookie seguro)
<!--
A secure cookie has the secure attribute enabled and is only used via HTTPS, ensuring that the cookie is always encrypted when transmitting from client to server. This makes the cookie less likely to be exposed to cookie theft via eavesdropping.
-->
4. ¿Como se llama el middleware express que me facilita el manejo de los cookies?
¿Cual es el código para poner en funcionamiento dicho middleware?
<!--
```
% cookie-parser
% var cookieParser = require('cookie-parser');
% app.use(cookieParser());
```
-->
5. Dentro de un middleware express ¿Cómo se llama el método 
del objeto `res` que me permite establecer un cookie? ¿Que argumentos recibe?
<!--
```
%   res.cookie('cookie_name', 'cookie_value', {expire : new Date() + 9999}).send(
%      "Cookie is set: goto to browser's console and write document.cookie.");
```
-->
6. ¿Que método del objeto `request` me permite ver los cookies establecidos?
<!--
```
console.log("Cookies :  ", req.cookies);
```
-->
7. ¿Como borro un cookie en el servidor express?
<!--
```
res.clearCookie('cookie_name');
```
-->
8. ¿Que es la Query String? Ponga un ejemplo de Query String
<!--
On the World Wide Web, a query string is the part of a uniform resource locator (URL) containing data that does not fit conveniently into a hierarchical path structure. The query string commonly includes fields added to a base URL by a Web browser or other client application, for example as part of an HTML form.
A typical URL containing a query string is as follows:
```
http://example.com/over/there?name=ferret
```
-->
9. If a form is embedded in an HTML page as follows:
```html
<form action="/hello" method="get">
  <input type="text" name="first" />
  <input type="text" name="second" />
  <input type="submit" />
</form>
```
and the user inserts the strings `this is a field` and 
`was it clear already` in the two text fields and presses the `submit` 
button,
the handler of the route `/hello` (the route specified by the `action` 
attribute
of the form element in the above example) will receive a 
query string. Write down the query string it receives
<!--
```
first=this+is+a+field&second=was+it+clear+already
```
-->

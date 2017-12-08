## Cookies


* An **HTTP cookie** (web cookie, browser cookie) is a small piece of data that a server sends to the user's web browser, that may store it and send it back together with the next request to the same server. See [HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) at MDN
* Cookies were designed to be a reliable mechanism for websites to remember stateful information 
* They can be used to remember arbitrary pieces of information that the
user previously entered into form fields 
*  **Cookies for Session Management**: the server sends a cookie to the client using a [set-cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) header. The cookie contains a unique session identifier (typically, a long string of random letters and numbers). 
  - Because cookies are sent to the server with every request the client makes, that session identifier will be sent back to the server every time the user visits a new page on the website, which lets the server know which client is
* **Cookies for logging into websites**: When the user visits a website's login page, the web server typically sends the client a cookie containing a unique session identifier. When the user successfully logs in, the server remembers that that particular session identifier has been authenticated, and grants the user access to its services.
* **Session cookie**: exists only in temporary memory while the user navigates the website. Web browsers normally delete session cookies when the user closes the browser
* **Persistent cookie**: expires at a specific date or after a specific length of time.

### Ejemplo Simple

#### Fichero `hello-cookie.js`
[import, title:"hello-cookie.js"](src/hello-cookie.js)

### Cookies sin Express ni cookie-parser (HTTP NodeJS)

#### Fichero `cookie.js`

Este ejemplo no hace uso de ExpressJS ni de cookie-parser:

[import](src/cookie.js)

* [Wikipedia: Query String](https://en.wikipedia.org/wiki/Query_string)
  - The query string commonly includes fields added to a base URL by a Web browser or other client application, for example as part of an HTML form
* [cookie module](https://www.npmjs.com/package/cookie)
* [response.setHeader(name, value)](https://nodejs.org/api/http.html#http_response_setheader_name_value)
* [Wikipedia: HTTP 302. Redirection](https://en.wikipedia.org/wiki/HTTP_302)

###Recursos

* [Repositorio con ejemplos de uso de cookies en express](https://github.com/ULL-ESIT-DSI-1617/express-cookies-examples)

### Tutoriales 
* [Cookie Management in Express](https://www.codementor.io/noddy/cookie-management-in-express-js-du107rmna) 
  - [hello-cookie.js](https://github.com/ULL-ESIT-DSI-1617/express-cookies-examples/blob/master/hello-cookie.js)
* [A very basic session auth in node.js with express.js](http://www.codexpedia.com/node-js/a-very-basic-session-auth-in-node-js-with-express-js/)
* [Ejemplo de como proteger un gitBook usando sesiones](https://github.com/ULL-ESIT-DSI-1617/evaluar-manejo-de-cookies-y-sessions-en-expressjs-alu0100825510)

### Cookies y Seguridad

#### cookieParser(secret, options)

- `secret` a string or array used for signing cookies. 
  - This is optional and if not specified, will not parse signed cookies. 
  - If a string is provided, this is used as the secret. 
  - If an array is provided, an attempt will be made to unsign the cookie with each secret in order.
- `options` an object that is passed to `cookie.parse` as the second option. See [cookie](https://www.npmjs.org/package/cookie) for more information.
  - `decode` a function to decode the value of the cookie

#### HttpOnly

* `HttpOnly` is a flag that can be included in a `Set-Cookie` response header. 
* The presence of this flag will tell browsers to not allow client side script access to the cookie (if the browser supports it). 
* This is important because it helps protect your cookie data from malicious scripts and helps mitigate the most common XSS attacks.
  - Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted web sites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user.
* Here is how you can tell Express to set your cookie using the HttpOnly flag:
```javascript
res.cookie('sessionid', '1', { httpOnly: true });
```

#### Secure

* The Secure flag is included in a `Set-Cookie` response header. 
* The presence of the secure flag tells web browsers to only send this cookie in requests going to HTTPS endpoints. 
* This is very important, as the cookie information will not be sent on an unencrypted channel. 
* This helps mitigate some exploits where your browser is redirected to the HTTP endpoint for a site rather than the HTTPS endpoint and thus potentially exposing your cookies to someone in the middle of the traffic.
* Here is how you can tell Express to set your cookie using the Secure flag:
```javascript
res.cookie('sessionid', '1', { secure: true });
```


#### Query String

A query string is the part of a uniform resource locator (URL)
containing data that does not fit conveniently into a hierarchical
path structure. The query string commonly includes fields added to
a base URL by a Web browser or other client application, for example
as part of an HTML form

##### Example
If a form is embedded in an HTML page as follows:
```html
<form action="/hello" method="get">
  <input type="text" name="first" />
  <input type="text" name="second" />
  <input type="submit" />
</form>
```

and the user inserts the strings `this is a field` and 
`was it clear (already)?` in the two text fields and presses the `submit` 
button,
the handler of the route `/hello` (the route specified by the `action` 
attribute
of the form element in the above example) will receive the following
query string:

```
first=this+is+a+field&second=was+it+clear+%28already%29%3F.
```

If the form is processed on the server by a CGI script, the script may typically receive the query string as an environment variable named `QUERY_STRING`.


### Apuntes en Ruby sobre Cookies

* [Cookies y Rack](http://crguezl.github.io/apuntes-ruby/node401.html)
* [Sesiones y Cookies en Sinatra](http://crguezl.github.io/apuntes-ruby/node455.html)
* [HTTP](http://crguezl.github.io/apuntes-ruby/node388.html)


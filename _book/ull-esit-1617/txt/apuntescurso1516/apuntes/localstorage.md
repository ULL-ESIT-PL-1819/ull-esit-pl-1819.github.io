##Local Storage (HTML5 Web Storage)

Web storage and DOM storage 
(document object model) are web application
software methods and protocols used for storing data in a web browser. 

* Web storage supports persistent data storage, similar to cookies but with
a greatly enhanced capacity and no information stored in the HTTP
request header.

* Local Storage nos permite almacenar hasta 5MB del lado del cliente
por dominio, esto nos permite ahora hacer aplicaciones mas robustas y
con mas posibilidades. Las Cookies ofrecen algo
parecido, pero con el limite de 100kb.

* There are two main web storage types: local storage
and session storage, behaving similarly to persistent cookies and session
cookies respectively.
* Unlike cookies, which can be accessed by both the server and client side, web storage falls exclusively under the purview of client-side scripting
* The HTML5 localStorage object is isolated per domain (the same segregation rules as the same origin policy.
Under this policy, a web browser permits scripts contained in a first web page to access data in a second web page, but only if both web pages have the same origin. 

The same-origin policy **permits scripts running on pages originating from the same site** 
– a combination of scheme, hostname, and port number – to access each other's DOM with no specific restrictions, **but prevents access to DOM on different sites**.

Véase:

* Ejemplo en  GitHub:
[https://github.com/crguezl/web-storage-example](https://github.com/crguezl/web-storage-example)
```
[~/javascript/local_storage(master)]$ pwd -P
/Users/casiano/local/src/javascript/local_storage
```
* [LocalStorage en los apuntes](http://crguezl.github.io/pl-html/node11.html#SECTION041400170000000000000)
<!--* [Como usar localstorage](http://html5facil.com/tutoriales/como-usar-local-storage-de-javascript)-->
* [HTML5 Web Storage](http://www.w3schools.com/html/html5_webstorage.asp)
* [W3C Web Storage](http://www.w3.org/TR/webstorage/)
<!--* [Using HTML5 localStorage To Store JSON](http://getfishtank.ca/blog/using-html5-localstorage-to-store-json)-->
Options for persistent storage of complex JavaScript objects in HTML5
by Dan Cruickshank
* [HTML5 Cookbook.  Christopher Schmitt, Kyle Simpson "O'Reilly Media, Inc.", Nov 7, 2011](http://books.google.es/books/about/HTML5_Cookbook.html?id=cXcaY7XVZbcC&redir_esc=y)
Chapter 10. Section 2: LocalStorage

While Chrome does not provide a UI for clearing localStorage, there is an API that will either clear a specific key or the entire localStorage object on a website.

```
//Clears the value of MyKey
window.localStorage.clear("MyKey");

//Clears all the local storage data
window.localStorage.clear();
```
Once done, localStorage will be cleared. Note that this affects
all web pages on a single domain, so if you clear localStorage for
`jsfiddfle.net/index.html` (assuming that's the page you're on), then it
clears it for all other pages on that site. 




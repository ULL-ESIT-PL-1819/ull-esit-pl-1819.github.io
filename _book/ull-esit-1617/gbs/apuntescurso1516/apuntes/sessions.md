##Sesiones

### Introducción

* Hypertext Transfer Protocol (HTTP) is stateless: a client computer running a web browser must establish a new Transmission Control Protocol (TCP) network connection to the web server with each new HTTP GET or POST request.
* The web server, therefore, cannot rely on an established TCP network connection for longer than a single HTTP GET or POST operation.
* Session management is the technique used by the web developer to make the stateless HTTP protocol support session state.
* For example, once a user has been authenticated to the web server, the user's next HTTP request (GET or POST) should not cause the web server to ask for the user's account and password again.
* The session information is stored on the web server using the session identifier generated as a result of the first (sometimes the first authenticated) request from the end user running a web browser.
* The "storage" of Session IDs and the associated session data (user name, account number, etc.) on the web server is accomplished using a variety of techniques including, but not limited to, local memory, flat files, and databases.
* A  session token  is a unique identifier that is generated and sent from a server to a client to identify the current interaction session.
* The client usually stores and sends the token as an HTTP cookie and/or sends it as a parameter in GET or POST queries. 
* The reason to use session tokens is that the client only has to handle the identifier—all session data is stored on the server (usually in a database, to which the client does not have direct access) linked to that identifier.

#### Resumiendo

1. A web server typically sends a cookie containing a **unique session identifier**.
2. **The web browser will send back that session identifier with each subsequent request** and related items are stored associated with this unique session identifier.
3. Applications today usually store the gathered information in a database on the server side, rather than storing them in cookies

### express-sessions

Véase el [módulo express-sessions](https://github.com/expressjs/session)

#### req.session

To store or access session data, simply use the request property `req.session`,
which is (generally) serialized as JSON by the store, so nested objects
are typically fine.

#### Session.destroy()

Destroys the session, removing `req.session`; will be re-generated next request.

```js
req.session.destroy(function(err) {
  // cannot access session here
})
```
#### req.session.id

Each session has a unique ID associated with it. This property will
contain the session ID and cannot be modified.

#### req.session.cookie

Each session has a unique cookie object accompany it. This allows
you to alter the session cookie per visitor. For example we can
set `req.session.cookie.expires` to `false` to enable the cookie
to remain for only the duration of the user-agent.


### Véase

* [Gestión de Sesiones en los apuntes](http://crguezl.github.io/apuntes-ruby/node402.html)
* [Gist con ejemplo simple de sesiones y cookies](https://gist.github.com/crguezl/c0a8ee1b57626066b0031edb5ab769a7)
* [cookie-session](https://github.com/expressjs/cookie-session)
* [Cookie Management in Express](https://www.codementor.io/nodejs/tutorial/cookie-management-in-express-js)
* El tutorial [Sessions in Express.js](http://expressjs-book.com/index.html%3Fp=128.html)
* el tutorial [Cookie Management in Express](https://www.codementor.io/nodejs/tutorial/cookie-management-in-express-js)

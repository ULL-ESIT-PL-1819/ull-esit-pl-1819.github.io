## Express

### Tutorial de Express
* [Home page](http://expressjs.com/)
* [Installing](http://expressjs.com/en/starter/installing.html)
* [Hello world!](http://expressjs.com/en/starter/hello-world.html)
* [Basic routing](http://expressjs.com/en/starter/basic-routing.html)
* [Static Files](http://expressjs.com/en/starter/static-files.html)
* [Repo hello-express](https://github.com/SYTW/hello-express)
* [Repo basic-routing-express](https://github.com/SYTW/basic-routing-express)

### Ejemplos sencillos

* El repositorio [hello-express](https://github.com/SYTW/hello-express)
* [Ejemplos de routing](https://github.com/SYTW/basic-routing-express)
* [Following the tutorials at express.com](https://github.com/crguezl/express-start)
* [JS and express.js example of how to load the contents of a file inside a textarea tag](https://github.com/crguezl/expressloadfileontotextarea)

### Middlewares

Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the `next` middleware function in the application’s request-response cycle. The `next` middleware function is commonly denoted by a variable named `next`.

![rack](http://crguezl.github.io/apuntes-ruby/rack.jpeg)

![express](https://blog.lambda3.com.br/wp-content/uploads//2016/01/Middleware-Pipeline.jpg)

![rack](pipeline.png)

### The Request Object

The [req object](http://expressjs.com/en/api.html#req) represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.

```javascript
app.get('/user/:id', function(req, res) {
  res.send('user ' + req.params.id);
});
```

!INCLUDE "expressroutes.md"

!INCLUDE "expressgenerator.md"

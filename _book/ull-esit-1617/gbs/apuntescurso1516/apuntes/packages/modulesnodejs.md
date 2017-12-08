<!-- toc -->

## Módulos en Node.js

### Introducción

Node.js has a simple module loading system. In Node.js, files and modules are in one-to-one correspondence. As an example, `foo.js` loads the module `circle.js` in the same directory.

The contents of `foo.js`:

```javascript
const circle = require('./circle.js');
console.log( `The area of a circle of radius 4 is ${circle.area(4)}`);
```

The contents of circle.js:

```javascript
const PI = Math.PI;

exports.area = (r) => PI * r * r;

exports.circumference = (r) => 2 * PI * r;
```

The module circle.js has exported the functions `area()` and `circumference()`. To add functions and objects to the root of your module, you can add them to the special `exports` object.

Variables local to the module will be private, as though the module was wrapped in a function. In this example the variable `PI` is private to `circle.js`.

f you want the root of your module's export to be a function (such as a constructor) or if you want to export a complete object in one assignment instead of building it one property at a time, assign it to `module.exports` instead of `exports`.

Below, `bar.js` makes use of the square module, which `exports` a constructor:

```javascript
const square = require('./square.js');
var mySquare = square(2);
console.log(`The area of my square is ${mySquare.area()}`);
```

The `square` module is defined in `square.js`:

```javascript
// assigning to exports will not modify module, must use module.exports
module.exports = (width) => {
  return {
    area: () => width * width
  };
}
```

The module system is implemented in the `require("module")` module.

### Buscar por un Módulo: Better local require() paths for Node.js

Véase  [Better local require() paths for Node.js](http ://gist.github.com/branneman/8048520)

!INCLUDE "better-nodejs-require-paths.md"

### Véase También

* [Node.js Modules](https://nodejs.org/api/modules.html#modules_modules)
* [Understanding module.exports and exports in Node.js](http://www.sitepoint.com/understanding-module-exports-exports-node-js/)
* [Node.js, Require and Exports](http://openmymind.net/2012/2/3/Node-Require-and-Exports/)
* [Creating and publishing a node.js module](https://quickleft.com/blog/creating-and-publishing-a-node-js-module/)

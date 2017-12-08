### Bower

Bower es un gestor de paquetes para el front-end.
Es como `npm` pero para el front-end.

#### Problems that bower solves

Developing a website or web application nowadays requires the usage of many front-end frameworks, such as Bootstrap, jQuery, Angular, etc.

1. Downloading each one of these packages requires navigating the corresponding website, finding the appropriate version, downloading it, unzipping and finally moving the mainfiles to the `vendor` folder. (e.g.: the main file in in jquery package is jquery.js)
2. After having the files downloaded in your repository, you have to manually visit all the above websites (jquery.com, angularjs.com, bootstrap.com) to check for updates and guess what? If there is an update, you have to repeat step 1 for each package/update.
3. Let’s assume we’re going to use Bootstrap which requires jQuery (called dependency). When you go to getbootstrap.com to downoad it, you will then have to navigate to jquery.com to download jquery as well.

In summary, bower helps you manage your front-end packages. It helps you download them, update them and resolve their dependencies.

#### Tutorial

* [Creación de paquetes](http://bower.io/docs/creating-packages/#bowerjson)
* [Comandos](http://bower.io/docs/api/)
* [Configuración](http://bower.io/docs/config/)
* [Pluggable Resolvers](http://bower.io/docs/pluggable-resolvers/)
* [Herramientas](http://bower.io/docs/tools/)

#### Ejemplo de `bower.json`

```javascript
{
  "name": "rpd7",
  "description": "Práctica: Comma Separated Values",
  "main": "index.js",
  "authors": [
    "Rafael Herrero",
    "Pedro Ramos",
    "Daniel Ramos"
  ],
  "license": "MIT",
  "keywords": [
    "JQuery",
    "LocalStorage",
    "Underscore",
    "Express",
    "Sass",
    "Materialize",
    "Heroku",
    "HTML",
    "Javascript",
    "CSS"
  ],
  "homepage": "https://github.com/ULL-ESIT-GRADOII-DSI/localstorage-jquery-underscore-express-sass-heroku-rafa-pedro-dani",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ],
  "dependencies": {
    "Materialize": "materialize#^0.97.6",
    "underscore": "^1.8.3",
    "jquery": "^2.2.3"
  }
}
```

#### BOWER! - Streamline Web Workflow with Bower Package Manager

{% youtube %}https://youtu.be/Vs2wduoN9Ws{% endyoutube %}

#### Véase

* [Bower](http://bower.io/)
* [Beginners Guide: Getting Started with Bower Package Manager](https://www.codementor.io/bower/tutorial/beginner-tutorial-getting-started-bower-package-manager)
* [Checking in front-end dependencies](https://addyosmani.com/blog/checking-in-front-end-dependencies/) by Addy Osmani
  * *"If you aren’t authoring a package that is intended to be consumed by others (e.g., you’re building a web app), you should always check installed packages into source control."*
  * *"Checking in dependencies is considered a best-practice for deployable projects (not reusable modules) in Node and some feel it should be followed when using Bower too."*

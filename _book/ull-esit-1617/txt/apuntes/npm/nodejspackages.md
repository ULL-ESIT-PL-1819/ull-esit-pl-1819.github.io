### CommonJS Modules. Importación y Exportación

* [NODE.JS module patterns using simple examples](https://darrenderidder.github.io/talks/ModulePatterns). Trasparencias. Muestra ejemplos/patrones de exportación-importación (Reveal Slides)
* [Authoring CommonJS modules](http://know.cujojs.com/tutorials/modules/authoring-cjs-modules)  (CommonJS modules were conceived during the early days of server-side JavaScript environments such as node.js and Narwhal. As a result, CommonJS modules are optimized for these environments, not browser environments)

### El comando npm

* [A Beginner’s Guide to npm — the Node Package Manager](https://www.sitepoint.com/beginners-guide-node-package-manager/)
* [npm](npm.html)
* [10 Tips and Tricks That Will Make You an npm Ninja](https://www.sitepoint.com/10-npm-tips-and-tricks/)

### Ejercicio: Darse de alta en NPM

Para comenzar, crearemos una cuenta de usuario en el repositorio de NPM mediante la cual publicar nuestros propios paquetes:

1. Abrir el navegador.
2. Ir a [https://npmjs.org](https://npmjs.org)
3. Hacer clic en el enlace [sign up](https://www.npmjs.com/login)
4. Rellenar el formulario de alta:
  - ![Formulario para crear la cuenta en npmjs.org](crearcuentanpm.png)
5. Aceptar los términos de licencia.
6. Hacer clic en el botón Create an Account para crear la cuenta.
7. Una vez creada la cuenta, hay que abrir sesión con el servidor NPM para poder publicar paquetes en él. Abrir una consola.
8. Conectar al repositorio: 
   1. `$ npm login`
   2. Rellene los datos que le solicita.
   3. Consultar la cuenta con la que tenemos abierta la sesión:
   ```
    $ npm whoami
   ```

### Creación de Paquetes y Módulos en NodeJS

* [Creating and Publishing a Node.js Module](https://quickleft.com/blog/creating-and-publishing-a-node-js-module/) por Brent Ertz
* El paquete de ejemplo usado en este tutorial [@ull-esit-dsi-1617/scapegoat](https://www.npmjs.com/package/@ull-esit-dsi-1617/scapegoat) en npm
* El paquete de ejemplo usado en este tutorial [@ull-esit-dsi-1617/scapegoat](https://github.com/ULL-ESIT-DSI-1617/scapegoat) en GitHub
* Para escribir documentación para una API 
  - Véase [documentation.js](http://documentation.js.org/), 
  - [jsdoc](https://www.npmjs.com/package/jsdoc), 
  - [docco](http://jashkenas.github.io/docco/)
* Notas:
  -  For example, you can install packages directly from Github, and even specify a tag, sha, or branch if you want.

          npm install git://github.com/brentertz/scapegoat.git
          npm install git://github.com/brentertz/scapegoat.git#0.1.0

    must be https or git+ssh. See [How to install an npm package from GitHub directly?](https://stackoverflow.com/questions/17509669/how-to-install-an-npm-package-from-github-directly) in StackOverflow
  - Publicación con ámbito en una organización:

          [/tmp/scapegoat(master)]$ npm publish --access public
          + @ull-esit-dsi-1617/scapegoat@1.0.2
* Código 
```bash
[~/javascript/evalua-module/scapegoat(master)]$ pwd -P
/Users/casiano/local/src/javascript/evalua-module/scapegoat
[~/javascript/evalua-module/scapegoat(master)]$ tree -I 'node_modules|docs'
.
├── LICENSE-MIT
├── README.md
├── index.js
├── package.json
└── test
    └── index.js

1 directory, 5 files
[~/javascript/evalua-module/scapegoat(master)]$ cat package.json 
{
  "name": "@ull-esit-dsi-1617/scapegoat",
  "version": "1.0.4",
  "description": "A small library providing utility methods to escape and unescape HTML entities",
  "main": "index.js",
  "scripts": {
    "test": "./node_modules/.bin/mocha --reporter spec",
    "doc": "documentation build index.js -f html -o docs"
  },
  "repository": {
    "type": "git",
    "url": "git@github.com:ULL-ESIT-DSI-1617/scapegoat.git"
  },
  "keywords": [
    "escape",
    "unescape",
    "html"
  ],
  "author": "Casiano Rodriguez <casiano.rodriguez.leon@gmail.com>",
  "licenses": [
    {
      "type": "MIT",
      "url": "https://github.com/ULL-ESIT-DSI-1617/scapegoat/blob/master/LICENSE-MIT"
    }
  ],
  "bugs": {
    "url": "https://github.com/ULL-ESIT-DSI-1617/scapegoat/issues"
  },
  "devDependencies": {
    "mocha": "*",
    "chai": "*"
  }
}
```
### Semantic versioning and npm

* [Semantic versioning and npm](https://docs.npmjs.com/getting-started/semantic-versioning)
* [Semantic Versioning: Why You Should Be Using it](https://www.sitepoint.com/semantic-versioning-why-you-should-using/) SitePoint
* [YouTube Video: Semantic versioning and npm](https://youtu.be/kK4Meix58R4)

### NPM: Otros tutoriales

* [Your first Node.js package  por Elijah Insua](https://nodesource.com/blog/your-first-nodejs-package/)

### NPM: Video Tutoriales

* [Creating NodeJS modules](https://youtu.be/3I78ELjTzlQ)
* [Publishing npm Packages](https://youtu.be/BkotrAFtBM0)
* [Node js Tutorial: How to create NPM package?](https://youtu.be/sELoj6e1ffM)


### Package.json

* [Package.json documentation en npm site](https://docs.npmjs.com/files/package.json)

### Scoped Packages

> There are only two hard things in Computer Science: cache invalidation and naming things.

> —Phil Karlton

 Naming things is hard. It’s even harder when there are tens of thousands of other people who want to use the same names that you do. With hundred of thousands of modules on npm, it has been getting hard to find a name that isn’t taken.

Naming things just got a little bit easier for npm users with the introduction of scopes. 

What are scopes?: Scopes are like namespaces for npm packages. Each npm user has their own scope.

```
@username/project-name
```
This means that you don’t have to worry about someone else taking your package name. Only you can add packages in your scope.

Scoped modules also make it possible to put your private code on npm when you sign up for [private modules](https://www.npmjs.com/features). With private modules, you have control over who can see and collaborate on any of the modules in your scope.


Public scoped packages are free. To create a scoped package, all you need to do is add your scope to the front of the name property in `package.json` and run `npm` with the access option:

```
npm publish --access=public
```

* [Working with scoped packages](https://docs.npmjs.com/getting-started/scoped-packages)
* [npm-scope manual: Scoped packages](https://docs.npmjs.com/misc/scope#publishing-public-scoped-packages-to-the-public-npm-registry)
* [Working with npm private modules. YouTube Video](https://youtu.be/O6JoXGnHK_Y)

### NPM Documentation: Getting Started 

<ol>
<li>             <a href="https://docs.npmjs.com/getting-started/getting-started/what-is-npm" > What is npm?</a> </li>
<li>             <a href="https://docs.npmjs.com/getting-started/getting-started/installing-node" > Installing Node.js and updating npm</a> </li>
<li>             <a href="https://docs.npmjs.com/getting-started/getting-started/fixing-npm-permissions" > Fixing npm permissions</a> </li>
<li>             <a href="https://docs.npmjs.com/getting-started/getting-started/installing-npm-packages-locally" > Installing npm packages locally</a> </li>
<li>             <a href="https://docs.npmjs.com/getting-started/getting-started/using-a-package.json" > Using a &#x60;package.json&#x60;</a> </li>
<li>             <a href="https://docs.npmjs.com/getting-started/getting-started/updating-local-packages" > Updating local packages</a> </li>
<li>             <a href="https://docs.npmjs.com/getting-started/getting-started/uninstalling-local-packages" > Uninstalling local packages</a> </li>
<li>             <a href="https://docs.npmjs.com/getting-started/getting-started/installing-npm-packages-globally" > Installing npm packages globally</a> </li>
<li>             <a href="https://docs.npmjs.com/getting-started/getting-started/updating-global-packages" > Updating global packages</a> </li>
            <a href="https://docs.npmjs.com/getting-started/getting-started/uninstalling-global-packages" > Uninstalling global packages</a>
<li>             <a href="https://docs.npmjs.com/getting-started/getting-started/creating-node-modules" > Creating Node.js modules</a> </li>
<li>             <a href="https://docs.npmjs.com/getting-started/getting-started/publishing-npm-packages" class="active"> Publishing npm packages</a> </li>
<li>             <a href="https://docs.npmjs.com/getting-started/getting-started/semantic-versioning" > Semantic versioning and npm</a> </li>
<li>             <a href="https://docs.npmjs.com/getting-started/getting-started/scoped-packages" > Working with scoped packages</a> </li>
<li>             <a href="https://docs.npmjs.com/getting-started/getting-started/using-tags" > Using tags</a> </li>
</ol>
<!-- * [Publishing npm packages tutorial](https://docs.npmjs.com/getting-started/publishing-npm-packages) * [npm documentation: Creating Node.js modules](https://docs.npmjs.com/getting-started/creating-node-modules) -->

### NPM: Herramientas de ayuda

* [Interactive release tool for Git repositories. Options: run build command first, release to distribution repository (or branch), create GitHub release, publish to npm](https://github.com/webpro/release-it)


### npm Organizations /npm Organizaciones

<nav role="navigation">
<ul class="summary">
        <li class="chapter " data-level="1.1" data-path="./">
                <a href="https://www.npmjs.com/docs/orgs/./">
                    Introduction
                </a>
        </li>
        <li class="chapter " data-level="1.2" data-path="getting-started.html">
                <a href="https://www.npmjs.com/docs/orgs/getting-started.html">
                    Getting Started
                </a>
        </li>
        <li class="chapter active" data-level="1.3" data-path="roles-and-privileges.html">
                <a href="https://www.npmjs.com/docs/orgs/roles-and-privileges.html">
                    Roles and Privileges
                </a>
        </li>
        <li class="chapter " data-level="1.4" data-path="managing-members.html">
                <a href="https://www.npmjs.com/docs/orgs/managing-members.html">
                    Managing Members
                </a>
        </li>
        <li class="chapter " data-level="1.5" data-path="the-developers-team.html">
                <a href="https://www.npmjs.com/docs/orgs/the-developers-team.html">
                    The Developers Team
                </a>
        </li>
        <li class="chapter " data-level="1.6" data-path="managing-teams.html">
                <a href="https://www.npmjs.com/docs/orgs/managing-teams.html">
                    Managing Teams
                </a>
        </li>
        <li class="chapter " data-level="1.7" data-path="publishing-an-org-scoped-package.html">
                <a href="https://www.npmjs.com/docs/orgs/publishing-an-org-scoped-package.html">
                    Publishing an Org Scoped Package
                </a>
        </li>
        <li class="chapter " data-level="1.8" data-path="configuring-npm-for-your-org.html">
                <a href="https://www.npmjs.com/docs/orgs/configuring-npm-for-your-org.html">
                    Configuring npm for your Org
                </a>
        </li>
        <li class="chapter " data-level="1.9" data-path="managing-package-access.html">
                <a href="https://www.npmjs.com/docs/orgs/managing-package-access.html">
                    Managing Package Access
                </a>
        </li>
        <li class="chapter " data-level="1.10" data-path="migrating-a-user-account.html">
                <a href="https://www.npmjs.com/docs/orgs/migrating-a-user-account.html">
                    Migrating a User Account
                </a>
        </li>
        <li class="chapter " data-level="1.11" data-path="managing-billing.html">
                <a href="https://www.npmjs.com/docs/orgs/managing-billing.html">
                    Managing Billing
                </a>
        </li>
        <li class="chapter " data-level="1.12" data-path="upgrading-and-downgrading.html">
                <a href="https://www.npmjs.com/docs/orgs/upgrading-and-downgrading.html">
                    Upgrading and Downgrading
                </a>
        </li>
        <li class="chapter " data-level="1.13" data-path="renaming-and-or-deleting-an-org.html">
                <a href="https://www.npmjs.com/docs/orgs/renaming-and-or-deleting-an-org.html">
                    Renaming and/or Deleting an Org
                </a>
        </li>
</ul>
</nav>

Members of an Organization are immediately added to a Developers team that automatically has Read/Write access to all packages published under an Organization scope

* [Publishing an Org Scoped Package](https://www.npmjs.com/docs/orgs/publishing-an-org-scoped-package.html)
  - To create a new scoped package for your Organization scope, create a directory with the name of the package you would like to create. Navigate into that directory and use this command:

                    npm init --scope=<org_scope>

  - By default all scoped packages are published privately. To publish a scoped package publicly, pass the access flag with the value public:

                    npm publish --access public

* [The developers team](https://www.npmjs.com/docs/orgs/the-developers-team.html)
  - The Developers Team is a special Team that is automatically created when you create an Organization. 
  - Members are automatically added to the Developers team:
    - The user who created the Organization is added to this team automatically.
    - Any member added to the Organization is also added to this team automatically.
    - If an Owner adds a new Member to an Organization and does not want that Member to be on the Developers team, an Owner can remove them. ([Learn more about managing teams](https://www.npmjs.com/docs/orgs/managing-teams.html)).
* [npm-team: Manage organization teams and team memberships](https://docs.npmjs.com/cli/team)
* [npm-access: Set access level on published packages](https://docs.npmjs.com/cli/access)

### Documentación

* [documentation.js: User's Guide](https://github.com/documentationjs/documentation#user-guide)
* [documentation.js: Getting Started](https://github.com/documentationjs/documentation/blob/master/docs/GETTING_STARTED.md)
* [JSDoc: Wikipedia](https://en.wikipedia.org/wiki/JSDoc)
* [An introduction to JSDoc](http://2ality.com/2011/08/jsdoc-intro.html)
* [Book *Speaking JavaScript: An In-Depth Guide for Programmers* by Dr. Axel Rauschmayer: Chapter 29. JSDoc: Generating API Documentation](http://speakingjs.com/es5/ch29.html)
* [Getting Started with JSDoc 3](http://usejsdoc.org/about-getting-started.html)
* Ejemplo:
  - [https://github.com/ULL-ESIT-DSI-1617/scapegoat](https://github.com/ULL-ESIT-DSI-1617/scapegoat)
  - [https://ull-esit-dsi-1617.github.io/scapegoat/](https://ull-esit-dsi-1617.github.io/scapegoat/)


### Creación de Paquetes en el Cliente

* [bower](https://bower.io/)
* [webpack](http://webpack.github.io/docs/motivation.html)
  - [Webpack Tutorial - Replace Gulp/Grunt plugins with a single tool. LearnCode.academy](https://youtu.be/9kJVYpOqcVU) YouTube
* [yarn](https://code.facebook.com/posts/1840075619545360)
* [browserify](http://browserify.org/)

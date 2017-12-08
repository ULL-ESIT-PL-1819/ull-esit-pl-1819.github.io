##### Problem
When the directory structure of your Node.js **application** (not library!) has some depth, you end up with a lot of annoying relative paths in your require calls like:
```js
var Article = require('../../../models/article');
```
Those suck for maintenance and they're ugly.

##### Possible solutions
Ideally, I'd like to have the same basepath from which I `require()` all my modules. Like any other language environment out there. I'd like the `require()` calls to be first-and-foremost relative to my application entry point file, in my case `app.js`.

There are only solutions here that work cross-platform, because 42% of Node.js users use Windows as their desktop environment ([source](https://twitter.com/izs/status/661597221763203072)).

###### 1. The Symlink
Stolen from: [focusaurus](https://github.com/focusaurus) / [express_code_structure](https://github.com/focusaurus/express_code_structure) # [the-app-symlink-trick](https://github.com/focusaurus/express_code_structure#the-app-symlink-trick)

1. Create a symlink under `node_modules` to your app directory:  
Linux: `ln -nsf node_modules app`  
Windows: `mklink /D app node_modules`

2. Now you can require local modules like this from anywhere:
    ```js
    var Article = require('models/article');
    ```

Note: you can **not** have a symlink like this inside a Git repo, since Git does not handle symlinks cross-platform. If you can live with a post-clone git-hook and/or the instruction for the next developer to create a symlink, then sure.

Alternatively, you can create the symlink on the npm `postinstall` hook, as described by [scharf](https://github.com/scharf) in [this awesome comment](https://gist.github.com/branneman/8048520#comment-1412502). Put this inside your `package.json`:
```js
"scripts": {
    "postinstall" : "node -e \"var s='../src',d='node_modules/src',fs=require('fs');fs.exists(d,function(e){e||fs.symlinkSync(s,d,'dir')});\""
  }
```

###### 2. The Global
1. In your app.js:
    ```js
    global.__base = __dirname + '/';
    ```

2. In your very/far/away/module.js:

    ```js
    var Article = require(__base + 'app/models/article');
    ```

###### 3. The Module
1. Install some module:

    ```sh
    npm install app-module-path --save
    ```

2. In your app.js, before any `require()` calls:

    ```js
    require('app-module-path').addPath(__dirname + '/app');
    ```

3. In your very/far/away/module.js:

    ```js
    var Article = require('models/article');
    ```

###### 4. The Environment
Set the `NODE_PATH` environment variable to the absolute path of your application, ending with the directory you want your modules relative to (in my case `.`). 

There are 2 ways of achieving the following `require()` statement from anywhere in your application:  
```js
var Article = require('app/models/article');
```

####### 4.1. Up-front
Before running your `node app`, first run:

Linux: `export NODE_PATH=.`  
Windows: `set NODE_PATH=.`

Setting a variable like this with `export` or `set` will remain in your environment as long as your current shell is open. To have it globally available in any shell, set it in your userprofile and reload your environment.

####### 4.2. Only while executing node
This solution will not affect your environment other than what node preceives. It does change your application start command.

Start your application like this from now on:  
Linux: `NODE_PATH=. node app`  
Windows: `cmd.exe /C "set NODE_PATH=.&& node app"`

(On Windows this command will **not** work if you put a space in between the path and the `&&`. Crazy shit.)

###### 5. The Start-up Script
Effectively, this solution also uses the environment (as in 4.2), it just abstracts it away.

With one of these solutions (5.1 & 5.2) you can start your application like this from now on:  
Linux: `./app` _(also for Windows PowerShell)_  
Windows: `app`

An advantage of this solution is that if you want to force your node app to always be started with v8 parameters like `--harmony` or `--use_strict`, you can easily add them in the start-up script as well.

####### 5.1. Node.js
Example implementation: [https://gist.github.com/branneman/8775568](https://gist.github.com/branneman/8775568)

####### 5.2. OS-specific start-up scripts
Linux, create `app.sh` in your project root:  
```sh
####!/bin/sh
NODE_PATH=. node app.js
```
Windows, create `app.bat` in your project root:  
```bat
@echo off
cmd.exe /C "set NODE_PATH=.&& node app.js"
```

###### 6. The Hack
Courtesy of [@joelabair](https://github.com/joelabair). Effectively also the same as 4.2, but without the need to specify the `NODE_PATH` outside your application, making it more fool proof. However, since this relies on a private Node.js core method, this is also a hack that might stop working on the previous or next version of node.

This code needs to be placed in your `app.js`, before any require() calls:
```js
process.env.NODE_PATH = __dirname;
require('module').Module._initPaths();
```

###### 7. The Wrapper
Courtesy of [@a-ignatov-parc](https://github.com/a-ignatov-parc). Another simple solution which increases obviousness, simply wrap the `require()` function with one relative to the path of the application's entry point file.

Place this code in your `app.js`, again before any require() calls:

```js
global.rootRequire = function(name) {
    return require(__dirname + '/' + name);
}
```

You can then require modules like this:
```js
var Article = rootRequire('app/models/article');
```

Another option is to always use the initial `require()` function, basically the same trick without a wrapper. Node.js creates a new scoped `require()` function for every new module, but there's always a reference to the initial global one. Unlike most other solutions this is actually a documented feature. It can be used like this:
```js
var Article = require.main.require('app/models/article');
```

##### Conclusion
**1. The Symlink**  
If you're using CVS or SVN (but not Git!), this solution is a great one which works, otherwise I don't recommend this to anyone.

**2. The Global**  
You're effectivly swapping `../../../` for `__base +` which is only slightly better if you ask me. However it's very obvious for the next developer what's exactly happening. That's a big plus compared to the other *magical* solutions around here.

**3. The Module**  
Great and simple solution. Does not touch other require calls to `node_modules`.

**4. The Environment**  
Setting application-specific settings as environment variables globally or in your current shell is an anti-pattern if you ask me. E.g. it's not very handy for development machines which need to run multiple applications.

If you're adding it only for the currently executing program, you're going to have to specify it each time you run your app. Your start-app command is not easy anymore, which also sucks.

**5. The Start-up Script**  
You're simplifying the command to start your app (always simply `node app`), and it gives you a nice spot to put your mandatory v8 parameters! A small disadvantage might be that you need to create a separate start-up script for your unit tests as well.

**6. The Hack**  
Most simple solution of all. Use at your own risk.

**7. The Wrapper**  
Great and non-hacky solution. Very obvious what it does, especially if you pick the `require.main.require()` one.

## Node.js Debugger

Véase [Debugger](https://nodejs.org/api/debugger.html)

The built-in Node debugger supports placing `debugger` 
statements in your source code. 


````javascript
// myscript.js
x = 5;
setTimeout(() => {
  debugger;
  console.log('world');
}, 1000);
console.log('hello');
```
When you run your app in debug mode 
via `node debug [your app]`, it will break when a debugger statement is hit.

```
[~/javascript/node.js/debugging/debugger(master)]$ node debug myscript.js
< Debugger listening on port 5858
connecting to 127.0.0.1:5858 ... ok
break in myscript.js:2
  1 // myscript.js
> 2 x = 5;
  3 setTimeout(() => {
  4   debugger;
debug> 
```

From here, we can use the following debug commands to step through our code :

* `continue – cont, c`
* `step – next, n`
* `step in – step, s`
* `step out – out, o`

```
debug> help
Commands: run (r), cont (c), next (n), step (s), out (o), backtrace (bt), setBreakpoint (sb), clearBreakpoint (cb),
watch, unwatch, watchers, repl, exec, restart, kill, list, scripts, breakOnException, breakpoints, version
debug> 
```

```
debug> cont
< hello
break in myscript.js:4
  2 x = 5;
  3 setTimeout(() => {
> 4   debugger;
  5   console.log('world');
  6 }, 1000);
```

```
debug> next
break in myscript.js:5
  3 setTimeout(() => {
  4   debugger;
> 5   console.log('world');
  6 }, 1000);
  7 console.log('hello');
debug> 
```

At any point, we can open a REPL by typing `repl` 
to inspect or reassign variable values.

```
debug> repl
Press Ctrl + C to leave debug repl
> x
5
Ctrl-C
```

```
debug> sb(7)
  1 // myscript.js
  2 x = 5;
  3 setTimeout(() => {
  4   debugger;
> 5   console.log('world');
  6 }, 1000);
* 7 console.log('hello');
  8 
  9 
 10 });
```

```
debug> c
< world
debug> 
```

### Watchers

It is possible to watch expression and variable values while debugging. 

On every breakpoint, each expression from the watchers list will be 
evaluated in the current context and displayed immediately before 
the breakpoint's source code listing.

To begin watching an expression, type 
```javascript
watch('my_expression')
```
The command `watchers` will print the active watchers. 

To remove a watcher, type 
```javascript
unwatch('my_expression')
```

### Breakpoints

* `setBreakpoint(), sb()` - Set breakpoint on current line
* `setBreakpoint(line), sb(line)` - Set breakpoint on specific line
* `setBreakpoint('fn()'), sb(...)` - Set breakpoint on a first statement in functions body
* `setBreakpoint('script.js', 1), sb(...)` - Set breakpoint on first line of script.js
* `clearBreakpoint('script.js', 1), cb(...)` - Clear breakpoint in script.js on line 1

It is also possible to set a breakpoint in a file (module) that isn't loaded yet:

```
debug> setBreakpoint('mod.js', 23)
```




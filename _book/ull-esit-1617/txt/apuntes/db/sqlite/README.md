## Sqlite in NodeJS

## Hello Sqlite

* [Sqlite3 simple example](https://github.com/ULL-ESIT-SYTW-1617/sqlite3-simple-example)

### Ejemplo de una tabla simple en Sqlite (bookmarks)

* [Tutorial: your first app in 30 minutes](https://docs.cozy.io/en/hack/getting-started/first-app.html)
* [gitHub repo](https://github.com/cozy/cozy-tutorial/tree/step-1)
* [Fork in ULL-ESIT-SYTW-1617](https://github.com/ULL-ESIT-SYTW-1617/cozy-tutorial)
* [Documentacion de node-sqlite3](https://github.com/mapbox/node-sqlite3)
  - [wiki](https://github.com/mapbox/node-sqlite3/wiki)
  - [API](https://github.com/mapbox/node-sqlite3/wiki/API)
  - [Control Flow API](https://github.com/mapbox/node-sqlite3/wiki/Control-Flow)
* [Sqlite Database Documentation](http://www.sqlite.org/index.html)

### Enlaces para entender el código [Fork in ULL-ESIT-SYTW-1617](https://github.com/ULL-ESIT-SYTW-1617/cozy-tutorial)
 
* [app.engine(ext, callback)](http://expressjs.com/en/api.html#app.engine)
* [How can I get the list of a columns in a table for a SQLite database?](http://stackoverflow.com/questions/604939/how-can-i-get-the-list-of-a-columns-in-a-table-for-a-sqlite-database)
  - `db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='bookmarks'", function(err, row) { ... })`
* [`app.render(view, [locals], callback)`](http://expressjs.com/en/api.html#res.render)
  ```javascript
       res.render('index.pug', {bookmarks: rows}, function(err, html) {
          res.status(200).send(html);
       });
  ```
####  pug
  * [Simple example: github repo](https://github.com/ULL-ESIT-DSI-1617/pug-simple-example)
  * [pug-cli](https://github.com/pugjs/pug-cli)
  * [pug: Getting Started](https://pugjs.org/api/getting-started.html)
  * [pug: Interpolation](https://pugjs.org/language/interpolation.html)

#### [express API](http://expressjs.com/en/api.html)

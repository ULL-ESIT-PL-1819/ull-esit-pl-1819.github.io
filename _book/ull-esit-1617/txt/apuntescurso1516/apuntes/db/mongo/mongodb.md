<!-- toc -->
### MongoDB

!INCLUDE "mongodbinc9.md"


#### How can I customize the mongo shell prompt?
You can change the mongo shell prompt by setting the `prompt` variable. 
This makes it possible to display additional information in the prompt.

Set `prompt` to any string or arbitrary JavaScript code that returns a string.

This example set the shell prompt to display the hostname and the database issued:
```javascript
var host = db.serverStatus().host;
var prompt = function() { return db+"@"+host+"> "; }
```
The mongo shell prompt should now reflect the new prompt:

```javascript
test@my-machine.local>
```
#### MongoDB Documents

[MongoDB documents](https://docs.mongodb.org/manual/core/document/) are composed of field-and-value pairs. The value of a field can be any of the [BSON data types](https://docs.mongodb.org/manual/reference/bson-types/), including other documents, arrays, and arrays of documents.

#### Queries

In MongoDB, the `db.collection.find()` method retrieves documents from a collection.  
The `db.collection.find()` method returns a [cursor](https://docs.mongodb.org/manual/core/cursors/) 
to the retrieved documents.

```javascript
[~/local/src/javascript/mongoose/mongo-example-todos(develop)]$ mongo
MongoDB shell version: 3.0.2
connecting to: test
> show dbs
amazeriffic  0.078GB
chuchu       0.078GB
local        0.078GB
test         0.078GB
> use chuchu
switched to db chuchu
> show collections
cards
system.indexes
> db.cards.find({})
{ "_id" : ObjectId("5714999742131919ac3b0d5e"), "rank" : "ace", "suit" : "spades ♠", "chuchu" : [ { "a" : "hello", "b" : "world!", "_id" : ObjectId("5714999742131919ac3b0d5f") } ], "__v" : 0 }
{ "_id" : ObjectId("5714999742131919ac3b0d60"), "rank" : "2", "suit" : "hearts ♥", "chuchu" : [ { "a" : "hola", "b" : "mundo", "_id" : ObjectId("5714999742131919ac3b0d61") } ], "__v" : 0 }
{ "_id" : ObjectId("5714999742131919ac3b0d62"), "suit" : "clubs ♣", "rank" : "3", "chuchu" : [ { "a" : "hola", "b" : "mundo", "_id" : ObjectId("5714999742131919ac3b0d63") } ], "__v" : 0 }
```
You can include additional parameters to make the search more precise:

```javascript
> db.cards.find({suit: /♥/})
{ "_id" : ObjectId("5714999742131919ac3b0d60"), "rank" : "2", "suit" : "hearts ♥", "chuchu" : [ { "a" : "hola", "b" : "mundo", "_id" : ObjectId("5714999742131919ac3b0d61") } ], "__v" : 0 }
```

If you want to only return a specific set of  fields with the result, 
you can include a map as the second parameter to `find()`:
```javascript
> db.cards.find({suit: /♥/}, {rank: true})
{ "_id" : ObjectId("5714999742131919ac3b0d60"), "rank" : "2" }
```
Note that the `_id`  field will always be included by default unless you specifically state that you don't want it included.

We can use query operators to search for things that are within ranges. These include greater than (or equal to) and less than (or equal to).
```javascript
> db.scores.find({cal: {$gt: 5, $lt: 8}})
{ "_id" : ObjectId("57150257224028006668b658"), "name" : "Nayla", "cal" : 6 }
{ "_id" : ObjectId("57150349224028006668b65f"), "name" : "Juan 6", "cal" : 6 }
{ "_id" : ObjectId("57150349224028006668b660"), "name" : "Juan 7", "cal" : 7 }
> db.scores.find({name: { $regex: /[eo]/}})
{ "_id" : ObjectId("57150232224028006668b656"), "name" : "Pedro", "cal" : 5 }
{ "_id" : ObjectId("57150257224028006668b657"), "name" : "Antonio", "cal" : 5 }
```

#### Insertando Datos
An interesting thing to note is that if you use `use` on a database that doesn't exist, one is created automatically. 

```javascript
> use tutu
switched to db tutu
> show dbs
amazeriffic  0.078GB
chuchu       0.078GB
local        0.078GB
test         0.078GB
> show collections
> db.scores.insert({name: "Juana", cal: 10})
WriteResult({ "nInserted" : 1 })
> show collections
scores
system.indexes
> show dbs
amazeriffic  0.078GB
chuchu       0.078GB
local        0.078GB
test         0.078GB
tutu         0.078GB
```

```javascript
...
> db.scores.insert([{name: "Antonio", cal: 5}, {name: "Nayla", cal: 6}])
> db.scores.find({})
{ "_id" : ObjectId("57150162224028006668b655"), "name" : "Juana", "cal" : 10 }
{ "_id" : ObjectId("57150232224028006668b656"), "name" : "Pedro", "cal" : 5 }
{ "_id" : ObjectId("57150257224028006668b657"), "name" : "Antonio", "cal" : 5 }
{ "_id" : ObjectId("57150257224028006668b658"), "name" : "Nayla", "cal" : 6 }
> for(var i=0;i<10;i++) { db.scores.insert({name: "Juan "+i, cal: i}) }
> db.scores.find({})
{ "_id" : ObjectId("57150162224028006668b655"), "name" : "Juana", "cal" : 10 }
{ "_id" : ObjectId("57150232224028006668b656"), "name" : "Pedro", "cal" : 5 }
{ "_id" : ObjectId("57150257224028006668b657"), "name" : "Antonio", "cal" : 5 }
{ "_id" : ObjectId("57150257224028006668b658"), "name" : "Nayla", "cal" : 6 }
{ "_id" : ObjectId("57150349224028006668b659"), "name" : "Juan 0", "cal" : 0 }
{ "_id" : ObjectId("57150349224028006668b65a"), "name" : "Juan 1", "cal" : 1 }
{ "_id" : ObjectId("57150349224028006668b65b"), "name" : "Juan 2", "cal" : 2 }
{ "_id" : ObjectId("57150349224028006668b65c"), "name" : "Juan 3", "cal" : 3 }
{ "_id" : ObjectId("57150349224028006668b65d"), "name" : "Juan 4", "cal" : 4 }
{ "_id" : ObjectId("57150349224028006668b65e"), "name" : "Juan 5", "cal" : 5 }
{ "_id" : ObjectId("57150349224028006668b65f"), "name" : "Juan 6", "cal" : 6 }
{ "_id" : ObjectId("57150349224028006668b660"), "name" : "Juan 7", "cal" : 7 }
{ "_id" : ObjectId("57150349224028006668b661"), "name" : "Juan 8", "cal" : 8 }
{ "_id" : ObjectId("57150349224028006668b662"), "name" : "Juan 9", "cal" : 9 }
```

#### Actualizando Datos

To update a record, use the `update()` function, but include a  `find`
query as the  first parameter and use the `$set`operator in the second parameter:
```javascript
> db.scores.update({name: /juan 1/i}, {$set: {cal: 5}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.scores.find({name: /juan 1/i})
{ "_id" : ObjectId("57150349224028006668b65a"), "name" : "Juan 1", "cal" : 5 }
> db.scores.update({name: /juan [5-9]/i}, {$set: {cal: 4.5}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.scores.find({name: /juan [5-9]/i})
{ "_id" : ObjectId("57150349224028006668b65e"), "name" : "Juan 5", "cal" : 4.5 }
{ "_id" : ObjectId("57150349224028006668b65f"), "name" : "Juan 6", "cal" : 6 }
{ "_id" : ObjectId("57150349224028006668b660"), "name" : "Juan 7", "cal" : 7 }
{ "_id" : ObjectId("57150349224028006668b661"), "name" : "Juan 8", "cal" : 8 }
{ "_id" : ObjectId("57150349224028006668b662"), "name" : "Juan 9", "cal" : 9 }
```

Es necesario especificar `$set` de lo contrario el segundo argumento es interpretado como argumento
de sustitución:
```javascript
> db.scores.update({name: /juan 2/i}, {cal: 8})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.scores.find({cal: {$eq: 8}})
{ "_id" : ObjectId("57150349224028006668b65b"), "cal" : 8 }
{ "_id" : ObjectId("57150349224028006668b661"), "name" : "Juan 8", "cal" : 8 }
```
the second parameter in the `update()` function is actually the new version of the complete document. 
Since you only wanted to update the `cal` field, what actually happened was that the document that was found was replaced with the new version that consists of only the `cal` field. 

To reiterate, the reason this happens at all is because with NoSQL such as MongoDB, the document does not have a set number of  fields (as a relational database does). 

When you want to update a document, but the document itself may or may not exist. 
Pass `{upsert: true}` as the third parameter to the `update()` function:

```javascript
> db.scores.update({name: "Juan 10"}, {name: "Juan 10", cal:10})
WriteResult({ "nMatched" : 0, "nUpserted" : 0, "nModified" : 0 })
> db.scores.update({name: "Juan 10"}, {name: "Juan 10", cal:10}, {upsert: true})
WriteResult({
  "nMatched" : 0,
  "nUpserted" : 1,
  "nModified" : 0,
  "_id" : ObjectId("57151147c5b206ceaf9ada5a")
})
> db.scores.find({cal: 10, name: /10/})
{ "_id" : ObjectId("57151147c5b206ceaf9ada5a"), "name" : "Juan 10", "cal" : 10 }
```

#### Suprimiendo Datos

Deleting documents works almost exactly like `find()`, except instead of finding and returning results, it deletes those documents that match the search criteria:
```javascript
> db.scores.remove({ name: 'Maria' })
```

If you want the nuclear option, you can use the `drop()` function, which will remove
every document in a collection:
```javascript
   > db.scores.drop()
```



### MongoDB en Node.js

* [Getting Started with MongoDB (MongoDB Shell Edition)](https://docs.mongodb.org/getting-started/shell/)

#### Empezando

```
[~/src/mongodb/getting-started]$ curl https://raw.githubusercontent.com/mongodb/docs-assets/primer-dataset/primer-dataset.json -o primer-dataset.json
[~/DSI/EXAMENES/170516(master)]$ mongod
2016-05-15T11:42:19.621+0100 I JOURNAL  [initandlisten] journal dir=/data/db/journal
2016-05-15T11:42:19.625+0100 I JOURNAL  [initandlisten] recover : no journal files present, no recovery needed
2016-05-15T11:42:19.678+0100 I JOURNAL  [durability] Durability thread started
...
[~/src/mongodb/getting-started]$ mongoimport --db test --collection restaurants --drop --file primer-dataset.json
2016-05-15T11:42:58.735+0100  connected to: localhost
2016-05-15T11:42:58.736+0100  dropping: test.restaurants
2016-05-15T11:43:00.559+0100  imported 25359 documents

```
The mongoimport connects to a mongod instance running on localhost on port number 27017.

To import data into a mongod instance running on a different host or port, specify the hostname or port by including the --host and the --port options in your mongoimport command.

```
[~/src/mongodb/getting-started]$ npm install mongodb
```

```
[~/src/mongodb/getting-started]$ node hellomongo.js | less

Connected correctly to server.
Inserted a document into the restaurants collection.
{ _id: ObjectID { _bsontype: 'ObjectID', id: 'W8R³÷mWG\u001dÇ0-' },
  address: 
   { building: '2780',
     coord: [ -73.98241999999999, 40.579505 ],
     street: 'Stillwell Avenue',
     zipcode: '11224' },
  borough: 'Brooklyn',
  cuisine: 'American ',
  grades: 
   [ { date: Tue Jun 10 2014 01:00:00 GMT+0100 (WEST),
       grade: 'A',
       score: 5 },
     { grade: 'A',
       score: 7,
       date: Wed Jun 05 2013 01:00:00 GMT+0100 (WEST) },
     { score: 12,
       date: Fri Apr 13 2012 01:00:00 GMT+0100 (WEST),
       grade: 'A' },
     { date: Wed Oct 12 2011 01:00:00 GMT+0100 (WEST),
       grade: 'A',
       score: 12 } ],
  name: 'Riviera Caterer',
  restaurant_id: '40356018' }
{ _id: ObjectID { _bsontype: 'ObjectID', id: 'W8R³÷mWG\u001dÇ0.' }
```


```javascript
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

var insertDocument = function(db, callback) {
   db.collection('restaurants').insertOne( {
      "address" : {
         "street" : "2 Avenue",
         "zipcode" : "10075",
         "building" : "1480",
         "coord" : [ -73.9557413, 40.7720266 ]
      },
      "borough" : "Manhattan",
      "cuisine" : "Italian",
      "grades" : [
         {
            "date" : new Date("2014-10-01T00:00:00Z"),
            "grade" : "A",
            "score" : 11
         },
         {
            "date" : new Date("2014-01-16T00:00:00Z"),
            "grade" : "B",
            "score" : 17
         }
      ],
      "name" : "Vella",
      "restaurant_id" : "41704620"
   }, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the restaurants collection.");
    callback();
  });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  insertDocument(db, function() {
      db.close();
  });
});

var findRestaurants = function(db, callback) {
   var cursor =db.collection('restaurants').find( );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findRestaurants(db, function() {
      db.close();
  });
});
```


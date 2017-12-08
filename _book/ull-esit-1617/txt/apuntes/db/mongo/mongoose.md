<!-- toc -->
### Mongoose

Mongoose is a Node.js module that:

*  It works as a client for MongoDB 
*  Is a data modeling tool, which allows us to represent documents as objects in our programs

#### Data Model

A data model is simply an **object representation** of a collection of documents in a data store. 
In addition to specifying the fields that are in every document of a collection, it adds MongoDB database operations like `save` and `find` to the associated objects.

* Models are fancy constructors compiled from our Schema definitions. 
* Instances of these models represent documents which can be saved and retrieved from our database. 
* All document creation and retrieval from the database is handled by these models.


#### Schema

In Mongoose, a data model consists of a schema, which describes the structure of all of the objects that are of that type. 
Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

Suppose we want to create a data model for a collection of playing cards. 
We’d start by specifying the schema for a card
explicitly declaring that every card has a rank and a suit:
```javascript
var CardSchema = mongoose.Schema({ 
        "rank" : String,
        "suit" : String
    });
```
Schemas can get more complicated. For example, we might build a schema for blog posts that contain dates and comments. In this example, the `comments` attribute represents an array of strings instead of a single one:
```javascript
var BlogPostSchema = mongoose.Schema({ 
        title: String,
        body : String,
        date : Date,
        comments : [ String ]
});
```
or even more complicated:

```javascript
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});
```

The permitted SchemaTypes are

* `String`
* `Number`
* `Date`
* `Buffer`
* `Boolean`
* `Mixed`
* `ObjectId`
* `Array`

Mongoose assigns each of your schemas an `_id` field by default 
if one is not passed into the Schema constructor. 
The type assigned is an [ObjectId](http://mongoosejs.com/docs/api.html#schema_Schema.Types) 
to coincide with MongoDB's default behavior. 

#### Building a Model from a Schema

Once we create the schema, building a model is very easy. By convention, we use a capital letter for data model objects:
```javascript
var Card = mongoose.model("Card", CardSchema);
```

* The first argument is the singular name of the collection your model is for. 
* ** Mongoose automatically looks for the plural version of your model name**. 
  * Thus, for the example above, the model `Card` is for the `cards` collection in the database. 
* The `.model()` function makes a copy of schema. 
* Make sure that you've added everything you want to schema before calling `.model()`!

Every model has an associated connection. When you use `mongoose.model()`, your model will use the default mongoose connection.

```javascript
mongoose.connect('mongodb://localhost/chuchu');
```

```javascript
mongoose.connect('mongodb://localhost/test', (err)=> {
  if(err) {
    console.log("Error: Check if mongod is running!!");
    console.log(err);
    throw err;
  }
  console.log("Connected to MongoDB");
});
```


#### Constructing documents
Once we have a model, we can create an object of the model type very easily using JavaScript’s `new` operator. 

For example, this line of code creates the ace of spades and stores it in a variable called `c1`:
```javascript
var c1 = new Card({"rank":"ace", "suit":"spades"});
```

`mongoose` adds a property whose name is `__v` as this `mongo` session shows:

```javascript
> show dbs
chuchu       0.078GB
> use chuchu
switched to db chuchu
> show collections
cards
system.indexes
> db.cards.find()
{ "_id" : ObjectId("570e874722bc0fbc916dc90a"), "rank" : "ace", "suit" : "spades", "__v" : 0 }
```
The `versionKey` is a property set on each document when first created by Mongoose. This keys value contains the internal revision of the document. The `versionKey` option is a string that represents the path to use for versioning. The default is `__v`. 

#### Saving Documents

Saving documents to the database is easy:

```javascript
c1.save(function (err) {
  if (err) return handleError(err);
  // saved!
})
```

or

```javascript
Card.create({"rank":"ace", "suit":"spades"}), function (err, c1) {
  if (err) return handleError(err);
  // saved!
})
```
Note that no cards will be created/removed until the connection your model uses is open. 

#### Los métodos `save` retornan Promesas

Ambos `save` y `create` retornan objetos [Promise](http://mongoosejs.com/docs/promises.html).
Véase el siguiente ejemplo en el que se guardan varios objetos y luego se cierra la conexión con la base de datos. Debemos garantizar que la conexión es cerrada después que se guarden todos los objetos.
Si usamos manejadores de eventos nos meteremos en un buen lío. La solución es usar las promesas:

```javascript
(function() {
  "use strict";
  const util = require('util');
  const mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost/chuchu');
  const CardSchema = mongoose.Schema({ 
    "rank" : String,
    "suit" : String,
    "chuchu": [ {a: String, b: String}]
  });

  const Card = mongoose.model("Card", CardSchema);

  let c1 = new Card({"rank":"ace", "suit":"spades ♠",   "chuchu": [{a: "hello", b: "world!"}]});
  let c2 = new Card({"rank":"2",   "suit":"hearts ♥",   "chuchu": [{a: "hola", b: "mundo"}]});
  let c3 = new Card({"rank":"3",   "suit":"clubs ♣",    "chuchu": [{a: "hola", b: "mundo"}]});
  let c4 = new Card({"rank":"4",   "suit":"diamonds ♦", "chuchu": [{a: "hola", b: "mundo"}]});


  let p1 = c1.save(function (err) {
    if (err) { console.log(`Hubieron errores:\n${err}`); return err; }
    console.log(`Saved: ${c1}`);
  });

  let p2 = c2.save(function (err) {
    if (err) { console.log(`Hubieron errores:\n${err}`); return err; }
    console.log(`Saved: ${c2}`);
  });

  let p3 = Card.create(c3, function (err, x) {
    if (err) { console.log(`Hubieron errores:\n${err}`); return err; }
    console.log(`Saved p3: ${x}`);
  });

  Promise.all([p1, p2, p3]).then( (value) => { 
    console.log(util.inspect(value, {depth: null}));  
    mongoose.connection.close(); 
  });
})();
```
cuando se ejecuta este programa produce la siguiente salida:
```bash
[~/javascript/mongoose/hello]$ node hello-cards.js 
Saved: { chuchu: [ { _id: 570fe42c8f5fb2f208a8c756, b: 'world!', a: 'hello' } ],
  _id: 570fe42c8f5fb2f208a8c755,
  suit: 'spades ♠',
  rank: 'ace',
  __v: 0 }
Saved: { chuchu: [ { _id: 570fe42c8f5fb2f208a8c758, b: 'mundo', a: 'hola' } ],
  _id: 570fe42c8f5fb2f208a8c757,
  suit: 'hearts ♥',
  rank: '2',
  __v: 0 }
Saved p3: { chuchu: [ { _id: 570fe42c8f5fb2f208a8c75a, b: 'mundo', a: 'hola' } ],
  rank: '3',
  suit: 'clubs ♣',
  _id: 570fe42c8f5fb2f208a8c759,
  __v: 0 }
[ { chuchu: [ { _id: 570fe42c8f5fb2f208a8c756, b: 'world!', a: 'hello' } ],
    _id: 570fe42c8f5fb2f208a8c755,
    suit: 'spades ♠',
    rank: 'ace',
    __v: 0 },
  { chuchu: [ { _id: 570fe42c8f5fb2f208a8c758, b: 'mundo', a: 'hola' } ],
    _id: 570fe42c8f5fb2f208a8c757,
    suit: 'hearts ♥',
    rank: '2',
    __v: 0 },
  { chuchu: [ { _id: 570fe42c8f5fb2f208a8c75a, b: 'mundo', a: 'hola' } ],
    rank: '3',
    suit: 'clubs ♣',
    _id: 570fe42c8f5fb2f208a8c759,
    __v: 0 } ]
```


* [Gist en GitHub](https://gist.github.com/crguezl/39f8d635917f7a3b5164a817ef65095b)
* [Clonar gist con este código](https://gist.github.com/39f8d635917f7a3b5164a817ef65095b.git)

```bash
[~/javascript/mongoose/hello/mongoosepromisesexample(master)]$ pwd -P
/Users/casiano/local/src/javascript/mongoose/hello/mongoosepromisesexample
```


#### Queries en Mongoose

We can also interact directly with the model to pull items out of the database using the `find` function that’s part of the data model. Like the `find` function in the interactive
MongoDB client, this function takes in an arbitrary MongoDB query. The difference is that it restricts itself to the types that are defined by the model:

```javascript
  let c1, c2, c3, c4;
  Card.remove().then( () => {
    c1 = new Card({"rank":"ace", "suit":"spades ♠"   });
    /* ... as before ... */
    let p4 = Promise.all([p1, p2, p3]).then( (value) => { 
      Card.find({}, function (err, cards) { 
        if (err) { console.log("ERROR: " + err); }
        let c = 1;
        cards.forEach(function (card) {
          console.log (`${c++}: ${card.rank} of ${card.suit}`);
        }); 
      }).then( function() { mongoose.connection.close(); } );  
    });
```
([Véase el Gist con el código completo](https://gist.github.com/crguezl/c706121ee8f5cdae99d0061bccfe1d60))

In mongoose 4, a Query has a `.then()` function, and thus can be used as a promise.

Any model method which involves specifying query conditions can be executed two ways:

When a `callback` function:

* **is passed**, the operation will be executed immediately with the results passed to the `callback`.
* **is not passed**, an instance of [Query](http://mongoosejs.com/docs/api.html#query-js) is returned, which provides a special query builder interface.

When executing a query with a `callback` function, you specify your query as a JSON document. The JSON document's syntax is the same as the [MongoDB shell](https://docs.mongodb.org/manual/tutorial/query-documents/).


```javascript
var Person = mongoose.model('Person', yourSchema);

// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
Person.findOne({ 'name.last': 'Ghost' }, 'name occupation', 
  function (err, person) {
    if (err) return handleError(err);
    console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
  })
```
Now let's look at what happens when no callback is passed:

```javascript
// find each person with a last name matching 'Ghost'
var query = Person.findOne({ 'name.last': 'Ghost' });

// selecting the `name` and `occupation` fields
query.select('name occupation');

// execute the query at a later time
query.exec(function (err, person) {
  if (err) return handleError(err);
  console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
})
```
In the above code, the query variable is of type [Query](http://mongoosejs.com/docs/api.html#query-js). A [Query](http://mongoosejs.com/docs/api.html#query-js) enables you to build up a query using chaining syntax, rather than specifying a JSON object. 

A full example can be found in this [gist](https://gist.github.com/crguezl/165cfec398c5576b6d4d88f3e4b6f204).

The below 2 examples are equivalent.

```javascript
// With a JSON doc
Person.
  find({
    occupation: /host/,
    'name.last': 'Ghost',
    age: { $gt: 17, $lt: 66 },
    likes: { $in: ['vaporizing', 'talking'] }
  }).
  limit(10).
  sort({ occupation: -1 }).
  select({ name: 1, occupation: 1 }).
  exec(callback);
  
// Using query builder
Person.
  find({ occupation: /host/ }).
  where('name.last').equals('Ghost').
  where('age').gt(17).lt(66).
  where('likes').in(['vaporizing', 'talking']).
  limit(10).
  sort('-occupation').
  select('name occupation').
  exec(callback);
```
  
A full list of [Query helper functions can be found in the API docs](http://mongoosejs.com/docs/api.html#query-js).

##### Queries: Véase

* [Mongoose Docs: Queries](http://mongoosejs.com/docs/queries.html)

#### Mongoose Validaciones

One of the core concepts of Mongoose is that it enforces a schema on top of a schema-less design such as MongoDB. 
In doing so, we gain a number of new features, including built-in validation. 
By default, every schema type has a built-in required validator available. 

Furthermore, numbers have both min and max validators and strings have enumeration and matching validators

Validation will  re automatically whenever a model's `.save()` function is called; 
however, you can also manually validate by calling a model's `.validate()` function 
with a callback to handle the response.

* Véase [la documentación de Mongoose sobre Validaciones](http://mongoosejs.com/docs/validation.html)

##### Ejemplo de Validación de Números

```javascript
(function() {
  "use strict";
  const util = require('util');
  const mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost/tutu');
  const ScoreSchema = mongoose.Schema({ 
    "name" : { type: String, required: true },
    "cal" : { type: Number, required: true, min: 0, max: 10 }
  });

  const Score = mongoose.model("Score", ScoreSchema);

  Score.remove().then( () => {
    let c = [ new Score({"name":"Juana",   "cal":10   }),
         new Score({"name":"Pedro",   "cal":3 }),
         new Score({"name":"Maria",   "cal":5 }),
         new Score({"name":"Antonio", "cal":12 })];


    let p = [];
    c.forEach( (n, i) => {
      p[i] = n.save(function (err) {
        if (err) { console.log(`Hubieron errores salvando ${n}:\n${err}`); return err; }
      });
    });

    let p5 = Promise.all(p).then( (value) => { 
      let query = Score.find({cal: {$lte: 10, $gte: 5}});
      query.select('name cal');
      query.exec((err, notas) => { 
        if (err) { console.log("ERROR: " + err); }
        let c = 1;
        notas.forEach(function (nota) {
          console.log (`${c++}: ${nota.name} of ${nota.cal}`);
        }); 
      }).then( function() { mongoose.connection.close(); } );  
    },
    (err) => {
      console.log(`Grrr!!! Ocurrieron errores! <${err}>`);
      mongoose.connection.close();   
    }
    );
  });
})();
```
Cuando se ejecuta este programa produce una salida como esta:
```javascript
[~/local/src/javascript/mongoose/hello/mongoosevalidation(master)]$ node mongoosevalidation.js 
Hubieron errores salvando { _id: 5715544dc02f40826891f8f8, cal: 12, name: 'Antonio' }:
ValidationError: Path `cal` (12) is more than maximum allowed value (10).
Grrr!!! Ocurrieron errores! <ValidationError: Path `cal` (12) is more than maximum allowed value (10).>
Hubieron errores salvando { _id: 5715544dc02f40826891f8f5, cal: 10, name: 'Juana', __v: 0 }:
MongoError: server localhost:27017 sockets closed
Hubieron errores salvando { _id: 5715544dc02f40826891f8f6, cal: 3, name: 'Pedro', __v: 0 }:
MongoError: server localhost:27017 sockets closed
Hubieron errores salvando { _id: 5715544dc02f40826891f8f7, cal: 5, name: 'Maria', __v: 0 }:
MongoError: server localhost:27017 sockets closed
```

##### Ejemplo de Validación de Strings

Este otro ejemplo muestra como construir un validador para un atributo del tipo `String`:
```javascript
  "use strict";
  const util = require('util');
  const assert = require('assert');
  const mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost/tutu');

    var toySchema = new mongoose.Schema({
      color: String,
      name: String
    });

    var Toy = mongoose.model('Toy', toySchema);

    var validator = function (value) {
      return /blue|green|white|red|orange|periwinkle/i.test(value);
    };
    Toy.schema.path('color').validate(validator,
      'Color `{VALUE}` not valid', 'Invalid color');

    var toy = new Toy({ color: 'grease'});

    toy.save(function (err) {
      // err is our ValidationError object
      // err.errors.color is a ValidatorError object
      console.log(err);

      assert.equal(err.errors.color.message, 'Color `grease` not valid');
      assert.equal(err.errors.color.kind, 'Invalid color');
      assert.equal(err.errors.color.path, 'color');
      assert.equal(err.errors.color.value, 'grease');
      assert.equal(err.name, 'ValidationError');

      mongoose.connection.close();   
    });
```

##### Validaciones Pre Construídas

Mongoose has several built-in validators.

All SchemaTypes have the built-in required validator. 

* `Numbers` have `min` and `max` validators.
* `Strings` have `enum`, `match`, `maxlength` and `minlength` validators.


```javascript
(function() {
  "use strict";
  const util = require('util');
  const assert = require('assert');
  const mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost/tutu');

  const breakfastSchema = new mongoose.Schema({
    eggs: {
      type: Number,
      min: [6, 'Too few eggs'],
      max: 12
    },
    bacon: {
      type: Number,
      required: [true, 'Why no bacon?']
    },
    drink: {
      type: String,
      enum: ['Coffee', 'Tea']
    }
  });
  const Breakfast = mongoose.model('Breakfast', breakfastSchema);

  let badBreakfast = new Breakfast({
    eggs: 2,
    bacon: 0,
    drink: 'Milk'
  });
  let error = badBreakfast.validateSync();
  console.log(error);
  assert.equal(error.errors['eggs'].message,
    'Too few eggs');
  assert.ok(!error.errors['bacon']);
  assert.equal(error.errors['drink'].message,
    '`Milk` is not a valid enum value for path `drink`.');

  badBreakfast.bacon = null;
  error = badBreakfast.validateSync();
  assert.equal(error.errors['bacon'].message, 'Why no bacon?');

  mongoose.connection.close();   

})();
```

Cuando se ejecuta, este programa produce una salida como esta:
```bash
[~/javascript/mongoose/hello/mongoosevalidation(master)]$ node mongoosebuiltinvalidators.js 
{ [ValidationError: Breakfast validation failed]
  message: 'Breakfast validation failed',
  name: 'ValidationError',
  errors: 
   { drink: 
      { [ValidatorError: `Milk` is not a valid enum value for path `drink`.]
        message: '`Milk` is not a valid enum value for path `drink`.',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'enum',
        path: 'drink',
        value: 'Milk' },
     eggs: 
      { [ValidatorError: Too few eggs]
        message: 'Too few eggs',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'min',
        path: 'eggs',
        value: 2 } } }
```

##### Véase el gist

* [gist](https://gist.github.com/crguezl/82caad653fc2483b9d5b623536060eb0)

#### Ejemplo Simple de uso de Mongoose con Express

* [Ejemplo sacado del libro "learning Web App Development"](https://github.com/ULL-ESIT-GRADOII-DSI/mongo-example-todos)
  * [jQuery `getJSON`](http://api.jquery.com/jquery.getjson/)
  * [jQuery `removeClass`](http://api.jquery.com/removeclass/)
  * [jQuery `trigger`](http://api.jquery.com/trigger/)

#### Middlewares

Middleware (also called pre and post hooks) are functions which are passed control during execution of asynchronous functions. 

Middleware is specified on the schema level and is useful for writing plugins. 

Mongoose 4.0 has 2 types of middleware: 

1. document middleware and 
2. query middleware. 

Document middleware is supported for the following document functions.

* init
* validate
* save
* remove

Query middleware is supported for the following Model and Query functions.

* count
* find
* findOne
* findOneAndRemove
* findOneAndUpdate
* update

Both document middleware and query middleware support pre and post hooks. 


* [Middleware](http://mongoosejs.com/docs/middleware.html)

#### Population 

There are no joins in MongoDB but sometimes we still want references to documents in other collections. This is where population comes in. 

Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s). 

We may populate a single document, multiple documents, plain object, multiple plain objects, or all objects returned from a query.

```javascript
(function() {
  "use strict";
  const util = require('util');
  const mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost/tutu');

  const Schema = mongoose.Schema;
    
  const personSchema = Schema({
    name    : String,
    age     : Number,
    stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
  });

  const storySchema = Schema({
    _creator : { type: Schema.Types.ObjectId, ref: 'Person' },
    title    : String,
    fans     : [{ type: Schema.Types.ObjectId, ref: 'Person' }]
  });

  const Story  = mongoose.model('Story', storySchema);
  const Person = mongoose.model('Person', personSchema);

  Person.remove({}).then(()=>{
    Story.remove({}).then( () => {
      let aaron = new Person({ name: 'Aaron', age: 100 });

      aaron.save(function (err) {
        if (err) return console.log(err);
      
        let story1 = new Story({
          title: "Once upon a timex.",
          _creator: aaron._id    // assign the _id from the person
        });
      
        story1.save(function (err) {
          if (err) return console.log(err);
          // thats it!
        }).then(()=>{

          Story
          .findOne({ title: 'Once upon a timex.' })
          .populate('_creator')
          .exec(function (err, story) {
            if (err) return console.log(err);
            console.log('The creator is %s', story._creator.name);
            // prints "The creator is Aaron"
          }).then( () => {
            mongoose.connection.close(); 
          });

        });
      });
    });
  });
})();
```

The `ref`  option is what tells Mongoose in which model to look when using the `populate` 
method, in our case the `Story` model:

```javascript
  const personSchema = Schema({
    name    : String,
    age     : Number,
    stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
  });
```
* We've created two Models. 
* Our `Person` model has its stories field set to an array of `ObjectId`s and `refs`. 
* The `ref` option is what tells Mongoose which model to use when calling `populate`, 
  in our case the `Story` model. 
* All `_id`s we store here must be document `_id`s from the `Story` model. 
* We also declared the `Story` `_creator` property as a `ObjectId`, 
  the same type as the default `_id` used in the `personSchema`. 
  ```javascript
    const storySchema = Schema({
      _creator : { type: Schema.Types.ObjectId, ref: 'Person' },
      title    : String,
      fans     : [{ type: Schema.Types.ObjectId, ref: 'Person' }]
    });
  ```
* Populated paths are no longer set to their original `_id` , their value is replaced with the mongoose document returned from the database by performing a separate query before returning the results.
  ```javascript
          Story
          .findOne({ title: 'Once upon a timex.' })
          .populate('_creator')
          .exec(function (err, story) {
            if (err) return console.log(err);
            console.log('The creator is %s', story._creator.name);
            // prints "The creator is Aaron"
          }).then( () => {
  ```
* Arrays of refs work the same way. Just call the [populate](http://mongoosejs.com/docs/api.html#query_Query-populate)
 method on the query and an array of documents will be returned in place of the original `_id`s.
* It is important to match the type of `_id` to the type of `ref` (see this [example](https://gist.github.com/crguezl/06cef7cb8078a78a84bc0a28b8e014f8#file-mongoosepopulation-js-L10-L21)):
  ```javascript
  const personSchema = Schema({
    _id     : Number,
    name    : String,
    age     : Number,
    stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
  });

  const storySchema = Schema({
    _creator : { type: Number, ref: 'Person' },
    title    : String,
    fans     : [{ type: Number, ref: 'Person' }]
  });
  ```
* Saving refs to other documents works the same way you normally save properties, just assign the `_id` value:
  ```javascript
          let story1 = new Story({
            title: "Once upon a timex.",
            _creator: aaron._id    // assign the _id from the person
          });
        
          story1.save(function (err) {
            if (err) return console.log(err);
            // thats it!
          }).then(()=>{ ...
  ```

* [gist with the examples](https://gist.github.com/crguezl/06cef7cb8078a78a84bc0a28b8e014f8)


##### Setting Populated Fields: Simply Assign the Object

In Mongoose >= 4.0, you can directly populate a field by simply assigning the object:

```javascript
Story.findOne({ title: 'Once upon a timex.' }, function(error, story) {
  if (error) {
    return handleError(error);
  }
  story._creator = aaron;
  console.log(story._creator.name); // prints "Aaron"
});
```
Instead of writing:

```javascript
        let story1 = new Story({
          title: "Once upon a timex.",
          _creator: aaron._id    // assign the _id from the person
        });
```
* Note that this only works for single refs. 
* You currently can't manually populate an array of refs.

##### Field selection

What if we only want a few specific fields returned for the populated
documents? This can be accomplished by passing the usual 
[field name syntax](http://mongoosejs.com/docs/api.html#query_Query-select) 
as the second argument to the populate method:

```javascript
Story
.findOne({ title: /timex/i })
.populate('_creator', 'name') // only return the Persons name
.exec(function (err, story) {
  if (err) return handleError(err);
  
  console.log('The creator is %s', story._creator.name);
  // prints "The creator is Aaron"
  
  console.log('The creators age is %s', story._creator.age);
  // prints "The creators age is null'
})
```
or using the `select` field in the object  query  (also known as the query "projection"):

```javascript
                Story
                .findOne({ title: /timex/i })
                .populate({ path: '_creator', select: 'name' })
                .exec(function (err, story) {
                  if (err) return handleError(err);
                  console.log('The creator is %s', story._creator.name)
                }).then( () => { ...
```
* When using string syntax, prefixing a path with - will flag that
path as excluded. 
* When a path does not have the - prefix, it is
included. 
* Lastly, if a path is prefixed with +, it forces inclusion
of the path, which is useful for paths excluded at the [schema level](http://mongoosejs.com/docs/api.html#schematype_SchemaType-select) which sets the default `select()` behavior.

##### Populating multiple paths

What if we wanted to populate multiple paths at the same time?

```javascript
Story
.find(...)
.populate('fans _creator') // space delimited path names
.exec()
```
* In mongoose >= 3.6, we can pass a space delimited string of path
names to populate. 
* Before 3.6 you must execute the populate() method
multiple times.
* Véase por ejemplo [mongoosepopulationwithfans.js](https://gist.github.com/crguezl/06cef7cb8078a78a84bc0a28b8e014f8#file-mongoosepopulationwithfans-js-L43-L50)

```javascript
Story
.find(...)
.populate('fans')
.populate('_creator')
.exec()
```

##### Query conditions and other options

What if we wanted to populate our fans array based on their age, select just their names, and return at most, any 5 of them?

```javascript
Story
.find(...)
.populate({
  path: 'fans',
  match: { age: { $gte: 21 }},
  select: 'name -_id',
  options: { limit: 5 }
})
.exec()
```
* Véase [mongoosepopulationconditions.js](https://gist.github.com/crguezl/06cef7cb8078a78a84bc0a28b8e014f8#file-mongoosepopulationconditions-js-L46-L53)

##### Refs to children

We may find however, if we use the `aaron` object, we are unable to get a list of the stories. This is because no story objects were ever 'pushed' onto `aaron.stories`.

There are two perspectives here. First, it's nice to have aaron know which stories are his.

```javascript
aaron.stories.push(story1);
aaron.save(callback);
This allows us to perform a find and populate combo:
```

```javascript
Person
.findOne({ name: 'Aaron' })
.populate('stories') // only works if we pushed refs to children
.exec(function (err, person) {
  if (err) return handleError(err);
  console.log(person);
})
```

It is debatable that we really want two sets of pointers as they may get out of sync. Instead we could skip populating and directly `find()` the stories we are interested in.

```javascript
Story
.find({ _creator: aaron._id })
.exec(function (err, stories) {
  if (err) return handleError(err);
  console.log('The stories are an array: ', stories);
})
```

* Véase [mongoosepopulationstories.js](https://gist.github.com/crguezl/06cef7cb8078a78a84bc0a28b8e014f8#file-mongoosepopulationstories-js)

##### Populate: Véase 

* [Mongoose Populate](http://mongoosejs.com/docs/populate.html)
* [Mongoose Populate 2.7](http://mongoosejs.com/docs/2.7.x/docs/populate.html)
* [Understanding Mongoose Deep Population](http://frontendcollisionblog.com/mongodb/2016/01/24/mongoose-populate.html)

#### Tutoriales sobre Mongoose 

* [Easily Develop Node.js and MongoDB Apps with Mongoose](https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications)

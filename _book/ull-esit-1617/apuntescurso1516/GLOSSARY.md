#Web storage
web application
software methods and protocols used for storing data in a web browser. 

#DOM storage
web application
software methods and protocols used for storing data in a web browser. 

#CODE SMELL
is a surface indication that usually corresponds to a deeper problem in the system

#GOD OBJECT
In object-oriented programming, a god object is an object that knows too much or does too much. The god object is an example of an anti-pattern.

A common programming technique is to separate a large problem into several smaller problems (a divide and conquer strategy) and create solutions for each of them. Once the smaller problems are solved, the big problem as a whole has been solved. Therefore a given object for a small problem need only know about itself. Likewise, there is only one set of problems an object needs to solve: its own problems.

#EVENT
An event is the representation of some asynchronous occurrence (such as a mouse click on the presentation of the element, or an arithmetical error in the value of an attribute of the element, or any of unthinkably many other possibilities) that gets associated with an element (targeted at it) in a document.

#CAPTURE
In the DOM model of events , the general behavior is that when an event occurs it is dispatched by passing it down the document tree in a phase called capture to the element where the event occurred (called its target), where it then may be passed back up the tree again in the phase called bubbling. 

#BUBBLING
In the DOM model of events , the general behavior is that when an event occurs it is dispatched by passing it down the document tree in a phase called capture to the element where the event occurred (called its target), where it then may be passed back up the tree again in the phase called bubbling. 

#OBSERVER
In general an event can be responded to at any element in the path (an observer) in either phase by causing an action, and/or by stopping the event (stopPropagation stops the event from bubbling up the event chain), and/or by cancelling the default action for the event (`preventDefault prevents the default action the browser makes on that event.)

# TARGET PHASE
In the target phase, the event object arrives at its target. This is generally where you will write your event-handling code.

# DATA MODEL
A data model is simply an object representation of a collection of documents (or a table of registers) in a data store (or a data base). 

# SCHEMA
A schema is a data model describing the structure of all of the objects of a collection.
In MongoDB, each schema maps to a collection and defines the shape of the documents within that collection.

# BSON
MongoDB stores data records as BSON (See http://bsonspec.org/) documents. BSON is a binary representation of JSON documents, though it contains more data types than JSON (See https://docs.mongodb.org/manual/reference/bson-types/). 

# MONGODB DOCUMENTS
MongoDB documents are composed of field-and-value pairs. The value of a field can be any of the BSON data types, including other documents, arrays, and arrays of documents.

# POPULATION
in MongoDB Population refers to the process of automatically replacing the specified paths in the document with document(s) from other collection(s). 

SESSION ID
A session identifier, session ID or session token is a piece of data that is used in network communications (often over HTTP) to identify a session, a series of related message exchanges. 

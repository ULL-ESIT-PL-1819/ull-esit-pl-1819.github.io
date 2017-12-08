<!-- toc -->
## Los principios SOLID 

### Single responsibility principle

A class should have only a single responsibility (i.e. only one potential change in the software's specification should be able to affect the specification of the class)

* The **responsibility** is defined as a charge assigned to a unique actor to signify its accountabilities concerning a unique business task.
* The reason it is important to keep a class focused on a single concern is that it makes the class more robust.

#### Ejemplo
* As an example, consider a module that compiles and prints a report.
*  Imagine such a module can be changed for two reasons:
  * First, the content of the report could change.
  * Second, the format of the report could change.
* These two things change for very different causes; 
  * one substantive, and 
  * one cosmetic.
*  The single responsibility principle says that these two aspects of the problem are really two separate responsibilities, and should therefore be in separate classes or modules.
*  It would be a bad design to couple two things that change for different reasons at different times.
*  If there is a change to the report compilation process, there is greater danger that the printing code will break if it is part of the same class.


### Open/closed principle

"software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification"; 
that is, such an entity can allow its behaviour to be extended without modifying its source code.

* A module will be said to be **open** if it is still available for extension. For example, it should be possible to add fields to the data structures it contains, or new elements to the set of functions it performs.
* A module will be said to be **closed** if it is available for use by other modules. 
This assumes that the module has been given a well-defined, stable description (the interface in the sense of information hiding).

A class is closed, since it may be compiled, stored in a library, baselined, and used by client classes. But it is also open, since any new class may use it as parent, adding new features. When a descendant class is defined, there is no need to change the original or to disturb its clients

La presencia del *code smell* **Switch Statement Smell** suele indicar una violación del 
O/CP. Para entender la razón, vea el Vídeo  de Elijah Manor, al menos  desde el minuto 11:37 al 29:15:

{% youtube %}https://www.youtube.com/watch?v=JVlfj7mQZPo{% endyoutube %}

Pueden encontrar las [trasparencias](http://elijahmanor.com/talks/js-smells/#/) de la presentación en [http://elijahmanor.com/talks/js-smells/#/](http://elijahmanor.com/talks/js-smells/#/).

### Liskov substitution principle

Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program

Un smell que indica una violación del LSP es:
* **Refused bequest:** a class that overrides a method of a base class in such a way that the contract of the base class is not honored by the derived class. See Liskov substitution principle.

#### Ejemplo
* A typical example that violates LSP is a `Square` class that derives from a `Rectangle` class, assuming getter and setter methods exist for both `width` and `height`. 
* The `Square` class always assumes that the `width` is equal with the `height`. 
* If a `Square` object is used in a context where a `Rectangle` is expected, unexpected behavior may occur because the dimensions of a `Square` cannot (or rather should not) be modified independently.
*  This problem cannot be easily fixed: if we can modify the setter methods in the `Square` class so that they preserve the `Square` invariant (i.e.  , keep the dimensions equal), then these methods will weaken (violate) the postconditions for the `Rectangle` setters, which state that dimensions can be modified independently.
*  Violations of LSP, like this one, may or may not be a problem in practice, depending on the postconditions or invariants that are actually expected by the code that uses classes violating LSP.
*  **Mutability** is a key issue here.
*  If `Square` and `Rectangle` had only getter methods (i. e.  , they were **immutable** objects), then no violation of LSP could occur.


### Interface segregation principle

Many client-specific interfaces are better than one general-purpose interface.
An example is a 'fat' class with multitudes of methods specific to a variety of different clients. 

Estos smell pueden indicar una violación del principio ISP:

* **Large class:** a class that has grown too large. See God object.
* **Feature envy:** a class that uses methods of another class excessively.
* **Inappropriate intimacy:** a class that has dependencies on implementation details of another class.
* **Lazy class / Freeloader:** a class that does too little.
* **Cyclomatic complexity:** too many branches or loops; this may indicate a function needs to be broken up into smaller functions, or that it has potential for simplification.
* **Orphan Variable or Constant class:** a class that typically has a collection of constants which belong elsewhere (typically a problem when using a Constants class ) where those constants should be owned by one of the other member classes.

### Dependency inversion principle
One should “Depend upon Abstractions. Do not depend upon concretions.”
  1. High-level modules should not depend on low-level modules. 
  2. Both high-level and low-level modules should depend on abstractions.
  3. Abstractions should not depend on details. 
  4. Details should depend on abstractions.

* **Downcasting:** a type cast which breaks the abstraction model; the abstraction may have to be refactored or eliminated.

### Véase

Derek Greer article series on SOLID JavaScript at Fresh Brewed Code:


* [The Single Responsibility Principle](http://aspiringcraftsman.com/2011/12/08/solid-javascript-single-responsibility-principle/)
* [The Open/Closed Principle](http://aspiringcraftsman.com/2011/12/19/solid-javascript-the-openclosed-principle/)
* [The Liskov Substitution Principle](http://aspiringcraftsman.com/2011/12/31/solid-javascript-the-liskov-substitution-principle/)
* [The Interface Segregation Principle](http://aspiringcraftsman.com/2012/01/08/solid-javascript-the-interface-segregation-principle/)
* [The Dependency Inversion Principle](http://aspiringcraftsman.com/2012/01/22/solid-javascript-the-dependency-inversion-principle/)


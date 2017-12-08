## Manejadores de Eventos

An event is the representation of some asynchronous occurrence (such as a mouse click on the presentation of the element, or an arithmetical error in the value of an attribute of the element, or any of unthinkably many other possibilities) that gets associated with an element (targeted at it) in a document.

Suppose you have a table and within that table you have an anchor tag. Both the table and the anchor tag have code to handle mouse clicks. When the user clicks on the anchor tag, which HTML element should process the event first? Should it be the table then the anchor tag or vice versa?

In the DOM model of events , the general behavior is that when an event occurs it is dispatched by passing it down the document tree in a phase called capture to the element where the event occurred (called its target), where it then may be passed back up the tree again in the phase called bubbling. 

In general an event can be responded to at *any element in the path (an observer)* in either phase by causing 
* an action, and/or 
* by stopping the event (`stopPropagation` stops the event from bubbling up the event chain), and/or 
* by cancelling the default action for the event (`preventDefault` prevents the default action the browser makes on that event.). 

The following diagram illustrates this:

![Capture y Bubbling](http://www.w3.org/TR/xml-events2/images/event-flow.png)

* An event targeted at an element (marked 'target') in the tree passes down the tree from the root to the target in the phase called 'capture'. 
* When it arrives at the target it is in the 'target' (or 'at-target') phase. 
* If the event type allows it, the event then travels back up the tree by the same route in a phase called 'bubbling'. 

Any node in the route, including the root node and the target, may be an 'observer': 
that is to say, a handler may be attached to it that is activated when the event passes through in either phase. A handler can only listen for one phase. To listen for both you have to attach two handlers.



Formally, the event path is broken into three phases.

1. In the capture phase, the event starts at the top of the DOM tree, and propagates through to the parent of the target.
2. In the target phase, the event object arrives at its target. This is generally where you will write your event-handling code.
3. In the bubble phase, the event will move back up through the tree until it reaches the top. Bubble phase propagation happens in reverse order to the capture phase, with an event starting at the parent of the target and ending up back at the top of the DOM tree.

These days, there’s a choice to register an event in either the capture phase or the bubble phase.

If you register an event in the capture phase, the parent element will process the event before the child element.

The [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) method
```javascript
  target.addEventListener(type, listener[, useCapture]);
```
registers the specified listener on the `EventTarget` it's called on. 

The event target may be an `Element` in a document, the `Document` itself, a `Window`, or any other object that supports events (such as `XMLHttpRequest`).

### Véase

* [What's the difference between event.stopPropagation and event.preventDefault?](http://stackoverflow.com/questions/5963669/whats-the-difference-between-event-stoppropagation-and-event-preventdefault) at StackOverflow.
* [Registrando manejadores de Eventos en los apuntes](http://crguezl.github.io/pl-html/node18.html#SECTION041110080000000000000)
* [Propagación de Eventos en los apuntes](http://crguezl.github.io/pl-html/node18.html#SECTION041110070000000000000)

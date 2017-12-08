## Inversion of Control Pattern

There are mainly two approaches for extending the components of an application:
* Explicit extension
* Extension through Inversion of Control (IoC)

In the  first case, we have a more specific component (the one providing the new functionality) explicitly extending the infrastructure, while in the second case, it is the infrastructure to control the extension by loading, installing, or executing the new specific component. In this second scenario, the  flow of control is inverted.

![inversion del control](inversionofcontrol.png)

Instead of the custom code controlling the infrastructure, the infrastructure controls the custom code.
This is also known as the Hollywood principle or *"don't call us, we'll call you"*.


* [Wikipedia: Inversion of Control](https://en.wikipedia.org/wiki/Inversion_of_control)

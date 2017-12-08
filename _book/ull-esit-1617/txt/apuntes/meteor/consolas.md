# 3. Consolas de Meteor

## Terminal

Podemos acceder a esta shell a través del sistema operativo. Se lanza cuando lanzamos la aplicación ejecutando el siguiente comando:

```bash
meteor
```

En este caso, el prompt se dispone con el símbolo **"$"**, y la conocemos como *Shell* o *Bash*.

En esta shell se muestran los *console.log()* del lado del servidor.

![](http://i.imgur.com/D7mZHx4.png)

## Shell de meteor (servidor)

Podemos acceder a esta shell ejecutando:

```bash
meteor shell
```

Nos permite acceder directamente al código de la parte del servidor de nuestra aplicación.

Cómo prompt se dispone el símbolo **">"**.

![](http://i.imgur.com/tucDLjp.png)

## Shell para el cliente (MiniMongo)

El acceso a esta consola se produce a través del navegador. Una forma de hacer es hacer click con el botón derecho del ratón y seleccionar "Inspeccionar elemento".

En esta consola se muestran los *console.log()* del lado del cliente.

Cómo prompt se disponte el símbolo **">"**.

Desde esta shell podemos acceder a las colecciones a las que nos hemos suscrito desde el cliente a través de MiniMongo, la implementación de MongoDB para el cliente.

![](http://i.imgur.com/OafgEv8.png)

## Shell para Mongo

Podemos acceder a esta shell ejecutando:

```bash
meteor mongo
```

Su principal utilidad reside en que podemos acceder a través de ella a la base de datos de nuestra aplicación, es decir, a todas aquellas colecciones Mongo que hemos definido.

Cómo prompt se dispone el símbolo **">"**.

![](http://i.imgur.com/4PdvkOp.png)

En este ejemplo en concreto, hemos creado una colección Mongo llamada *Posts* dentro del directorio **lib/**, lo cual quiere decir que la colección es accesible tanto desde el cliente como desde el servidor. En las imágenes anteriores, podemos observar como podemos acceder a esta colección desde la shell de Mongo, la consola del navegador y la consola del servidor.

**¿Si actualizamos la colección Posts con un nuevo documento desde la shell del navegador, visualizaremos los cambios desde la shell de Mongo y desde la shell del servidor?**

Cuando realizamos un nuevo post o modificación, la colección del cliente informa del mismo a la colección del servidor, el cual inmediatamente se pone a distribuirlo en la base de datos de Mongo y a todos los clientes conectados a la colección correspondiente.

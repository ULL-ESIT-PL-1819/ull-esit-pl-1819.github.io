# 2. Instalando Meteor

## Instalación

Si usamos **Mac OS o GNU/Linux**, la instalación de Meteor pasa por la ejecución de la siguiente instrucción:

```bash
curl https://install.meteor.com | sh
```

Por otro lado, si usamos Windows, deberemos acceder al siguiente [enlace](https://www.meteor.com/install) y descargar el instalador.

![](http://i.imgur.com/aux89yw.png)

## Creación de la primera aplicación

Una vez instalado Meteor, ya podemos utilizar la herramienta de línea de comandos **meteor** para realizar múltiples operaciones como, por ejemplo, crear una aplicación:

```bash
meteor create <nombre_app>
```

Posteriormente, se creará un directorio que tiene por nombre el mismo que indicamos como nombre de la aplicación, que albergará una serie de archivos y directorios iniciales:

![](http://i.imgur.com/zQupCvg.png)

**Directorio "server/":** Todo el código dispuesto en este directorio se ejecutará en el servidor.

**Directorio "client/":** Todo el código dispuesto en este directorio se ejecutará en el cliente. A diferencia de otros sistemas, el código CSS en Meteor va en este directorio en lugar de */public*.

**Todo lo demás:** El resto de ficheros dispuestos en otros directorios que no sean los anteriores se ejecutarán en ambos contextos, es decir, tanto en el servidor como en el cliente.

Es aconsejable crear un directorio **lib/** dónde podamos incluir todo aquel código que nos pueda ser requerido desde cualquier parte como, por ejemplo, las colecciones de Mongo.
Por otro lado, de cara a la definición de templates o plantillas, sería aconsejable también crear un subdirectorio dentro de **client/**, dónde ubicaremos todos aquellos ficheros que contiene los templates que renderizarán los datos que se requieran.
Si queremos incluir imágenes u otros recursos estáticos, también es aconsejable crear un directorio **public/** en la raiz de nuestra aplicación para guardarlos.
No obstante, Meteor no impone una estructura definida de archivos y directorios.

Después de acceder al directorio que contiene nuestra app, debemos instalar todos aquellos paquetes dispuestos inicialmente por meteor ejecutando el siguiente comando:

```bash
meteor npm install
```

Finalmente, aunque nuestra aplicación no hace nada todavía, ya la tenemos preparada para poder desplegarla sin problemas ejecutando:

```bash
meteor
```

**IMPORTANTE**:

Meteor trabaja por defecto en el puerto 3000

## Añadiendo nuevos paquetes

Meteor tiene su propio sistema de paquetes que nos permite incluir algunos como Bootstrap sin necesidad de tener que introducir manualmente ficheros CSS y JavaScript.
Para ello, solo tenemos que ejecutar el siguiente comando:

```bash
meteor add <propietario/autor>:<paquete/framework>
```

Por ejemplo, si quisiésemos incluir Bootstrap o Underscore:

```bash
meteor add twbs:Bootstrap
meteor add Underscore
```

En el caso de Underscore, debido a que pertenece a los paquetes oficiales incluidos en Meteor no existe necesidad de incluir el nombre del autor. Sin embargo, Bootstrap es un framework externo por lo que debemos incluir también el nombre de su autor.

Hay distintos **tipos** de **paquetes** en Meteor:

- Paquetes de la plataforma de Meteor.

- Isopacks, paquetes ordinarios o paquetes isomórficos: Funcionan tanto en el cliente como en el servidor.

- Paquetes de terceros: Paquetes isopacks que otros usuarios han subido al servidor de paquetes de Meteor. Para buscarlos podemos ejecutar el siguiente comando:

```bash
meteor search
```

- Paquetes locales: Meteor nos permite generar nuestros propios paquetes o librerías y utilizarlos de manera personalizada. Se deberán ubicar en el directorio **/packages**.

- Paquetes NPM(Node.js Packaged Modules): No funcionan por defecto con Meteor, aunque pueden utilizarse por los paquetes anteriores.

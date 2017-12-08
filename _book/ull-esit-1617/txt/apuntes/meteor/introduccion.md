# 1. Meteor

## Definición

Meteor es un framework web gratuito, de código abierto y basado en Javascript. Se ha escrito usando Node.js, y se caracteriza por ofrecer al usuario la posibilidad de implementar prototipos en múltiples plataformas(Android, iOS, WEB).

Una de sus particularidades es su integración con MongoDB (base de datos no relacional), y por dos aspectos importantes:

- **Procotolo de datos distribuidos**: Hace referencia principalmente a la presencia de los datos en distintos entornos(tanto en el servidor como en el cliente).

- **Patrón de publicación/suscripción**: Hace referencia a la política de meteor de que el servidor publique los datos y que el cliente se suscriba a dicha publicación para poder acceder a ellos.

Estos aspectos permite la construcción de aplicaciones en tiempo real, evitando al usuario la implementación y la escritura de código síncrono, olvidándose de los problemas que suele llevar dicha tarea.

Meteor es desarrollado por *"Meteor Development Group"*.

Sus inicio remontan al año 2012 y actualmente se encuentra en un proceso activo de desarrollo.

## 7 principios fundamentales por los que se rige Meteor

- **Datos sobre el cable**

El cliente es el que decide como renderizar los datos. El servidor no envía HTML a través de la red, solo datos brutos.

- **Un único lenguaje**

Javascript.

- **Base de Datos en todos lados**

Protocolo de Datos distribuidos.

- **Compensación de latencia**

En el cliente destaca la obtención previa de los datos y la simulación del modelo para que se vea como que se tiene conexión sin latencia con la base de datos.

- **Reactividad en todo el sistema**

Tiempo real como valor por defecto.

- **Abraza al ecosistema**

Open Source y facilita la integración de herramientas ya existentes de código abierto.

- **Simplicidad equivale a productividad**

Uso continuo de APIs que favorecen la sencillez y limpieza en el código.

## Por qué Meteor

- **Recarga automática**

No es necesario recargar la ventana del navegador cada vez que cambiamos un archivo de código.
Esto es posible gracias a que Meteor hace un seguimiento de todos los archivos en el directorio del proyecto, y los actualiza automáticamente en el navegador cada vez que detecta un cambio en alguno de ellos, conservando incluso el estado de la aplicación entre dos refrescos.

- **Facilidad a la hora de añadir nuevos paquetes o frameworks**

Meteor libra al usuario desarrollador de tener que introducir manualmente ficheros típicos de CSS y Javascript(librerías) y de los problemas ocasionados en algunos casos por redireccionarlos mal. Únicamente tenemos que añadirlos con la herramienta de línea de comandos **meteor**.

- **Ejecución de ficheros organizada.**

Con el objetivo de evitar problemas de sincronización, Meteor carga los ficheros de la siguiente forma:

1. Todos los archivos en el directorio *lib/*

2. Los archivos con nombre main.* se cargarán siempre después de todos los demás.

3. Todo se carga por orden alfabético en función del nombre del fichero.

- **No tenemos que indicar a Meteor dónde se encuentra un archivo**.

Su sistema de búsqueda de ficheros encuentra eficientemente los recursos que se requieren sin necesidad de indicarlo manualmente.

- **Los nombres de los ficheros no son importantes**

Para Meteor lo verdaderamente importante es que el nombre de la plantilla o template esté bien definido, independientemente del fichero en el que se encuentra.

- **Meteor permite compartir código entre cliente y servidor.**

- **El código resultado es mucho más pequeño que con otras tecnologías**.

- **Filosofía multiplataforma**. Permite a los desarrolladores construir aplicaciones para cualquier dispositivo usando el mismo código (web, iOS, Android o escritorio).

- **Se basa principalmente en Javascript**. No implica el estudio ni la familiarización del desarrollador con nuevos lenguajes de programación.

## Datos de Interés

Los siguiente datos han sido extraídos completamente del sitio oficial de Meteor:

- Número de descargas e instalaciones: 508000

- Preguntas en StackOverflow: 24249

- Paquetes vinculados: 11801

## Enlaces de interés

- [Oficial Site](https://www.meteor.com/)

- [Meteor en Github](https://github.com/meteor/meteor)

- [Oficial Youtube](https://www.youtube.com/user/MeteorVideos)

- [Gitbook Documentación](https://gotrecillo.gitbooks.io/meteordocumentation/content/)
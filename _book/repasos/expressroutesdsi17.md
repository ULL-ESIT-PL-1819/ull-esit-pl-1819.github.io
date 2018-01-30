## Rutas en Express

1. Escriba un servidor que sirva ficheros estáticos desde el directorio `/public`
2. El servidor deberá responder a requests `GET` en las rutas `/user/nombredeusuario` (donde `nombredeusuario` varía) con una página que diga `Hola nombredeusuario` usando el método `render` del objeto `response`
  - La página se elaborara con una vista que debe estar en el directorio `views/` usando el motor de vistas `ejs`
  - La página elaborada en la respuesta tendrá un tag `img` referenciando  a una imagen  que está en `public/`
3. Escriba un middleware que intercepte en las rutas `/user/nombredeusuario` y que vuelque en la consola información sobre el [request](https://expressjs.com/en/4x/api.html#req): (por ejemplo los atributos  `method`, `path`, etc.)
4. Explique como se puede aislar  el código anterior en un fichero `routes/user.js` que sea cargado desde el programa principal
6. Explique que hay que hacer para desplegar la aplicación en la máquina virtual del iaas

## Práctica: Autenticación OAuth con Passport

<!--sec data-title="Descripción" data-id="sectiondescripcion" data-show=true ces-->
### Objetivo:

El servidor proveído por el plugin (sea `iaas`o `heroku`) deberá autenticar que el lector
del libro  pertenece  a una organización dada de GitHub (por ejemplo [ULL-ESIT-SYTW-1617](https://github.com/ULL-ESIT-SYTW-1617)). Si es el caso que pertenece podrá seguir leyendo el libro, sino será redirigido a la ruta de autenticación


* Puede partir de los repos de los plugins que ha usado en prácticas anteriores o crear unos nuevos


<!-- endsec -->

<!--sec data-title="Ejemplos y Referencias" data-id="sectionreferencias" data-show=true ces-->

### Referencias

* Sección [OAuth y Passport](../apuntes/authentication/README.md) en los apuntes
* Sección [Rest y GitHub API](../apuntes/rest/README.md) en los apuntes
* [GitHub API: Organization membership](https://developer.github.com/v3/orgs/members/)
  - [Publicizing or hiding organization membership](https://help.github.com/articles/publicizing-or-hiding-organization-membership/)
* [GitHub API: Organizations](https://developer.github.com/v3/orgs/)

### Ejemplos y Ayudas

* [GitHub repo demonstrating how to use Express 4.x and Passport to authenticate users using GitHub](https://github.com/ULL-ESIT-SYTW-1617/express-4.x-github-example)
* [GitHub repo demonstrating how to use Express 4.x and Passport to authenticate users using Facebook](https://github.com/ULL-ESIT-DSI-1617/express-4.x-facebook-example)
* GitHub API
  - [Check membership of a user in a GitHub organization](https://developer.github.com/v3/orgs/members/#check-membership): Check if a user is, publicly or privately, a member of the GitHub organization.
    ```
     GET /orgs/:org/members/:username
    ```
* Octonode
  - Get an organization's members (`GET /orgs/ULL-ESIT-SYTW-1617/members`)

    This query supports [pagination](https://github.com/pksunkara/octonode#pagination).

    ```js
    var ghme           = client.me();
    var ghuser         = client.user('crguezl');
    var ghrepo         = client.repo('crguezl/ull-esit-1617');
    var ghorg          = client.org('ULL-ESIT-SYTW-1617');

    ghorg.members(callback); //array of github users
    ```

  -  Check an organization member (`GET /orgs/ULL-ESIT-SYTW-1617/members/crguezl`)

    ```js
    ghorg.member('crguezl', callback); //boolean
    ```

 - Check a member's public membership in an org (`GET /orgs/ULL-ESIT-SYTW-1617/public_members/crguezl`)

    ```js
    ghorg.publicMember('crguezl', callback); //boolean
    ```

<!-- endsec -->

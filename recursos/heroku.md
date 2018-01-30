## [Heroku](https://devcenter.heroku.com/categories/nodejs)

* [Ejemplo de como Desplegar una Aplicación Express sobre Node.JS en Heroku](http://crguezl.github.io/pl-html/node11.html#SECTION041400100000000000000)
* [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
* [La rama heroku del repo how-jquery-works-tutorial](https://github.com/crguezl/how-jquery-works-tutorial/tree/heroku)
* [Deploy Node.JS Apps to Heroku](https://youtu.be/AZNFox2CvBk) YouTube Video

* Every Heroku app runs in at least two environments:
  1. on the Heroku platform (we’ll call that `production`) and
  2. on your local machine (`development`).

  En este artículo [Managing Multiple Environments for an App](https://devcenter.heroku.com/articles/multiple-environments) se habla de como hacer mas fácil el proceso de despliegue:
  * The solution is to have a staging environment that is as similar to `production` as is possible.
  * This can be achieved by creating a second Heroku application that hosts your staging application.
  * With staging, you can check your code in a `production`-like setting before having it affect your actual users.
  * As you already deploy with git, setting up and managing these multiple remote environments is easy.

* El artículo [Collaborating with Other Developers on Your App](https://devcenter.heroku.com/articles/collaborating) explica como poner a los otros miembros del equipo como colaboradores en tu app. Básicamente:
  1. Other developers can be invited to collaborate on your app by their email address:
    ```bash
    $ heroku access:add joe@example.com
    Adding joe@example.com to myapp collaborators... done
    ```
  2. Use the heroku access command to see the list of current collaborators:
      ```bash
      $ heroku access
      === theirapp Collaborators
      adam@example.com owner
      joe@example.com  collaborator
      ```
  3. You can revoke a collaborator’s access using the heroku access:remove command:
    ```bash
      $ heroku access:remove joe@example.com
      Removing joe@example.com from theirapp collaborators... done
    ```
  Como colaborador se debe:
  1. You should clone the app locally. The invitation email includes the name of the app.
     In this example, the app name is `theirapp`.
    ```bash
      $ heroku git:clone -a theirapp
    ```
  2. It’s strongly recommended that you get access to the canonical source code repository for the application (for instance on GitHub) and then use
    ```bash
      $ heroku git:remote
    ```
    to add a git remote to your checkout

* [Automatic deploys](https://devcenter.heroku.com/articles/github-integration#automatic-deploys)

  When you enable automatic deploys for a GitHub branch, Heroku will build and deploy all pushes to that branch. If, for example, you have a development app on Heroku, you can configure pushes to your GitHub development branch to be automatically built and deployed to that app.

* [Creating a 'Deploy to Heroku' Button](https://devcenter.heroku.com/articles/heroku-button)

### Preguntas y Respuestas

2. ¿Como genero un token para hacer uso de la API de Heroku?
```
$ heroku auth:token
```
3. ¿Cómo creo una app en Heroku usando la API de Heroku?
```
$ curl -X POST https://api.heroku.com/apps \
-H "Accept: application/vnd.heroku+json; version=3" \
-H "Authorization: Bearer $TUTORIAL_KEY"
```

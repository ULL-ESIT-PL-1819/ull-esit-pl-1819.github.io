# Skeleton to build a GitBook and Deploy it to GitHub Pages

Skeleton to build a book with gitbook and deploy it to GitHub pages

### Instrucciones para los autores

* Instale [git](https://git-scm.com/)
* Instale [NodeJS](https://nodejs.org/es/)
* Instale [gulp](https://gulpjs.com/) globalmente: `npm i -g gulp`
* Instale [gitbook](https://github.com/GitbookIO/gitbook/blob/master/docs/setup.md) en su ordenador
  * Install `gitbook-cli`:

              npm i -g gitbook-cli
* [Hágase miembro de GitHub](https://github.com/join?source=header-home)
* Install [hub](https://github.com/github/hub)
* El esqueleto de libro está alojado en el repo [https://github.com/etsiiull/gitbook-skeleton](https://github.com/etsiiull/gitbook-skeleton)
  * Fork or clone this repo `hub clone etsiiull/gitbook-skeleton my-repo`
  * Alternatively, clone the book in your machine using: `git clone https://github.com/etsiiull/gitbook-skeleton.git` 
* Modify the files (gulpfile.js, index.html, etc.)
  * Substitute all the appearances of `etsiiull` by `my-repo` in `gulpgile.js`,
     `package.json`
* Remove the `origin` remote: `git remote rm origin`
* Crea en GitHub el nuevo repo: `hub create ULL-ESIT-GRADOII-TFG/my-repo`
  ```
  [~/TFGsrc/my-repo(master)]$ git remote -v
  origin	https://github.com/ULL-ESIT-GRADOII-TFG/my-repo.git (fetch)
  origin	https://github.com/ULL-ESIT-GRADOII-TFG/my-repo.git (push)
  ```
* In GitHub settings of the repo, set the `master` branch for GitHub pages
* Run `gitbook install` to install plugins from registry.
* Instale las dependencias de este libro/proyecto `npm i`
* Escriba en [markdown](https://es.wikipedia.org/wiki/Markdown)  los textos que desee
* Compile el libro con `gulp build` para producir el HTML
* Para desplegar su version en GitHub escriba `gulp deploy`
* Visite [https://my-repo.github.io](https://etsiiull.github.io/gitbook-skeleton/_book/) para ver el resultado
* Para mas detalles mira la sección [Markdown y GitBook](gitbook.md)


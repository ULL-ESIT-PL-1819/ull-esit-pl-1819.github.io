# Skeleton to build a GitBook and Deploy it to GitHub Pages

Skeleton to build a book with gitbook and deploy it to GitHub pages

### Instrucciones para los autores

* Fork or clone this repo `hub clone etsiiull/gitbook-skeleton my-repo`
* Modify the files (gulpfile.js, index.html, etc.)
* Remove the `origin` remote: `git remote rm origin`
* Crea en GitHub el nuevo repo: `hub create ULL-ESIT-GRADOII-TFG/tfg-ideas`
  ```
  [~/TFGsrc/tfg-ideas(master)]$ git remote -v
  origin	https://github.com/ULL-ESIT-GRADOII-TFG/tfg-ideas.git (fetch)
  origin	https://github.com/ULL-ESIT-GRADOII-TFG/tfg-ideas.git (push)
  ```
* In GitHub settings of the repo, set the `master` branch for GitHub pages
* El libro está alojado en el repo [https://github.com/etsiiull/gitbook-skeleton](https://github.com/etsiiull/gitbook-skeleton)
* Instale [git](https://git-scm.com/)
* Clone el libro en su máquina: `git clone https://github.com/etsiiull/gitbook-skeleton.git` 
* Instale [NodeJS](https://nodejs.org/es/)
* Instale [gitbook](https://github.com/GitbookIO/gitbook/blob/master/docs/setup.md) en su ordenador
* Instale [gulp](https://gulpjs.com/) globalmente: `npm i -g gulp`
* Run `gitbook install` to install plugins from registry.
* Instale las dependencias de este libro/proyecto `npm i`
* [Hágase miembro de GitHub](https://github.com/join?source=header-home)
* Escriba en [markdown](https://es.wikipedia.org/wiki/Markdown)  los textos que desee
* Compile el libro con `gulp build` para producir el HTML
* Para desplegar su version en GitHub escriba `gulp deploy`
* Visite [https://etsiiull.github.io/gitbook-skeleton](https://etsiiull.github.io/gitbook-skeleton/_book/) para ver el resultado
* Para mas detalles mira la sección [Markdown y GitBook](gitbook.md)


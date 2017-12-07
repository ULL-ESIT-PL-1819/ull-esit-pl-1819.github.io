# Skeleton to build a GitBook and Deploy it to GitHub Pages

Skeleton to build a book with gitbook and deploy it to GitHub pages

### Instrucciones para los autores

Assume you want to create a book inside the Github organization
`my-organization` with name `my-repo`. Follow these steps:

* Install [git](https://git-scm.com/)
* Install [NodeJS](https://nodejs.org/es/)
* Install [gulp](https://gulpjs.com/) globally: `npm i -g gulp`
* Install [gitbook](https://github.com/GitbookIO/gitbook/blob/master/docs/setup.md) in your computer
  * Install `gitbook-cli`:

              npm i -g gitbook-cli
* [Join GitHub](https://github.com/join?source=header-home)
* Install [hub](https://github.com/github/hub) (optional)
* The skeleton of the book is hosted in this repo: [https://github.com/etsiiull/gitbook-skeleton](https://github.com/etsiiull/gitbook-skeleton)
  * Fork or clone this repo `hub clone etsiiull/gitbook-skeleton my-repo`
  * Alternatively, clone the book in your machine using: `git clone https://github.com/etsiiull/gitbook-skeleton.git` 
* Modify the files `gulpfile.js` and `package.json`
  * Substitute all the appearances of `etsiiull` by `my-organization` in `gulpfile.js`,
  * Substitute all the appearances of `gitbook-skeleton` by `my-repo` in `gulpfile.js`,
     `package.json`
* Remove the `origin` remote: `git remote rm origin`
  - Or alternatively rename the remote `git remote rename origin etsiiull`
* Create the new repo in GitHub: `hub create my-organization/my-repo`
  ```
  [~/TFGsrc/my-repo(master)]$ git remote -v
  origin	https://github.com/my-organization/my-repo.git (fetch)
  origin	https://github.com/my-organization/my-repo.git (push)
  ```
* In GitHub go to the settings of the new repo and set the `master` branch as the branch for GitHub pages
* Run `gitbook install` to install plugins from registry.
* Install the dependencies of this book/project `npm i`
* Write in [markdown](https://es.wikipedia.org/wiki/Markdown) the contents of your book
* Compile the book with `gulp build` to produce the HTML
* To deploy your book in GitHub write `gulp deploy`
* Visit [https://my-repo.github.io](https://etsiiull.github.io/gitbook-skeleton/_book/) to see the result
* For more details see the section [Markdown and GitBook](gitbook.md)



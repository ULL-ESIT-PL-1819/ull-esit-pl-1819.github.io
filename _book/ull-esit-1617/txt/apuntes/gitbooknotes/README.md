# GitBook

## Markdown

* [Markdown Tutorial](http://www.markdowntutorial.com/)
* [Markdown Basics](https://daringfireball.net/projects/markdown/basics)
* [Pandoc](http://pandoc.org/)

## Documentación

* [Nustros apuntes sobre GitBook](https://casianorodriguezleon.gitbooks.io/elaboracion-de-material-docente-con-gitbook)
* [Gitboook help center](https://help.gitbook.com/)
* [GitBook documentation](https://www.gitbook.com/book/gitbookio/documentation/details)
* [GitBook Toolchain Documentation](https://toolchain.gitbook.com/): This document aims to be a comprehensive guide to GitBook
* [Documentation for developers (API & Plugins)](developer.gitbook.com)
* [Can I host my GitBook content on GitHub?](https://help.gitbook.com/github/can-i-host-on-github.html)

## Tutoriales

* [A Step-by-Step Guide: GitBook on Netlify](https://www.netlify.com/blog/2015/12/08/a-step-by-step-guide-gitbook-on-netlify/)
* [Using Gitbook to document an open source project](https://medium.com/@gpbl/how-to-use-gitbook-to-publish-docs-for-your-open-source-npm-packages-465dd8d5bfba#.lpkgyg409)

## Videos

* Book publishing for developers with Gitbook by John Stevenson
  - {% youtube %}https://youtu.be/7FsJ7CKG-DM{% endyoutube %}
* [A GitBook Introduction](https://youtu.be/X_npbLCNuSo)
  - {% youtube %}https://youtu.be/X_npbLCNuSo{% endyoutube %}
* [GitBook intro in OpenSuse](https://youtu.be/X_npbLCNuSo)
## Plugins

* [Plugins for GitBook](https://plugins.gitbook.com/)
* [GitBook Project Test](https://www.gitbook.com/book/ymcatar/gitbook-test/details): This is a GitBook created so as to test the new plugins:
  - YouTube video embedding (gitbook-plugin-youtubex).
  - Section plugin (gitbook-plugin-sectionx).
  - Multiple-choice plugin (gitbook-plugin-mcqx).
  - Fill-in-the-blank plugin (gitbook-plugin-fbqx).
  - Ace (code editor) plugin (gitbook-plugin-ace). Obsoleto? Parece dar problemas.
  - page-toc: da problemas. Salen chivatos en la página HTML
  - copy-code-button: quizá sea este el que da problemas. Salen chivatos en la página HTML

## Autenticación en los servidores de GitBook

* [¿Como usar git para actualizar milibro?](https://casianorodriguezleon.gitbooks.io/elaboracion-de-material-docente-con-gitbook/content/como-usar-git-para-actualizar-mi-libro.html)

* [Two-factor auth turned on in Github produces problems authenticating in gitbook](https://github.com/GitbookIO/gitbook/issues/1305)
## Tópicos y Preguntas

* [Highlighting Rows In Code Blocks #433](https://github.com/GitbookIO/gitbook/issues/433)
  * [Code Highlighter plugin](https://plugins.gitbook.com/plugin/code-highlighter)
* Killing the server
  - On Mac:  `lsof -n -i4TCP:35729 | grep LISTEN` or `lsof -n -iTCP:$PORT | grep LISTEN` or `lsof -n -i:$PORT | grep LISTEN`

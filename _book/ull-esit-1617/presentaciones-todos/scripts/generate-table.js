import Gitbook from './gitbook-info'
import path from 'path'
import table from 'markdown-table'

export default async function generateIndex () {
  const ghPath = path.resolve(__dirname, '..', require('../book.json').root)
  let gitbook = new Gitbook(ghPath)
  await gitbook.read()
  console.log(table(toArr(gitbook)))
}

function toArr (gitbook) {
  let headers = ['Título', 'Autor', 'Directorio', 'Fecha']
  let all = gitbook.chapters.map(chapterToArr)
  all.unshift(headers)
  return all
}

function chapterToArr (chapt) {
  return [
    `[${chapt.title}](http://ULL-ESIT-SYTW-1617.github.io/presentaciones-todos/${chapt.directory})`,
    chapt.author,
    `[\`${chapt.directory}\`](https://github.com/ULL-ESIT-SYTW-1617/presentaciones-todos/tree/master/txt/${chapt.directory})`,
    chapt.fecha
  ]
}

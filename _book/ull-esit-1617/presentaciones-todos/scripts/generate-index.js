import Gitbook from './gitbook-info'
import path from 'path'
import fs from 'fs-promise'

export default async function generateIndex () {
  const ghPath = path.resolve(__dirname, '..', require('../book.json').root)
  let gitbook = new Gitbook(ghPath)
  await gitbook.read()
  await fs.writeFile(path.join(ghPath, 'SUMMARY.md'), gitbook.toIndex('Índice de Presentaciones'))
}

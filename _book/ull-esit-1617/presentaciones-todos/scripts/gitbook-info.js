import fs from 'fs-promise'
import path from 'path'

export default class Gitbook {
  constructor (root) {
    this.root = root
    this.chapters = []
  }

  async read () {
    let directories = (await fs.readdir(this.root)).filter(c => c !== 'README.md' && c !== 'SUMMARY.md')
    this.chapters = directories.map(dir => new Chapter(this.root, dir))
    await Promise.all(this.chapters.map(subc => subc.read()))
  }

  toIndex (header) {
    return `# ${header}\n\n` + this.chapters.map(ch => ch.toIndex()).join('\n')
  }
}

class Chapter {
  constructor (baseDir, directory) {
    this.baseDir = baseDir
    this.directory = directory
    this.title = ''
    this.author = ''
    this.fecha = ''
    this.subChapters = []
  }

  async getChapterInfo () {
    let readme = await fs.readFile(path.resolve(this.baseDir, this.directory, 'README.md'), 'utf8')
    try {
      this.title = readme.match(/# (.+)/)[1]
      this.author = readme.match(/\* Autor: (.+)/)[1]
      this.fecha = readme.match(/\* Fecha: (.+)/)[1]
    } catch(err) {
      err.message = `Falta algo en ${path.resolve(this.baseDir, this.directory)}`
      throw err
    }
  }

  async getSubChapters () {
    // Leer los ficheros que corresponden a capítulos
    let files
    try {
      files = await fs.readdir(path.resolve(this.baseDir, this.directory))
    } catch(err) {
      console.error(err)
      throw err
    }

    this.subChapters = files
      .filter(c => c !== 'README.md' && /^.+\.md$/.test(c))
      .map(file => new SubChapter(path.join(this.baseDir, this.directory), file))

    await Promise.all(this.subChapters.map(sch => sch.read()))

    this.subChapters.sort((a, b) => a.number - b.number)
  }

  async read () {
    await Promise.all([this.getChapterInfo(), this.getSubChapters()])
  }

  toIndex () {
    let title = `* [${this.title}](${this.directory}/README.md)`
    return title + '\n' + this.subChapters.map(sch => sch.toIndex()).join('\n')
  }
}

class SubChapter {
  constructor (baseDir, file) {
    this.baseDir = baseDir
    this.file = file
    this.title = ''
    this.number = 0
  }

  async read () {
    let content = await fs.readFile(path.resolve(this.baseDir, this.file), 'utf8')
    this.title = content.match(/# \d\d?\. (.+)/)[1]
    this.number = parseInt(content.match(/# (\d\d?)\./)[1])
  }

  toIndex() {
    let relative = `${this.baseDir.split(path.sep).slice(-1).pop()}/${this.file}`
    return `  * [${this.number}. ${this.title}](${relative})`
  }
}

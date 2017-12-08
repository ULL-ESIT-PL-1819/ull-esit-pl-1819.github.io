import { series, parallel, src } from 'gulp'
import del from 'del'
import gitbook from './scripts/gitbook'
import mdlint from './scripts/gulp-lint-markdown'
import plugins from './plugins.json'

const outputDir = 'gh-pages'

// Sacar la tabla que está en el README.md
export generateTable from './scripts/generate-table'

// Generar el SUMMARY.md
export index from './scripts/generate-index'

// Refrescar el fichero contributors
export contributors from './scripts/contributors'

// Desplegar en gh-pages
import deployGhPages from './scripts/deploy-gh-pages'
// Instalar las dependencias del gitbook (las que están en el book.json)

// Mapear comandos de gitbook al gulp
export const install = () => gitbook('install')()
export const generate = () => gitbook('build', ['.', outputDir])()

// Ojo, a veces no funciona:
// https://github.com/GitbookIO/gitbook/issues/1309
// https://github.com/GitbookIO/gitbook/issues/1379
export const serve = () => gitbook('serve', ['.', outputDir])({port: 8080, open: 'true'})

export const build = series(install, generate)
export const deploy = parallel(deployGhPages)
export const clean = () => del([outputDir, 'wiki', '_book'])

export const all = series(build, deploy)

// Lintear los markdown
export const lint = () => src(['README.md', 'txt/**/*.md']).pipe(mdlint())

export default all

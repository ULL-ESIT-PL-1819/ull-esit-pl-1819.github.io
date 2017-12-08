import mdlint from 'markdownlint'
import through2 from 'through2'
import path from 'path'

export default function lintMarkdown (config = {MD029: {style: 'ordered'}, MD013: {line_length: Infinity}}) {
  return through2.obj((file, enc, next) => {
    let files = [path.join(file.base, file.relative)]
    mdlint({files,config}, (err, result) => {
      let resultString = (result || '').toString()
      if (resultString) console.log(resultString)
      next(err, file)
    })
  })
}

import gitbook from 'gitbook'

// La configuración por defecto viene dada por gitbook: https://github.com/GitbookIO/gitbook/tree/master/lib/cli

export default function getCommand(command, args = []) {
  let regex = new RegExp(command)
  let cmd = gitbook.commands.filter(cmd => regex.test(cmd.name))[0]
  let defOpts = {}
  for (let option of cmd.options) {
    defOpts[option.name] = option.defaults
  }

  return (options = {}) => cmd.exec(args, {...defOpts, ...options})
}

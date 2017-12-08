import GhPages from 'gh-pages'

export default function deployGitbook () {
  return new Promise((resolve, reject) => {
    GhPages.publish('./gh-pages', {
      repo: require('../package.json').repository.url,
      logger: console.log
    }, resolve)
  })
}

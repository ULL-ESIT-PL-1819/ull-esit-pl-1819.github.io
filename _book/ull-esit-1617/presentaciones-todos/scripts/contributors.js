import fsp from 'fs-promise'
import git from 'simple-git'
import path from 'path'
import _ from 'lodash'

function getContributors (log) {
  let contributors = []
  for (let commit of log.all) {
    let i = _.findIndex(contributors, contributor => contributor.name === commit.author_name)
    let date = new Date(commit.date)
    if (i === -1) {
      contributors.push({
        name: commit.author_name,
        email: commit.author_email,
        date,
        since: dateSince(date)
      })
    } else if (contributors[i].date < date) {
      contributors[i].date = date
      contributors[i].since = dateSince(date)
    }
  }
  return contributors
}

function dateSince (since) {
  let today = new Date()
  let years = today.getYear() - since.getYear()
  let months = today.getMonth() - since.getMonth()
  let str = ''

  if (years) {
    if (years === 1) {
      str += '1 year'
    } else {
      str += `${years} years`
    }
    str += ' '
  }

  if (months) {
    if (months === 1) {
      str += '1 month'
    } else {
      str += `${months} months`
    }
  }
  return str
}

async function print (contributors) {
  let data = `# Last update: ${new Date()}\n`
  for (let contributor of contributors) {
    data += `${contributor.name} <${contributor.email}> (since ${contributor.date}`
    if (contributor.since) {
      data += `, ${contributor.since} ago`
    }
    data += ')\n'
  }
  await fsp.writeFile(path.resolve('MAINTAINERS'), data)
}

export default function contributors () {
  return new Promise((resolve, reject) => {
    const repo = git()

    repo.log((err, log) => {
      if (err) reject(err)
      print(getContributors(log)).then(resolve).catch(console.error)
    })
  })
}

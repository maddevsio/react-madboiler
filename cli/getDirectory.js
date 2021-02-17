const fs = require('fs')
const path = require('path')

const getDirectory = relativePath => {
  const directory = path.resolve(`${__dirname}/../${relativePath}`)
  if (fs.existsSync(directory)) throw new Error(`Directory ${directory} already exist!`)
  fs.mkdirSync(directory)
  return directory
}

module.exports = getDirectory

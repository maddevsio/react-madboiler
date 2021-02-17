const fs = require('fs')
const path = require('path')

const createFile = (dir, name, content) => {
  fs.writeFileSync(path.resolve(`${dir}/${name}`), content, err => {
    if (err) throw new Error(err)
  })
}
module.exports = createFile

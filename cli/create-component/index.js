const { componentContent, styleContent, testContent, indexContent } = require('./data')
const createFile = require('../createFile')
const getArgs = require('../getArgs')
const getDirectory = require('../getDirectory')

const main = () => {
  // getting path arguments

  const [name] = getArgs()
  if (!name) throw new Error('Please, put component name')

  const directory = getDirectory(`src/components/${name}`)

  const files = {
    [`${name}.jsx`]: componentContent,
    [`${name}.styles.js`]: styleContent,
    [`${name}.test.jsx`]: testContent,
    'index.jsx': indexContent,
  }

  // Creating files
  Object.entries(files).forEach(([filename, content]) => createFile(directory, filename, content(name)))
}

main()

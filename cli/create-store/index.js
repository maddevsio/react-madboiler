const { actionsContent, reducerContent, testContent, selectorsContent } = require('./data')
const createFile = require('../createFile')
const getArgs = require('../getArgs')
const getDirectory = require('../getDirectory')

const main = () => {
  // getting path arguments

  const [name] = getArgs()
  if (!name) throw new Error('Please, put component name')

  const directory = getDirectory(`src/store/${name}`)

  const files = {
    'actions.js': actionsContent,
    'reducer.js': reducerContent,
    'selectors.js': selectorsContent,
    [`${name}.test.js`]: testContent,
  }

  // Creating files
  Object.entries(files).forEach(([filename, content]) => createFile(directory, filename, content(name)))
}

main()

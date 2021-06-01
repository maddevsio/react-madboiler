# React MAD Boiler

![image](https://user-images.githubusercontent.com/35951221/120283002-867f1080-c2dc-11eb-9980-ff8e955cadad.png)


React quick-start project boilerplate with everything you need inside.

# Translations
- English
- [Russian](./docs/ru.md)

# Technology stack
* [React](https://ru.reactjs.org/)
* [React-router-dom](https://reactrouter.com/web/guides/quick-start)
* [Styled-components](https://styled-components.com/)
* [React-use](https://github.com/streamich/react-use)
* [Prop-types](https://www.npmjs.com/package/prop-types)
* [Axios](https://github.com/axios/axios)
* [Jest](https://jestjs.io/)
* [Testing-library](https://testing-library.com/)
* [ESlint](https://eslint.org/)
* [Prettier](https://prettier.io/)

## Table of contents
1. [First start](#first-start)
2. [Project structure](#structure)
3. [Routing](#routing)
4. [Components](#components)
5. [LocalStorage](#local-storage)
6. [Hooks](#hooks)
7. [Utils](#utils)
8. [Axios](#axios)
9. [Styles](#styles)
10. [Testing](#testing)
11. [Formatting](#formatting)
12. [JSDoc](#jsdoc)
13. [Running in production](#running-in-production)
14. [Cypress](#cypress)
15. [TypeScript](#typescript)
16. [Gitlab CI](#gitlabci)
17. [Tricks](#tricks)


# First start
### Using docker and docker-compose
This option is good in that you don't need to install a lot of dependencies on your working device. Docker just encapsulates all that trash.

To start the project with this option you need to install [Docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/)

After, you just need to run the following command:
```bash
  yarn docker:dev
```

When `Docker` installs all the necessary dependencies and builds your application, you will see `Compiled successfully` in your console. Your project is available on `3000` port; you can open it and start developing. - [http://localhost:3000](http://localhost:3000)

### Using npm dependencies
If you can't or don't want to use `docker` you can use the default method for starting your project using [Node.JS and npm(yarn)](https://nodejs.org/en/)

1. Install dependencies
```bash
  yarn # or npm i
```
2. Start the project
```bash
  yarn start # or npm start
```
The application is available on [http://localhost:3000](http://localhost:3000)

# Structure
```
.
├── README.md
├── package.json
├── yarn.lock
├── docker-compose.dev.yml
├── docker-compose.prod.yml
├── .env.example
├── .eslintrc
├── .gitlab-ci.yml
├── .stylelintrc
├── public
├── cli
├── docs
├── docker
│   ├── Dockerfile.dev
│   ├── Dockerfile.prod
├── src
│   ├── assets
│   │   ├── images
│   │   └── fonts
│   ├── components
│   │   └── [ComponentName]
│   │   │   └── index.js
│   │   │   └── [ComponentName].jsx
│   │   │   └── [ComponentName].test.jsx
│   │   │   └── [ComponentName].styles.js
│   ├── config
│   ├── pages
│   ├── hocs
│   ├── hooks
│   ├── index.js
│   ├── Router.jsx
│   ├── setupTests.js
│   ├── test.utils.js
│   ├── store
│   │   ├── configure.js
│   │   ├── index.js
│   │   ├── localStorage.js
│   │   ├── store.utils.js
│   │   ├── [storeName]
│   │   │   ├── actions.js
│   │   │   └── reducer.js
│   │   │   └── selectors.js
│   ├── utils
```

**README.md** - Project description
**package.json** - Npm configuration file
**yarn.lock** - Dependencies lockfile
**docker-compose.dev.yml** - docker-compose config for development
**docker-compose.prod.yml** - docker-compose config for build production
**.env.example** - environment examples file
**.eslintrc** - ESLint config
**.gitlab-ci.yml** - Gitlab CI config
**.stylelintrc** - Stylelint config

**public** - Folder with static files
**cli** - Helpful scripts(CLI)
**docs** - Additional documentation
**docker** - Dockerfiles' folder
**docker/Dockerfile.dev** - config for dev mode
**docker/Dockerfile.prod** - config for prod mode

**src** - Main development folder

**src/assets** - Static assets (images, fonts, etc.)

**src/components** - Components folder
**src/components/[ComponentName]** - A single component folder
**src/components/[ComponentName]/index.jsx** - Core file(logic, default export)
**src/components/[ComponentName]/[ComponentName].jsx** - View(markup)
**src/components/[ComponentName]/[ComponentName].test.jsx** - Unit-tests
**src/components/[ComponentName]/[ComponentName].styles.js** - Styles

**src/config** - Configuration files(axios, theme, etc.)

**src/pages** - Pages folder(routes)

**src/hocs** - Higher Order Components (HOCs)

**src/hooks** - React-hooks

**src/index.js** - Core application file(entry point)

**src/Router.jsx** - Main router

**src/test.utils.js** - Testing utils(testing-library)

**src/utils** - Utils folder(additional small reusable functions)

# Routing
We use [`react-router-dom`](https://reactrouter.com/web/guides/quick-start) for routing in the application.

All the routes are stored in the `src/Router.jsx` file.

```javascript
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// pages
import { Main, Todo } from './pages'

function Router() {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/todo' component={Todo} />
    </Switch>
  )
}

export default Router
```

### Adding a new route
1. Create the new file in the `src/pages` folder:

```javascript
// NewPage.jsx
import React from 'react'

export default function NewPage() {
  return (
    <div>New page</div>
  )
}
```

2. Add the new page in `src/pages/index.js` file for better import:

```javascript
import Main from './Main'
import Todo from './Todo'
import NewPage from './NewPage'

export {
  Main,
  Todo,
  NewPage,
}
```

3. Add the new page in `src/Router.jsx` file

```javascript
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// pages
import { Main, Todo, NewPage } from './pages'

function Router() {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/todo' component={Todo} />
      <Route exact path='/new-page' component={NewPage} />
    </Switch>
  )
}

export default Router
```

### Additional information
* [Documentation](https://reactrouter.com/web/guides/quick-start)
* **Important** The pages are used only to logically separate different parts of the application. You don't need to use the pages as components. You can use [`react-helmet`](https://www.npmjs.com/package/react-helmet) to set up the page's meta-tags (title, description, etc.)

# Components
When you work with the components, it's recommended to use a modern approach with functional components and hooks.
**It's not recommended to use class components because they work too slowly (performance) and won't be supported**

### Creating
To create the component, you can use the following `CLI-script`:
```bash
  yarn create:component MyComponent
```
After using this script, the folder with your component's name will appear in your `src/components` folder. In this case, it will be the `src/components/MyComponent` folder.

### Component's files description

**index.jsx** - core file with logic. Example:

```javascript
import React, { useState } from 'react'
import { useMount, useUpdateEffect } from 'react-use'

// view
import TodoList from './TodoList'

function Wrapper() {
  const [todos, setTodos] = useState([])

  const getInitialTodos = () => {
    // ...some logic to get initialTodos from localStorage
  }

  const saveTodos = () => {
    // ...some logic to save todos from localStorage
  }

  const addTodo = todo => setTodos([...todos, todo])
  const removeTodo = todo => setTodos([...todos.filter(todo => todo === todo)]);

  // Use mount-hook for calling getInitialTodos() after mount
  useMount(() => getInitialTodos())

  // Watch todos and save it in localStorage after updating
  useUpdateEffect(() => saveTodos(), [todos])

  // return view with some props
  return <TodoList todos={todos} addTodo={addTodo} removeTodo={removeTodo} />
}

export default Wrapper
```

**[ComponentName].jsx** - view file (markup). Example:
```javascript
import React from 'react'
import PropTypes from 'prop-types'

import TodoItem from '../TodoItem'

// prop-types
const propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
}

function TodoList({ todos }) {
  if(!Boolean(todos.length)) return <div className="empty">No todos :)</div>
  return (
    <div className="todo-list">
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  )
}

TodoList.propTypes = propTypes

export default TodoList
```

**[ComponentName].test.jsx** - unit tests
**[ComponentName].styles.js** - styles (styled-components by default)

### Useful links
* [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
* [Hooks](https://reactjs.org/docs/hooks-intro.html)

# LocalStorage
To work with localStorage, you can use additional utilities: `loadState` and `saveState`
Example:
```
import { saveState, loadState }  from '../utils/localStorage'
const save = data => saveState(data, 'key')
const load = () => loadState('key')
```

# Hooks
#### React-use
This is a library of additional react hooks that meet most of the needs so that you do not have to reinvent the wheel every time.
[Hooks list](https://github.com/streamich/react-use)
Most useful hooks:
* [useDebounce](https://github.com/streamich/react-use/blob/master/docs/useDebounce.md)
* [useLocalStorage](https://github.com/streamich/react-use/blob/master/docs/useLocalStorage.md)
* [useMount](https://github.com/streamich/react-use/blob/master/docs/useMount.md)
* [useUpdateEffect](https://github.com/streamich/react-use/blob/master/docs/useUpdateEffect.md)
* [usePrevious](https://github.com/streamich/react-use/blob/master/docs/usePrevious.md)
* [useBoolean](https://github.com/streamich/react-use/blob/master/docs/useToggle.md)
* [useList](https://github.com/streamich/react-use/blob/master/docs/useList.md)

#### Custom hooks
Creating custom hooks is a very useful thing as it allows reusing large amounts of code. If you see code that will probably be reused in the future, hook it.

This is an example of usaging a simple custom hook implementing work with API:
```javascript
import { useState } from 'react'
import { useList, useToggle } from 'react-use'

import fetchImages from './fetchImages'

const useFetchImages = ({ source }) => {
    const [images, imagesActions] = useList([])
    const [isLoading, toggleLoading] = useToggle(false)
    const [error, setError] = useState(null)
    
    const fetchImages = async () => {
        toggleLoading(true)
        try {
            const data = await fetchImages(source)
            imagesActions.set(data)
        } catch(err) {
            setError(err)
        }
        toggleLoading(false)
    }
    
    return {
        images,
        isLoading,
        error,
        fetchImages,
    }
}

export default useFetchImages
```

# Utils
Utilities are stored in the `src/utils` folder in separate files.

#### Available utilities
* `camelToSnakeCase` and `snakeToCamelCase` - transformation of a string into various styles of writing phrases without spaces or punctuation
* `normalizeObjectKeys` - transformation of all the object fields (keys) using `snakeToCamelCase`
* `normalizeCollectionKeys` - transformation of all the elements (Element should be an object) of the array using `normalizeObjectKeys`
* `getRequestParams` - function for getting values of get-parameters from location.search.
* `localStorage` - utilities for working with localStorage

**PS: The list will be updated**

# Axios
In working with API requests, the most useful library is [`axios`](https://github.com/axios/axios) with `async/await` syntax.

#### `axios` configuration
`axios` configuration is in the `src/config/api.js` file. 

#### Additional function `setApiHeader`
If you need to add a header in the existing axios instance, you can use `setApiHeader` function. Example:
```javascript
import { setApiHeader, api } from '../config'

async function authenticate() {
  // Authorization
  const response = await api.post('/auth')

  // Getting token from response
  const { token } = response

  // Set header for the next authenticated requests
  setApiHeader('Authorization', `Bearer ${token}`)
}

authenticate()
```

**Note: Always try to use [async/await](https://learn.javascript.ru/async-await) syntax**

# Environment variables
To work with environment variables, we need to use some config files:
* `.env.example` - for storing examples of variables
* `.env` - for variables

To add a new environment variable, you need to do the following steps:
1. Add variables into `.env.example` file with empty value
```
REACT_APP_API_BASE_URL=
```
2. Add variable with value into `.env` file.
```
REACT_APP_API_BASE_URL=https://google.com/api
```
3. Restart the project (required)
4. Add the variable into the config (`src/config/index.js`)
```javascript
export const config = {
  API_URL: process.env.REACT_APP_API_BASE_URL,
}
```
5. Use variable from config
```javascript
axios.get(config.API_URL)
```

**Note: Don't forget to restart the project after adding/updating any variables**
**Note 2: Environment variables should be ALWAYS started by `REACT_APP_`; otherwise, they won't work**

# Styles
To write styles, we can use several approaches:
* Scss/BEM - Default styling
* Css-In-JS ([styled-components](https://styled-components.com/docs/advanced#theming)) - a recommended option that is simpler and more convenient than the previous one.

# Testing
In testing the components (unit testing), `Jest` and `React-testing-library` are used.

#### Useful links
[Jest](https://jestjs.io/docs/en/getting-started)
[Testing-library](https://testing-library.com/)
[React-testing-library](https://testing-library.com/docs/react-testing-library/intro)

#### Running unit tests
There are several scripts to run tests:
`yarn test` - watch-mode
`yarn test:coverage` - watch-mode+coverage
`yarn test:ci` - without watch-mode + coverage + disable coloring output

#### Coverage
Coverage generates after running `yarn test:coverage` command.
You can see expanded coverage in the HTML format in the `./coverage` folder.

**Note: Unit tests also have a minimal coverage threshold. If coverage is less than 80%, the tests will fail**

# Formatting
Linters are to keep code clean. They prevent shitcode from getting into a repository.
#### ESLint
[Eslint](https://eslint.org/) is used for linting Javascript code.
[Airbnb](https://www.npmjs.com/package/eslint-config-airbnb) config is used as default.

To run a linter, you can use the following npm-scripts:
`yarn lint:js` - to run a linter
`yarn lint:js:fix` - to run a linter with autofix

#### CSS (styled-components)
To lint css code, [stylelint](https://stylelint.io/) is used.
The linter checks your code for typos and spelling mistakes.

To run the linter, you can use `yarn lint:css` script

### Airbnb styleguide links
- [Javascript](https://github.com/airbnb/javascript)
- [React](https://github.com/airbnb/javascript/tree/master/react)

**Note: To run both linters, you can use `yarn lint:all` script**

# JSDoc
The optimal solution to make your code more readable and cleaner is to use JSDoc. The project doen't use JSDoc by default, but you can easily add it using the following helpful links:
[Documentation](https://jsdoc.app/)
[eslint-plugin](https://www.npmjs.com/package/eslint-plugin-jsdoc)

# Running in production
To run the project in production, you can use `yarn docker:prod` script. This script does the following steps:
* Download dependencies
* Build the project(`yarn build`)
* Run nginx to serve static content
  
# Cypress
Cypress is a framework for end-to-end testing based on Javascript.

##### Why Cypress?
You can have 100% code coverage with unit tests, which test all your components separately, but your application can still fail when the components start to interact with each other. To prevent possible fails, you need to use e2e tests with Cypress. Cypress can test everything that works in a browser.

### Start working with Cypress

##### 1. Check [system requirements](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)

##### 2. Install Cypress:
```yarn add cypress --dev``` 

##### 3. Running Cypress
To run `Cypress Test Runner`, you need to execute the following command:
```yarn run cypress open```

### How to setup and run Cypress tests in CI?
##### 1. [Setup CI](https://docs.cypress.io/guides/guides/continuous-integration.html#Setting-up-CI)

Configuration for GitLab CI: 
`.gitlab-ci.yml:`
```
# first, install Cypress, then run all tests (in parallel)
stages:
  - build
  - test

# to cache both npm modules and Cypress binary we use environment variables
# to point at the folders we can list as paths in "cache" job settings
variables:
  npm_config_cache: "$CI_PROJECT_DIR/.npm"
  CYPRESS_CACHE_FOLDER: "$CI_PROJECT_DIR/cache/Cypress"

# cache using branch name
# https://gitlab.com/help/ci/caching/index.md
cache:
  key: ${CI_COMMIT_REF_SLUG}
  paths:
    - .npm
    - cache/Cypress
    - node_modules

# this job installs NPM dependencies and Cypress
install:
  image: cypress/base:10
  stage: build

  script:
    - npm ci
    # check Cypress binary path and cached versions
    # useful to make sure we are not carrying around old versions
    - npx cypress cache path
    - npx cypress cache list
    - $(npm bin)/print-env CI
    - npm run cy:verify
    - npm run cy:info

# all jobs that actually run tests can use the same definition
.job_template:
  image: cypress/base:10
  stage: test
  script:
    # print CI environment variables for reference
    - $(npm bin)/print-env CI
    # start the server in the background
    - npm run start:ci &
    # run Cypress test in load balancing mode
    - npm run e2e:record -- --parallel --group "electrons on GitLab CI"
  artifacts:
    when: always
    paths:
      - cypress/videos/**/*.mp4
      - cypress/screenshots/**/*.png
    expire_in: 1 day

# actual job definitions
# all steps are the same, they come from the template above
electrons-1:
  extends: .job_template
electrons-2:
  extends: .job_template
electrons-3:
  extends: .job_template
electrons-4:
  extends: .job_template
electrons-5:
  extends: .job_template
```

Full documetation of using Cypress with CI you can find [here](https://docs.cypress.io/guides/guides/continuous-integration.html#Examples).

##### 2. Running Cypress in CI
To run Cypress in your CI, you just need to do the following steps:

2.1. Install
```yarn add cypress --dev```

2.2. Run
`cypress run`

##### 3. [For record tests](https://docs.cypress.io/guides/guides/continuous-integration.html#To-record-tests)
1. [Setup your project](https://docs.cypress.io/guides/dashboard/projects.html#Setup)
2. Add `--record` flag when you are running `cypress run` in your CI.
`cypress run --record --key = abc123`

[Full documentation](https://docs.cypress.io/guides/dashboard/introduction.html#Features)

### Writing Cypress tests
[Docs](https://docs.cypress.io/)

**Useful links:**
- https://www.valentinog.com/blog/cypress/
- https://blog.logrocket.com/how-to-write-useful-end-to-end-tests-with-cypress/
- https://softchris.github.io/pages/cypress.html#great-e2e-testing-with-cypress

# How to add TypeScript?

#### 1. Add TypeScript dependencies in the project
```yarn add typescript @types/node @types/react @types/react-dom @types/jest```

####  2. Add `tsconfig.json`
You need to create the configuration file `tsconfig.json`. You can create it using the following command:
```npx tsc --init```

#### 3. Setup `tsconfig.json`
```
{
  "compilerOptions": {
    "noImplicitAny": false, /* Raise error on expressions and declarations with an implied any type */
    "target": "es5", /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */
    "lib": ["dom", "dom.iterable", "esnext"], /* List of library files to be included in the compilation */
    "allowJs": true, /* Allow javascript files to be compiled. */
    "skipLibCheck": true, /* Skip type checking of all declaration files (*.d.ts) */
    "esModuleInterop": true, /* Emit __importStar and __importDefault helpers for runtime babel ecosystem compatibility and enable --allowSyntheticDefaultImports for typesystem compatibility */
    "allowSyntheticDefaultImports": true, /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking */
    "strict": true, /* Enable all strict type checking options.
Enabling --strict enables --noImplicitAny, --noImplicitThis, --alwaysStrict, --strictBindCallApply, --strictNullChecks, --strictFunctionTypes and --strictPropertyInitialization */
    "forceConsistentCasingInFileNames": true, /* Disallow inconsistently-cased references to the same file. */
    "module": "esnext", /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    "moduleResolution": "node", /* Determine how modules get resolved. Either "Node" for Node.js/io.js style resolution, or "Classic" */
    "resolveJsonModule": true, /* Include modules imported with .json extension. */
    "isolatedModules": true, /* Perform additional checks to ensure that separate compilation (such as with transpileModule or @babel/plugin-transform-typescript) would be safe. */
    "noEmit": true, /* Do not emit outputs. */
    "noFallthroughCasesInSwitch": true, /* Report errors for fallthrough cases in switch statement /*
    "jsx": "react", /* Support JSX in .tsx files: "react", "preserve", "react-native" */
    "baseUrl": "./src" /* Base directory to resolve non-relative module names */
  },
  "include": ["src"]
}
```

If you need additional information about setting up the tsconfig file, you can check [`compiler options`](https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options)

#### 4. Transform JS files into TS
Then, you need to change the extensions of all your `.js(x)` files to `.ts(x)`.

###### Disable type checking:
If you need to disable type checking for any line, you need to add the following comment before the line:
```// @ts-ignore```

If you need to disable type checking for all files, you need to add the following comment at the beginning of the file:
```// @ts-nocheck```

##### Useful links:
- [Adding](https://create-react-app.dev/docs/adding-typescript/)
- [Docs](https://www.typescriptlang.org/docs/)
- [Playground](https://www.typescriptlang.org/play?#code/)

***Cheatsheets***
- [React + TypeScript](https://github.com/typescript-cheatsheets/react)
- [TypeScript 4.0 Cheat Sheet](https://www.sitepen.com/blog/typescript-cheat-sheet)
- [A collection of cheatsheets](https://devhints.io/typescript)

***Applications examples***
- [Create React App TypeScript Todo Example 2020](https://github.com/laststance/create-react-app-typescript-todo-example-2020)
- [Ben Awad's 14 hour Fullstack React/GraphQL/TypeScript Tutorial](https://www.youtube.com/watch?v=I6ypD7qv3Z8)
- [Cypress Realworld App](https://github.com/cypress-io/cypress-realworld-app)

# Gitlab CI

#### Stages description
* install - installing dependencies using `yarn`
* lint - code linting `yarn lint:all`
* test - running unit tests using `yarn test:ci` script; building and **displaying** coverage
* pages - building the project `yarn build`
* pages:deploy - deploy to gitlab-pages

# Tricks

#### CLI

To create the component, you can use the following `CLI-script`:
```bash
  yarn create:component MyComponent
```
After using this script, the folder with your component's name will appear in your `src/components` folder. In this case, it will be the `src/components/MyComponent` folder.

#### VSCode-snippets
Here is a list of available snippets to quickly create some entities:
* `mdocmp` - component
* `mdstyle` - styled-components file
* `mdcompunit` - unit-tests for component
* `mdpage` - page
* `mdhook` - custom hook

These snippets are automatically available in your `VSCode` because they are set up for project. You can see and edit any snippet in the `.vscode/madboiler-snippets.code-snippets` file

#### Useful VSCode extensions
* `vscode-styled-components` - styled-components support
* `Visual Studion IntelliCode` - intelliSense for VSCode(AI-assit)
* `TODO Highlight` - highlight your #todos
* `React PropTypes Intellisense` - intelliSense for PropTypes
* `Prettier` - for autoformatting
* `Path Intellisense` - intelliSense for imports
* `ESLint` - lint highlight

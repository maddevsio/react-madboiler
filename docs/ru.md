# React-madboiler

[![Developed by Mad Devs](https://maddevs.io/badge-dark.svg)](https://maddevs.io?utm_source=github&utm_medium=madboiler)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![JS](https://img.shields.io/github/languages/top/maddevsio/react-madboiler)

![image](https://user-images.githubusercontent.com/35951221/120291263-f1344a00-c2e4-11eb-9a85-d0201af47802.png)

## Введение
Бойлерплейт - стартовый набор для быстрого старта разработки, который позволяет
сэкономить время на рутинной настройке проекта и сразу начать разрабатывать.

### Основные фичи
Основное преимущество нашего бойлера в том, что в нем нет ничего лишнего.
В нашем бойлере не используется `Redux`, нет лишних библиотек, которые лишь усложняют
жизнь на старте проекта(такие как `Cypress`, или `Typescript`).

Мы используем минимально необходимое количество зависимостей, чтобы сконцентрироватсья на `React` и не отвлекаться
на остальные вещи. Но мы также очень любим держать наш код в чистоте и порядке, поэтому в нашем
бойлерплейте есть все необходимое для этого(`ESLint` и `Prettier`). Также мы очень любим подход `CSS-in-JS` и
стараемся использовать его во всех React-проектах, поэтому в бойлере используется также `styled-components`.
И, конечно, мы очень любим писать unit-тесты и стараемся покрывать наши приложения тестами как можно больше. Для этого
мы чаще всего используем `Jest` в связке с `testing-library`

- React и ничего лишнего
- Чистота кода при помощи `ESLint` + `Prettier`
- Качественные тесты на `Jest` + `testing-library`
- CSS-in-JS подход - `styled-components`
- Современные компоненты с использование хуков - `react-use`
- Надежность компонентов при помощи `prop-types`

### Проблема и ее решение
При создании нового проекта на `React` очень часто приходится сталкиваться с
рутинной работой в виде создания проекта при помощи `CRA`,
установки большого количества сторонних библиотек и настройки их для корректного
взаимодействия друг с другом.

Наш бойлерплейт решает эту проблему очень легко, тут есть все для быстрого старта проекта.
Вам не нужно переживать о качетсве кода или о настройке среды тестирования. В нашем бойлерплейте
уже используются самые современные инструменты для поддержания качества кода(`ESLint`, `Jest`), а также
преднастроенный `Router`, библиотека для `CSS-in-JS` и вспомогательные хуки `React-use`.
Вы можете просто спуллить наш бойлер и начать разрабатывать.

### Для кого этот бойлерплейт?
Этот бойлер предназначен по большей части для начинающих разработчиков,
которым сложно настраивать проект самостоятельно. Настройка проекта в таком случае
может отнять достаточно большое количество времени, которое лучше потратить на разработку
или изучение задачи.
Чтобы избавить разработчиков от рутинной работы по разворачиванию проекта и
установке зависимостей мы решили создать этот бойлерплейт, где есть все
необходимые инструменты для быстрого развертывания и начала разработки.

### Переводы
- [English](../README.md)
- Russian

# Стек технологий
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

## Содержание
1. [Первый запуск](#первый-запуск)
2. [Структура](#структура)
3. [Роутинг](#роутинг)
4. [Компоненты](#компоненты)
5. [LocalStorage](#local-storage)
6. [Hooks](#hooks)
7. [Utils](#utils)
8. [Axios](#axios)
9. [Стили](#стили)
10. [Тестирование](#тестирование)
11. [Форматирование](#форматирование)
12. [JSDoc](#jsdoc)
13. [Запуск на проде](#запуск-на-проде)
14. [Cypress](#cypress)
15. [TypeScript](#typescript)
16. [Gitlab CI](#gitlabci)
17. [Полезности](#полезности)


# Первый запуск
### При помощи docker и docker-compose
Этот вариант хорош тем, что вам не нужно устанавливать на вашу рабочую машину кучу всяких зависимостей. Докер инкапсулирует весь этот мусор.

Для запуска проекта вам понадобятся установленные [Docker](https://docs.docker.com/get-docker/) и [docker-compose](https://docs.docker.com/compose/install/)

После этого вам нужно просто запустить эту команду:
```bash
  yarn docker:dev
```

После того как `Docker` установит все необходимые зависимости и соберет приложение - в консоле появится надпись `Compiled successfully`. Это означает, что проект доступен на `3000` порту - [http://localhost:3000](http://localhost:3000)

### С использованием npm зависимостей
Если у вас нет возможности или желания использовать `docker` - вы можете воспользоваться стандартным способом запуска проекта при помощи [Node.JS и npm(yarn)](https://nodejs.org/en/)

1. Устанавливаем зависмости
```bash
  yarn # or npm i
```
2. Запускаем проект
```bash
  yarn start # or npm start
```
Приложение доступно по адресу [http://localhost:3000](http://localhost:3000)

# Структура
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

**README.md** - Описание проекта
**package.json** - Файл конфигурации npm
**yarn.lock** - lock-файл зависимостей
**docker-compose.dev.yml** - docker-compose файл для разработки
**docker-compose.prod.yml** - docker-compose файл для сборки production-версии
**.env.example** - env-example файл
**.eslintrc** - файл конфигурации ESLint
**.gitlab-ci.yml** - Файл конфигурации Gitlab CI
**.stylelintrc** - файл конфигурации Stylelint

**public** - Папка, созданная CRA, используется для запуска приложение(статика)
**cli** - Папка со вспомогательными скриптами
**docs** - Дополнительная документация
**docker** - Папка с докерфайлами
**docker/Dockerfile.dev** - докерфайл для разработки
**docker/Dockerfile.prod** - докерфайл для production

**src** - Основная папка для разработки

**src/assets** - Статичные ассеты(изображения, шрифты и т.д.)

**src/components** - Папка с компонентами
**src/components/[ComponentName]** - Папка компонента
**src/components/[ComponentName]/index.jsx** - Основной файл компонента(логика)
**src/components/[ComponentName]/[ComponentName].jsx** - Представление компонента(верстка)
**src/components/[ComponentName]/[ComponentName].test.jsx** - Юнит-тесты компонента
**src/components/[ComponentName]/[ComponentName].styles.js** - Стили компонента

**src/config** - Файлы конфигурации

**src/pages** - Папка со страницами проекта(роутинг)

**src/hocs** - Higher Order Components (HOCs)

**src/hooks** - React-hooks

**src/index.js** - Корневой файл приложения(точка входа)

**src/Router.jsx** - Основной роутер

**src/test.utils.js** - Утилиты для тестирования(testing-library)

**src/utils** - папка с утилитами

# Роутинг
Роутинг работает при помощи вспомогательной библиотеки - [`react-router-dom`](https://reactrouter.com/web/guides/quick-start)

Все роуты находятся в файле `src/Router.jsx`

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

### Добавление нового роута
1. Создать новый файл страницы в папке `src/pages`:

```javascript
// NewPage.jsx
import React from 'react'

export default function NewPage() {
    return (
        <div>New page</div>
    )
}
```

2. Добавить новую страницу в `src/pages/index.js` для корректного импорта:

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

3. Добавить новую страницу в `src/Router.jsx`
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

### Дополнительная информация
* [Документация](https://reactrouter.com/web/guides/quick-start)
* **Важно** Страницы используются только для логического разделения частей приложения. Не нужно использовать страницы как компоненты. Допускается использование [`react-helmet`](https://www.npmjs.com/package/react-helmet) для установки мета-тэгов страницы(title, description и т.д.)

# Компоненты
При работе с компонентами рекомендуется использовать современный подход с использованием функциональных компонентов и хуков.
**Не рекомендуется использовать классовые компоненты, поскольку они работают гораздо медленнее и вскоре перестанут поддерживаться**

### Создание компонента
Для создания компонента можно использовать `CLI-скрипт`:
```bash
  yarn create:component MyComponent
```
После использования этого скрипта, в папке `src/components` появится папка с названием вашего компонента(1 аргумент скрипта). В данном случае это будет папка `src/components/MyComponent`.

В папке уже будут находиться все необходимые файлы.

### Описание файлов компонента

**index.jsx** - основной файл компонента, в котором содержится логика. Пример:

```javascript
import React, { useState } from 'react'
import { useMount, useUpdateEffect } from 'react-use'

// view
import TodoList from './TodoList'

function Wrapper() {
  const [todos, setTodos] = useState([])

  const getInitialTodos = () => {
    // ...логика получения initialTodos из localStorage
  }

  const saveTodos = () => {
    // ...логика сохранения todos в localStorage
  }

  const addTodo = todo => setTodos([...todos, todo])
  const removeTodo = todo => setTodos([...todos.filter(todo => todo === todo)]);

  // Использование mount-хука для вызова getInitialTodos()
  useMount(() => getInitialTodos())

  // Следим за todos и сохраняем их в localStorage после обновления
  useUpdateEffect(() => saveTodos(), [todos])

  // возвращаем dumb-компонент для отображения с необходимыми props'ами
  return <TodoList todos={todos} addTodo={addTodo} removeTodo={removeTodo} />
}

export default Wrapper
```

**[ComponentName].jsx** - файл для представления компонента(верстка). Пример:
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

**[ComponentName].test.jsx** - файл с юнит-тестами
**[ComponentName].styles.js** - файл со стилями(styled-components)

### Полезные ссылки
* [PropTypes](https://ru.reactjs.org/docs/typechecking-with-proptypes.html)
* [Хуки](https://ru.reactjs.org/docs/hooks-intro.html)

# LocalStorage
Для работы с localStorage можно использовать вспомогательные утилиты: `loadState` и `saveState`
Пример:
```
import { saveState, loadState }  from '../utils/localStorage'
const save = data => saveState(data, 'key')
const load = () => loadState('key')
```
# Hooks

#### React-use
Это набор вспомогательных react-хуков, которые покрывают большую часть потребностей и позволяют каждый раз не изобретать велосипеды.
[Список всех хуков](https://github.com/streamich/react-use)
Самые полезные хуки:
* [useDebounce](https://github.com/streamich/react-use/blob/master/docs/useDebounce.md)
* [useLocalStorage](https://github.com/streamich/react-use/blob/master/docs/useLocalStorage.md)
* [useMount](https://github.com/streamich/react-use/blob/master/docs/useMount.md)
* [useUpdateEffect](https://github.com/streamich/react-use/blob/master/docs/useUpdateEffect.md)
* [usePrevious](https://github.com/streamich/react-use/blob/master/docs/usePrevious.md)
* [useBoolean](https://github.com/streamich/react-use/blob/master/docs/useToggle.md)
* [useList](https://github.com/streamich/react-use/blob/master/docs/useList.md)

#### Кастомные хуки
Написание кастомных хуков - очень полезная штука, которая позволяет переиспользовать большое количество кода. Если видите код, который возможно будет переиспользоваться в будущем - выносите его в хук.

Пример небольшого кастомного хука, реализующего работу с API:
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
Утилиты хранятся в папке `src/utils` в отдельных файлах.

#### Список доступных утилит
* `camelToSnakeCase` и `snakeToCamelCase` - трансформация строки в различные стили написания составных строк
* `normalizeObjectKeys` - трансформация всех полей обьекта(ключей) с использованием `snakeToCamelCase`
* `normalizeCollectionKeys` - трансформация всех элементов списка с использованием `normalizeObjectKeys`
* `getRequestParams` - функция для получения значений get-параметров из адресной строки(window.location.search)
* `localStorage` - работа с localStorage

**PS: Список будет обновляться**

# Axios
Для работы с запросами в API удобнее всего использовать библиотеку [`axios`](https://github.com/axios/axios) и синтаксис `async/await`.

#### Настройка `axios`
Конфигурация `axios` находится в файле `src/config/api.js`. 

#### Вспомогательная функция `setApiHeader`
Если нужно добавить заголовок в существующий экземпляр axios'а, можно воспользоваться вспомогательной функцией `setApiHeader` Пример:
```javascript
import { setApiHeader, api } from '../config'

async function authenticate() {
  // Авторизуемся при помощи post-запроса
  const response = await api.post('/auth')

  // Получаем токен
  const { token } = response

  // Устанавливаем header для последующих авторизованных запросов
  setApiHeader('Authorization', `Bearer ${token}`)
}

authenticate()
```

**Note: Старайтесь всегда использовать синтаксис [async/await](https://learn.javascript.ru/async-await)**

# Переменные окружения
Для работы с переменными окружения используется несколько файлов:
* `.env.example` - для хранения примеров ключей и значений
* `.env` - для переменных

Для того, чтобы добавить свою переменную окружения, вам нужно сделать следующее:
1. Добавить переменную в `.env.example` с пустым значением
```
REACT_APP_API_BASE_URL=
```
2. Добавить переменную со значением в `.env`
```
REACT_APP_API_BASE_URL=https://google.com/api
```
3. Перезапустить проект(обязательно)
4. Добавить переменную в config(`src/config/index.js`)
```javascript
export const config = {
  API_URL: process.env.REACT_APP_API_BASE_URL,
}
```
5. Использовать переменную из конфига
```javascript
axios.get(config.API_URL)
```

**Note: Не забывайте перезапускать проект после добавления/обновления переменных**
**Note 2: Переменные ВСЕГДА должны начинаться с `REACT_APP_`, иначе они не будут работать**

# Стили
Для написания стилей можно использовать несколько подходов:
* Scss/BEM - стандарт написания стилей
* Css-In-JS([styled-components](https://styled-components.com/docs/advanced#theming)) - рекомендованный вариант, гораздо проще и удобнее, нежели Scss/BEM

# Тестирование
Для тестирования компонентов(юнит-тесты) используется связка `Jest`+`React-testing-library`.

#### Ссылки
[Jest](https://jestjs.io/docs/en/getting-started)
[Testing-library](https://testing-library.com/)
[React-testing-library](https://testing-library.com/docs/react-testing-library/intro)

#### Запуск тестов
Существует несколько команд для запуска тестов:
`yarn test` - простой запуск тестов в watch-режиме
`yarn test:coverage` - запуск тестов в watch-режиме + coverage
`yarn test:ci` - запуск тестов без watch-режима + coverage + disable coloring

#### Coverage
Tests coverage собирается после запуска команды `yarn test:coverage`. В папке `./coverage` можно посмотреть развернутый coverage в 
формате HTML.

**Note: Для unit-тестов также установлен минимальный порог по coverage. Если coverage становится ниже 80% - тесты начинают падать**

# Форматирование
Линетры отвечают за чистоту и порядок кода. Они позволяют исключить попадание говнокода в репозиторий
#### Javascript-линтер
В качестве линтера JS-кода используется [eslint](https://eslint.org/)
За основу взят наиболее популярный конфиг - [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

Для запуска линтера используется несколько npm-команд:
`yarn lint:js` - для запуска линтера
`yarn lint:js:fix` - для запуска линтера с автоматическими фиксами(ESLint сам поправит все что сможет)

#### CSS-линтер(styled-components)
В качестве css-линтера используется [stylelint](https://stylelint.io/)
Линтер проверяет код на наличие опечаток и так далее.

Для запуска линтера используется команда `yarn lint:css`

### Подробности стайлгайда от Airbnb
- [Javascript](https://github.com/airbnb/javascript)
- [React](https://github.com/airbnb/javascript/tree/master/react)

**Note: Также для запуска обоих линтеров сразу(JS+CSS) можно использовать команду `yarn lint:all`**

# JSDoc
Для поддержания читаемости кода на приемлимом уровне хорошем тоном считается использование JSDoc для описания сущностей вашего приложения.
В проекте по дефолту не используется JSDoc, но вы можете легко его добавить, используя следующие полезные ссылки:

[Documentation](https://jsdoc.app/)
[eslint-plugin](https://www.npmjs.com/package/eslint-plugin-jsdoc)

# Запуск на проде
Для запуска проекта на проде есть простая команда `yarn docker:prod`

Эта команда запускает докер, который делает следующее:
* Пуллит зависимости из package.json
* Собирает проект(`yarn build`)
* Запускает nginx, который будет отдавать статику на 80 порту

После успешной сборки страница будет доступна на `http://localhost`

# Cypress
Cypress - это фреймворк для сквозного тестирования на основе JavaScript.

##### Почему Cypress?
Вы можете иметь 100% покрытие кода с помощью модульных тестов, которые тестируют все ваши компоненты изолированно, но ваше приложение все равно может дать сбой, когда компоненты начнут взаимодействовать друг с другом. Чтобы предотвратить возможные сбои нужно использовать Cypress. Cypress может тестировать все, что работает в браузере. 

### Начало работы с Cypress

##### 1. Проверьте [системные требования](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)

##### 2. Установите Cypress через yarn:
```yarn add cypress --dev``` 
Эта команда установит Cypress локально как dev зависимость для проекта.

##### 3. Запуск Cypress
Для запуска Cypress Test Runner вам необходимо выполнить следующую команду:
```yarn run cypress open```

И через мгновение он будет запущен. 


### Как настроить и запустить тесты Cypress в CI?
##### 1. [Настройка CI](https://docs.cypress.io/guides/guides/continuous-integration.html#Setting-up-CI)

Конфигурация для поставщика GitLab CI, которая поможет вам начать работу: 
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

Полную документацию о примерах CI можно найти  [здесь](https://docs.cypress.io/guides/guides/continuous-integration.html#Examples).

##### 2. Запуск Cypress в CI
Запуск Cypress в режиме непрерывной интеграции почти такой же, как его локальный запуск в вашем терминале. Обычно вам нужно сделать только две вещи:

2.1. Установка Cypress
```yarn add cypress --dev```

2.2. Запуск Cypress
`cypress run`

##### 3. [Для записи тестов](https://docs.cypress.io/guides/guides/continuous-integration.html#To-record-tests)
1. [Настройте свой проект на запись](https://docs.cypress.io/guides/dashboard/projects.html#Setup)
2. Передайте флаг `--record` команде` cypress run` внутри CI.
`cypress run --record --key = abc123`

Прочтите [полное руководство](https://docs.cypress.io/guides/dashboard/introduction.html#Features) в Службе панели инструментов.

### Написание тестов с Cypress
О том, как писать тесты и прочее, читайте в официальной [документации](https://docs.cypress.io/)

**Ссылки:**
- https://www.valentinog.com/blog/cypress/
- https://blog.logrocket.com/how-to-write-useful-end-to-end-tests-with-cypress/
- https://softchris.github.io/pages/cypress.html#great-e2e-testing-with-cypress

**Плагины:**
Чтобы предотвратить появление ошибок линтинга, используйте [eslint-plugin-cypress](https://www.npmjs.com/package/eslint-plugin-cypress) плагин.

# Как перейти на TypeScript?

#### 1. Добавление TypeScript в проект
```yarn add typescript @types/node @types/react @types/react-dom @types/jest```

####  2. Добавление `tsconfig.json`
Необходимо создать файл конфигурации tsconfig.json. Следующая команда поможет создать его:
```npx tsc --init```

#### 3. Настройка tsconfig.json
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

Если вам нужна дополнительная информация по настройке tsconfig, ознакомьтесь с [параметрами компилятора](https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options).

#### 4. Превращение файлов JavaScript в файлы TypeScript
Далее вам необходимо изменить расширение всех файлов проекта с .js(x) на .ts(x). Это позволит компилятору TypeScript начать индексировать эти файлы и использовать все возможности TypeScript.

###### Отключение проверок:
Чтобы отключить проверку типов для каждой строки, нужно добавить следующий комментарий над этой строкой:
```// @ts-ignore```

Чтобы отключить проверку типа для всего, вы можете использовать:
```// @ts-nocheck```

##### Полезные ссылки по TypeScript:
- [Добавление TypeScript](https://create-react-app.dev/docs/adding-typescript/)
- [Документация TypeScript](https://www.typescriptlang.org/docs/)
- [Песочница TypeScript](https://www.typescriptlang.org/play?#code/)

***Шпаргалки по TypeScript***
- [Все шпаргалки по React + TypeScript](https://github.com/typescript-cheatsheets/react)
- [TypeScript 4.0 Cheat Sheet](https://www.sitepen.com/blog/typescript-cheat-sheet)
- [A collection of cheatsheets](https://devhints.io/typescript)

***Примеры приложений***
- [Create React App TypeScript Todo Example 2020](https://github.com/laststance/create-react-app-typescript-todo-example-2020)
- [Ben Awad's 14 hour Fullstack React/GraphQL/TypeScript Tutorial](https://www.youtube.com/watch?v=I6ypD7qv3Z8)
- [Cypress Realworld App](https://github.com/cypress-io/cypress-realworld-app)

# Gitlab CI

#### Описание стейджей
* install - установка зависимостей при помощи `yarn`
* lint - запуск линтеров командой `yarn lint:all`
* test - запуск юнит-тестов командой `yarn test:ci`, генерация и **отображение** coverage
* pages - запуск билда командой `yarn build`
* pages:deploy - деплой на gitlab-pages

# Полезности

#### CLI
Для облегчения процесса создания множества файлов для компонентов была создана следующая CLI-команды:
```bash
yarn create:component {ComponentName}
```
После выполнения этой команды в папке `src/components` будет создана папка `{ComponentName}` со всеми необохдимыми файлами(index, компонент, стили, тесты)

#### VSCode-сниппеты
Для ускорения написания кода в VSCode существует замечательный инструмент - сниппеты. Они позволяют разворачивать заранее заготовленные куски кода в нужном месте после вызова определнного алиаса.

Для ускорения разработки было созданно несколько полезных для проекта сниппетов:
* `mdocmp` - компонент с нуля в пустом файле(с импортами и всем небходимым)
* `mdstyle` - файл стилей с импортом styled-components и созданным элементом
* `mdcompunit` - файл юнит-тестов для компонента
* `mdpage` - файл страницы
* `mdhook` - файл кастомного хука

Сниппеты автоматически доступны в `VSCode`, поскольку настроены для проекта.
Все сниппеты можно увидеть и изменить/добавить новые в файле `.vscode/madboiler-snippets.code-snippets`

#### Полезные экстеншены для VSCode
* `vscode-styled-components` - поддержка styled-components
* `Visual Studion IntelliCode` - intelliSense for VSCode(AI-assit)
* `TODO Highlight` - highlight your #todos
* `React PropTypes Intellisense` - intelliSense for PropTypes
* `Prettier` - for autoformatting
* `Path Intellisense` - intelliSense for imports
* `ESLint` - lint highlight

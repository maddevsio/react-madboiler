# React MAD Boiler

Бойлер для быстрого старта проекта на React со всем необходимым внутри.

# Стек технологий
* [React](https://ru.reactjs.org/)
* [Redux](https://redux.js.org/)
* [Redux-thunk](https://github.com/reduxjs/redux-thunk)
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
5. [Redux](#redux)
6. [LocalStorage](#local-storage)
7. [Hooks](#hooks)
8. [Utils](#utils)
9. [Axios](#axios)
10. [Стили](#стили)
11. [Тестирование](#тестирование)
12. [Форматирование](#форматирование)
13. [JSDoc](#jsdoc)
14. [Запуск на проде](#запуск-на-проде)
15. [Cypress](#cypress)
16. [TypeScript](#typescript)
17. [Полезности](#полезности)


# Первый запуск
### При помощи docker и docker-compose
Этот вариант хорош тем, что вам не нужно устанавливать на вашу рабочую машину кучу всяких зависимостей. Докер инкапсулирует весь этот мусор и не позволит загадить вашу систему.
Для запуска проекта вам понадобятся установленные [Docker](https://docs.docker.com/get-docker/) и [Docker compose](https://docs.docker.com/compose/install/)
```bash
yarn docker:dev
```
После того как Docker установит все необходимые зависимости и соберет приложение - в консоле появится надпись `Compiled successfully`. Это означает, что проект доступен на `3000` порту - [http://localhost:3000](http://localhost:3000)

### С использованием локальных зависимостей
Если не хочется возиться с докером и есть установленные [Node.JS и npm(yarn)](https://nodejs.org/en/), то можно воспользоваться запуском проекта локально:
1. Устанавливаем зависмости
```bash
yarn
```
2. Запускаем проект
```bash
yarn start
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
**package.json** - Файл зависимостей
**yarn.lock** - node_modules lock файл
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

**src/hoocs** - React-hooks

**src/index.js** - Корневой файл приложения(точка входа)

**src/Router.jsx** - Основной роутер

**src/test.utils.js** - Утилиты для тестирования(testing-library)

**src/store** - Папка redux-стора

**src/store/configure.js** - Файл конфигурации redux-стора
**src/store/index.js** - Файл создания редьюсера(combine)
**src/store/store.utils.js** - Утилиты для создания сущностей redux
**src/store/[store-name]** - папка с редьюсером
**src/store/[store-name]/reducer.js** - редьюсер
**src/store/[store-name]/actions.js** - экшены
**src/store/[store-name]/selectors.js** - селекторы

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
* Не захламляйте страницы версткой и логикой. Страницы(компоненты в папке pages) нужны чтобы не было хаоса при создании новых роутов. Используйте компоненты для верстки и логики. На страницах рекомендуется использовать [`react-helmet`](https://www.npmjs.com/package/react-helmet)

# Компоненты
При работе с компонентами рекомендуется использовать современный подход(функциональные компоненты + хуки состояния).
**Не рекомендуется использовать классовые компоненты, поскольку они работают гораздо медленнее и вскоре перестанут поддерживаться**

### Создание компонента
1. Cоздать папку с названием компонента в `src/components`:
```bash
mkdir src/components/[ComponentName]
```
2. Создать необходимые файлы
```bash
touch src/components/[ComponentName]/index.jsx
touch src/components/[ComponentName]/[ComponentName].jsx
touch src/components/[ComponentName]/[ComponentName].test.jsx
touch src/components/[ComponentName]/[ComponentName].styles.js
```
**P.S. Позже будет добавлена npm-команда для создания компонента**

### Описание файлов компонента

**index.jsx** - основной файл компонента, в котором содержится логика. Пример:
```javascript
import React from 'react'
import { useMount } from 'react-use'
import { useDispatch, useSelector } from 'react-redux'

// component
import TodoList from './TodoList'

// store
import { getTodos } from '../../store/todo/selectors'
import { getInitialTodos as getTodosList } from '../../store/todo/actions'

// Создание компонента
function Wrapper() {
  // Получение данных из стора
  const todos = useSelector(getTodos)
  const dispatch = useDispatch()
  const getInitialTodos = () => dispatch(getTodosList())

  // Использование mount-хука для вызова getInitialTodos() экшена
  useMount(() => getInitialTodos())

  // возвращаем dumb-компонент для отображения с необходимыми props'ами
  return <TodoList todos={todos} />
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

# Redux

Для хранения данных в React-приложениях принято использовать redux - библиотеку, позволяющую использовать контейнер предсказуемого состояния.
[Подробнее в документации](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)
### Пример работы стора
Разберем пример работы с redux на основе существующего todo-стора.
Все необходимые файлы находятся в папке `src/store/[store-name]/*`.

#### actions.js
В этом файле хранятся actionTypes и actionCreators, необходимые для изменения состояния. Например, в сторе todo есть 3 action'а, которые меняют состояние списка тудушек:
```javascript
getInitialTodos() - для получения списка тудушек из localStorage
addTodo(todo) - для добавления новой тудушки
removeTodo(todo) - для удаления  существующей тудушки
```

### reducer.js
В этом файле находится сам редьюсер, который отвечает за изменение стора после диспатча одного из экшенов:
```javascript
import { createReducer } from "../store.utils"
import { ADD_TODO, GET_INITIAL_TODOS, REMOVE_TODO } from "./actions"

// Начальное значение
const initialState = {
  todos: [],
}

// Вспомогательная функция для фильтрации тудушек после удаления
const onDeleteTodo = (todos, { id }) => todos.filter(todo => todo.id !== id)

// Редьюсер, созданный при помощи вспомогательной функции createReducer()
export const todosReducer = createReducer(initialState, {
  [GET_INITIAL_TODOS.DEFAULT](state, action) {
    return { ...state, todos: [...action.payload] }
  },
  [ADD_TODO.DEFAULT](state, action) {
    return { ...state, todos: [...state.todos, action.payload ] }
  },
  [REMOVE_TODO.DEFAULT](state, action) {
    return { ...state, todos: onDeleteTodo(state.todos, action.payload) }
  },
})
```

### selectors.js
Файл со вспомогательными функциями(селекторами) для получения данных из стора:
```javascript
import { createSelector } from '../store.utils'

// Создаем селектор для получения списка тудушек
export const getTodos = createSelector(
  state => state.todos,
  todos => todos.todos || [],
)
```

### Создание стора
1. Создаем папку с названием нового стора
```bash
mkdir src/store/notifications
```
2. Создаем необходимые файлы
```bash
touch src/store/notifications/reducer.js
touch src/store/notifications/actions.js
touch src/store/notifications/selectors.js
```

3. Создаем редьюсер в файле `reducer.js`
```javascript
import { createReducer } from "../store.utils"

// Начальное значение
const initialState = {
  notifications: [],
}
// Редьюсер, созданный при помощи вспомогательной функции createReducer()
export const notificationsReducer = createReducer(initialState, {})
```

4. Создаем нужные нам actionTypes и actionCreators в файле `actions.js`
```javascrirpt
import { createActionTypes, createAction } from '../store.utils'

export const FETCH_NOTIFICATIONS = createActionTypes('FETCH_NOTIFICATIONS')
export const MARK_NOTIFICATION_READ = createActionTypes('MARK_NOTIFICATION_READ')

export const fetchNotificaions = createAction(FETCH_NOTIFICATIONS.DEFAULT)
export const markNotificationRead = createAction(MARK_NOTIFICATION_READ.DEFAULT)
```

5. Добавляем actionTypes в `reducer.js`
```javascript
import { createReducer } from "../store.utils"
import { FETCH_NOTIFCATIONS, MARK_NOTIFICATION_READ } from './actions'

// Начальное значение
const initialState = {
  notifications: [],
}

const markRead = (notifications, id) => notifications.map(notification => notification.id === id ? ({ ...notification, read: true }) : notification)

// Редьюсер, созданный при помощи вспомогательной функции createReducer()
export const notificationsReducer = createReducer(initialState, {
    [FETCH_NOTIFICATIONS.DEFAULT](state, action) {
        return { ...state, notifications: action.payload }
    },
    [MARK_NOTIFICATION_READ.DEFAULT](state, action) {
        return { ...state, notifications: markRead(state.notifications, action.payload) }
    }
})
```

6. Создаем селекторы для получения списка нотификации и нотификации по id в файле `selectors.js`
```javascript
import { createSelector } from '../store.utils'

export const getNotificationsList = createSelector(
    store => store.notifications, // получаем нужный store
    notifications => notifications.notifications, // получаем список нотификаций
)

export const getNotificationById = id => createSelector(
    store => store.notifications, // получаем нужный store
    notifications => notifications.find(notification => notification.id === id)
)
```

### Работа со стором в компонентах
Для работы со стором в компонентах принято использовать вспомогательные хуки:
* `useSelector`
* `useDispatch`

Пример:
```javascript
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// store
import { getNotificationsList, getNotificationById } from '../../store/notifications/selectors'
import { fetchNotificaions } from '../../store/notifications/actions'

function Wrapper() {
  // Используем селектор для получения списка
  const notifications = useSelector(getNotificationsList)
  
  // Используем селектор для получения по id
  const notificationById = useSelector(getNotificationById(1))  
  
  // Создаем экшен
  const dispatch = useDispatch()
  const fetchNotificaionsList = () => dispatch(fetchNotificaions())

  return (
    <TodoList 
      notifications={notifications} 
      fetchNotifications={fetchNotificaionsList} 
    />
  )
}

export default Wrapper
```

Также есть кастомный хук для более удобной работы с dispatch - `src/hooks/useActions.js`:
Он позволяет избежать постоянного использования useDispatch()
```javascript
import useActions from '../hooks/useActions'
...
const actions = useActions({
    fetchNotificaions,
})
...
actions.fetchNotifications()
...
```

### Асинхронные actions
Для того чтобы делать запросы в API существуют асинхронные actions, работающие при помощи дополнительных библиотек. Есть несколько вариантов на выбор:
* Redux-thunk - самый простой вариант, минимум настроек и сложности. **Используется в бойлере**
* Redux-saga - библиотека, построенная на основе javascript-генераторов(experimental)
* Redux-observable - на основе RXJS

Если вам нужно строить большое приложение с большим кол-вом запросов в API и другими асинхронными действиями, то ваш выбор - `redux-saga`. Для простого приложения подойдет `redux-thunk`. `redux-observable` - только если вы знакомы с паттерном реактивного программирования

#### Пример асинхронного экшена
Для создания асинхронного thunk-экшена можно воспользоваться вспомогательной утилитой `createAsyncAction`:
```javascript
import { createActionTypes, createAction, createAsyncAction } from '../store.utils'

// FETCH_TODOS содержит в себе 3 action-type - DEFAULT, SUCCESS и FAILURE
export const FETCH_TODOS = createActionTypes('FETCH_TODOS')

// Передаем обеькт action-types как 1 аргумент
// Асинхронная функция как 2 аргумент
// При вызове функции первым делом будет вызван action FETCH_TODOS.DEFAULT
export const fetchTodos = createAsyncAction(FETCH_TODOS, async ({ success, failure, dispatch, getState }) => {
    // тут асинхронный код
    try {
        const raw = await fetch('https://google.com')
        const data = await raw.json()
        // после завершения асинхронного кода вызываем success(payload)
        // тут будет вызван action FETCH_TODOS.SUCCESS
        success(data)
    } catch(err) {
        // тут будет вызван action FETCH_TODOS.FAILURE
        failure(err)
    }
})
```
Последовательность действий после вызова `dispatch(fetchTodos(payload))`:
```
1. Вызов экшена FETCH_TODOS.DEFAULT
2. Вызов асинхронной функции
3. В случае успеха(блок try) - вызов экшена FETCH_TODOS.SUCCESS
4. В случае ошибки(блок catch) - вызов экшена FETCH_TODOS.FAILURE
```

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
Написание кастомных хуков - очень полезная штука, которая позволяет переиспользовать большое количество кода. Если видите код, который в будушем нужно будет переиспользовать - старайтесь выносить его в хук.

Кастомные хуки позволяют писать переиспользуемый функционал в рамках React-компонентов. Пример небольшого кастомного хука, реализующего работу с API. При этом этот хук свободно можно использовать в нескольких компонентах сразу и он будет работать одинаково:
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
Утилиты хранятся в папке `src/utils` в отдельных файлах(1 вайл - 1 утилита)

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
Если нужно добавить заголовок в существующий инстанс axios'а, можно воспользоваться вспомогательной функцией `setApiHeader` Пример:
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
* `.env` - для самих переменных(не добавляется в git)

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

**По дефолту настроено использование styled-components**

# Тестирование
Для тестирования компонентов(юнит-тесты) используется связка `Jest`+`React-testing-library`. Также подключены некоторые вспомогательные библиотеки.

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
формате HTML(Istanbul)

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
Линтер проверяет код на наличии опечаток и так далее.

Для запуска линтера используется команда `yarn lint:css`

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

2.1 Установка Cypress
```yarn add cypress --dev```

2.2 Запуск Cypress
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

#### 1. Добавление TypeScript в Project
```yarn add typescript @types/node @types/react @types/react-dom @types/jest```

####  2. Добавление tsconfig.json
Прежде чем мы сможем воспользоваться преимуществами TypeScript, нам нужно настроить это через `tsconfig.json`. Следующая команда создаст `tsconfig.json` файл:
```npx tsc --init```

#### 3. Настройка tsconfig.json
```
{
  "compilerOptions": {
    "noImplicitAny": false,
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "noFallthroughCasesInSwitch": true,
    "jsx": "react",
    "baseUrl": "./src"
  },
  "include": ["src", "internals/startingTemplate/**/*"]
}
```

Следующим шагом нужно перенести соответствующие файлы на TypeScript.


##### Полезные ссылки по TypeScript:
- [Добавление TypeScript](https://create-react-app.dev/docs/adding-typescript/)
- [Документация TypeScript](https://www.typescriptlang.org/docs/)
- [Песочница TypeScript](https://www.typescriptlang.org/play?#code/PTAECUFMEMGMBdQEsDOpqgA4HtMFcAbaAJ1AKQCNiSBPUAM21NmJniQDsBzUPFSUp3gD6cSCgB0AWABQIUAElEmYtgBuSACbj0oAFLQ10AMoskmRNAop41BEmwcGTUCzaceGyAHdZ82NgAtjgckBzwaHweugZGpsTmiETceNBckKCQAB7CHCgOTrDQBASQmn5gesYAGtIyFaAAKjSYkPGJoCh4mDjEEfo1ADToHJpYqhraaBgJsAAWnZCI2PQN8C0Z8NjYBGhboLNzBHSB2NoEoHPY3q5BIWH9ARyhCHUNjdi8owI20KOX1yaG3aFlA3iYAGs0N4kPAFlA4IgAsFHA8UA0aNg8KBAtA6N4-pZxkhAgJQI5QOlQrMUAAuCoNAC0mSy0GCpVpVIESFgjPoeA49kc6LkYGZ2TZmA5XNmjNgRBQ-BFDQAYkhiDYwZAAOQlMjbCHoRBXG4ynnIcIiMTTVi8fhjfa4zANBEIW4o0LhSRNOaoZDTBjQPBZRmuxD8wXsRzFd33cL0+oydatUAqoOshAqgVCjgAYTuqPCAB4AAqqTBobK5TRoADeAF8AHygAC8slAoAAFCpcHTQGXe8MnsIcgB+WkjGgASlbzbTwcRWcjBXzHoeRb+NGbAB9QBxCBdd1VagBRUqk8KyK+iiBYrhHGgJkCq9OL7NRvMFz2IP0YM2wBh3wKMFfXmA5IHIHRHAaP5sDhMlk0gYYBwrCR+3LNA5mgPZPgoDI-nJCgACtIDdTtHWgCEMi6VgMSxUBNEcbVlGwgMVBJWEkDUSAZz+B05gyFC9g2MEkD1PCGlYRk+DKdA9gEhh1U1EguDwC8fyceDAOXRw3hvD47QyWFhkxbFQlkjAewrUBEITWQhCtWAMgAEWgYQhNAWt-WwAAOAA2AAGABGVzhAnGwEm4YZSUVNJIHC2xonra95AAdQyIpNIEwpWDc-DQFCyBVzjRBvFAhYZPkyAGkKjyHOIUQnOGPjwO+DUbIUzQ8r0p5NUK4rC3gCd5wzeAlxzAbvyLWqMObNsZA7bsMJnFtmyLdhSQYvLGhJSAW1rKzJFQXzApCvKmwOjCJBilA4vrItgA2yBGxSsBGl9NA3DygMIxzECeQWP1-1EuFdCEhojASKxSn+sCsJw0A8JGQiSNeH0Mq-B5tJzSSljwYg8kyWEBNIWD4OYTHwmxj9yVIfcSj094FLgknY0G0AAEESwUf1dHlVjGQobDZNRCQAAkBB1aYGnydkkHoJBZO4jVgJWDq3M57m7JkerGoyEbEVzBUUEm9cPKrMIa08+thmMeA8tba3m1rdtxl7CdwYWzp7bC0A7by68O34eB-d9pbIDUUP4r9n2kLdisPeW2d0N7V2ihKIXYAhccuxW5s1GwLRXdYNrOynYbXwQI3WNN4tNx3PcD1kZLE3kAAhUig34Dq-X5xVXAIrDuMRlmU+slqo9AZlYUubC1nBSkwm5ACVLUtFYYWEgMhk-jVDwe8sUQLS+8kV70YgGA3XIKhaHdHQYVB2FtTQa5NJE7QFY4TjhQacgqI68QGQKB4EsLaQIeAwKnFtMiFQkBsr5G4mhAAMksZ+iNIpcDWFcbuQhPhYlIFKPEXA97-BatkKUTB8r0B8Gzb8p9Ewkl6IgAAVHJC+iIGCqECKAbUuUEDagANxnwAJr4PjjaDIpkCF4AoOQACXMFDDBQJ8J+0ImCg3thCaI8E1i7Rsp8GSAxnLYAAvschRBOAAhuDPcExAoTa3Ieoi0wgGpiDHnWV2wBmGsPetvfgxA0EcDZBkZhwBXZBNJAlDBQivZeNYcYK4hB+IZAiUAjIJdtCsDGJYigOwxihNduxJgsIaA51yTsGAHBm7Xl6ogMsQgABywSJxhgkCqXMpZZqOyWr2POnli54wJl2V2HYiyaC4i9L2HZRmYG9jQUo+0vKMHCOlJA94hriIkEUhI6xQCjlAAAIlyQQTQBzQATgORwJguICBnPrBdQ6EhUn3WAJgSZ0zQAPXGWod5oApzVNbmAUR2JMpYCIPiYmAC9w0JgYNNBfA4qIwgtcbWtS-YmgAKr+JaZfeAbSOlCTml2Q6fSXZe1YPAfGThOmNOCXuYJLYDkNLKGc4AkyW7vGBGYUEXQejqLQD2SY0QHIlFQGEHBeQtDVRvFpBsFpkZuUSsA4Q15SiIBkgTOlLZDm5h+JAJABzZBooSdcO2lDNBYoEDixE+LOm9iJT0ispKBmUqGTS8ITTNqpP2hq55xJim7LZQCzlrQQSlUhNCSFpxMlODDLcbQ+jsDDBJpI+imUZaQE2FhJEWIqYtWDvmAUxpDAY2IKwBAxwkVhAtNQstZQ1gGO7vuQIeF2pC3tOSLKRkv7sBjEYAgeAMiYFYrJXBDQZJRz0owpxXkJ2x2GDJE89BqFunrJwoIPC+HwEETU4UiBC2WmICeVk7IMjarLsnMlHY0UAG0AhFqUUsA98AAC6js515U7AFKcMTXaLuXaReAnYL2rX6VMhiJi17hAkOweAMNtUAANgWuDkVRMYAASWs97whrqeigBDMSOz1h-YHcCrqnCdhGZ875vyPlFjech+UPI0OeWw-AXDu0UAPTeVR0ZyqthOEcEbZj+0QPNgLbmoDbHQAAGpQBBSnE2Xj0zhNZxxNKj5ozgD8ccLRz5wAaOuxIzIDlN440tWaKG7lP4Ay5RKDQYYdnK0UDWfozAPIGjKqhRGLq6ligSPGEsXZKAbkEAnJZto1mZbdCYWgY8zV-haVYJqP0WFRilDGBQOgWkwxrBaB4NA9AuEFUgJ-WEEE6ARc0HpeQjGCKlBIE4KB+FckgLtNEOND8FgRbDQ0IrG74Ld3yMIOkDIbxzHgPABOIAuDExkRIZEj0NgoGs3KASbkUACSWCgYAW7GSIRWwkCwa22CbczfABoE2pt0hAJALg94YDVYcMAe9GpxDABkvt5bq2tiMm0NxAguBGR7egD0ORbkCginkFd6bwBSgA+6BIWb8AngvGENVxbhANp5WB7iuUlN4CMmHZNgQeRGRda+60Q7iRGQACZGQ+QZ7TgAnMzgKsAACsQU-LM4AMwc6AA)

***Шпаргалки по TypeScript***
- [Все шпаргалки по React + TypeScript](https://github.com/typescript-cheatsheets/react)
- [TypeScript 4.0 Cheat Sheet](https://www.sitepen.com/blog/typescript-cheat-sheet)
- [A collection of cheatsheets](https://devhints.io/typescript)

***Примеры приложений***
- [Create React App TypeScript Todo Example 2020](https://github.com/laststance/create-react-app-typescript-todo-example-2020)
- [Ben Awad's 14 hour Fullstack React/GraphQL/TypeScript Tutorial](https://www.youtube.com/watch?v=I6ypD7qv3Z8)
- [Cypress Realworld App](https://github.com/cypress-io/cypress-realworld-app)

# Полезности

#### CLI
Для облегчения процесса создания множества файлов для компонентов и сторов(редьюсеров) были созданы следующие CLI-команды:

1. Создание компонента
```bash
yarn create:component {ComponentName}
```

После выполнения этой команды в папке `src/components` будет создана папка `{ComponentName}` со всеми необохдимыми файлами(index, компонент, стили, тесты)

2. Создание стора
```bash
yarn create:store {store-name}
```

После выполнения этой команды в папке `src/store` будет создана папка `{store-name}` со всеми необохдимыми файлами(actions, reducer, selectors, tests)

#### VSCode-сниппеты
Для ускорения написания кода в VSCode существует замечательный инструмент - сниппеты. Они позволяют разворачивать заранее заготовленные куски кода в нужном месте после вызова определнного алиаса.

Для ускорения разработки было созданно несколько полезных для проекта сниппетов:
* `mdocmp` - компонент с нуля в пустом файле(с импортами и всем небходимым)
* `mdstyle` - файл стилей с импортом styled-components и созданным элементом
* `mdcompunit` - файл юнит-тестов для компонента
* `mdpage` - файл страницы
* `mdhook` - файл кастомного хука
* `mdreducer` - файл редьюсера
* `mdreducerunit` - файл юнит-тестов для редьюсера
* `mdactiontype` - строка для создания actionType
* `mdaction` - строка для создания actionCreator-функции
* `mdasyncaction` - строка для создания async actionCreator-функции
* `mdselector` - строка для создания селектора

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

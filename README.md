# React MAD Boiler (React 17)

Бойлер для быстрого старта проекта на React со всем необходимым внутри.

# Стек технологий
* React v17
* Redux
* Redux-thunk
* React-router-dom
* Styled-components
* React-use
* Prop-types
* Axios

## Содержание

1. Запуск проекта
2. Структура проекта
3. Роутинг
4. Работа с компонентами
5. Работа со стором(Redux)
6. Работа с localStorage
7. React-use и кастомные хуки
8. Утилиты(вспомогательные функции)
9. Стили(scss or styled-components)
10. Тестирование(unit-tests)
11. Форматирование/линтинг кода
12. Запуск на проде


## Запуск проекта

### При помощи docker и docker-compose

Этот вариант хорош тем, что не нужно устанавливать на вашу рабочую машину кучу npm зависимостей. Докер инкапсулирует весь этот мусор и не позволит загадить вашу систему.

Для запуска проекта вам понадобится установленные [Docker](https://docs.docker.com/get-docker/) и [Docker compose](https://docs.docker.com/compose/install/)

```bash
yarn docker:dev
```

После того как Docker установит все необходимые зависимости и соберет приложение - в консоле появится надпись `Compiled successfully`. Это означает, что проект доступен на порту `3000` - [http://localhost:3000](http://localhost:3000)

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

## Структура проекта
```
.
├── README.md
├── package.json
├── yarn.lock
├── docker-compose.dev.yml
├── public
├── cli
├── docs
├── docker
│   ├── Dockerfile.dev
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
│   ├── setupTests.jsx
│   ├── store
│   │   ├── configure.js
│   │   ├── index.js
│   │   ├── localStorage.js
│   │   ├── store.utils.js
│   │   ├── [storeName]
│   │   │   ├── actions.js
│   │   │   └── reducer.js
│   │   │   └── selectors.js
```

**README.md** - Описание проекта
**package.json** - Файл зависимостей
**yarn.lock** - node_modules lock файл
**docker-compose.dev.yml** - docker-compose файл для разработки

**public** - Папка, созданная CRA, используется для запуска приложение(статика)

**cli** - Папка со вспомогательными скриптами

**docs** - Дополнительная документация

**docker** - Папка с докерфайлами
**docker/Dockerfile.dev** - докерфайл для разработки

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

**src/store** - Папка redux-стора

**src/store/configure.js** - Файл конфигурации redux-стора
**src/store/index.js** - Файл создания редьюсера(combine)
**src/store/store.utils.js** - Утилиты для создания сущностей redux
**src/store/[store-name]** - папка с редьюсером
**src/store/[store-name]/reducer.js** - редьюсер
**src/store/[store-name]/actions.js** - экшены
**src/store/[store-name]/selectors.js** - селекторы

## Роутинг
Роутинг работает при помощи вспомогательной библиотеки - `react-router-dom`

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
1. Создать новую страницу в папке `src/pages`:
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
Всю необходимую информацию о продвинутом использовании роутинга можно найти в [документации к react-router-dom](https://reactrouter.com/web/guides/quick-start)

## Работа с компонентами
При работе с компонентами нужно использовать современный подход с хуками.

**Нельзя использовать классовые компоненты, поскольку они работают гораздо медленнее и вскоре перестанут поддерживаться**

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
PS: Позже будет добавлена npm-команда для создания компонента

### Описание файлов компонента

**index.jsx** - основной файл компонента, в котором должна содержаться логика. Пример:
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
  // Создание action-диспатчера
  const dispatch = useDispatch()
  const getInitialTodos = () => dispatch(getTodosList())

  // Использование mount-хука
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

### Полезные ссылки информация
* [PropTypes](https://ru.reactjs.org/docs/typechecking-with-proptypes.html)
* [Хуки](https://ru.reactjs.org/docs/hooks-intro.html)

## Работа со стором(Redux)

Для хранения данных в React-приложениях принято использовать redux. Redux - библиотека, позволяющая использовать контейнер предсказуемого состояния.
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
* useSelector
* useDispatch

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
  
  // Используем useDispatch для получения dispatch-функции
  const dispatch = useDispatch()
  // Создаем экшен
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

Если вам нужно строить большое приложение с большим кол-вом запросов в API и другими асинхронными действиями - ваш выбор `redux-saga`. Для простого приложения подойдет `redux-thunk`. `redux-observable` - только если вы знакомы с паттерном реактивного программирования

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

## Работа с localStorage
Для работы с localStorage можно использовать вспомогательные утилиты: `loadState` и `saveState`
Пример:
```
import { saveState, loadState }  from '../utils/localStorage'
const save = data => saveState(data, 'key')
const load = () => loadState('key')
```
## React-use и кастомные хуки

#### React-use
Это набор кастомных вспомогательных react-хуков, которые покрывают большую часть потребностей и позволяют не писать лишний код.
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
Написание кастомных хуков - очень полезная штука, которая позволяет переиспользовать большое количество кода. Если видите код, который в будушем нужно будет переиспользовать - нужно сразу выносить его в хук.
Кастомные хуки могут делать что угодно, от простого хранения данных, до запросов в апи и работе с ивентами. Пример небольшого кастомного хука, реализующего работу с API:
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

## Утилиты(вспомогательные функции)
- TODO
## Axios
- TODO
## Стили
- TODO
## Тестирование
- TODO
## Форматирование/линтинг кода
- TODO
## JSDoc
- TODO
## Примеры
- TODO
## Gitlab pages
- TODO
## Запуск на проде
- TODO
## Полезности
- TODO
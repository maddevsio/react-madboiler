# React MAD Boiler (React 17)

Бойлер для быстрого старта проекта на React со всем необходимым внутри.

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

После того как Docker установит все необходимые зависимости и соберет приложение - в консоли появится надпись `Compiled successfully`. Это означает, что проект доступен на порту `3000` - [http://localhost:3000](http://localhost:3000)

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
- TODO
## Работа с localStorage
- TODO
## React-use и кастомные хуки
- TODO
## Утилиты(вспомогательные функции)
- TODO
## Стили
- TODO
## Тестирование
- TODO
## Форматирование/линтинг кода
- TODO
## Запуск на проде
- TODO
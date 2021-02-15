import { ADD_TODO, REMOVE_TODO } from "./actions"

const todos = [
  {
    id: 1,
    text: 'Create react-madboiler',
  },
  {
    id: 2,
    text: 'Write documentation',
  },
  {
    id: 3,
    text: 'Be happy!',
  }
]

const initialState = {
  todos,
}

const onDeleteTodo = (todos, { id }) => todos.filter(todo => todo.id !== id)

export const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload ] }
    case REMOVE_TODO:
      return { ...state, todos: onDeleteTodo(state.todos, action.payload) }
    default:
      return state
  }
}
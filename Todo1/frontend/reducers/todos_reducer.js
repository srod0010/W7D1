import { RECEIVE_TODOS, RECEIVE_TODO, receiveTodos, receiveTodo } from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};


const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
    switch(action.type) {
      case RECEIVE_TODOS:
        let new_state = {};

        action.todos.forEach( item => {
          new_state[item.id] = item;
        });
        return new_state;

      case RECEIVE_TODO:
        const newTodo = {[action.todo.id]: action.todo};
        let new_state2 = merge({}, state);
        next_state2[action.todo.id] = action.todo.title;
        return new_state2;
      default:
        return state;
    }
};

export default todosReducer;

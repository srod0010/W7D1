// import { RECEIVE_TODOS, RECEIVE_TODO} from "../actions/todo_actions";
import { RECEIVE_TODOS, RECEIVE_TODO, receiveTodos, receiveTodo } from "../actions/todo_actions";
import merge from 'lodash/merge';

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
  let new_state = {};
    switch(action.type) {
      case RECEIVE_TODOS:

        action.todos.forEach( item => {
          new_state[item.id] = item;
        });
        return new_state;

      case RECEIVE_TODO:
        const newTodo = {[action.todo.id]: action.todo};
        return merge({}, state, newTodo);
      default:
        return state;
    }
};

export default todosReducer;

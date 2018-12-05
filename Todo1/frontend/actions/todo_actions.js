export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos,
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo,
});


window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;

// export const value = 5;
// window.x = value;

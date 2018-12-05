import TodoList from '../todos/todo_list';
import React from 'react';

const TodoListItem = (props) => {
  return(
    <li>
      {props.todo.title}
    </li>
  );
};

export default TodoListItem;

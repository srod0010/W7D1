import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';

const TodoList = (props) => {


    let todos = props.todos.map((todo) => (
      <TodoListItem
        key={todo.id}
        todo={todo} />
    ));

    return (
      <div>
        <ul className="todo-list">
          {todos}
        </ul>
      </div>
  );
};

export default TodoList;

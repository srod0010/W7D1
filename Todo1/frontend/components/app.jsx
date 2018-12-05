import React from 'react';
import TodoListContainer from './todos/todo_list_container';

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Whats Up </h1>
        <TodoListContainer />
      </div>

    );
  }
}

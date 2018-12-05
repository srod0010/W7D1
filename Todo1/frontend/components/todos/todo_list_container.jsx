import React from 'react';
import { Provider, connect } from 'react-redux';
import TodoList from './todo_list';
import { receiveTodos, receiveTodo } from '../../actions/todo_actions';
import {allTodos} from '../../reducers/selectors';

const mapStateToProps = (state) => ({
	todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodos: (todos) => dispatch(receiveTodos(todos)),
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
});

const createConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default createConnectedComponent;

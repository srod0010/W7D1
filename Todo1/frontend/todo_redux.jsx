import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import {App} from './components/app';
import Root from './components/root';
import { allTodos } from './reducers/selectors';

const store = configureStore;

window.store = store;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});

window.allTodos = allTodos;

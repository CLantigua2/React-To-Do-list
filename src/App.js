import React, { Component } from 'react';
import './App.css';
import TodoList from './Todolist';

class App extends Component {
  render() {
    return (
      <div className="container">
        <TodoList />
      </div>
    );
  }
}

export default App;

import React, { FC } from 'react';
import TodoList from '../TodoList/TodoList';
import './App.css';

const App: FC = () => {
  return (
    <div className="app">
      <TodoList />
    </div>
  );
}

export default App;

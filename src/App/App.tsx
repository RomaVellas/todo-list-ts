import React, { FC } from 'react';
import TodoList from '../components/TodoList/TodoList';
import './App.css';

const App: FC = () => {
  return (
    <div className="app">
      <TodoList />
    </div>
  );
}

export default App;

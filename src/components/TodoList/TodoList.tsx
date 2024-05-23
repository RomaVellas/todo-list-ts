import React, { FC, useState } from 'react';
import Form from '../Form/Form';
import './TodoList.css';
import Todo from '../Todo/Todo';

export interface ITodos {
   id: number;
   text: string;
   done: boolean;
   edit: boolean;
}

const TodoList = () => {

   const [todos, setTodos] = useState<ITodos[]>([]);

   const todoNum = todos.length;

   const todoDone = todos.filter((todo) => todo.done).length;

   const deleteTodo = (id: number) => {
      const newTodos = todos.filter((todo) => id !== todo.id);
      setTodos(newTodos);
   }

   const editTodo = (id: number) => {
      setTodos(todos.map((todo) => todo.id === id ? {...todo, edit: !todo.edit} : todo));
   };

   const doneTodo = (id: number) => {
      setTodos(todos.map((todo) => todo.id === id ? {...todo, done: !todo.done} : todo));
   };

   return (
      <div className='todo-list'>
         <h1 className='todo-list__title'>Todo List</h1>
         <Form todos={todos} setTodos={setTodos}/>
         <div className="todo-list__content">
            <ol className='content__todo-items'>
               {todos.map((todo) => {
               return   <Todo 
                           todo={todo} 
                           key={todo.id} 
                           deleteTodo={deleteTodo} 
                           doneTodo={doneTodo}
                           editTodo={editTodo}/>  
               })}
            </ol>
            </div>
         {todos.length !== 0 &&  (
            <div className='todo-list__bottom'>
               <div className='bottom__todo-count'>Todo: {todoNum}</div>
               <button className='bottom__clear-btn' onClick={() => setTodos([])}>Clear List</button>
               <div className='bottom__done-count'>Done: {todoDone}</div>
            </div>
         )}
      </div>
   );
};

export default TodoList;

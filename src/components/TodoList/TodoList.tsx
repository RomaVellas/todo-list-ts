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

const TodoList: FC = () => {

   const [todos, setTodos] = useState<ITodos[]>([]);

   const todoNam = todos.length;

   const todoDone = todos.filter((todo) => {
      if (todo.done) return true;
   }).length;

   const deleteTodo = (id: number) => {
      const newTodos = todos.filter((todo) => {
         if (id !== todo.id) return true;
      });
      setTodos(newTodos);
   }

   const editTodo = (id: number) => {
      setTodos(todos.map((todo) => todo.id === id ? {...todo, edit: !todo.edit} : todo));
   };

   const doneTodo = (id: number) => {
      setTodos(todos.map((todo) => todo.id === id ? {...todo, done: !todo.done} : todo));
   };

   return (
      <div className='div-todo'>
         <h1 className='h1-todo'>Todo List</h1>
         <Form todos={todos} setTodos={setTodos}/>
         <ol>
            {todos.map((todo, index) => {
               return   <Todo 
                           todo={todo} 
                           key={todo.id} 
                           deleteTodo={deleteTodo} 
                           doneTodo={doneTodo}
                           editTodo={editTodo}/>  
            })}
         </ol>
         {todos.length !== 0 &&  (
               <div className='div-todo-bottom'>
                  <div>Todo №: {todoNam}</div>
                  <button onClick={() => setTodos([])}>Clear List</button>
                  <div>Done: {todoDone}</div>
               </div>
         )}
      </div>
   );
};

export default TodoList;

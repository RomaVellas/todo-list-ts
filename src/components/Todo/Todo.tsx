import React, { FC, useState } from 'react';
import { ITodos } from '../TodoList/TodoList';
import './Todo.css';

interface TodoProps {
   todo: ITodos;
   deleteTodo: (id: number) => void;
   doneTodo: (id: number) => void;
   editTodo: (id: number) => void;
}

const Todo: FC<TodoProps> = ({todo, deleteTodo, doneTodo, editTodo}) => {

   const [text, setText] = useState<string>(todo.text);

   return (
      <li className='li-todo'>
            {!todo.edit ? <span 
                        onClick={() => doneTodo(todo.id)} 
                        className={todo.done ? 'span-todo span-todo-done' : 'span-todo'}
                                       >
                                 {text} 
                           </span> : 
                              <input className='input-edit' type='text' value={text} onChange={(e) => setText(e.target.value)}/>
                           }
                     <button className='button-todo-edit' onClick={() => editTodo(todo.id)}>edit</button>
                     <button className='button-todo-delete' onClick={() => deleteTodo(todo.id)}></button>
      </li> 
   );
};

export default Todo;

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
      <li className='todo-items__item'>
            {!todo.edit ? <span 
                        onClick={() => doneTodo(todo.id)} 
                        className={todo.done ? 'item__text item__text-done' : 'item__text'}
                                       >
                                 {text} {todo.done ? <i className="fa fa-check"></i> : ''}
                           </span> : 
                           <input className='item__text-edit' type='text' value={text} onChange={(e) => setText(e.target.value)}/>
                           }
                        <div className="item__buttons">
                           <button className='buttons__edit-btn' onClick={() => editTodo(todo.id)}>
                              <i className="fa fa-pencil"></i>
                           </button>
                           <button className='buttons__delete-btn' onClick={() => deleteTodo(todo.id)}>
                              <i className="fa fa-times"></i>
                           </button>
                        </div>
      </li> 
   );
};

export default Todo;

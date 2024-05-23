import React, { Dispatch, FC, useState } from 'react';
import { ITodos } from '../TodoList/TodoList';
import './Form.css';

interface FormProps {
   todos: ITodos[];
   setTodos: Dispatch<ITodos[]>;
}

const Form: FC<FormProps> = ({todos, setTodos}) => {

   const [value, setValue] = useState<string>('');

   const submitForm = (e: React.FormEvent) => {
      e.preventDefault();
      if (value.length > 3 && value.length < 30) {
         setTodos([{id: todos.length + 1, text: value, done: false, edit: false}, ...todos]);
         setValue('');
      }
      if (value.length < 3 || value.length > 30) alert('Min 3 characters or max 30');
   }

   return (
      <form className='todo-list__form' onSubmit={submitForm}>
         <input 
               className='form__input' 
               type='text' 
               value={value} 
               onChange={(e) => setValue(e.target.value)}/>
      </form>
   );
};

export default Form;

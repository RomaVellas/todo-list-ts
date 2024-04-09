import React, { Dispatch, FC, useState } from 'react';
import Input from '../Input/Input';
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
      if (value.length < 3 || value.length > 30) alert('Minimum 5 characters');
   }

   return (
      <form className='form-todo' onSubmit={submitForm}>
         <Input value={value} setValue={setValue}/>
      </form>
   );
};

export default Form;

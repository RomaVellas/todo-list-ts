import React, { Dispatch, FC } from 'react';
import './Input.css';

interface InputProps {
   value: string;
   setValue: Dispatch<string>;
}

const Input: FC<InputProps> = ({value, setValue}) => {
   return (
      <div>
         <input className='input-todo' type='text' value={value} onChange={(e) => setValue(e.target.value)}/>
      </div>
   );
};

export default Input;

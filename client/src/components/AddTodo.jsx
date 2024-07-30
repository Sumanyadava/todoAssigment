import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../todoSlice';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className=' flex  justify-center gap-5'>
      <input
      className='input input-bordered w-[60%]'
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className='btn btn-primary' type="submit">Add Todo</button>
      
    </form>
  );
};

export default AddTodo;

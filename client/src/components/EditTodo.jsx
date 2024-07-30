import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../todoSlice';

const EditTodo = ({ todo, cancelEdit }) => {
  const [editText, setEditText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleSave = () => {
    if (editText.trim()) {
      dispatch(editTodo({ id: todo._id, text: editText }));
      cancelEdit();
    }
  };

  return (
    <div className='flex justify-between  m-3 w-[80%] bg-white p-3 rounded-lg '>
    
      <input
        type="text"
        value={editText}
        className='text-4xl input input-bordered m-2 '
        onChange={(e) => setEditText(e.target.value)}
      />
      <div className="btn_wrap flex gap-3">
      <button onClick={handleSave} className='btn btn-secondary'>Save</button>
      <button onClick={cancelEdit} className='btn btn-error'>Cancel</button>
      </div>
    </div>
  );
};

export default EditTodo;

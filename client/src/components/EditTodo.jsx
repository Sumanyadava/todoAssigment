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
    <>
    {console.log("edit",todo)}
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={cancelEdit}>Cancel</button>
    </>
  );
};

export default EditTodo;

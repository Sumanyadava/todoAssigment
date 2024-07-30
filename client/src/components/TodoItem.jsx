// src/components/TodoItem.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../todoSlice';
import EditTodo from './EditTodo';

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {isEditing ? (

        <EditTodo todo={todo} cancelEdit={cancelEdit} />


      ) : (
        
        <>
          {todo.text}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => dispatch(toggleTodo(todo.id))}>
            {todo.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </>

        
      )}
    </li>
  );
};

export default TodoItem;

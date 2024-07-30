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
    <li  className='w-full bg-red-500 flex justify-center'>
      {isEditing ? (
        <EditTodo todo={todo} cancelEdit={cancelEdit} />
      ) : (
        <div className='flex justify-between  m-3 bg-red-50 w-[80%] p-3 rounded-lg '>
        <h1 className={`text-2xl ml-12 ${todo.completed ? 'line-through text-gray-500' : 'text-black'}`}>
          {todo.text}
          </h1>
          <div className="btn_wrap flex gap-3">
          <button onClick={handleEdit} className='btn btn-secondary'>Edit</button>
          <button onClick={() => dispatch(toggleTodo(todo))} className={`btn btn-secondary ${todo.completed ? 'btn-success' : 'btn-primary'}`}>
            {todo.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => dispatch(deleteTodo(todo._id))} className='btn btn-primary'>Delete</button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;

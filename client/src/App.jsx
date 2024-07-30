import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => (
  <div>
    <h1 className='text-[15vw] text-center mt-5'>Todo List</h1>
    
    <AddTodo />

    <div className="line border-2 mt-5 border-black"></div>
    <TodoList />
    
  </div>
);

export default App;


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get(`${apiUrl}/todos`);
  console.log(response.data);
  return response.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (text) => {
  const response = await axios.post(`${apiUrl}/todos`, { text });
  console.log(response.data);
  return response.data;
});

export const toggleTodo = createAsyncThunk('todos/toggleTodo', async (todo) => {
  const response = await axios.put(`${apiUrl}/todos/${todo._id}`, {
    ...todo,
    completed: !todo.completed,
  });
  return response.data;
});

export const editTodo = createAsyncThunk('todos/editTodo', async ({ id, text }) => {
  const response = await axios.put(`${apiUrl}/todos/${id}`, { text });
  return response.data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  await axios.delete(`${apiUrl}/todos/${id}`);
  return id;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.findIndex((todo) => todo._id === action.payload._id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        const index = state.findIndex((todo) => todo._id === action.payload._id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        return state.filter((todo) => todo._id !== action.payload);
      });
  },
});

export default todoSlice.reducer;

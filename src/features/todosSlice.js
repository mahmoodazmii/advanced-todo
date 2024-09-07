import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTodos, addTodoApi, deleteTodoApi } from "../api/api";

export const getTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const todos = await fetchTodos();
  return todos;
});

export const addTodo = createAsyncThunk("todos/addTodo", async (todo) => {
  const newTodo = await addTodoApi(todo);
  return newTodo;
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  await deleteTodoApi(id);
  return id;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((todo) => todo.id !== action.payload);
      });
  },
});

export default todosSlice.reducer;

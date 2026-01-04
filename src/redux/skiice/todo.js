import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { store } from "../store";

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  return response.json();
});

const todoslice = createSlice({
  name: 'todo',
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },

  extraReducers: builder => {
    builder.addCase(fetchTodos.pending, (state, action) => {
         state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

  builder.addCase(fetchTodos.rejected, (state, action) => {
    console.log('Error', action.payload);
    state.isError = true;
  });

  },
});

export default todoslice.reducer;

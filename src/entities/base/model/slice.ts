import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: []
};

export const baseSlice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    restart: () => initialState,
    setBooks: (state, { payload }) => {
      state.books = payload;
    }
  }
});

export const { restart, setBooks } = baseSlice.actions;

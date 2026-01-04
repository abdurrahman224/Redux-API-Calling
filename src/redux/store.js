import { configureStore } from "@reduxjs/toolkit";

import todoreducer from './skiice/todo'
export const store = configureStore({
  reducer: {
    todo: todoreducer,
  },
});
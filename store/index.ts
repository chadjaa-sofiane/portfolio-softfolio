import { configureStore } from "@reduxjs/toolkit";
import example from "./example";

const store = configureStore({
  reducer: {
    example,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

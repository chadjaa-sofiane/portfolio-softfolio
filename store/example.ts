import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 1, name: "sofiane" },
    { id: 2, name: "sofiane 2" },
    { id: 3, name: "sofiane 3" },
    { id: 4, name: "sofiane 4" },
  ],
};

const example = createSlice({
  name: "example",
  initialState,
  reducers: {
    setNewUser(state, actions) {
      const newUser = actions.payload;
      newUser.id = state.users.length + 1;
      state.users = [...state.users, newUser];
    },
  },
});

export const { setNewUser } = example.actions;
export const users = (state) => state.example.users;
export default example.reducer;

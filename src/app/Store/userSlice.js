import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { loginUser, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;

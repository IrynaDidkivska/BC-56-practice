const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  name: '',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, { payload }) => {
      state.name = payload;
      state.isLoggedIn = true;
    },
    logOut: (state, action) => {
      state.name = '';
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export const userReducer = userSlice.reducer;

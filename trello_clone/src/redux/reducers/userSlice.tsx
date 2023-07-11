import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserLogin } from '../../types/User';
const userSlice = createSlice({
  name: 'user',
  initialState: {
    userLogin: null,
    accessToken: null,
  },
  reducers: {
    login: (state, action: PayloadAction<UserLogin>) => {},
    register: (state, action) => {},
    getResult: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.userLogin = action.payload.user;
    },
  },
});

export default userSlice.reducer;
export const { register, getResult, login } = userSlice.actions;

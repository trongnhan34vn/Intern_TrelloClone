import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserDTO, UserRequestRegister, UserResponseLogin } from '../../types/User.type';

const initState : UserResponseLogin = {
  user: null,
  accessToken: null
}

const userSlice = createSlice({
  name: 'user',
  initialState: initState,
  reducers: {
    login: (state, action: PayloadAction<UserDTO>) => {},
    register: (state, action: PayloadAction<UserRequestRegister>) => {},
    getResult: (state, action: PayloadAction<UserResponseLogin>) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
  },
});

export default userSlice.reducer;
export const { register, getResult, login } = userSlice.actions;

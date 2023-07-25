import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  User,
  UserDTO,
  UserRequestRegister,
  UserResponseLogin,
} from '../../types/User.type';

// const initState: UserResponseLogin = {
//   user: null,
//   accessToken: null,
// };

interface UserState {
  loginResponse: UserResponseLogin;
  users: User[];
}

const initState: UserState = {
  loginResponse: {
    user: null,
    accessToken: null,
  },
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState: initState,
  reducers: {
    login: (state, action: PayloadAction<UserDTO>) => {},
    register: (state, action: PayloadAction<UserRequestRegister>) => {},
    getResult: (state, action: PayloadAction<UserResponseLogin>) => {
      state.loginResponse.accessToken = action.payload.accessToken;
      state.loginResponse.user = action.payload.user;
    },
    searchByEmail: (state, action: PayloadAction<string>) => {},
    getByEmail: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { register, getResult, login, searchByEmail, getByEmail } =
  userSlice.actions;

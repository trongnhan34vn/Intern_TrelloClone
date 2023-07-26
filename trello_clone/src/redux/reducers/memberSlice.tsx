import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MemberForm } from '../../types/Member.type';

interface MemberState {}

const memberSlice = createSlice({
  name: 'member',
  initialState: null,
  reducers: {
    createMember: (state, action: PayloadAction<MemberForm>) => {},
  },
});

export default memberSlice.reducer;
export const { createMember } = memberSlice.actions;
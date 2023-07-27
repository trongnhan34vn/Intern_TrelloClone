import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Member, MemberForm, MemberUpdateRole } from '../../types/Member.type';

interface MemberState {
  members: Member[];
}

const initialState: MemberState = {
  members: [],
};

const memberSlice = createSlice({
  name: 'member',
  initialState: initialState,
  reducers: {
    createMember: (state, action: PayloadAction<MemberForm>) => {},
    findByTableId: (state, action: PayloadAction<number>) => {},
    getByTableId: (state, action: PayloadAction<Member[]>) => {
      state.members = action.payload;
    },
    updateRole: (state, action: PayloadAction<MemberUpdateRole> ) => {

    } 
  },
});

export default memberSlice.reducer;
export const { createMember, findByTableId, getByTableId, updateRole } =
  memberSlice.actions;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NotifyState {
  notify: string;
}

const initialState: NotifyState = {
  notify: '',
};

const notifySlice = createSlice({
  name: 'notify',
  initialState: initialState,
  reducers: {
    notify: (state, action: PayloadAction<string>) => {
      state.notify = action.payload;
    },
  },
});

export default notifySlice.reducer;
export const { notify } = notifySlice.actions;

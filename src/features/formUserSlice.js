import { createSlice } from '@reduxjs/toolkit';

export const formUserSlice = createSlice({
  name: 'formUser',
  initialState: { value: [] },
  reducers: {
    addUser: (state, action) => { state.value.push(action.payload) },
  },
})

// Action creators are generated for each case reducer function
export const { addUser } = formUserSlice.actions;
export default formUserSlice.reducer;

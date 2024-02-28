import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  componentsGroupId: 'sdfsdf',
};

const detectorsSlice = createSlice({
  name: 'detectors',
  initialState,
  reducers: {
    setComponentsGroupId(state, action: PayloadAction<string>) {
      state.componentsGroupId = action.payload;
    },
  },
});

export const setComponentsGroupIdActions = detectorsSlice.actions;
export const setComponentsGroupIdReducers = detectorsSlice.reducer;

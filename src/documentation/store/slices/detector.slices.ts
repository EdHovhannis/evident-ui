import { InitialState } from '@/documentation/types/interface/initialState';
import { TComponentsGroupId } from '@/documentation/types/type/componentsGroupId';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: InitialState = {
  componentsGroupId: 'buttons',
};

const detectorsSlice = createSlice({
  name: 'detectors',
  initialState,
  reducers: {
    setComponentsGroupId(state, action: PayloadAction<TComponentsGroupId>) {
      state.componentsGroupId = action.payload;
    },
  },
});

export const setComponentsGroupIdActions = detectorsSlice.actions;
export const setComponentsGroupIdReducers = detectorsSlice.reducer;

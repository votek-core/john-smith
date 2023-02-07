import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { UiState, ReduxAction } from '~/types';

const initialState: UiState = {
  home: {
    currentScreen: 0,
  },
};

const uiSlice = createSlice<UiState, SliceCaseReducers<UiState>, string>({
  name: 'ui',
  initialState,
  reducers: {
    setCurrentScreen: (state, action: ReduxAction<number>) => {
      state.home.currentScreen = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export const uiReducers = uiSlice.reducer;
export default uiSlice;

import { RootState } from '../config';

export function uiHomeSelector(state: RootState) {
  return state.ui.home;
}

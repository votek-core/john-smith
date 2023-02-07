import React from 'react';
import { useAppDispatch } from '~/store/config';
import { uiActions } from '~/store/ui/ui.slice';
import NavListComponent from './component';

function NavList() {
  const dispatch = useAppDispatch();

  return <NavListComponent setCurrentScreen={(s) => dispatch(uiActions.setCurrentScreen(s))} />;
}

export default NavList;

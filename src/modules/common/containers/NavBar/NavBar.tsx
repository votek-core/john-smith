import React from 'react';
import NavBarComponent, { NavBarComponentProps } from './component';

function NavBar(props: NavBarComponentProps) {
  return <NavBarComponent {...props} />;
}

export default NavBar;

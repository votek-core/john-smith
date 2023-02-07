import React from 'react';
import { useRouter } from '~/navigation/navigationHooks';
import Logo1 from '~/images/logo1.png';
import { Box, Grow } from '~/components/core';
import NavList from '~/containers/NavList';
import { styled } from '~/theme/core';

const PREFIX = 'NavBarComponent';
const classes = {
  root: `${PREFIX}-root`,
  content: `${PREFIX}-content`,
  logo_container: `${PREFIX}-logo_container`,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [`&.${classes.root}`]: {
    width: 240,
    position: 'absolute',
    right: 0,
    top: 100,
  },
  [`&.${classes.content}`]: {
    position: 'fixed',
    width: 'inherit',
    zIndex: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: '1px solid #e5e9ec',
    padding: '30px 10px 30px 10px',
    color: theme.palette.common.black,
    backgroundColor: '#243742',
    borderRadius: 20,
  },
}));

export interface NavBarComponentProps {
  show?: boolean;
}

function NavBarComponent({ show }: NavBarComponentProps) {
  return (
    <StyledBox className={classes.root}>
      <Grow in={show} style={{ transformOrigin: 'top right' }} {...(show ? { timeout: 1000 } : {})}>
        <StyledBox className={classes.content}>
          <NavList />
        </StyledBox>
      </Grow>
    </StyledBox>
  );
}

export default NavBarComponent;

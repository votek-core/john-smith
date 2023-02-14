import React, { useCallback, useMemo, useState } from 'react';
import { Box, IconButton, Typography } from '~/components/core';
import { styled } from '~/theme/core';
import Lottie from 'react-lottie';
import * as animationMenu from '~/lotties/menu.json';
import SocialList from '~/containers/SocialList';
import NavBar from '~/containers/NavBar';

const PREFIX = 'TopBarComponent';
const classes = {
  root: `${PREFIX}-root`,
  content: `${PREFIX}-content`,
  account: `${PREFIX}-account`,
  account_name: `${PREFIX}-account_name`,
  within_icon: `${PREFIX}-within_icon`,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [`&.${classes.root}`]: {
    width: '100%',
    zIndex: 20,
    position: 'fixed',
    backgroundColor: theme.palette.primary,
    marginBottom: 60,
  },
  [`&.${classes.content}`]: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: '30px 10px 30px 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: theme.palette.common.black,
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  [`&.${classes.within_icon}`]: {
    width: 54,
    height: 54,
    padding: 6,
    ':hover': {
      backgroundColor: 'rgba(255,255,255,0.08)',
    },
  },
}));

const menuOptions = {
  loop: false,
  autoplay: true,
  animationData: animationMenu,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function TopBarComponent() {
  const [showNavBar, setShowNavBar] = useState(false);

  const segments = useMemo(() => (showNavBar ? [1, 70] : [70, 140]), [showNavBar]);
  const handleShowNavBar = useCallback(() => {
    setShowNavBar((pre) => !pre);
  }, []);

  return (
    <StyledBox className={classes.root}>
      <StyledBox className={classes.content}>
        <StyledIconButton className={classes.within_icon} onClick={handleShowNavBar}>
          <Lottie segments={segments} options={menuOptions} height={42} width={42} isClickToPauseDisabled={true} />
        </StyledIconButton>
        <Box sx={{ m: 2 }} />
        <SocialList />
        <NavBar show={showNavBar} />
      </StyledBox>
    </StyledBox>
  );
}

export default TopBarComponent;

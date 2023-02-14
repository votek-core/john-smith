import React, { useCallback } from 'react';
import { Button, Typography, Box, Avatar, Image } from '~/components/core';
import { useAppTheme, styled } from '~/theme/core';

import Lottie from 'react-lottie';
import * as avatarAnimation from '~/lotties/avatar.json';

const PREFIX = 'ProfileScreenComponent';
const classes = {
  root: `${PREFIX}-root`,
  user: `${PREFIX}-user`,
  info_container: `${PREFIX}-info_container`,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: theme.palette.common.white,
  },
  [`&.${classes.user}`]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '30vw',
    marginTop: 100,
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  ['&']: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 50,
    marginTop: 10,
    fontFamily: 'Itim',
  },
}));

const avatarOptions = {
  loop: true,
  autoplay: true,
  animationData: avatarAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export interface ProfileScreenComponentProps {
  name?: string;
}

function ProfileScreenComponent(props: ProfileScreenComponentProps) {
  return (
    <StyledBox className={classes.root}>
      <StyledBox className={classes.user}>
        <Lottie options={avatarOptions} height={'25%'} />
        <StyledTypography>John Smith</StyledTypography>
      </StyledBox>
      <StyledBox className={classes.info_container}>Some info</StyledBox>
    </StyledBox>
  );
}

export default ProfileScreenComponent;

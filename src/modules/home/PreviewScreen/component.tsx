import React, { useCallback, useEffect, useRef } from 'react';
import { Button, Typography, Box, Avatar, Image } from '~/components/core';
import { useAppTheme, styled } from '~/theme/core';

const PREFIX = 'PreviewScreenComponent';
const classes = {
  root: `${PREFIX}-root`,
  present: `${PREFIX}-present`,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
  [`&.${classes.present}`]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
}));

export interface PreviewScreenComponentProps {
  name?: string;
}

function PreviewScreenComponent(props: PreviewScreenComponentProps) {
  return (
    <StyledBox className={classes.root}>
      <StyledBox className={classes.present}>
        <video preload='auto' autoPlay muted loop style={{ height: '100vh' }}>
          <source src={'/preview1.mp4'} />
        </video>
      </StyledBox>
    </StyledBox>
  );
}

export default PreviewScreenComponent;

import React, { useCallback, useEffect, useRef } from 'react';
import { Button, Typography, Box, Avatar, Image } from '~/components/core';
import { useAppTheme, styled } from '~/theme/core';

import useWindowDimensions from '~/hooks/useWindowDimensions';

import TitleImg from '~/images/title4.png';
import DownArrowImg from '~/images/arrow-down2.png';
import { animated, useSpring } from 'react-spring';
import { width } from '@mui/system';

const PREFIX = 'PreviewScreenComponent';
const classes = {
  root: `${PREFIX}-root`,
  present: `${PREFIX}-present`,
  title_img: `${PREFIX}-title_img`,
  arrow: `${PREFIX}-arrow`,
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
  },
  [`&.${classes.title_img}`]: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
}));

export interface PreviewScreenComponentProps {
  name?: string;
}

function PreviewScreenComponent(props: PreviewScreenComponentProps) {
  const { isMobile, width } = useWindowDimensions();

  const [aniProps] = useSpring(
    () => ({
      from: { transform: 'translateY(-20px)', opacity: 0 },
      to: { transform: 'translateY(0px)', opacity: 1 },
      loop: true,
      delay: 2000,
      config: {
        duration: 1000,
      },
    }),
    [],
  );
  return (
    <StyledBox className={classes.root}>
      <StyledBox className={classes.present}>
        <video preload='auto' autoPlay muted loop style={{ height: '100vh' }}>
          <source src={'/cyberpunk.mp4'} />
        </video>
        <StyledBox className={classes.title_img}>
          <Image width={(width * 3) / 6} src={TitleImg} alt={'title'} />
          <animated.div style={aniProps}>
            <Image width={isMobile ? 30 : 50} src={DownArrowImg} alt={'title'} />
          </animated.div>
        </StyledBox>
      </StyledBox>
    </StyledBox>
  );
}

export default PreviewScreenComponent;

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Box, MenuItem, MenuList, Typography, IconButton } from '~/components/core';
import { Link } from '~/components/route';
import { styled } from '~/theme/core';

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Lottie from 'react-lottie';
import * as musicAnimation from '~/lotties/music.json';
import useAudio from '../../hooks/useAudio';
import backgroundAudio from '~/sounds/background.mp3';

const PREFIX = 'SocialListComponent';
const classes = {
  root: `${PREFIX}-root`,
};

const StyledIconButton = styled(IconButton)(() => ({
  ['&']: {
    width: 54,
    height: 54,
    padding: 8,
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  [`&.${classes.root}`]: {
    width: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

const StyledMenuItem = styled(MenuItem)(() => ({
  ['&']: {
    cursor: 'default',
  },
  ['&:hover']: {
    backgroundColor: 'transparent',
  },
}));

const musicOptions = {
  loop: true,
  autoplay: false,
  animationData: musicAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function SocialListComponent() {
  const [playing, toggle] = useAudio(backgroundAudio);
  const handlePlayMusic = useCallback(() => {
    toggle();
  }, [toggle]);

  return (
    <StyledBox className={classes.root}>
      <MenuList>
        <StyledMenuItem>
          <StyledIconButton id='social-list-music' aria-label='music' onClick={handlePlayMusic}>
            <Lottie isPaused={!playing} options={musicOptions} width={30} height={30} />
          </StyledIconButton>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link className='nav-list__link' href={'https://github.com/rintran720'}>
            <StyledIconButton id='social-list-github' aria-label='github'>
              <GitHubIcon fontSize='medium' />
            </StyledIconButton>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link className='nav-list__link' href={'https://www.facebook.com/rintran720'}>
            <StyledIconButton id='social-list-facebook' aria-label='facebook'>
              <FacebookIcon fontSize='medium' />
            </StyledIconButton>
          </Link>
        </StyledMenuItem>

        <StyledMenuItem>
          <Link className='nav-list__link' href={'https://www.linkedin.com/in/rintran720/'}>
            <StyledIconButton id='social-list-linkedin' aria-label='linkedin'>
              <LinkedInIcon fontSize='medium' />
            </StyledIconButton>
          </Link>
        </StyledMenuItem>
      </MenuList>
    </StyledBox>
  );
}

export default SocialListComponent;

import React from 'react';
import { Box, MenuItem, MenuList, Typography, IconButton } from '~/components/core';
import { Link } from '~/components/route';
import { styled } from '~/theme/core';

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
  ['&:hover']: {
    backgroundColor: 'transparent',
  },
}));

function SocialListComponent() {
  return (
    <StyledBox className={classes.root}>
      <MenuList>
        <StyledMenuItem>
          <Link className='nav-list__link' href={'https://github.com/rintran720'}>
            <StyledIconButton>
              <GitHubIcon fontSize='medium' />
            </StyledIconButton>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link className='nav-list__link' href={'https://www.facebook.com/rintran720'}>
            <StyledIconButton>
              <FacebookIcon fontSize='medium' />
            </StyledIconButton>
          </Link>
        </StyledMenuItem>

        <StyledMenuItem>
          <Link className='nav-list__link' href={'https://www.linkedin.com/in/rintran720/'}>
            <StyledIconButton>
              <LinkedInIcon fontSize='medium' />
            </StyledIconButton>
          </Link>
        </StyledMenuItem>
      </MenuList>
    </StyledBox>
  );
}

export default SocialListComponent;

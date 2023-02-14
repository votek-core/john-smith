import React from 'react';
import { Box, MenuItem, MenuList, Typography } from '~/components/core';
import ListItemIcon from '@mui/material/ListItemIcon';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { Link } from '~/components/route';
import { styled } from '~/theme/core';

import AirplayOutlinedIcon from '@mui/icons-material/AirplayOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';

const PREFIX = 'NavListComponent';
const classes = {
  root: `${PREFIX}-root`,
};

const StyledTypography = styled(Typography)(({ theme }) => ({
  ['&']: {
    flex: 1,
    color: theme.palette.common.black,
    textTransform: 'uppercase',
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  [`&.${classes.root}`]: {
    width: 'inherit',
  },
}));

const StyledMenuItem = styled(MenuItem)(() => ({
  ['&']: {
    borderRadius: 5,
  },
  ['&:hover']: {
    backgroundImage: 'linear-gradient(to right, #FBB7C0 , #E01A4F)',
  },
}));

export interface NavListComponentProps {
  setCurrentScreen?: (screen: number) => void;
}

function NavListComponent({ setCurrentScreen }: NavListComponentProps) {
  return (
    <StyledBox className={classes.root}>
      <MenuList>
        <StyledMenuItem
          id='nav-list-preview'
          aria-label='preview'
          onClick={() => {
            setCurrentScreen?.(0);
          }}
        >
          <ListItemIcon>
            <AirplayOutlinedIcon fontSize='small' />
          </ListItemIcon>
          <StyledTypography variant='inherit'>Preview</StyledTypography>
        </StyledMenuItem>
        <StyledMenuItem id='nav-list-profile' aria-label='profile' onClick={() => setCurrentScreen?.(1)}>
          <ListItemIcon>
            <PersonOutlineIcon fontSize='small' />
          </ListItemIcon>
          <StyledTypography variant='inherit'>Profile</StyledTypography>
        </StyledMenuItem>

        <StyledMenuItem id='nav-list-experience' aria-label='experience' onClick={() => setCurrentScreen?.(2)}>
          <ListItemIcon>
            <AssessmentOutlinedIcon fontSize='small' />
          </ListItemIcon>
          <StyledTypography variant='inherit'>Experiences</StyledTypography>
        </StyledMenuItem>

        <StyledMenuItem id='nav-list-project' aria-label='project' onClick={() => setCurrentScreen?.(3)}>
          <ListItemIcon>
            <AutoAwesomeMosaicOutlinedIcon fontSize='small' />
          </ListItemIcon>
          <StyledTypography variant='inherit' noWrap>
            Projects
          </StyledTypography>
        </StyledMenuItem>
      </MenuList>
    </StyledBox>
  );
}

export default NavListComponent;

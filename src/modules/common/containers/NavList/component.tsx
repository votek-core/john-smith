import React from 'react';
import { Box, MenuItem, MenuList, Typography } from '~/components/core';
import ListItemIcon from '@mui/material/ListItemIcon';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { Link } from '~/components/route';
import { styled } from '~/theme/core';

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

export interface NavListComponentProps {
  setCurrentScreen?: (screen: number) => void;
}

function NavListComponent({ setCurrentScreen }: NavListComponentProps) {
  return (
    <StyledBox className={classes.root}>
      <MenuList>
        <MenuItem onClick={() => setCurrentScreen?.(0)}>
          <ListItemIcon>
            <PersonOutlineIcon fontSize='small' />
          </ListItemIcon>
          <StyledTypography variant='inherit'>Preview</StyledTypography>
        </MenuItem>
        <MenuItem onClick={() => setCurrentScreen?.(1)}>
          <ListItemIcon>
            <AssessmentOutlinedIcon fontSize='small' />
          </ListItemIcon>
          <StyledTypography variant='inherit'>Experiences</StyledTypography>
        </MenuItem>

        <MenuItem onClick={() => setCurrentScreen?.(2)}>
          <ListItemIcon>
            <AutoAwesomeMosaicOutlinedIcon fontSize='small' />
          </ListItemIcon>
          <StyledTypography variant='inherit' noWrap>
            Projects
          </StyledTypography>
        </MenuItem>
      </MenuList>
    </StyledBox>
  );
}

export default NavListComponent;

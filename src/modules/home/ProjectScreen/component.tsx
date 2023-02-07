import React, { useCallback } from 'react';
import { Button, Typography, Box } from '~/components/core';
import { useAppTheme, styled } from '~/theme/core';

const PREFIX = 'ProjectScreenComponent';
const classes = {
  root: `${PREFIX}-root`,
  cta: `${PREFIX}-cta`,
  content: `${PREFIX}-content`,
  intro: `${PREFIX}-intro`,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    // backgroundColor: theme.palette.common.white,
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  ['&']: {
    // color: theme.palette.warning.main,
  },
}));

export interface ProjectScreenComponentProps {
  name?: string;
}

function ProjectScreenComponent(props: ProjectScreenComponentProps) {
  return (
    <StyledBox className={classes.root}>
      <StyledTypography>Projects screen</StyledTypography>
    </StyledBox>
  );
}

export default ProjectScreenComponent;

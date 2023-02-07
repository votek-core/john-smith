import React, { useCallback } from 'react';
import { Button, Typography, Box } from '~/components/core';
import { Link } from '~/components/route';
import styles from './styles.module.scss';
import { useAppTheme, styled } from '~/theme/core';

const PREFIX = 'ExperienceScreenComponent';
const classes = {
  root: `${PREFIX}-root`,
  cta: `${PREFIX}-cta`,
  content: `${PREFIX}-content`,
  intro: `${PREFIX}-intro`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    // backgroundColor: theme.palette.success.main,
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  ['&']: {
    // color: theme.palette.secondary.main,
  },
}));

export interface ExperienceScreenComponentProps {
  name?: string;
}

function ExperienceScreenComponent(props: ExperienceScreenComponentProps) {
  return (
    <Root className={classes.root}>
      <Box>
        <Box>
          <Box>Avatar</Box>
          <Box>title</Box>
        </Box>
        <Box>Some info</Box>
      </Box>
    </Root>
  );
}

export default ExperienceScreenComponent;

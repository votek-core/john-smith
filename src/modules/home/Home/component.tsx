import React, { useCallback, useState } from 'react';
import { Button, Typography, Box } from '~/components/core';
import { Link } from '~/components/route';
import styles from './styles.module.scss';
import { useAppTheme, styled } from '~/theme/core';
import ReactPageScroller from 'react-page-scroller';

import PreviewScreen from '../PreviewScreen';
import ExperienceScreen from '../ExperienceScreen';
import ProjectScreen from '../ProjectScreen';

const PREFIX = 'HomeComponent';
const classes = {
  root: `${PREFIX}-root`,
  cta: `${PREFIX}-cta`,
  content: `${PREFIX}-content`,
  intro: `${PREFIX}-intro`,
};

const Root = styled('div')(() => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  [`&.${classes.cta}`]: {
    color: theme.palette.primary.dark,
  },
  [`&.${classes.content}`]: {
    color: theme.palette.primary.light,
  },
  [`&.${classes.intro}`]: {
    backgroundColor: theme.palette.primary.light,
  },
}));

export interface HomeComponentProps {
  currentScreen?: number;
  setCurrentScreen?: (screen: number) => void;
}

function HomeComponent({ currentScreen = 0, setCurrentScreen }: HomeComponentProps) {
  const handlePageChange = (number: number) => {
    setCurrentScreen?.(number);
  };

  return (
    <Root className={classes.root}>
      <ReactPageScroller pageOnChange={handlePageChange} customPageNumber={currentScreen}>
        <PreviewScreen />
        <ExperienceScreen />
        <ProjectScreen />
      </ReactPageScroller>
    </Root>
  );
}

export default HomeComponent;

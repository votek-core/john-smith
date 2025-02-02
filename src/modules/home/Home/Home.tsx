import React, { useCallback, useEffect, useMemo } from 'react';
import HomeComponent from './component';
import { uiHomeSelector } from '~/store/ui/ui.selector';
import { useAppSelector } from '~/store/config';

function Home() {
  const { currentScreen } = useAppSelector(uiHomeSelector);

  return <HomeComponent currentScreen={currentScreen} />;
}

export default Home;

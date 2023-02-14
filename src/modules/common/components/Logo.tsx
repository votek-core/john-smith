import React from 'react';
import { Image } from '~/components/core';

import LogoImg from '~/icons/logo.png';
import useWindowDimensions from '~/hooks/useWindowDimensions';

function Logo() {
  const { isMobile } = useWindowDimensions();
  return (
    <div
      style={{
        position: 'absolute',
        top: isMobile ? 20 : 30,
        left: isMobile ? 20 : 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
      }}
    >
      <Image alt='oops' src={LogoImg} height={isMobile ? 40 : 60} />
    </div>
  );
}

export default Logo;

import React from 'react';

import Lottie from 'react-lottie';
import * as loadingAnimation from '~/lotties/loading.json';

const loadingOptions = {
  loop: true,
  autoplay: false,
  animationData: loadingAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function Spinner() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Lottie options={loadingOptions} width={30} height={30} />
    </div>
  );
}

export default Spinner;

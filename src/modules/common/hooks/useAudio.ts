import React, { useState, useEffect, useMemo, useCallback } from 'react';

const useAudio = (url: string) => {
  const audio = useMemo(() => {
    const a = new Audio(url);
    a.loop = true;
    return a;
  }, [url]);

  const [canPlay, setCanPlay] = useState(false);
  const [playing, setPlaying] = useState(true);

  const toggle = useCallback(() => {
    if (!canPlay) {
      setCanPlay(true);
    } else {
      setPlaying((pre) => !pre);
    }
  }, [canPlay]);

  useEffect(() => {
    playing && canPlay ? audio.play() : audio.pause();
  }, [audio, canPlay, playing]);

  useEffect(() => {
    // Autoplay policy
    // https://developer.chrome.com/blog/autoplay/
    document.addEventListener('click', () => {
      setCanPlay(true);
    });
    return () => {
      document.removeEventListener('click', () => null);
    };
  }, []);

  return [playing, toggle] as const;
};

export default useAudio;

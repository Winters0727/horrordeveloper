import { useState, useEffect } from "react";

export const useAudio = (url) => {
  const [audio, setAudio] = useState(null);
  const [isPlay, setIsPlay] = useState(false);

  const toggle = (e) => setIsPlay(!isPlay);

  useEffect(() => {
    if (audio) {
      isPlay ? audio.play() : audio.pause();
    }
  }, [audio, isPlay]);

  useEffect(() => {
    setAudio(new Audio(url));

    if (audio) {
      audio.addEventListener("ended", (e) => {
        setIsPlay(false);
      });

      return () => {
        audio.addEventListener("ended", (e) => {
          setIsPlay(false);
        });
      };
    }
  }, []);

  return [isPlay, toggle];
};

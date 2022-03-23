import './SoundBoard.css';
import toriNoUta from '../sounds/Tori-no-Uta.mp3';
// import TGCF from '../sounds/TGCF-OST.mp3';
// import tada from '../sounds/tada.mp3';
import { useState, useEffect } from 'react';

// const sounds = [
//   { clip: toriNoUta, label: 'tori-no-uta' },
//   { clip: TGCF, label: 'TGCF' },
//   { clip: tada, label: 'tada' },
// ];

const SoundBoard = () => {
  const [audio] = useState(new Audio(toriNoUta));
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return (
    <div>
      <div
        id="buttons"
        className="sound-btn"
        onClick={() =>
          setPlaying(false) ? setPlaying(true) : setPlaying(false)
        }
      >
        {playing ? 'Pause' : 'Play'}
      </div>
    </div>
  );
};

export default SoundBoard;

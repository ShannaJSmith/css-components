import './SoundBoard.css';
import toriNoUta from '../sounds/Tori-no-Uta.mp3';
import TGCF from '../sounds/TGCF-OST.mp3';
import tada from '../sounds/tada.mp3';
// import { useState } from 'react';
import useSound from 'use-sound';

const sounds = [
  { clip: toriNoUta, label: 'tori-no-uta' },
  { clip: TGCF, label: 'TGCF' },
  { clip: tada, label: 'tada' },
];

const SoundBoard = () => {
  const [playSound] = useSound(toriNoUta, {
    interrupt: true,
    // controlls the speed of song. Values range from 0.5(slow) - 4(fast)
    playbackRate: 0.5,
  });
  return (
    <div>
      <div id="buttons" className="sound-btn" onClick={playSound}>
        Tori no Uta
      </div>
    </div>
  );
};

export default SoundBoard;

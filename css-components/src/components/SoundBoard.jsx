import './SoundBoard.css';
import toriNoUta from '../sounds/Tori-no-Uta.mp3';
import TGCF from '../sounds/TGCF-OST.mp3';
import tada from '../sounds/tada.mp3';
// import { useState } from 'react';
import useSound from 'use-sound';

// const sounds = [
//   { clip: toriNoUta, label: 'tori-no-uta' },
//   { clip: TGCF, label: 'TGCF' },
//   { clip: tada, label: 'tada' },
// ];

const SoundBoard = () => {
  const [playSound] = useSound(toriNoUta, {
    interrupt: true,
    // controlls the speed of song. Values range from 0.5(slow) - 4(fast)
    playbackRate: 0.5,
    // play different parts of the same audio file
    sprite: {
      one: [0, 2000],
      two: [2000, 6000],
      three: [6000, 8000],
    },
  });
  return (
    <div>
      <div
        id="buttons"
        className="sound-btn"
        onClick={() => playSound({ id: 'one' })}
      >
        one
      </div>
      <div
        id="buttons"
        className="sound-btn"
        onClick={() => playSound({ id: 'two' })}
      >
        two
      </div>
      <div
        id="buttons"
        className="sound-btn"
        onClick={() => playSound({ id: 'three' })}
      >
        three
      </div>
    </div>
  );
};

export default SoundBoard;

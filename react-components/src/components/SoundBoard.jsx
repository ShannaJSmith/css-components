import './SoundBoard.scss';
import toriNoUta from '../sounds/Tori-no-Uta.mp3';
import TGCF from '../sounds/TGCF-OST.mp3';
import useSound from 'use-sound';

const SoundBoard = () => {
  const [playTori] = useSound(toriNoUta, {
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

  const [playOST] = useSound(TGCF, {
    interrupt: true,
    // sprite: {
    //   one: [0, 2000],
    //   two: [2000, 6000],
    //   three: [6000, 8000],
    // },
  });
  return (
    <div className="soundboard">
      <div
        id="buttons"
        className="sound-btn"
        onClick={() => playTori({ id: 'one' })}
      >
        one
      </div>
      <div id="buttons" className="sound-btn" onClick={playOST}>
        OST
      </div>
    </div>
  );
};

export default SoundBoard;

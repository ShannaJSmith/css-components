import './SoundBoard.css';
import toriNoUta from '../sounds/Tori-no-Uta.mp3';
import TGCF from '../sounds/TGCF-OST.mp3';
import tada from '../sounds/tada.mp3';

const sounds = ['tori-no-uta', 'TGCF', 'tada'];

const SoundBoard = () => {
  return (
    <div className="soundboard">
      <audio id="tori-no-uta" src={toriNoUta}></audio>
      <audio id="TGCF" src={TGCF}></audio>
      <audio id="tada" src={tada}></audio>

      <div id="buttons"></div>
    </div>
  );
};

export default SoundBoard;

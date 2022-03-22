import './SoundBoard.css';
import toriNoUta from '../sounds/Tori-no-Uta.mp3';
import TGCF from '../sounds/TGCF-OST.mp3';
// import tada from '../sounds/tada.mp3';

const sounds = ['tori-no-uta', 'TGCF', 'tada'];

const SoundBoard = () => {
  window.onload = () => {
    sounds.forEach((sound) => {
      const btn = document.createElement('button');
      btn.classList.add('sound-btn');

      btn.innerText = sound;

      btn.addEventListener('click', () => {
        document.getElementById(sound).play();
      });

      document.getElementById('buttons').appendChild(btn);
    });
  };
  return (
    <div className="soundboard">
      <audio id="tori-no-uta" src={toriNoUta}></audio>
      <audio id="TGCF" src={TGCF}></audio>
      {/* another format it can be written in
      
      <audio id="tada">
        <source src={tada}></source>
      </audio> */}

      <div id="buttons"></div>
    </div>
  );
};

export default SoundBoard;

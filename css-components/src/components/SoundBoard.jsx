import './SoundBoard.css';
import toriNoUta from '../sounds/Tori-no-Uta.mp3';
import TGCF from '../sounds/TGCF-OST.mp3';
import tada from '../sounds/tada.mp3';
// import { useState } from 'react';

const sounds = [
  { clip: toriNoUta, label: 'tori-no-uta' },
  { clip: TGCF, label: 'TGCF' },
  { clip: tada, label: 'tada' },
];

const SoundBoard = () => {
  // const [play, setPlay] = useState(false);
  const playMusic = () => {};
  // window.onload = () => {
  //   sounds.forEach((sound) => {
  //     // const btn = document.createElement('button');
  //     // btn.classList.add('sound-btn');

  //     // btn.innerText = sound.label;

  //     // btn.addEventListener('click', () => {
  //       // stopMusic();

  //       // document.getElementById(sound).play();
  //     });

  //     document.getElementById('buttons').appendChild(btn);
  //   });

  // const stopMusic = () => {
  //   sounds.forEach((sound) => {
  //     const bgm = document.getElementById(sound);

  //     bgm.pause();
  //     // reset current time to 0
  //     bgm.currentTime = 0;
  //   });
  // };
  // };

  return (
    <div className="soundboard">
      {sounds.map((sound) => {
        <audio id={sound.label} src={sound.clip}></audio>;
        <div id="buttons" className="sound-btn" onClick={playMusic}>
          {sound.label}
        </div>;
      })}

      {/* another format it can be written in: */}
      {/* <audio id="tada">
        <source src={tada}></source>
      </audio> */}
    </div>
  );
};

export default SoundBoard;

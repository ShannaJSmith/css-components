const sounds = ['Tori no Uta', 'TGCF OST', 'tada'];

const SoundBoard = () => {
  window.onload = () => {
    sounds.forEach((sound) => {
      const btn = document.createElement('button');
      btn.classList.add('btn');

      btn.innerText = sound;

      document.getElementById('buttons').appendChild(btn);
    });
  };
  return (
    <div>
      <audio id="tori-no-uta" scr="sounds/Tori-no-Uta.mp3"></audio>
      <audio id="TGCF" scr="sounds/TGCF-OST.mp3"></audio>
      <audio id="tada" scr="sounds/tada.mp3"></audio>

      <div id="buttons"></div>
    </div>
  );
};

export default SoundBoard;

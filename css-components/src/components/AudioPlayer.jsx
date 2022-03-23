import './AudioPlayer.css';
import toriNoUta from '../sounds/Tori-no-Uta.mp3';
import TGCF from '../sounds/TGCF-OST.mp3';
import tada from '../sounds/tada.mp3';
import { useState, useEffect, useRef } from 'react';

const tracks = [
  { src: toriNoUta, label: 'tori-no-uta' },
  { src: TGCF, label: 'TGCF' },
  { src: tada, label: 'tada' },
];

const AudioPlayer = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ marginTop: '100px' }}>
      <div>Play</div>
    </div>
  );
};

export default AudioPlayer;

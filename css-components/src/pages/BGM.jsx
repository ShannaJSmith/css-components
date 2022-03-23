import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import SoundBoard from '../components/SoundBoard';
import AudioPlayer from '../components/AudioPlayer';
import toriNoUta from '../sounds/Tori-no-Uta.mp3';
import TGCF from '../sounds/TGCF-OST.mp3';
import tada from '../sounds/tada.mp3';

const tracks = [
  { src: toriNoUta, label: 'Tori no Uta' },
  { src: TGCF, label: 'TGCF OST' },
  { src: tada, label: 'tada' },
];

const BGM = () => {
  return (
    <div>
      <Link to="/">
        <Button variant="success" style={{ marginBottom: '50px' }}>
          Home
        </Button>
      </Link>
      <SoundBoard />
      <AudioPlayer tracks={tracks} />
    </div>
  );
};

export default BGM;

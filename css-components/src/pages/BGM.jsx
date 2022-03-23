import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import SoundBoard from '../components/SoundBoard';
import AudioPlayer from '../components/AudioPlayer';
import toriNoUta from '../sounds/Tori-no-Uta.mp3';
import TGCF from '../sounds/TGCF-OST.mp3';

const tracks = [
  {
    src: toriNoUta,
    label: 'Tori no Uta',
    artwork: 'artwork/air.jpeg',
    anime: 'Air TV',
  },
  {
    src: TGCF,
    label: 'TGCF OST',
    artwork: 'artwork/heaven.jpeg',
    anime: 'Heaven Officials Blessings',
  },
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

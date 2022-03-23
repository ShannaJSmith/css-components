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
    artwork:
      'https://i1.sndcdn.com/artworks-sgsOfsCte8szViiA-7QmSvw-t500x500.jpg',
    anime: 'Air TV',
  },
  {
    src: TGCF,
    label: 'TGCF OST',
    artwork: 'https://i1.sndcdn.com/artworks-000139595820-8gx48z-t500x500.jpg',
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

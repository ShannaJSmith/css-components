import './Background1.css';
import DarkModeButton from '../components/DarkModeButton';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Background1 = () => {
  return (
    <div className="background1">
      <Link to="/">
        <Button variant="primary">Home</Button>
      </Link>
      <DarkModeButton />
    </div>
  );
};

export default Background1;

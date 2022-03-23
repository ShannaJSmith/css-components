import './Background1.css';
import DarkModeButton from '../components/DarkModeButton';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import HiddenSearchForm from '../components/HiddenSearchForm';

const Background1 = () => {
  return (
    <div className="background1">
      <Link to="/">
        <Button variant="primary">Home</Button>
      </Link>
      <HiddenSearchForm />
      <DarkModeButton />
    </div>
  );
};

export default Background1;

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './FAQCollapse.css';

const FAQCollapse = () => {
  return (
    <div>
      <Link to="/">
        <Button variant="success" style={{ marginBottom: '50px' }}>
          Home
        </Button>
      </Link>
    </div>
  );
};

export default FAQCollapse;

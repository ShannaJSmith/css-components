import FAQCollapse from '../components/FAQCollapse';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const FAQ = () => {
  return (
    <div>
      <Link to="/">
        <Button variant="success" style={{ marginBottom: '50px' }}>
          Home
        </Button>
      </Link>
      <FAQCollapse />
    </div>
  );
};

export default FAQ;

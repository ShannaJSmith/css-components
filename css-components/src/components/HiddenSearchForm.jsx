import './HiddenSearchForm.css';
import { BsSearch } from 'react-icons/bs';
import { Button } from 'react-bootstrap';

const HiddenSearchForm = () => {
  return (
    <div className="search">
      <input type="text" className="input" placeholder="Search..." />
      <Button variant="dark">
        <BsSearch />
      </Button>
    </div>
  );
};

export default HiddenSearchForm;

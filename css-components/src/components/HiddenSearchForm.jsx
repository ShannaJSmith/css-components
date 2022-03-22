import './HiddenSearchForm.css';
import { BsSearch } from 'react-icons/bs';
import { Button } from 'react-bootstrap';

const HiddenSearchForm = () => {
  const search = document.querySelector('.search');
  const btn = document.querySelector('.search-btn');
  const input = document.querySelector('.input');
  return (
    <div className="search">
      <input type="text" className="input" placeholder="Search..." />
      <Button variant="dark" className="search-btn">
        <BsSearch />
      </Button>
    </div>
  );
};

export default HiddenSearchForm;

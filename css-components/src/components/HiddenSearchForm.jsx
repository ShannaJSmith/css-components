import './HiddenSearchForm.css';
import { BsSearch } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const HiddenSearchForm = () => {
  const [active, setActive] = useState('');

  const handleClick = () => {
    if (active === '') {
      setActive('active');
    } else {
      // set this condition so it can be hidden on second click
      setActive('');
    }
  };

  return (
    <div className={`search ${active}`}>
      <input type="text" className="input" placeholder="Search..." />
      <Button variant="dark" className="search-btn" onClick={handleClick}>
        <BsSearch />
      </Button>
    </div>
  );
};

export default HiddenSearchForm;

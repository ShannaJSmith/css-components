import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import './DarkModeButton.css';

const DarkModeButton = () => {
  return (
    <div className="toggle-btn">
      <input type="checkbox" className="checkbox" id="check" />
      <label className="label" htmlFor="check">
        <div className="sun-moon">
          <BsMoonStarsFill style={{ color: 'yellow', fontSize: 'small' }} />
          <BsFillSunFill style={{ color: 'orange', fontSize: 'small' }} />
        </div>
        <div className="ball"></div>
      </label>
    </div>
  );
};

export default DarkModeButton;

import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import './DarkModeButton.css';

const DarkModeButton = () => {
  return (
    <div className="background1">
      <input type="checkbox" className="checkbox" id="check" />
      <label className="label" for="check">
        <BsMoonStarsFill style={{ color: 'yellow', fontSize: 'small' }} />
        <BsFillSunFill style={{ color: 'orange', fontSize: 'small' }} />
        <div className="ball"></div>
      </label>
    </div>
  );
};

export default DarkModeButton;

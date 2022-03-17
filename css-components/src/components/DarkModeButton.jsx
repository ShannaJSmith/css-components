import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import './DarkModeButton.css';
export const DarkModeButton = () => {
  return (
    <div>
      <input type="checkbox" className="checkbox" id="check" />
      <label className="label" for="check">
        <BsMoonStarsFill style={{ color: 'yellow', fontSize: 'small' }} />
        <BsFillSunFill style={{ color: 'orange', fontSize: 'small' }} />
        <div className="ball"></div>
      </label>
    </div>
  );
};

import './ExpandingCards.css';
import { panelData } from '../panelData';
import { useState } from 'react';

const ExpandingCards = () => {
  const [active, setActive] = useState(1);

  // const panels = document.querySelectorAll('.panel');

  // const handleClick = () => {
  //   panels.forEach((panel) => {
  //     panel.addEventListener('click', () => {
  //       removeActiveClasses();
  //       panel.classList.add('active');
  //     });
  //   });

  //   const removeActiveClasses = () => {
  //     panels.forEach((panel) => {
  //       panel.classList.remove('active');
  //     });
  //   };
  // };

  return (
    <div className="container">
      {panelData.map((panel) => (
        <div
          key={panel.id}
          onClick={() => setActive('active')}
          className={`panel ${active === panel.id ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${panel.image})`,
          }}
        >
          <h3>{panel.heading}</h3>
        </div>
      ))}
    </div>
  );
};

export default ExpandingCards;

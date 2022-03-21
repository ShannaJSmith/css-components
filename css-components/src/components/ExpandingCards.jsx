import './ExpandingCards.css';
import { panelData } from '../panelData';

// console.log('data:', panelData);

const ExpandingCards = () => {
  const panels = document.querySelectorAll('.panel');

  panels.forEach((panel) => {
    panel.addEventListener('click', () => {
      removeActiveClasses();
      panel.classList.add('active');
    });
  });

  const removeActiveClasses = () => {
    panels.forEach((panel) => {
      panel.classList.remove('active');
    });
  };

  return (
    <div className="container">
      {panelData.map((panel) => (
        <div
          key={panel.id}
          className="panel active"
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

import './ExpandingCards.scss';
import { panelData } from '../imageData';

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
          className={`panel ${panel.status}`}
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

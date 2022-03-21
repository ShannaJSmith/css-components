import './ExpandingCards.css';

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
      <div
        className="panel active"
        style={{
          backgroundImage:
            'url(https://images6.alphacoders.com/629/thumb-1920-629544.jpg)',
        }}
      >
        <h3>Tokyo Ghoul</h3>
      </div>
      <div
        className="panel"
        style={{
          backgroundImage:
            'url(https://images6.alphacoders.com/606/thumb-1920-606263.jpg)',
        }}
      >
        <h3>One Piece</h3>
      </div>
      <div
        className="panel"
        style={{
          backgroundImage:
            'url(https://images5.alphacoders.com/613/thumb-1920-613927.jpg)',
        }}
      >
        <h3>Pokemon</h3>
      </div>
      <div
        className="panel"
        style={{
          backgroundImage:
            'url(https://images6.alphacoders.com/311/thumb-1920-311015.jpg)',
        }}
      >
        <h3>Fairy Tail</h3>
      </div>
      <div
        className="panel"
        style={{
          backgroundImage:
            'url(https://images6.alphacoders.com/656/thumb-1920-656029.png)',
        }}
      >
        <h3>Crossover</h3>
      </div>
    </div>
  );
};

export default ExpandingCards;

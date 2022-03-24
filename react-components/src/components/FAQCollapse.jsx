import './FAQCollapse.css';

const FAQCollapse = () => {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        <div className="faq active">
          <h3 className="faq-question">What's the best anime?</h3>
          <p className="faq-answer">Inuyasha of course!</p>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default FAQCollapse;

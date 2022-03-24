import './FAQCollapse.css';
import { BsChevronDown } from 'react-icons/bs';
import { RiCloseFill } from 'react-icons/ri';

const FAQCollapse = () => {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        <div className="faq active">
          <h3 className="faq-question">What's your favourite anime?</h3>
          <p className="faq-answer">Inuyasha of course!</p>
          <button>
            <BsChevronDown />
            <RiCloseFill />
          </button>
        </div>
        <div className="faq active">
          <h3 className="faq-question">Why is it your favourite anime?</h3>
          <p className="faq-answer">Probably because of nostalgia.</p>
          <button>
            <BsChevronDown />
            <RiCloseFill />
          </button>
        </div>
        <div className="faq active">
          <h3 className="faq-question">Who is your favourite character?</h3>
          <p className="faq-answer">Sesshomaru-sama!</p>
          <button>
            <BsChevronDown />
            <RiCloseFill />
          </button>
        </div>
        <div className="faq active">
          <h3 className="faq-question">What is your favourite genre?</h3>
          <p className="faq-answer">
            Fantasy/Supernatural. And romance is nice.
          </p>
          <button>
            <BsChevronDown />
            <RiCloseFill />
          </button>
        </div>
        <div className="faq active">
          <h3 className="faq-question">
            Is there a country you want to visit?
          </h3>
          <p className="faq-answer">Japan. Always Japan.</p>
          <button>
            <BsChevronDown />
            <RiCloseFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQCollapse;

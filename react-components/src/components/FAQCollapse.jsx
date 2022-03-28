import './FAQCollapse.css';
import { BsChevronDown } from 'react-icons/bs';
import { RiCloseFill } from 'react-icons/ri';
import { FaRegComment } from 'react-icons/fa';
import { faqData } from '../faqData';

const FAQCollapse = () => {
  return (
    <>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqData.map((data) => (
          <div className="faq active" key={data.id}>
            <FaRegComment className="comment-icon-before" />
            <h3 className="faq-question">{data.question}</h3>
            <p className="faq-answer">{data.answer}</p>
            <button className="faq-toggle">
              <BsChevronDown className="down-arrow" />
              <RiCloseFill className="close-icon" />
            </button>
            <FaRegComment className="comment-icon-after" />
          </div>
        ))}
        {/* <div className="faq">
          <h3 className="faq-question">Why is it your favourite anime?</h3>
          <p className="faq-answer">Probably because of nostalgia.</p>
          <button className="faq-toggle">
            <BsChevronDown className="down-arrow" />
            <RiCloseFill className="close-icon" />
          </button>
        </div>
        <div className="faq">
          <h3 className="faq-question">Who is your favourite character?</h3>
          <p className="faq-answer">Sesshomaru-sama!</p>
          <button className="faq-toggle">
            <BsChevronDown className="down-arrow" />
            <RiCloseFill className="close-icon" />
          </button>
        </div>
        <div className="faq">
          <h3 className="faq-question">What is your favourite genre?</h3>
          <p className="faq-answer">
            Fantasy/Supernatural. And romance is nice.
          </p>
          <button className="faq-toggle">
            <BsChevronDown className="down-arrow" />
            <RiCloseFill className="close-icon" />
          </button>
        </div>
        <div className="faq">
          <h3 className="faq-question">
            Is there a country you want to visit?
          </h3>
          <p className="faq-answer">Japan. Always Japan.</p>
          <button className="faq-toggle">
            <BsChevronDown className="down-arrow" />
            <RiCloseFill className="close-icon" />
          </button>
        </div> */}
      </div>
    </>
  );
};

export default FAQCollapse;

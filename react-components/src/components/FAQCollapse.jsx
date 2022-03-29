import './FAQCollapse.css';
import { BsChevronDown } from 'react-icons/bs';
import { RiCloseFill } from 'react-icons/ri';
import { FaRegComment } from 'react-icons/fa';
import { faqData } from '../faqData';
import { useState } from 'react';

const FAQCollapse = () => {
  const [data, setData] = useState({
    faqData: faqData,
    active: null,
  });

  const toggleClass = (index) => {
    setData({ ...data, active: data.faqData[index] });
  };

  return (
    <>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {data.faqData.map((d, index) => (
          <div className="faq active" key={index}>
            <FaRegComment className="comment-icon-before" />
            <h3 className="faq-question">{d.question}</h3>
            <p className="faq-answer">{d.answer}</p>
            <button className="faq-toggle">
              <BsChevronDown
                className="down-arrow"
                onClick={() => toggleClass(index)}
              />
              <RiCloseFill
                className="close-icon"
                onClick={() => toggleClass(index)}
              />
            </button>
            <FaRegComment className="comment-icon-after" />
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQCollapse;

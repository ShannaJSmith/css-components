import './FAQCollapse.scss';
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

  const toggleActive = (index) => {
    setData({ ...data, active: data.faqData[index] });
  };

  const toggleClass = (index) => {
    let qaItem = data.faqData[index];
    if (data.active === qaItem) {
      return 'faq active';
    } else {
      return 'faq';
    }
  };

  return (
    <>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {data.faqData.map((d, index) => (
          <div className={toggleClass(index)} key={index}>
            <FaRegComment className="comment-icon-before" />
            <h3 className="faq-question">{d.question}</h3>
            <p className="faq-answer">{d.answer}</p>
            <button className="faq-toggle">
              <BsChevronDown
                className="down-arrow"
                onClick={() => toggleActive(index)}
              />
              <RiCloseFill
                className="close-icon"
                onClick={() => toggleActive(!index)}
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

import './FAQCollapse.css';
import { BsChevronDown } from 'react-icons/bs';
import { RiCloseFill } from 'react-icons/ri';
import { FaRegComment } from 'react-icons/fa';
import { faqData } from '../faqData';
import { useState } from 'react';

const FAQCollapse = () => {
  const [active, setActive] = useState(false);

  const handleOpen = (id) => {
    setActive(true);
  };

  const handleClose = (id) => {
    setActive(false);
  };

  return (
    <>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqData.map((data) => (
          <div className={active ? 'faq active' : 'faq'} key={data.id}>
            <FaRegComment className="comment-icon-before" />
            <h3 className="faq-question">{data.question}</h3>
            <p className="faq-answer">{data.answer}</p>
            <button className="faq-toggle">
              <BsChevronDown
                className="down-arrow"
                onClick={() => handleOpen(data.id)}
              />
              <RiCloseFill
                className="close-icon"
                onClick={() => handleClose(data.id)}
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

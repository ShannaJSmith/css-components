import './FAQCollapse.css';
import { BsChevronDown } from 'react-icons/bs';
import { RiCloseFill } from 'react-icons/ri';
import { FaRegComment } from 'react-icons/fa';
import { faqData } from '../faqData';
import { useState } from 'react';

const FAQCollapse = () => {
  const [data, setData] = useState(faqData);
  const [active, setActive] = useState(false);
  console.log('data', data);

  return (
    <>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {data.map((d) => (
          <div className={active ? 'faq active' : 'faq'} key={d.id}>
            <FaRegComment className="comment-icon-before" />
            <h3 className="faq-question">{d.question}</h3>
            <p className="faq-answer">{d.answer}</p>
            <button className="faq-toggle">
              <BsChevronDown
                className="down-arrow"
                onClick={() => setActive(!active)}
              />
              <RiCloseFill
                className="close-icon"
                onClick={() => setActive(active)}
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

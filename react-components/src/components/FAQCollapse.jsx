import './FAQCollapse.css';
import { BsChevronDown } from 'react-icons/bs';
import { RiCloseFill } from 'react-icons/ri';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FAQCollapse = () => {
  return (
    <>
      <h1>Frequently Asked Questions</h1>
      <FontAwesomeIcon icon="comment" />
      <div className="faq-container">
        <div className="faq active">
          <h3 className="faq-question">What's your favourite anime?</h3>
          <p className="faq-answer">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
            exercitationem ut culpa nesciunt nihil est quaerat repellat
            veritatis ullam illo, tenetur labore! Unde nihil magnam animi totam
            similique rerum veniam cumque consequatur! In animi voluptates
            temporibus praesentium ut magnam, quaerat aspernatur alias natus
            veritatis tenetur ipsam dolor nemo laudantium ad atque cumque
            dolorum fugiat voluptatum odio, enim dolorem saepe commodi
            consequuntur? Reprehenderit commodi ab soluta consectetur. Voluptas
            nam atque veritatis porro possimus delectus, expedita iusto eaque?
            Necessitatibus dolor, ipsa iure, saepe nobis eveniet accusamus hic
            veritatis ad minus dicta repellendus nihil? Quo voluptates
            voluptatibus iusto nobis quia maiores quos aspernatur!
          </p>
          <button className="faq-toggle">
            <BsChevronDown />
            <RiCloseFill />
          </button>
        </div>
        <div className="faq">
          <h3 className="faq-question">Why is it your favourite anime?</h3>
          <p className="faq-answer">Probably because of nostalgia.</p>
          <button className="faq-toggle">
            <BsChevronDown />
            <RiCloseFill />
          </button>
        </div>
        <div className="faq">
          <h3 className="faq-question">Who is your favourite character?</h3>
          <p className="faq-answer">Sesshomaru-sama!</p>
          <button className="faq-toggle">
            <BsChevronDown />
            <RiCloseFill />
          </button>
        </div>
        <div className="faq">
          <h3 className="faq-question">What is your favourite genre?</h3>
          <p className="faq-answer">
            Fantasy/Supernatural. And romance is nice.
          </p>
          <button className="faq-toggle">
            <BsChevronDown />
            <RiCloseFill />
          </button>
        </div>
        <div className="faq">
          <h3 className="faq-question">
            Is there a country you want to visit?
          </h3>
          <p className="faq-answer">Japan. Always Japan.</p>
          <button className="faq-toggle">
            <BsChevronDown />
            <RiCloseFill />
          </button>
        </div>
      </div>
    </>
  );
};

export default FAQCollapse;

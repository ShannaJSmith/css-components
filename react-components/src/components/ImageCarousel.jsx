import React from 'react';
import './ImageCarousel.scss';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const ImageCarousel = () => {
  // const imgs = document.getElementById('imgs');
  // const leftButton = document.getElementById('left');
  // const rightButton = document.getElementById('right');

  // const img = document.querySelectorAll('#imgs img')

  // let index = 0
  // let interval =

  return (
    <div className="carousel">
      <div className="image-container" id="imgs">
        <img
          src="https://images.unsplash.com/photo-1629543582801-f176dc13d57a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="nendo-1"
        />
        <img
          src="https://images.unsplash.com/photo-1644730096460-ce5b57c99fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="nendo-2"
        />
        <img
          src="https://images.unsplash.com/photo-1594877502388-8d9e1dfcd84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="nendo-3"
        />
        <img
          src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt="wall-art"
        />
        <img
          src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="baby-yoda"
        />
      </div>
      <div className="buttons-container">
        <IoIosArrowDropleft id="left" className="arrow-btn" />
        <IoIosArrowDropright id="right" className="arrow-btn" />
      </div>
    </div>
  );
};

export default ImageCarousel;

import React from 'react';
import './ImageCarousel.scss';
const ImageCarousel = () => {
  return (
    <div className="carousel">
      <div className="image-container" id="imgs">
        <img
          src="https://images.unsplash.com/photo-1629543582801-f176dc13d57a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="image-1"
        />
        <img
          src="https://images.unsplash.com/photo-1644730096460-ce5b57c99fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="image-2"
        />
        <img
          src="https://images.unsplash.com/photo-1594877502388-8d9e1dfcd84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="image-3"
        />
        <img
          src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt="image-4"
        />
        <img
          src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="image-5"
        />
      </div>
      <div className="buttons-container"></div>
    </div>
  );
};

export default ImageCarousel;

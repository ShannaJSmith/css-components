import React, { useEffect, useState } from 'react';
import './ImageCarousel.scss';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { images } from '../imageData';

const ImageCarousel = () => {
  const [image, setImage] = useState(images);

  useEffect(() => {
    const imgs = document.getElementById('imgs');
    const img = document.querySelectorAll('#imgs img');

    let index = 0;
    const run = () => {
      index++;
      changeImage();
    };

    const changeImage = () => {
      if (index > img.length - 1) {
        index = 0;
      } else if (index < 0) {
        index = img.length - 1;
      }
      imgs.style.transform = `translateX(${-index * 800}px)`;
    };
    let interval = setInterval(run, 2000);

    const resetInterval = () => {
      clearInterval(interval);
      interval = setInterval(run, 2000);
    };

    const handleRightClick = () => {
      index++;
      changeImage();
      resetInterval();
    };

    const handleLeftClick = () => {
      index++;
      changeImage();
      resetInterval();
    };
  }, []);

  return (
    <div className="carousel">
      <div className="image-container" id="imgs">
        {images.map((image) => (
          <img key={image.id} src={image.src} alt={image.alt} />
        ))}
      </div>
      <div className="buttons-container">
        <IoIosArrowDropleft className="arrow-btn" onClick={handleLeftClick} />
        <IoIosArrowDropright className="arrow-btn" onClick={handleRightClick} />
      </div>
    </div>
  );
};

export default ImageCarousel;

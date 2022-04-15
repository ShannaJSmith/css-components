import React, { useEffect, useState } from 'react';
import './ImageCarousel.scss';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { images } from '../imageData';

const ImageCarousel = () => {
  const [image, setImage] = useState(images);
  const [currentImage, setCurrentImage] = useState(0);

  const handleLeftClick = () => {
    const reset = currentImage === 0;
    const index = reset ? images.length - 1 : currentImage - 1;
    setCurrentImage(index);
  };

  const handleRightClick = () => {
    const reset = currentImage === images.length - 1;
    const index = reset ? 0 : currentImage + 1;
    setCurrentImage(index);
  };

  const newImageArray = images.slice(currentImage, currentImage + 3);

  // check the length of the new array (it’s less than 5 when index is at the end of the imagge sources array)
  const displayImages =
    newImageArray.length < 3
      ? // if the displayImages's length is lower than 5 images than append missing images from the beginning of the original array
        [...newImageArray, ...images.slice(0, 3 - newImageArray.length)]
      : newImageArray;

  // useEffect(() => {
  //   const imgs = document.getElementById('imgs');
  //   const img = document.querySelectorAll('#imgs img');

  //   let index = 0;
  //   const run = () => {
  //     index++;
  //     changeImage();
  //   };

  //   const changeImage = () => {
  //     if (index > img.length - 1) {
  //       index = 0;
  //     } else if (index < 0) {
  //       index = img.length - 1;
  //     }
  //     imgs.style.transform = `translateX(${-index * 800}px)`;
  //   };
  //   let interval = setInterval(run, 2000);

  //   const resetInterval = () => {
  //     clearInterval(interval);
  //     interval = setInterval(run, 2000);
  //   };

  //   const handleRightClick = () => {
  //     index++;
  //     changeImage();
  //     resetInterval();
  //   };

  //   const handleLeftClick = () => {
  //     index++;
  //     changeImage();
  //     resetInterval();
  //   };
  // }, []);

  // const handleRightClick = () => {
  //   console.log('image', image);
  // };

  // const handleLeftClick = () => {};

  return (
    <div className="carousel">
      <div className="image-container" id="imgs">
        {displayImages.map((image) => (
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

import React, { useState, useEffect } from "react";
import "./Gallery.css";

const images = [
  "g1.JPG",
  "g2.JPG",
  "g3.JPG",
  "g4.JPG",
  "g5.JPG",
  "g6.JPG",
  "g7.JPG",
  "g8.JPG",
  "g9.JPG",
  "g10.JPG",


];

const Gallery = () => {
  const [carouselItems, setCarouselItems] = useState(images);

  const updateGallery = (direction) => {
    let updatedItems = [...carouselItems];
    if (direction === "previous") {
      updatedItems.unshift(updatedItems.pop());
    } else {
      updatedItems.push(updatedItems.shift());
    }
    setCarouselItems(updatedItems);
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      updateGallery("next");
    }, 3000);


    return () => clearInterval(interval);
  }, [carouselItems]);

  return (
    <div className="gallery">
      <div className="gallery-text">
        <h1>Gallery</h1>
      </div>
      <div className="galleryContainer">
     
        <div
          className="arrowContainer previous"
          onClick={() => updateGallery("previous")}
        >
          <button className="arrowButton">&#9664;</button>
        </div>

       
        {carouselItems.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery item ${index + 1}`}
            className={`galleryItem galleryItem${(index % 5) + 1}`}
          />
        ))}

      
        <div
          className="arrowContainer next"
          onClick={() => updateGallery("next")}
        >
          <button className="arrowButton">&#9654;</button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

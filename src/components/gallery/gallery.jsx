import React, { useState, useEffect, useRef } from 'react';
import './gallery.css';

const Gallery = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [isScrolling, setIsScrolling] = useState(true);
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const requestRefRef = useRef(null);

  const items = [
    { id: 1, src: '/g1.JPG', text: 'Event Management' },
    { id: 2, src: '/g2.JPG', text: 'Small Background' },
    { id: 3, src: '/g3.JPG', text: 'Media Publicity' },
    { id: 4, src: '/g4.JPG', text: 'Web Creatives' },
    { id: 5, src: '/g5.JPG', text: 'Background' },
    { id: 6, src: '/g7.JPG', text: 'Large Background' },
    { id: 7, src: '/g8.JPG', text: 'Medium Background' },
    { id: 8, src: '/g9.JPG', text: 'Extra Large Background' },
    { id: 9, src: '/g10.JPG', text: 'Card Picture' },
    { id: 10, src: '/g6.JPG', text: 'Public Relations' },
    // { id: 11, src: '/Sponsors.jpeg', text: 'Sponsors' },
    // { id: 12, src: '/image_Yuvaan.png', text: 'Yuvaan Image' },
    // { id: 13, src: '/logo.png', text: 'Logo' },
    // { id: 14, src: '/logo copy.png', text: 'Logo Copy' },
    // { id: 15, src: '/cs2.png', text: 'CS2 Image' },
  ];

  // Quadruple items to create a more robust infinite scroll effect
  const duplicatedItems = [...items, ...items, ...items, ...items];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const containerElement = containerRef.current;
    let scrollPosition = scrollPositionRef.current;

    const checkGalleryVisibility = () => {
      if (!containerElement || !scrollContainer) return false;
      
      const containerWidth = containerElement.offsetWidth;
      const scrollWidth = scrollContainer.scrollWidth;
      
      return scrollWidth > containerWidth;
    };

    const scrollImages = () => {
      if (checkGalleryVisibility() && isScrolling && scrollContainer) {
        scrollPosition -= 1;
        
        // Calculate total width of all items
        const totalWidth = scrollContainer.scrollWidth / 4;
        
        // Reset scroll position when it passes the first set of items
        if (Math.abs(scrollPosition) >= totalWidth) {
          scrollPosition += totalWidth;
        }

        scrollContainer.style.transform = `translateX(${scrollPosition}px)`;
        scrollPositionRef.current = scrollPosition;
      }
      
      requestRefRef.current = requestAnimationFrame(scrollImages);
    };

    // Start or resume scrolling
    if (isScrolling) {
      requestRefRef.current = requestAnimationFrame(scrollImages);
    }

    return () => {
      if (requestRefRef.current) {
        cancelAnimationFrame(requestRefRef.current);
      }
    };
  }, [isScrolling]);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
    setIsScrolling(false);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setIsScrolling(true);
  };

  const handleItemClick = (item) => {
    if (isFullScreen && activeItem === item) {
      setIsFullScreen(false);
      setActiveItem(null);
    } else {
      setIsFullScreen(true);
      setActiveItem(item);
    }
  };

  const handleNext = () => {
    const currentIndex = items.findIndex(item => item.id === activeItem.id);
    const nextItem = items[(currentIndex + 1) % items.length];
    setActiveItem(nextItem);
  };

  const handlePrev = () => {
    const currentIndex = items.findIndex(item => item.id === activeItem.id);
    const prevItem = items[(currentIndex - 1 + items.length) % items.length];
    setActiveItem(prevItem);
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
    setActiveItem(null);
  };

  return (
    <div 
      ref={containerRef}
      className="gallery-container"
    >
      <div className="wrapper">
        <div 
          ref={scrollRef} 
          className="items3d"
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className={`item ${hoveredItem === item ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleItemClick(item)}
            >
              <img src={item.src} alt={item.text} />
            </div>
          ))}
        </div>
      </div>

      {isFullScreen && activeItem && (
        <div className="full-screen-image">
          <div className="image-content">
            <img src={activeItem.src} alt={activeItem.text} />
            <div className="image-text">{activeItem.text}</div>
          </div>
          <div className="arrow-left" onClick={handlePrev}>❮</div>
          <div className="arrow-right" onClick={handleNext}>❯</div>
          <div className="close-btn" onClick={handleCloseFullScreen}>✖</div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
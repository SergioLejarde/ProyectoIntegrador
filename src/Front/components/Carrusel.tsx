import React, { useState, useEffect } from 'react';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const images: string[] = [
    'https://placehold.co/1920x500?text=Image+1',
    'https://placehold.co/1920x500?text=Image+2',
    'https://placehold.co/1920x500?text=Image+3',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="whitespace-nowrap transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Carousel Image ${index + 1}`}
              className="w-full h-96 object-cover inline-block"
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

import React, { useState, useEffect } from 'react';

interface CarouselProps {
  images: string[];
  images2: string[];
  interval?: number;
}

const Banner: React.FC<CarouselProps> = ({ images, images2, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Function to update screen width on window resize
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener for screen resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      const currentImageArray = screenWidth < 786 ? images2 : images;
      setCurrentSlide((currentSlide + 1) % currentImageArray.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [currentSlide, interval, images, images2, screenWidth]);

  // Determine which image array to use based on screen width
  const currentImages = screenWidth < 786 ? images2 : images;

  return (
    <div className="relative w-full h-full overflow-hidden bg-gray-200">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {currentImages.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[65vh] md:h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;

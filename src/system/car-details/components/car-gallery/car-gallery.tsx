import React, {useRef, useState} from 'react';

const MOCK_IMAGES = [
  '/carousel/carousel-1.jpeg',
  '/carousel/carousel-2.jpeg',
  '/carousel/carousel-3.jpeg',
  '/carousel/carousel-4.jpeg',
  '/carousel/carousel-5.jpeg',
];

export const CarGallery = () => {
  const TRANSITION_DURATION = 0.3;

  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % MOCK_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + MOCK_IMAGES.length) % MOCK_IMAGES.length);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const deltaX = touchEndX.current - touchStartX.current;
      if (deltaX > 50) {
        prevSlide(); // Swipe right
      } else if (deltaX < -50) {
        nextSlide(); // Swipe left
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const imagePosition = {
    transform: `translateX(-${currentSlide * (100 / MOCK_IMAGES.length)}%)`,
    transition: `transform ${TRANSITION_DURATION}s ease-in-out`,
  };

  return (
    <div
      className="relative py-2"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>
      <div className="overflow-hidden rounded md:rounded-xl">
        <div className="flex" style={{width: `${MOCK_IMAGES.length * 100}%`, ...imagePosition}}>
          {MOCK_IMAGES.map((image, index) => (
            <div key={index} className="w-full">
              <img src={image} alt={`Slide ${index}`} className="w-full aspect-auto"/>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute text-gray-100 text-left
        flex justify-start items-center
        top-1/2 left-0 transform
        -translate-y-1/2 pl-8 h-full w-5/12 bg-transparent rounded-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
             stroke="currentColor"
             className="w-6 h-6 md:w-10 md:h-10 md:hover:scale-150 transition-all">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute text-gray-100 text-right
        flex justify-end items-center
        top-1/2 right-0 transform
        -translate-y-1/2 pr-8 h-full w-5/12 bg-transparent rounded-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
             stroke="currentColor"
             className="w-6 h-6 md:w-10 md:h-10 md:hover:scale-150 transition-all">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
        </svg>
      </button>
    </div>
  );
};

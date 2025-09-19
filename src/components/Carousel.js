"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import ArticlesComponent from "./ArticlesComponent.js";

// A simple and efficient hook to get the window width
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return windowWidth;
};

const Carousel = ({ blok }) => {
  const { title, featured_articles } = blok;
  const [currentIndex, setCurrentIndex] = useState(0);
  const windowWidth = useWindowWidth();

  // --- Navigation Logic ---
  const handlePrev = () => {
    const newIndex =
      currentIndex === 0 ? featured_articles.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      currentIndex === featured_articles.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  let cardWidth = 360;
  let gap = 24;

  if (windowWidth < 640) {
    cardWidth = windowWidth - 24;
    gap = 0;
  } else if (windowWidth < 1024) {
    cardWidth = 327;
    gap = 24;
  }

  const slideOffset = currentIndex * (cardWidth + gap);

  return (
    <div className="relative max-w-[1285px] mx-auto my-8  px-3 md:px-8">
      <div className="overflow-hidden px-3">
        <div
          className="flex  gap-x-6 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${slideOffset}px)` }}
        >
          {featured_articles.map((article) => (
            <ArticlesComponent
              blok={article}
              title={title}
              key={article.uuid}
            />
          ))}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-1 md:left-4 transform -translate-y-1/2 rounded-full shadow-md z-10"
        aria-label="Previous slide"
      >
        <Image src="/prev-arrow.png" alt="Previous" width={28} height={28} />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-1 md:right-4 transform -translate-y-1/2 rounded-full shadow-md z-10"
        aria-label="Next slide"
      >
        <Image src="/next-arrow.png" alt="Next" width={28} height={28} />
      </button>
    </div>
  );
};

export default Carousel;

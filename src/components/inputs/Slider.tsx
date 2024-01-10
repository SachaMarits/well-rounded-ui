import React, { useState, useEffect } from "react";

interface SliderProps {
  items: React.ReactNode[];
  delay?: number;
  height: number;
  width: number;
}

export function Slider({ items, delay, height, width }: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidingSlide, setSlidingSlide] = useState(0);

  const newSlide = (value: number) => {
    let newSlide = currentSlide + value;
    if (newSlide < 0) newSlide = items.length - 1;
    if (newSlide > items.length - 1) newSlide = 0;
    return newSlide;
  };

  const changeSlide = (value: number) => {
    if (currentSlide !== slidingSlide) return;

    const slide = newSlide(value);

    setSlidingSlide(slide);
    setTimeout(() => {
      setCurrentSlide(slide);
    }, 1000);
  };

  const previousSlide = currentSlide === 0 ? items.length - 1 : currentSlide - 1;
  const nextSlide = currentSlide === items.length - 1 ? 0 : currentSlide + 1;

  const slidingState = (value: number) => {
    const slide = newSlide(value);
    if (currentSlide !== slidingSlide && slide === slidingSlide) {
      if (value === 1) return "sliding-left";
      if (value === -1) return "sliding-right";
    }
    return "";
  };

  useEffect(() => {
    if (delay) {
      const intervalId = setInterval(() => {
        const newSlide = (currentSlide + 1) % items.length;
        setSlidingSlide(newSlide);
        setTimeout(() => {
          setCurrentSlide(newSlide);
        }, 1000);
      }, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay, currentSlide, items.length]);

  return (
    <div className="slider" style={{ height, width }}>
      <div className={`slider-item previous-slide ${slidingState(-1)}`}>{items[previousSlide]}</div>
      <div className={`slider-item current-slide`}>{items[currentSlide]}</div>
      <div className={`slider-item next-slide ${slidingState(1)}`}>{items[nextSlide]}</div>

      <i className="mdi mdi-chevron-left pointer" style={{ top: `${height / 2}px` }} onClick={() => changeSlide(-1)} />
      <i className="mdi mdi-chevron-right pointer" style={{ top: `${height / 2}px` }} onClick={() => changeSlide(1)} />
    </div>
  );
}

export default Slider;

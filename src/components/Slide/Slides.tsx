'use client';
import { useState, useEffect } from 'react';
import {
  SlideContainer,
  SlideImage,
  PrevButton,
  NextButton,
  ArrowImg,
} from './Slides.styles';
import slide1 from '../../assets/slides/slide1.jpg';
import slide2 from '../../assets/slides/slide2.jpg';
import slide3 from '../../assets/slides/slide3.jpg';
import slide4 from '../../assets/slides/slide4.jpg';
import left_arr from '../../assets/left_arr.svg';
import right_arr from '../../assets/right_arr.svg';

export default function Slides() {
  const [currentSlide, setCurrentSlide] = useState(slide1);
  const slides = [slide1, slide2, slide3, slide4];
  const auto = 'auto';

  useEffect(() => {
    const interval = startInterval();

    function startInterval() {
      return setInterval(() => {
        const index = slides.indexOf(currentSlide);
        if (index === slides.length - 1) {
          setCurrentSlide(slides[0]);
        } else {
          setCurrentSlide(slides[index + 1]);
        }
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentSlide]);

  function onCHangeSlide(direction: string) {
    const index = slides.indexOf(currentSlide);
    if (direction === 'prev') {
      if (index === 0) {
        setCurrentSlide(slides[slides.length - 1]);
      } else {
        setCurrentSlide(slides[index - 1]);
      }
    } else {
      if (index === slides.length - 1) {
        setCurrentSlide(slides[0]);
      } else {
        setCurrentSlide(slides[index + 1]);
      }
    }
  }

  return (
    <SlideContainer>
      <PrevButton onClick={() => onCHangeSlide('prev')}>
        <ArrowImg src={left_arr} alt="left_arr" width={50} height={50} />
      </PrevButton>
      <SlideImage
        priority={true}
        src={currentSlide}
        height={100}
        width={100}
        alt="Slide1"
      />
      <NextButton onClick={() => onCHangeSlide('next')}>
        <ArrowImg src={right_arr} alt="right_arr" width={50} height={50} />{' '}
      </NextButton>
    </SlideContainer>
  );
}

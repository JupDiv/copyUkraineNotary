import styled from 'styled-components';
import Image from 'next/image';

export const ArrowImg = styled(Image)``;

export const PrevButton = styled.button`
  display: none;
  position: absolute;
  width: 50px;
  height: 50px;
  padding: 0;
  background: rgba(255, 255, 255, 0);
  left: 20px;
  border: none;

  @media (max-width: 1024px) {
    left: 0;
  }
`;

export const NextButton = styled.button`
  display: none;
  position: absolute;
  width: 50px;
  height: 50px;
  right: 20px;
  border: none;
  padding: 0;
  background: rgba(255, 255, 255, 0);
  @media (max-width: 1024px) {
    right: 0;
  }
`;

export const SlideContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 320px;
  width: 100%;
  margin-top: 10px;

  &:hover {
    ${PrevButton} {
      display: block;
      @keyframes showedArrows {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.50;
  }
  75% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
}
      animation: showedArrows 1s;
    }
    ${NextButton} {
      display: block;
      @keyframes showedArrows {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
}
      animation: showedArrows 1s;
    }
`;

export const SlideImage = styled(Image)`
  position: absolute;
  z-index: -999;
  width: 100%;
  height: 340px;
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    border-radius: 10px;
  }
`;

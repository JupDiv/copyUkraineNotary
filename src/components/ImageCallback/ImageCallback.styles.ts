import styled from 'styled-components';
import Image from 'next/image';

export const ImageContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 100;
  cursor: pointer;
  @keyframes call {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(10deg);
    }
    50% {
      transform: rotate(0);
    }
    75% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(0);
    }
  }

  animation: call 2s infinite;

  @media (max-width: 389px) {
    right: -5px;
`;

export const ImageCallback = styled(Image)``;

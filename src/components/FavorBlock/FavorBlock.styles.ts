import styled from 'styled-components';
import Link from 'next/link';

export const FavorBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 15px;
  margin-top: 10px;
  padding: 10px;
  border-top: 1px solid #000;

  @media screen and (max-width: 768px) {
    margin: 8px;
  }
`;

export const FavorBlockTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 20px 0;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    margin: 5px 0;
  }
`;

export const FavorLink = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  width: 120px;
  padding: 10px 20px;
  border: 1px solid #0e8388;
  border-radius: 10px;
  background-color: #f4edea;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background-color: #526d82;
  text-decoration: none;
  color: white;
  padding: 15px 30px;

  &:hover {
    color: #0e8388;
    background-color: #dde6ed;
    border: 1px solid #0e8388;
    border-radius: 10px;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
    width: 96px;
    padding: 7.5px 15px;
    margin: 5px;
  }
`;

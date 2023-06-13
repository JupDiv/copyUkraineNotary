import styled from 'styled-components';
import Link from 'next/link';

export const FavorBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6px;

  @media screen and (min-width: 1440px) {
    height: 690px;
  }
`;

export const FavorLinkEveryItem = styled(Link)`
  list-style: none;
  text-decoration: none;
  color: black;
`;

export const FavorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    align-content: baseline;
    justify-content: center;
    font-size: 12px;
    height: 288px;
    flex: 2;
  }

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;

export const FavorItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 300px;
  width: 300px;
  border: 1px solid #ccc;
  margin: 5px;

  &:hover {
    color: #0e8388;
    background-color: #dde6ed;
    border: 1px solid #0e8388;
    border-radius: 10px;
  }

  @media screen and (max-width: 768px) {
    width: 125px;
    height: 50px;
    justify-content: center;
    padding: 5px;
  }

  @media screen and (width: 1024px) {
    flex: 2;
    height: 350px;
  }
`;

export const FavorTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  width: 190px;
  margin: 0;
  padding: 0;
  overflow-wrap: break-word;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    width: 118px;
  }
`;

export const FavorList = styled.ul`
  margin: 0;
  padding: 0;
  padding-left: 14px;
`;

export const FavorListItem = styled.li`
  margin: 0;
  padding: 0;
  padding: 5px;
  margin: 5px;
  list-style: none;
  font-size: 16px;
  font-weight: 400;
  word-wrap: break-word;
  text-align: left;

  @media screen and (max-width: 768px) {
    display: none;
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

  @media screen and (max-width: 1024px) {
    margin: 0;
    // margin-top: 150px;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
    font-size: 12px;
    width: 66px;
    text-align: center;
  }

  @media screen and (max-width: 320px) {
    margin: 0;
  }
`;

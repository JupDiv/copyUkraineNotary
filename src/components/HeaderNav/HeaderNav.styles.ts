import styled from 'styled-components';
import Link from 'next/link';

type NavItemProps = {
  $isHighlighted: boolean;
};

type NavItemLinkProps = {
  $isStyle: boolean;
};

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 0;
    margin-top: 25px;
  }
`;

export const NavItem = styled.div<NavItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  white-space: nowrap;
  background-color: ${({ $isHighlighted }) =>
    $isHighlighted ? '#526D82' : '#DDE6ED'};

  @media (max-width: 768px) {
    margin: 4px;
  }
`;

export const NavItemLink = styled(Link)<NavItemLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 400;
  height: 40px;
  width: 114px;
  border: 1px solid #0e8388;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  background-color: ${({ $isStyle }) => ($isStyle ? '#2B2D42' : '#526d82')};
  color: ${({ $isStyle }) => ($isStyle ? '#F1F6F9' : 'white')};

  &:hover {
    background-color: #dde6ed;
    border: 1px solid #0e8388;
    color: #0e8388;

    border-radius: 10px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    width: 130px;
  }
`;

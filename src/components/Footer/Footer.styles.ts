import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  color: black;
  text-align: center;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  width: 100%;

  @media screen and (width: 1024px) {
    justify-content: space-evenly;
  }

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 390px) {
    margin-top: 20px;
  }
`;

export const FooterContacts = styled.div`
  display: flex;
  flex-direction: column;
`;

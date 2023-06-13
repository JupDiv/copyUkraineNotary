import styled from 'styled-components';

export const AboutInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 20px;
  }
`;
export const AboutInfoTitle = styled.h2`
  @media (max-width: 768px) {
    text-align: center;
  }

  @media (min-width: 1024px) {
    margin-top: 0px;
  }
`;
export const AboutInfoSubtitle = styled.h3`
  margin-top: 5px 0;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const AboutInfoText = styled.p`
  margin: 0;
`;

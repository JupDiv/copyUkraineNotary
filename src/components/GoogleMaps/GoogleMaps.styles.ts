import styled from 'styled-components';

export const GoogleMapsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 10px;
  width: 600px;
  height: 400px;

  @media (max-width: 768px) {
    width: 400px;
    height: 500px;
  }

  @media (max-width: 480px) {
    width: 335px;
    height: 400px;
  }

  @media (max-width: 390px) {
    width: 300px;
    height: 400px;
  }
`;

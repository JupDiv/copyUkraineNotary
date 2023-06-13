import styled from 'styled-components';

export const AboutWrapper = styled.div`
  display: flex;
  margin: 0px 10px;
  margin-bottom: 67px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 0px;
  }
`;

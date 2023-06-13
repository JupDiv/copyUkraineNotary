import styled from 'styled-components';

export const ContactsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 10px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

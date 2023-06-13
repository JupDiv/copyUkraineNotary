import styled from 'styled-components';

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50px;
  height: 400px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 0;
    margin-top: 20px;
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 260px;
  }
`;

export const ContacsContainerTitle = styled.div``;
export const ContactsTitle = styled.h3`
  margin-top: 0;
`;

export const ContactsContent = styled.div``;
export const ContactsContentItem = styled.div``;
export const ContactsContentItemTitle = styled.div``;
export const ContactsContentItemText = styled.div``;
export const ContactsSubTitle = styled.h3``;
export const ContactsText = styled.p``;
export const ContactsTextLink = styled.a``;

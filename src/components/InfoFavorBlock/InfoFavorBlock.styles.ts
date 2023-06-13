import styled from 'styled-components';

export const InfoFavorBlockContainer = styled.div`
  margin: 20px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const InfoFavorBlockTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin: 20px 0;
    word-wrap: break-word;
    width: 199px;
  }
`;
export const InfoFavorDescriptionContainer = styled.div`
  margin: 10px;
  padding: 10px;

  @media screen and (max-width: 768px) {
    margin: 5px;
    padding: 5px;
  }
`;
export const InfoFavorDescriptionTitle = styled.h3`
  margin: 10px;

  @media screen and (max-width: 768px) {
    margin-top: 15px;
    text-align: center;
  }
`;
export const InfoFavorDescriptionParagraph = styled.p`
  margin: 10px;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
  }
`;
export const InfoFavorBlockImageContainer = styled.div``;
export const InfoFavorBlockImageTitle = styled.div``;

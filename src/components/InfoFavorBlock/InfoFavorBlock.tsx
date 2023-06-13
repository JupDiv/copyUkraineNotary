'use client';

import { Category } from '../../../app/api/category/Categories';
import { usePathname } from 'next/navigation';
type InfoFavorBlockProps = {
  data: Category[];
};
import {
  InfoFavorBlockContainer,
  InfoFavorBlockTitle,
  InfoFavorDescriptionContainer,
  InfoFavorDescriptionTitle,
  InfoFavorDescriptionParagraph,
} from './InfoFavorBlock.styles';

export default function InfoFavorBlock({ data }: InfoFavorBlockProps) {
  const path = usePathname();

  if (path === null) return null;

  const datas = data.filter(({ id }) => path.includes(id));
  console.log(datas);
  const dataInfoFavorBlock = data.map(({ title, id, description }) =>
    path.includes(id) ? (
      <InfoFavorBlockContainer key={id}>
        <InfoFavorBlockTitle>{title}</InfoFavorBlockTitle>
        {description.map(({ heading, description }, index) => (
          <InfoFavorDescriptionContainer key={index}>
            <InfoFavorDescriptionTitle>{heading}</InfoFavorDescriptionTitle>
            <InfoFavorDescriptionParagraph>
              {description}
            </InfoFavorDescriptionParagraph>
          </InfoFavorDescriptionContainer>
        ))}
      </InfoFavorBlockContainer>
    ) : null
  );

  return <>{dataInfoFavorBlock}</>;
}

'use client';
import { Category } from '../../../app/api/category/Categories';
import {
  FavorBlockContainer,
  FavorBlockTitle,
  FavorLink,
} from './FavorBlock.styles';

type FavorBlockProps = {
  data: Category;
};

export default function FavorBlock({ data }: FavorBlockProps) {
  const { title, id } = data;

  return (
    <FavorBlockContainer>
      <FavorBlockTitle>{title}</FavorBlockTitle>
      <FavorLink href={`/favor/${id}`}>Детальнійше</FavorLink>
    </FavorBlockContainer>
  );
}

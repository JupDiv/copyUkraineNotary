'use client';
import { useMemo } from 'react';

import {
  FavorContainer,
  FavorItem,
  FavorTitle,
  FavorList,
  FavorListItem,
  FavorBlock,
  FavorLinkEveryItem,
} from './Favor.styles';

import { Category } from '../../../app/api/category/Categories';

type FavorProps = {
  data: Category[];
};

export default function Favor({ data }: FavorProps) {
  const listFavor = useMemo(() => {
    return data.map((item) => (
      <FavorLinkEveryItem href={`/favor/${item.id}`} key={item.id}>
        <FavorItem>
          <FavorTitle>{item.title}</FavorTitle>
          <FavorList>
            {item.description.map(({ heading }, index) => (
              <FavorListItem key={index + Math.random()}>
                {heading}
              </FavorListItem>
            ))}
          </FavorList>
        </FavorItem>
      </FavorLinkEveryItem>
    ));
  }, [data]);

  return (
    <FavorBlock>
      <FavorContainer>{listFavor}</FavorContainer>
    </FavorBlock>
  );
}

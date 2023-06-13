'use client';
import { useMemo } from 'react';
import { Category } from '../../../app/api/category/Categories';
import FavorBlock from '../FavorBlock/FavorBlock';

type ServicesPageProps = {
  data: Category[];
};

export default function Services({ data }: ServicesPageProps) {
  const listServices = useMemo(() => {
    return data.map((item) => <FavorBlock key={item.id} data={item} />);
  }, [data]);
  return <>{listServices}</>;
}

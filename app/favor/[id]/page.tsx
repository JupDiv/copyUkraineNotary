import getCategories from '../../api/category/getCategories';
import { Category } from '../../api/category/Categories';
import InfoFavorBlock from '@/components/InfoFavorBlock/InfoFavorBlock';

export default async function Page() {
  const categories: Category[] = await getCategories();

  return <InfoFavorBlock data={categories} />;
}

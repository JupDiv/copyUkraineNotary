import getCategories from '../api/category/getCategories';
import { Category } from '../api/category/Categories';
import Services from '@/components/Services/Services';

export default async function Page() {
  const categories: Category[] = await getCategories();

  return (
    <>
      <Services data={categories} />
    </>
  );
}

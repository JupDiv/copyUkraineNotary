import getCategories from './api/category/getCategories';
import { Category } from './api/category/Categories';
import MainPage from '@/components/MainPage/MainPage';
import './global.css';

export default async function Page(): Promise<JSX.Element> {
  const categories: Category[] = await getCategories();
  return (
    <>
      <title>Головна</title>
      <h1 className="header">Нотаріус Іванова О.О</h1>
      <MainPage data={categories} />
    </>
  );
}

import { Category } from '../../../app/api/category/Categories';
import Slides from '../Slide/Slides';
import Favor from '../Favor/Favor';

type ServicesPageProps = {
  data: Category[];
};

export default function MainPage({ data }: ServicesPageProps) {
  return (
    <>
      <Slides />
      <Favor data={data} />
    </>
  );
}

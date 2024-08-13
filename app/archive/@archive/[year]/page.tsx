import NewsList from '@/components/news-list';
import { getNewsForYear } from '@/lib/helpers';
import { FC } from 'react';

type Props = {
  params: { year: string };
};

const FilteredNewsPage: FC<Props> = ({ params }) => {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);

  return <NewsList news={news} />
}

export default FilteredNewsPage;
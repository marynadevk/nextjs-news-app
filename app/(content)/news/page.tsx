import NewsList from '@/components/news-list';
import { DUMMY_NEWS } from '@/public/dummy-news';
import { FC } from 'react';

const NewsPage: FC = () => {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
};

export default NewsPage;

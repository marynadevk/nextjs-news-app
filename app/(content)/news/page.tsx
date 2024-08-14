import NewsList from '@/components/news-list';
import { INewsArticle } from '@/interfaces/INewsArticle';
import { getAllNews } from '@/lib/helpers';

const NewsPage = async () => {
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
};

export default NewsPage;

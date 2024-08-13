import { INewsArticle } from '@/interfaces/INewsArticle';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
  news: INewsArticle[];
};

const NewsList: FC<Props> = ({ news }) => {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;

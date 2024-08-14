import { getNewsItem } from '@/lib/helpers';
import { notFound } from 'next/navigation';
import { FC } from 'react';

type Props = {
  params: { slug: string };
};

const ImagePage: FC<Props> = async ({ params }) => {
  const newsItemSlug = params.slug;
  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound();
  }


  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
};

export default ImagePage;

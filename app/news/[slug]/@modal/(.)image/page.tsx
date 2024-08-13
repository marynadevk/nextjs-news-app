import { DUMMY_NEWS } from '@/public/dummy-news';
import { notFound } from 'next/navigation';
import { FC } from 'react';

type Props = {
  params: { slug: string };
};

const InterceptedImagePage: FC<Props> = ({ params }) => {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;

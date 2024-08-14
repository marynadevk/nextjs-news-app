import { FC } from 'react';
import { notFound } from 'next/navigation';
import { getNewsItem } from '@/lib/helpers';
import ModalBackdrop from '@/components/modal-backdrop';

type Props = {
  params: { slug: string };
};

const InterceptedImagePage: FC<Props> = async ({ params }) => {
  const newsItemSlug = params.slug;
  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;

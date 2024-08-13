import { FC } from 'react';

type Props = {
  modal: React.ReactNode;
  children: React.ReactNode;
};
const NewsDetailLayout: FC<Props> = ({ children, modal }) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default NewsDetailLayout;

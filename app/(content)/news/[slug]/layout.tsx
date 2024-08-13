import { FC, ReactNode } from 'react';

type Props = {
  modal: ReactNode
  children: ReactNode;
};
const NewsDetailLayout: FC<Props> = ({ modal, children }) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default NewsDetailLayout;

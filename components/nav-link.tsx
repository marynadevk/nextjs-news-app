'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

type Props = {
  href: string;
  children: React.ReactNode;
};
const NavLink: FC<Props> = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link href={href} className={path.startsWith(href) ? 'active' : ''}>
      {children}
    </Link>
  );
};

export default NavLink;

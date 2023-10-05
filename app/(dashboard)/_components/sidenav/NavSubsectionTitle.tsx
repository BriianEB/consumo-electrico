import { ReactNode } from 'react';

type NavSubsectionTitleProps = {
  children: ReactNode;
};

function NavSubsectionTitle({ children }: NavSubsectionTitleProps) {
  return (
    <li className="ml-2 py-3 text-xs text-slate-700 font-bold uppercase">
      {children}
    </li>
  );
}

export default NavSubsectionTitle;
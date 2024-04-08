import { ReactNode } from 'react';
import { Sidebar } from './Sidebar/Sidebar';
// import { Header } from './Header/Header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className='flex justify-start'>
        <Sidebar />
        <div className='w-full  overflow-hidden'>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

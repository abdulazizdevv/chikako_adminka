import { Link, useLocation } from 'react-router-dom';
import { LuLayoutDashboard } from 'react-icons/lu';
import { IoExitOutline, IoList } from 'react-icons/io5';
import logo from '../../assets/icons/logo.svg';
import { FaRegImages } from 'react-icons/fa';

export const Sidebar = () => {
  const { pathname } = useLocation();
  const logLogOut = () => {
    localStorage.removeItem('token');
    window.location.replace('/');
  };
  return (
    <nav className='bg-white p-1 md:p-3 mt-[-10px] sticky h-screen z-[99]'>
      <div>
        <Link to='/' className='p-1'>
          <img className='w-[100px]' src={logo} alt='logo' />
        </Link>
      </div>

      <div>
        <Link
          to='/category'
          className={
            pathname.includes('category')
              ? ' py-3 bg-mainColor flex flex-col items-center justify-center text-[white] rounded-md '
              : 'flex flex-col items-center justify-center p-1 py-3 '
          }
        >
          <IoList size={24} /> Category
        </Link>
      </div>
      <div>
        <Link
          to='/product'
          className={
            pathname.includes('product')
              ? 'p-1 py-3 bg-mainColor flex flex-col items-center justify-center text-[white] rounded-md'
              : 'flex flex-col items-center justify-center p-1 py-3'
          }
        >
          <LuLayoutDashboard size={24} /> Product
        </Link>
      </div>
      <div>
        <Link
          to='/banner'
          className={
            pathname.includes('banner')
              ? 'p-1 py-3 bg-mainColor flex flex-col items-center justify-center text-[white] rounded-md'
              : 'flex flex-col items-center justify-center p-1 py-3'
          }
        >
          <FaRegImages size={24} /> Banner
        </Link>
      </div>
      <div className='bottom-5 fixed'>
        <button
          onClick={logLogOut}
          className={'flex flex-col items-center justify-center p-3 py-5'}
        >
          <IoExitOutline size={24} /> Category
        </button>
      </div>
    </nav>
  );
};

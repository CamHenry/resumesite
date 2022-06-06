import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='flex flex-row items-center justify-around bg-slate-900 text-emerald-500'>
      <nav className='grow md:grow-0 md:w-[40rem] md:border-x min-w-0 border-slate-500'>
        <div className='flex justify-between'>
          <div className='flex flex-row items-center pb-1 basis-1/4'>
            <Link href='/' >
              <a className='ml-3 p-1 border rounded-lg bg-emerald-300 text-black text-sm font-bold border-transparent border-slate-500 hover:text-blue-600 '>Home</a>
            </Link>
            {/* This page will be added later */}
            {/* <Link href='/about'>
              <a className='ml-3 p-1 border rounded-lg bg-slate-400 text-black text-sm font-bold border-transparent border-slate-500 hover:text-blue-600 hover:bg-emerald-100'>Blog</a>
            </Link> */}
          </div>
          <a className='flex pr-2 items-center' href='https://www.linkedin.com/in/cameron-henry-exe/' target='_blank' rel='noopener noreferrer'>
            <Image src='/icon-linkedin.svg' alt='Linkedin Logo' width='36' height='36'/>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

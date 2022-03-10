import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex items-center justify-center bg-slate-900 text-emerald-500'>
      <nav className='md:w-[40rem] md:border-x min-w-0 border-slate-500'>
        <div className='flex flex-row items-center pb-1'>
          <Link href='/' >
            <a className='ml-3 p-1 border rounded-lg bg-emerald-300 text-black text-sm font-bold border-transparent border-slate-500 hover:text-blue-600 '>Home</a>
          </Link>
          <Link href='/about'>
            <a className='ml-3 p-1 border rounded-lg bg-slate-400 text-black text-sm font-bold border-transparent border-slate-500 hover:text-blue-600 '>About</a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

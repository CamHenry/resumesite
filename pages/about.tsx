import type {NextPage} from 'next';
import Head from 'next/head';

/**
 * A function that returns an array of sweet sweet descriptions.
 * @param {args} args
 * @param {args.title} title - string
 * @param {args.desc} description - string
 * @return {JSX.Element[]} JSX.Element[]
 */


const Home: NextPage = () => {
  return (
    <div className='flex flex-col items-center min-h-screen bg-slate-900 text-emerald-500'>
      <Head>
        <title>Cameron Henry</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex flex-col items-center justify-center md:w-[40rem] min-w-0 text-center'>
        <div className='md:border-x border-t w-full mx-20 pb-1 min-w-0 border-slate-500'>
          <h1 className='text-6xl font-bold'>
            Cameron Henry{' '}
            <a className='text-blue-500' href='https://www.linkedin.com/in/cameron-henry-exe/' target='_blank' rel='noopener noreferrer'>
              LinkedIn
            </a>
          </h1>
          <p className='mt-3 text-2xl pb-2'>
              Software Engineer{' '}
          </p>
        </div>
        <div className='md:border-x mx-20 pb-2 w-full min-w-0 border-slate-500'>
          <div className='border-t border-slate-500'>
            <h1 className='flex justify-left ml-10 mt-2 text-3xl font-bold text-sky-300'>
              Blog Page WIP
            </h1>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Home;

import type {NextPage} from 'next';
import Head from 'next/head';
import {useState} from 'react';

/**
 * A function that returns an array of descriptions.
 * @param {args} args
 * @param {args.title} title - string
 * @param {args.desc} description - string
 * @return {JSX.Element[]} JSX.Element[]
 */

const Home: NextPage = () => {
  const [nums, setNums] = useState(3);
  const [nums2, setNums2] = useState(100);
  const incrementHandler = () => {
    setNums(nums + 1);
    setNums2((nums2) => nums2 - 1);
  };
  const test = null;
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
            {nums}
            <button onClick={incrementHandler}>
              ButtonTest
            </button>
            {nums2}
            {test}
          </div>

        </div>
      </main>
    </div>
  );
};

export default Home;

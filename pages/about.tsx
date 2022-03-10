import type {NextPage} from 'next';
import Head from 'next/head';
// import Image from 'next/image';
// import Navbar from '../components/navbar';
// import Footbar from '../components/footer';

const About: NextPage = () => {
  return (
    <div className='flex flex-col items-center min-h-screen border-t bg-slate-900 text-emerald-500'>
      <Head>
        <title>Cameron Henry</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex flex-col items-center justify-center min-w-0 text-center'>
        <div className='md:w-2/3 md:border-x mx-20 pb-1 min-w-0'>
          <h1 className='text-6xl font-bold'>
            Cameron Henry{' '}
            <a className='text-blue-500' href='www.linkedin.com/in/cameron-henry-exe'>
              LinkedIn
            </a>
          </h1>
          <p className='mt-3 text-2xl pb-2'>
              Software Engineer{' '}
            <code className='p-1 font-mono text-lg bg-slate-800 text-white rounded-md'>
                I do code!
            </code>
          </p>
        </div>
      </main>

      {/* <footer className='flex flex-initial items-center justify-center w-full py-4 border-t'>
        <span className=''>
          Powered by{' '}
        </span>

        <a
          className='flex items-center justify-center'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src='/vercel.svg' alt='Vercel Logo' width='72' height='16' className='h-4 ml-2' />
        </a>
      </footer> */}
    </div>
  );
};

export default About;

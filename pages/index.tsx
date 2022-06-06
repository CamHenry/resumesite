import type {NextPage} from 'next';
import Head from 'next/head';

/**
 * A function that returns an array of sweet sweet descriptions.
 * @param {args} args
 * @param {args.title} title - string
 * @param {args.desc} description - string
 * @return {JSX.Element[]} JSX.Element[]
 */
const DescBlock = (args:{title: string, desc: string}[]) =>
  args.map(({title, desc}) =>
    <div key={title} className='p-6 mt-4 mx-10 text-left border rounded-lg border-transparent bg-slate-800' >
      <h3 className='text-xl font-bold'>{title}</h3>
      <p className='mt-2 text-md'>{desc}</p>
    </div>
  );

const styleBlocks1 = 'p-4 mt-4 text-left w-[17rem] border-2 rounded-lg border-slate-400';

const SkillBlock = (args:{title: string, skills: string}) =>
  <div className = {styleBlocks1} >
    <h3 className={'text-lg font-bold'}>{args.title}</h3>
    <p className='mt-2 text-md'>{args.skills}</p>
  </div>;

const Home: NextPage = () => {
  return (
    <div className='bg-slate-900'>
      <div className='flex flex-col items-center min-h-screen text-emerald-500'>
        <Head>
          <title>Cameron Henry</title>
        </Head>
        <main className='flex flex-col items-center justify-center md:w-[40rem] min-w-0 text-center'>
          <div className='md:border-x border-t w-full mx-20 pb-1 min-w-0 border-slate-500'>
            {/* <h1 className='text-6xl font-bold'>
              Cameron Henry{' '}
            </h1>
            <p className='mt-1 pb-2 text-3xl text-sky-300'>
              Software Engineer{' '}
            </p> */}
            <h1 className='ml-3 text-left text-5xl font-bold'>
              Cameron Henry{' '}
            </h1>
            <p className='ml-4 mt-1 text-left text-2xl text-sky-300'>
              Software Engineer{' '}
            </p>
            <p className='ml-4 mb-3 text-xs text-left text-sky-400'>
              cameronhenryexe@gmail.com
            </p>
            <p className='mx-4 mt-1 mb-3 text-sm text-left'>
                I am an experienced software engineer with 5 years of industry experience open to remote opportunities.
                I have extensive experience in legacy stacks, but I am excited about the opportunities  of product-driven web-development.
                My background lends well towards working in API design and maintenance.
            </p>
          </div>
          <div className='md:border-x mx-20 pb-2 w-full min-w-0 border-slate-500'>
            <div className='border-t border-slate-500'>
              <h1 className='flex justify-left ml-10 mt-2 text-3xl font-bold text-sky-300'>
                About Me
              </h1>
              <div className='flex flex-col items-center justify-around mb-2 w-full'>
                {DescBlock([
                  {
                    title: 'Perspective towards Scale',
                    desc: `API design and maintenance - responsible for maintaining a legacy enterprise-grade API in-use by industry recognized customers. 
                    Responsible for all of the communication, research, and scale considerations associated with non-standard requests and response structures 
                    between a wide variety of business partners and a 20+ year old proprietary codebase.`,
                  },
                  {
                    title: 'Collaboration',
                    desc: `Coordinated with product management, quality assurance, and various development teams to ensure product met product expectations.`,
                  },
                  {
                    title: 'Testing',
                    desc: `Working in a stack where QA, and CI/CD is 100% manual, writing out cases to manually verify is of the utmost importance. 
                    I thoroughly enjoy working on projects where these cases can be thoughtfully automated.`,
                  },
                  {
                    title: 'Project Management',
                    desc: `Provided high quality user facing applications by coding, testing, documenting, and maintaining programs.`,
                  },
                ])}
              </div>

            </div>
            <div>
              <h1 className='flex justify-left ml-10 mt-6 text-3xl font-bold text-sky-300'>
                Technical Skills
              </h1>
              <div className='flex flex-row justify-between mx-10'>
                {SkillBlock({
                  title: 'Languages',
                  skills: 'Typescript, JavaScript,  HTML, CSS, SQL, NoSQL, Java,  R',
                })}
                {SkillBlock({
                  title: 'Libraries',
                  skills: 'React, React Testing Library, Next.JS, Tailwind, Styled Components, Jest, NestJS',
                })}
              </div>
            </div>

            <div className='mt-6 pr-1'>
              <h1 className='flex justify-left ml-10 mt-6 text-3xl font-bold text-sky-300'>
                Experience and Education
              </h1>
              <ul className='text-left list-disc mx-10 mt-2 pl-6 text-xl font-bold marker:text-sky-400'>
                <li className='mt-2'>
                  Reynolds and Reynolds, Houston — Software Engineer
                  <ul className='list-disc pl-5 text-sm font-normal'>
                    <li>
                      Develops and supports software for automotive retailers.
                    </li>
                    <li>
                      Maintain a codebase accessed and used internationally in a CI/CD workflow.
                    </li>
                    <li>
                      Researched and resolved issues in existing proprietary framework.
                    </li>
                  </ul>
                </li>
                <li className='mt-2'>
                  Lamar University, Beaumont — B.S. in Computer Science
                  <ul className='list-disc pl-5 text-sm font-normal'>
                    <li>
                      Network Systems, OOP paradigms, Database Design, Algorithm Design and Big O Analysis, Compilers, and Assembly Language.
                    </li>
                    <li>
                      Cleaning, coercing, and meaningfully interpreting large datasets with R and microsoft access.
                    </li>
                    <li>
                      Work collectively in an agile workflow.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;

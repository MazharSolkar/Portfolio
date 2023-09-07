import { FcGraduationCap } from 'react-icons/fc';
import { GiJourney } from 'react-icons/gi';

const Education = () => {
  return (
    <div className='mb-12 mx-2'>
      <div className='flex'>
        <h1 className='mb-8 mr-2 font-extrabold text-3xl md:text-4xl text-cyan-400 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 cursor-pointer'>
          Educational Journey
        </h1>

        <GiJourney className='text-slate-400 text-5xl' />
      </div>
      <p className='mb-8 text-xl text-gray-500 dark:text-gray-400'>
        📜 Acquired degrees and certifications as stepping stones to success.
      </p>
      <div className='md:flex md:justify-between'>
        <section className='px-2 mb-8'>
          <div className='flex'>
            <h1 className='mb-8 font-extrabold text-2xl text-cyan-400 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 cursor-pointer'>
              Qualification
            </h1>
            <h1 className='px-3'>
              <FcGraduationCap className='text-white text-3xl' />
            </h1>
          </div>

          <div className='px-4'>
            <ol class='relative border-l border-gray-200 dark:border-gray-700'>
              <li class='mb-10 ml-6'>
                <span class='absolute flex items-center justify-center w-6 h-6 bg-cyan-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-cyan-900'>
                  <svg
                    class='w-2.5 h-2.5 text-cyan-800 dark:text-cyan-300'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'>
                    <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                  </svg>
                </span>
                <h3 class='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
                  Master of Science in Information Technology{' '}
                  <span class='bg-blue-100 text-cyan-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-cyan-800 dark:text-cyan-300 ml-3'>
                    Latest
                  </span>
                </h3>
                <p class='block mb-2 text- font-normal leading-none text-gray-400 dark:text-gray-500'>
                  2021 - 2023
                </p>
                <p class='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
                  Parle Tilak Vidyalaya Association's Sathaye College
                </p>
              </li>
              <li class='mb-10 ml-6'>
                <span class='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-cyan-900'>
                  <svg
                    class='w-2.5 h-2.5 text-cyan-800 dark:text-cyan-300'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'>
                    <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                  </svg>
                </span>
                <h3 class='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
                  Bachelor of Science in Information Technology
                </h3>
                <p class='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                  2018 - 2021
                </p>
                <p class='text-base font-normal text-gray-500 dark:text-gray-400'>
                  Shree Girdhar Prasad Mishra Degree College
                </p>
              </li>
              <li class='ml-6'>
                <span class='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-cyan-900'>
                  <svg
                    class='w-2.5 h-2.5 text-cyan-800 dark:text-cyan-300'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'>
                    <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                  </svg>
                </span>
                <h3 class='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
                  Higher Secondary
                </h3>
                <p class='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                  2017 - 2018
                </p>
                <p class='text-base font-normal text-gray-500 dark:text-gray-400'>
                  Navjeevan Highschool and Degree College
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section className='px-2'>
          <div className='flex'>
            <h1 className='mb-8 font-extrabold text-2xl text-cyan-400 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 cursor-pointer'>
              Certifications<span className='text-white'> 🏆</span>
            </h1>
          </div>

          <div className='px-4'>
            <ol class='relative border-l border-gray-200 dark:border-gray-700'>
              <li class='mb-10 ml-6'>
                <span class='absolute flex items-center justify-center w-6 h-6 bg-cyan-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-cyan-900'>
                  <svg
                    class='w-2.5 h-2.5 text-cyan-800 dark:text-cyan-300'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'>
                    <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                  </svg>
                </span>
                <h3 class='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
                  Namaste React Course
                </h3>
                <a
                  href='https://courses.namastedev.com/learn/certificate/8406738-142240'
                  class='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'>
                  <svg
                    class='w-3.5 h-3.5 mr-2.5'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'>
                    <path d='M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z' />
                    <path d='M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z' />
                  </svg>{' '}
                  View Certificate
                </a>
              </li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;

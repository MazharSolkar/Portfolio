import { PROFILE } from '../utils/constant';

const Projects = () => {
  return (
    <section className='mb-12 mx-2'>
      <h1 className='mb-8 font-extrabold text-4xl text-cyan-400 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 cursor-pointer'>
        Recent Projects <span className='text-white'>🦁</span>
      </h1>

      <p className='mb-8 text-xl text-gray-500 dark:text-gray-400'>
        🚀 Explore our portfolio of innovative projects that redefine
        possibilities.
      </p>

      <div className='flex flex-col md:flex md:flex-row md:justify-center items-center'>
        <div className='max-w-xs mb-4 md:mx-2  rounded-lg dark:bg-gray-950 shadow-sm shadow-white/50 hover:shadow-xl hover:shadow-cyan-500/50'>
          <img className='rounded-t-lg' src={`${PROFILE}`} alt='' />

          <div className='p-5'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Noteworthy technology acquisitions 2021
            </h5>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href='#'
              className='w-36 h-10 mt-4 text-lg flex justify-center items-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-center hover:shadow-cyan-500/50 hover:shadow-lg md:hover:animate-pulse'>
              Read more
              <svg
                className='w-3.5 h-3.5 ml-2'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'>
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
            </a>
          </div>
        </div>
        <div className='max-w-xs mb-4 md:mx-2  rounded-lg dark:bg-gray-950 shadow-sm shadow-white/50 hover:shadow-xl hover:shadow-cyan-500/50'>
          <img className='rounded-t-lg' src={`${PROFILE}`} alt='' />

          <div className='p-5'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Noteworthy technology acquisitions 2021
            </h5>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href='#'
              className='w-36 h-10 mt-4 text-lg flex justify-center items-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-center hover:shadow-cyan-500/50 hover:shadow-lg md:hover:animate-pulse'>
              Read more
              <svg
                className='w-3.5 h-3.5 ml-2'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'>
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
            </a>
          </div>
        </div>
        <div className='max-w-xs mb-4 md:mx-2  rounded-lg dark:bg-gray-950 shadow-sm shadow-white/50 hover:shadow-xl hover:shadow-cyan-500/50'>
          <img className='rounded-t-lg' src={`${PROFILE}`} alt='' />

          <div className='p-5'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Noteworthy technology acquisitions 2021
            </h5>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href='#'
              className='w-36 h-10 mt-4 text-lg flex justify-center items-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-center hover:shadow-cyan-500/50 hover:shadow-lg md:hover:animate-pulse'>
              Read more
              <svg
                className='w-3.5 h-3.5 ml-2'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'>
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

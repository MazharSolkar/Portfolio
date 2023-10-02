import { BiSolidPaperPlane, BiSolidDownload } from 'react-icons/bi';
import { PROFILE } from '../utils/constant';
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  return (
    <section className='px-2 mb-12'>
      {/*  */}
      <div className='flex justify-center items-center overflow-hidden h-[300px] md:h-[400px]'>
        <div
          className={`bg-transparent rounded-full h-60 w-60 md:h-72 md:w-72 flex justify-center items-center relative 
          
          before:absolute before:content-[''] before:w-52 before:h-52 before:md:w-64 before:md:h-64 before:border-2 before:border-cyan-700 before:rounded-full before:animate-puslseEffect 
          
          after:absolute after:content-[''] after:w-52 after:h-52 after:md:w-64 after:md:h-64 after:border-2 after:border-cyan-700 after:rounded-full after:delay-300 after:animate-puslseEffectDelay`}>
          <img
            className='rounded-full w-full h-full z-10'
            src={`${PROFILE}`}
            alt='PROFILE_PHOTO'
          />
        </div>
      </div>
      {/*  */}
      <div className='text-center'>
        <p className='text-cyan-500 '>HI, MY NAME IS</p>

        <p className='font-bold text-4xl md:text-5xl md:py-3'>
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              500,
              '', // initially rendered starting point
              1000,
              'Mazhar Solkar',
              1000,
              'I write code',
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </p>

        <p className='my-3 text-lg'>
          I am a{' '}
          <span className='text-gray-950 font-semibold px-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br shadow-md hover:shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/50 dark:hover:shadow-lg dark:hover:shadow-cyan-800/80 inline-block md:hover:animate-pulse'>
            frontend developer
          </span>{' '}
          🚀 who loves turning ideas into stunning and user-friendly digital
          experiences.🌈🎨 I have a strong eye for design and use the latest
          technologies to create smooth and engaging interfaces.{' '}
          <span className='text-cyan-500 font-semibold'>
            My goal is to make code come alive! 🧑‍💻
          </span>
        </p>
      </div>
      <div className='flex justify-center'>
        <button
          className='w-36 h-10 text-lg flex justify-center items-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-center mx-4 mb-2 hover:shadow-cyan-500/50 hover:shadow-lg md:hover:animate-pulse'
          type='button'>
          <p className='mr-1 md:pr-2 text-gray-950 font-semibold'>My Resume</p>{' '}
          <BiSolidDownload className='text-gray-950' />
        </button>
        <a
          href='https://www.linkedin.com/in/mazhar-solkar-33b6ab16b/'
          target='blank'>
          <button
            className='w-36 h-10  text-lg flex justify-center items-center bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-center mx-4 mb-2 hover:shadow-cyan-500/50 hover:shadow-lg md:hover:animate-pulse'
            type='button'>
            <p className='mr-1 md:pr-2 text-gray-950 font-semibold'>
              Let's Connect
            </p>{' '}
            <BiSolidPaperPlane className='text-gray-950' />
          </button>
        </a>
      </div>
    </section>
  );
};

export default Header;

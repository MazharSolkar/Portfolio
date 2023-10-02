import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoGmail,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
} from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className='bg-white dark:bg-gray-950'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0 text-center w-full'>
            <h1 className='text-xl md:text-2xl text-center font-semibold whitespace-nowrap dark:text-white'>
              Made with love &#10084; By Mazhar Solkar
            </h1>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <div className='text-center items-center justify-between md:flex md:flex-col'>
          <span className='text-sm font-bold text-gray-500 sm:text-center dark:text-gray-400'>
            Don't be stranger connect with me
          </span>
          <ul className='flex md:flex md:flex-row md:mt-3 mt-4 space-x-5 justify-center sm:mt-0'>
            <a
              href='https://www.instagram.com/lone_wolf_09n/'
              target='blank'
              className='text-pink-500 hover:text-pink-900 dark:hover:text-white'>
              <BiLogoInstagramAlt className='text-2xl' />
              <span className='sr-only'>Instagram</span>
            </a>
            <a
              href='https://www.linkedin.com/in/mazhar-solkar-33b6ab16b/'
              target='blank'
              className='text-blue-500 hover:text-blue-900 dark:hover:text-white'>
              <BiLogoLinkedin className='text-2xl' />
              <span className='sr-only'>LinkedIn</span>
            </a>
            <a
              href='https://github.com/MazharSolkar'
              target='blank'
              className='text-white hover:text-white dark:hover:text-white'>
              <BiLogoGithub className='text-2xl' />
              <span className='sr-only'>GitHub account</span>
            </a>
            <a
              href='mailto: abc@example.com'
              target='blank'
              className='text-red-500 hover:text-red-900
              dark:hover:text-white'>
              <BiLogoGmail className='text-2xl' />
              <span className='sr-only'>Gmail account</span>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

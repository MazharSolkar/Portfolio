import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNavbar = () => {
    setOpen(!open);
  };

  return (
    <nav className='max-w-5xl sticky top-0 backdrop-blur-md z-20 px-3 md:px-0 py-2 md:py-4'>
      <div className='md:flex md:justify-between md:items-center sticky top-0'>
        <div className='mb-2 flex justify-between md:items-center sticky top-0'>
          <h1 className='font-extrabold text-2xl text-cyan-400 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 cursor-pointer'>
            Mazhar Solkar <span className='text-white'>🚀</span>
          </h1>

          <h1
            className='md:hidden cursor-pointer text-2xl'
            onClick={handleNavbar}>
            <GiHamburgerMenu />
          </h1>
        </div>
        <ul
          className={`overflow-hidden transition-all duration-500 ${
            open ? 'h-auto max-h-screen' : 'h-0 max-h-0'
          } md:h-auto md:max-h-screen mb-2 md:mb-0 md:flex md:relative w-full md:w-auto text-xl md:bg-transparent backdrop-blur-md md:backdrop-blur-none cursor-pointer`}>
          <li className='md:mr-2 p-2 hover:bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:shadow-lg md:hover:shadow-none hover:shadow-cyan-500/50 dark:hover:shadow-lg dark:hover:shadow-cyan-800/80 rounded-3xl'>
            Home
          </li>
          <li className='md:mr-2 p-2 hover:bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:shadow-lg md:hover:shadow-none hover:shadow-cyan-500/50 dark:hover:shadow-lg dark:hover:shadow-cyan-800/80 rounded-3xl'>
            Projects
          </li>
          <li className='md:mr-2 p-2 hover:bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:shadow-lg md:hover:shadow-none hover:shadow-cyan-500/50 dark:hover:shadow-lg dark:hover:shadow-cyan-800/80 rounded-3xl'>
            Skills
          </li>
          <li className='md:mr-2 p-2 hover:bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:shadow-lg md:hover:shadow-none hover:shadow-cyan-500/50 dark:hover:shadow-lg dark:hover:shadow-cyan-800/80 rounded-3xl'>
            Education
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

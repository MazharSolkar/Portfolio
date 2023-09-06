import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiJest, SiGithub } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';

const Skills = () => {
  return (
    <section className='px-2 mb-12'>
      <h1 className='mb-8 font-extrabold text-4xl text-cyan-400 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 cursor-pointer md:animate-pulse '>
        Skills <span className='text-white'>🛠️</span>
      </h1>
      <div className='flex flex-wrap justify-center items-center'>
        <div className='border-2 border-cyan-500 m-4 rounded-full shadow-lg shadow-cyan-500/50 overflow-hidden'>
          <FaReact className='text-6xl md:text-7xl  text-white-500 p-2 bg-cyan-500' />
        </div>

        <div className='border-2 border-purple-500 m-4 rounded-full shadow-lg shadow-purple-500/50 overflow-hidden'>
          <SiRedux className='text-6xl md:text-7xl  text-white-500 p-2 bg-purple-500' />
        </div>
        <div className='border-2 border-red-500 m-4 rounded-full shadow-lg shadow-red-500/50 overflow-hidden'>
          <SiJest className='text-6xl md:text-7xl  text-white-500 p-2 bg-red-500' />
        </div>
        <div className='border-2 border-teal-500 m-4 rounded-full shadow-lg shadow-teal-500/50 overflow-hidden'>
          <SiTailwindcss className='text-6xl md:text-7xl  text-white-500 p-2 bg-teal-500' />
        </div>
        <div className='border-2 border-yellow-500 m-4 rounded-full shadow-lg shadow-yellow-500/50 overflow-hidden'>
          <DiJavascript1 className='text-6xl md:text-7xl  text-white-500 p-2 bg-yellow-500' />
        </div>
        <div className='border-2 border-orange-500 m-4 rounded-full shadow-lg shadow-orange-500/50 overflow-hidden'>
          <FaHtml5 className='text-6xl md:text-7xl  text-white-500 p-2 bg-orange-500' />
        </div>
        <div className='border-2 border-blue-500 m-4 rounded-full shadow-lg shadow-blue-500/50 overflow-hidden'>
          <FaCss3Alt className='text-6xl md:text-7xl  text-white-500 p-2 bg-blue-500' />
        </div>
        <div className='border-2 border-white m-4 rounded-full shadow-lg shadow-white/50 overflow-hidden'>
          <SiGithub className='text-6xl md:text-7xl  text-black p-2 bg-white' />
        </div>
      </div>
    </section>
  );
};

export default Skills;

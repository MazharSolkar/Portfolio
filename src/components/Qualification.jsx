import { FcGraduationCap } from 'react-icons/fc';

const Qualification = () => {
  return (
    <section className='px-2'>
      <div className='flex'>
        <h1 className='mb-8 font-extrabold text-4xl text-cyan-400 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 cursor-pointer md:animate-pulse '>
          Qualification
        </h1>
        <h1 className='px-3 relative'>
          <FcGraduationCap className='text-white text-4xl' />
        </h1>
      </div>
      <div className='w-16 h-16'></div>
    </section>
  );
};

export default Qualification;

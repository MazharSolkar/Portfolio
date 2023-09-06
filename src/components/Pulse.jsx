// import './pulse.css';

const Pulse = () => {
  return (
    <div className='flex justify-center items-center'>
      <div
        className={`bg-transparent p-4 rounded-full h-48 w-48 flex justify-center items-center relative before:absolute before:content-[''] before:w-40 before:h-40 before:border-2 before:border-cyan-700 before:rounded-full before:animate-puslseEffect 
        
        after:absolute after:content-[''] after:w-40 after:h-40 after:border-2 after:border-cyan-700 after:rounded-full after:delay-300 after:animate-puslseEffectDelay
         `}>
        <img
          className='rounded-full w-full h-full'
          src='https://avatars.githubusercontent.com/u/86589812?v=4'
          alt=''
        />
      </div>
    </div>
  );
};

export default Pulse;

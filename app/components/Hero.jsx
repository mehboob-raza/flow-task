import { CiBellOn } from 'react-icons/ci';

const Hero = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row items-center top'>
      <div className='flex flex-col lg:w-1/2 lg:mr-6 '>
        <div className="flex items-center border border-gray-500 bg-transparent rounded-3xl px-6 text-white gap-2 py-2 w-52 mb-6 lg:mb-0 ">
          <CiBellOn />
          <p>Coming Soon</p>
        </div>

        <div className='flex flex-col'>
          <h2 className='lg:text-h2 lg:text-left font-bold text-hColor md:text-center sm:text-center sm:text-h3 xs:text-center xs:text-h4'>
            Your <span className='text-hoverColor'>AI</span> Sidekick is Just Around the Corner!
          </h2>
          <p className='lg:text-p text-pColor lg:text-left md:text-center sm:text-center pt-2 sm:text-p1 xs:text-p2 xs:text-center' >Our AI Agent SaaS platform is on the horizon, ready to transform the way you work and interact. Sign up now to be the first to experience it.</p>
        </div>
      </div>

      <div className='flex justify-center items-center lg:w-1/2 sm:mt-8 xs:mt-10'>
        <img src='/hero.svg' alt='Hero' className='w-full lg:w-1/2' />
      </div>
    </div>
  );
};

export default Hero;

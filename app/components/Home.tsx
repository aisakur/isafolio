import Image from 'next/image';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />

      <main className='container mx-auto flex flex-col items-center justify-center min-h-screen bg-gray-900 px-8 py-12'>
        {/* About Me Section */}
        <div className='flex flex-col md:flex-row items-center justify-between w-full max-w-5xl'>
          {/* Text Content */}
          <div className='text-gray-100 md:w-1/2'>
            <h1 className='text-5xl font-extrabold mb-4'>
              Hi, I’m Aisyah Kurniati
            </h1>
          
            <a
              href='mailto:hil@brown.com'
              className='inline-block px-6 py-3 text-lg font-medium text-gray-900 bg-gray-100 rounded-full transition-all duration-300 hover:bg-gray-300 hover:text-gray-900'>
              kuniatiaisyah303@gmail.com
            </a>
          </div>

          {/* Profile Image */}
          <div className='mt-8 md:mt-0 md:w-1/2 flex justify-center'>
            <Image
              src='/portofolio.jpg'
              alt='Foto isaaa'
              width={400}
              height={400}
              className='rounded-full object-cover shadow-lg transition-all duration-300 hover:scale-105 grayscale hover:grayscale-0'
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

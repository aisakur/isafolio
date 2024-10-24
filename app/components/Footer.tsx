import {
  FaInstagram,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa';

// Define the prop types including both size and className
type IconProps = {
  size?: number;
  className?: string;
};

// Cast the icon component type to allow className and size
const InstagramIcon = (props: IconProps) => <FaInstagram {...props} />;
const GithubIcon = (props: IconProps) => <FaGithub {...props} />;

const Footer = () => {
  return (
    <footer
      id='footer'
      className='relative bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300 overflow-hidden'
    >
      {/* Background Wave Effect */}
      <div className='absolute inset-0 pointer-events-none'>
        <svg
          className='absolute bottom-0 w-full h-64'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fillOpacity='0.2'
            d='M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,170.7C672,181,768,171,864,170.7C960,171,1056,181,1152,176C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
            fill='#ffffff'
          ></path>
        </svg>
      </div>

      <div className='container mx-auto px-6 py-16 flex flex-col items-center'>
        {/* Footer Heading */}
        <h3 className='text-4xl font-bold mb-8 text-center text-gray-100'>
          Stay in Touch
        </h3>

        {/* Contact Details */}
        <div className='space-y-6 text-center'>
          {/* Email */}
          <div className='flex items-center justify-center space-x-4'>
            <FaEnvelope size={24} className='text-gray-400 hover:text-gray-100 transition' />
            <a
              href='mailto:kuniatiaisyah303@gmail.com?subject=Hello!&body=I would like to chat about...'
              className='text-lg text-gray-400 hover:text-gray-100 transition hover:underline'
            >
              kuniatiaisyah303@gmail.com
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className='flex space-x-8 mt-10'>
          <a
            href='https://www.instagram.com/just.aio_/profilecard/?igsh=enhzcWw2a3JmZ3N6'
            target='_blank'
            rel='noopener noreferrer'
            className='group relative'
          >
            <InstagramIcon
              size={40}
              className='text-gray-400 transition-transform duration-300 transform group-hover:scale-125'
            />
            <span className='absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-xs text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition duration-300'>
              Instagram
            </span>
          </a>
          <a
            href='https://github.com/aisakur'
            target='_blank'
            rel='noopener noreferrer'
            className='group relative'
          >
            <GithubIcon
              size={40}
              className='text-gray-400 transition-transform duration-300 transform group-hover:scale-125'
            />
            <span className='absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-xs text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition duration-300'>
              GitHub
            </span>
          </a>
        </div>

        {/* Copyright Section */}
        <div className='mt-12 text-center text-sm text-gray-500'>
          <p>&copy; {new Date().getFullYear()} Aisyah Kurniati. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

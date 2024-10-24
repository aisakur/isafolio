const AboutPage = () => {
  return (
    <section id="about" className='min-h-screen bg-gray-900 text-gray-100'>
      <main className='container mx-auto p-6'>
        {/* About Me Section */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center mt-20'>
          {/* Left Side: About Me Title and Description */}
          <div className='md:w-1/3'>
            <h1 className='text-4xl font-bold mb-4 text-gray-100'>
              About <span className='text-gray-100'>me</span>
            </h1>
            <p className='text-green-400 text-lg leading-relaxed'>
              Saya pelajar SMKN 21 Jakarta, saya masuk jurusan PPLG saya belajar bahasa pemograman seperti HTML, CSS, PHP, Next JS
            </p>
          </div>

          {/* Right Side: Features and Descriptions */}
          <div className='md:w-2/3 mt-10 md:mt-0'>
            <div className='border-t-2 border-green-400 mb-4'></div>
            <p className='text-lg text-gray-400 leading-relaxed mb-6'>
            Things I like
            </p>
            <ul className='space-y-4 text-gray-400'>
              <li>
                <span className='text-green-400'>•</span> Saya menyukai kegiatan yang berhubungan dengan kegiatan fisik seperti Gym dan Basket.
              </li>
              <li>
                <span className='text-green-400'>•</span> Saya juga tertarik dengan bahasa pemograman seperti HTML,CSS,JS,Next JS.
              </li>
              <li>
                <span className='text-green-400'>•</span> Di waktu luang saya akan belajar bermain gitar mengulik.
              </li>
              <li>
                <span className='text-green-400'>•</span> Saya tertarik untuk mempelajari hal baru.
              </li>
            </ul>

            <div>
          <h2 className="text-4xl font-bold text-white text-center mt-10">My Hobbies</h2>
          <div className="flex flex-wrap justify-center gap-10 mt-6">
            <div className="flex flex-col items-center text-center">
              <span role="img" aria-label="basketball" className="text-4xl">🏀</span>
              <p className="text-lg">Playing Basketball</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span role="img" aria-label="travelling" className="text-4xl"> 🎸</span>
              <p className="text-lg">Playing Guitar</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span role="img" aria-label="music" className="text-4xl">🎶</span>
              <p className="text-lg">Listen To Music</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span role="img" aria-label="movies" className="text-4xl">🎬</span>
              <p className="text-lg">Watch Movies</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span role="img" aria-label="reading" className="text-4xl"> 🏋️‍♀️</span>
              <p className="text-lg">Gym</p>
            </div>
          </div>
        </div>


          
            {/* LinkedIn Profile Button */}
            <div className='mt-6'>
              <a
                href='#'
                className='inline-block bg-transparent border border-gray-400 text-gray-400 py-2 px-4 rounded hover:bg-gray-800 transition'>
                LinkedIn profile/&gt;
              </a>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default AboutPage;

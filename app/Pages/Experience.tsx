

const Experience = () => {
  return (
    <main className="container mx-auto flex flex-col items-center justify-center min-h-screen bg-gray-900 px-8 py-12">
    
      {/* Heading */}
      <h1 className="bg-gray-800 text-5xl font-bold text-white mb-12 text-center">
        My Experience and My Job
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300">
          <div className="flex items-center mb-4">
            <span className="text-2xl text-blue-400">🏆</span>
            <h2 className="text-xl font-bold ml-4">Prestasi Akademik</h2>
          </div>
          <p className="text-gray-300">
            Selama masa pendidikan, saya berhasil mencapai prestasi akademik luar biasa. Selalu masuk 10 besar saat SD dan saat SMP saya
            mendapatkan sertifikat siswa terbaik dalam satu kelas.
          </p>
        </div>

        {/* Service 2 - Olshop */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300">
          <div className="flex items-center mb-4">
            <span className="text-2xl text-blue-400">📋</span>
            <h2 className="text-xl font-bold ml-4">Olshop</h2>
          </div>
          <p className="text-gray-300 mb-4">
            Saya mendapatkan tugas membuat olshop seperti berikut
          </p>
          {/* GitHub Link */}
          <div className="flex items-center">
            
            <a 
              href="https://github.com/aisakur/pinjam" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-white transition duration-300">
              Lihat Project di GitHub
            </a>
          </div>
        </div>

        {/* Service 3 */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300">
          <div className="flex items-center mb-4">
            <span className="text-2xl text-blue-400">📋</span>
            <h2 className="text-xl font-bold ml-4">Game idle</h2>
          </div>
          <p className="text-gray-300">
            Saat UTS kemaren saya mendapatkan tugas untuk membuat sebuah game di GDevelop seperti berikut
          </p>
          <a 
              href="https://aisakurniatii.itch.io/knigh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-white transition duration-300">
              Lihat Project di itch.io
            </a>
        </div>
      </div>
    
    </main>
  );
};

export default Experience;

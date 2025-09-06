import ResponsiveArrow from "../components/ArrowIconFunct";

const PPDB = () => {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;

  return (
    <section className='py-16 bg-gray-900 text-white'>
      <div className='max-w-5xl mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-2xl md:text-4xl font-bold leading-snug'>
            Pendaftaran Siswa Baru <br />
            Tahun Ajaran {currentYear}/{nextYear}
          </h1>
          <p className='mt-4 text-gray-300 md:text-lg'>
            Segera daftarkan diri Anda untuk menjadi bagian dari sekolah kami.
          </p>
        </div>

        {/* Isi PPDB */}
        <div className='card flex flex-col md:flex-row md:items-center items-center md:justify-center md:gap-8 justify-center text-center md:text-start md:overflow-x-auto'>
          {/* Jadwal */}
          <div className='mb-8 md:mb-0 md:max-w-md w-full'>
            <h2 className='text-xl font-semibold mb-3'>
              📅 Jadwal Pendaftaran
            </h2>
            <p className='text-gray-300'>
              Mulai: <span className='font-medium'>1 Juni {currentYear}</span> –{" "}
              <br />
              Selesai:{" "}
              <span className='font-medium'>30 Juli {currentYear}</span>
            </p>
          </div>

          <ResponsiveArrow />

          {/* Syarat */}
          <div className='mb-8 md:mb-0 md:max-w-md w-full'>
            <h2 className='text-xl font-semibold mb-3'>
              📑 Syarat Pendaftaran
            </h2>
            <ul className='list-disc list-inside text-gray-300 space-y-1'>
              <li>Fotokopi Akte Kelahiran</li>
              <li>Fotokopi Kartu Keluarga (KK)</li>
              <li>Fotokopi Ijazah TK / SKL</li>
              <li>Pas foto 3x4 (2 lembar)</li>
            </ul>
          </div>

          <ResponsiveArrow />

          {/* Kuota */}
          <div className='mb-8 md:mb-0 md:max-w-md w-full'>
            <h2 className='text-xl font-semibold mb-3'>👨‍👩‍👧 Kuota Penerimaan</h2>
            <p className='text-gray-300'>
              Kuota penerimaan siswa baru adalah{" "}
              <span className='font-medium'>30 siswa per kelas</span>.
            </p>
          </div>

          <ResponsiveArrow />

          {/* Alur */}
          <div className='md:max-w-md w-full'>
            <h2 className='text-xl font-semibold mb-3'>📝 Alur Pendaftaran</h2>
            <ol className='list-decimal list-inside text-gray-300 space-y-1'>
              <li>Mengisi formulir online</li>
              <li>Mengunggah berkas persyaratan</li>
              <li>Menunggu verifikasi panitia</li>
              <li>Melihat pengumuman hasil seleksi</li>
            </ol>
          </div>
        </div>

        <div className='mt-20 text-center'>
          <button className='bg-white px-4 py-2 text-xl text-gray-950 hover:bg-gray-300 max-w-sm w-full rounded-lg'>
            Pendaftaran
          </button>
        </div>
      </div>
    </section>
  );
};

export default PPDB;

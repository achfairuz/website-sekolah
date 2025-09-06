const Footer = () => {
  return (
    <footer className='bg-gray-800 text-gray-200 py-8'>
      <div className='max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-6'>
        {/* Identitas Sekolah */}
        <div className='text-center md:text-left'>
          <h2 className='text-xl font-bold text-white'>SDN 1 Wonorejo</h2>
          <p className='mt-2 text-sm'>
            Jl. Pendidikan No. 123, Wonorejo, Indonesia
          </p>
          <p className='text-sm'>Telp: (021) 123456</p>
          <p className='text-sm'>Email: info@sdn1wonorejo.sch.id</p>
          <p className='text-sm'>Website: www.sdn1wonorejo.sch.id</p>
          <p className='mt-2 italic text-gray-400'>
            "Cerdas, Disiplin, Berprestasi"
          </p>
        </div>

        {/* Tambahan info lain */}
        <div className='text-center md:text-right text-sm text-gray-400'>
          <p>Kepala Sekolah: Bapak Ahmad Suryana, S.Pd</p>
          <p>NPSN: 12345678</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

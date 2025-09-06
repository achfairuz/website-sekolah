import { ArrowRightIcon, ArrowUturnRightIcon } from "@heroicons/react/24/solid";
import Data from "../data/Berita";
import formatDate from "../Helpers/FormatDate";
import limitWords from "../Helpers/TextHelpers";

const Berita = () => {
  const LastBerita = Data[Data.length - 1];
  const limitedData = Data.slice(0, Data.length - 1).slice(0, 3);

  return (
    <section className='py-12 md:py-20'>
      {/* Header */}
      <div className='flex flex-row justify-between md:px-48 px-6 items-center md:mb-8 mb-6'>
        <h1 className='text-xl md:text-2xl font-medium text-start'>
          Kabar dari kami
        </h1>
        <a
          href='#'
          className='text-blue-600 font-normal md:text-base md:block hidden'
        >
          Selengkapnya
        </a>
        <a href='' className='block md:hidden'>
          <ArrowUturnRightIcon className='w-6 h-6 text-blue-400' />
        </a>
      </div>

      {/* Konten utama */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20 lg:px-48'>
        {/* Berita Utama */}
        <div>
          <img
            src={LastBerita.image}
            alt={LastBerita.title}
            className='w-full h-64 md:h-80 lg:max-w-xl object-cover rounded-lg'
          />
          <div className='flex flex-col md:mt-6 mt-4'>
            <h1 className='text-sm md:text-md mb-1 text-gray-500'>
              Kabar Berita | <span>{formatDate(LastBerita.date)}</span>
            </h1>
            <h1 className='text-lg md:text-2xl font-medium text-justify'>
              {LastBerita.title}
            </h1>
          </div>
        </div>

        {/* Berita Lainnya */}
        <div className='flex flex-col gap-4 md:gap-6 overflow-x-auto md:overflow-visible'>
          {limitedData.map((berita) => (
            <div
              key={berita.id}
              className='flex flex-row gap-3 md:gap-4 text-black rounded-lg shadow-md p-3 shrink-0'
            >
              <img
                src={berita.image}
                alt={berita.title}
                className='w-32 h-24 md:w-40 md:h-28 lg:w-48 lg:h-32 object-cover rounded-lg'
              />
              <div className='flex flex-col justify-center'>
                <h1 className='text-xs md:text-sm text-gray-500 mb-1'>
                  Berita | {formatDate(berita.date)}
                </h1>
                <h1 className='text-sm md:text-base font-medium text-justify line-clamp-2'>
                  {limitWords(berita.title, 8)}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Berita;

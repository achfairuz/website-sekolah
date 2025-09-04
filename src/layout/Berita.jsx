import { ArrowRightIcon, ArrowUturnRightIcon } from "@heroicons/react/24/solid";
import Data from "../data/Berita";
import formatDate from "../Helpers/FormatDate";
import limitWords from "../Helpers/TextHelpers";

const Berita = () => {
  const LastBerita = Data[Data.length - 1];
  const limitedData = Data.slice(0, Data.length - 1).slice(0, 3);

  return (
    <section className='py-12 md:py-20'>
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

      <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-16 mx-4'>
        {/* Berita Utama */}
        <div className='max-w-sm md:max-w-xl w-full'>
          <img
            src={LastBerita.image}
            alt={LastBerita.title}
            className='max-w-86 md:max-w-3xl bg-cover rounded-lg'
          />
          <div className='flex flex-col md:mt-6 mt-4'>
            <h1 className='text-sm md:text-md mb-1'>
              Kabar Berita | <span>{formatDate(LastBerita.date)}</span>
            </h1>
            <h1 className='text-xl md:text-2xl font-medium text-justify'>
              {LastBerita.title}
            </h1>
          </div>
        </div>

        {/* Berita Lainnya */}
        <div className='flex gap-6 overflow-x-auto md:flex-col md:gap-8 p-2'>
          {limitedData.map((berita) => (
            <div
              key={berita.id}
              className='flex flex-row gap-3 md:gap-4  text-black  rounded-lg shadow-md p-3 shrink-0 md:shrink'
            >
              <img
                src={berita.image}
                alt={berita.title}
                className='w-40 h-28 md:w-60 md:h-40 object-cover rounded-lg'
              />
              <div className='flex flex-col '>
                <h1 className='text-xs md:text-sm text-gray-500 mb-1'>
                  Berita | {formatDate(berita.date)}
                </h1>
                <h1 className='text-sm md:text-base font-medium max-w-40 text-justify'>
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

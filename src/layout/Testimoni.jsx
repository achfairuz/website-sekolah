import { ArrowUturnRightIcon } from "@heroicons/react/24/solid";
import Data from "../data/Testimoni";
import limitWords from "../Helpers/TextHelpers";

const Testimoni = () => {
  const limitData = Data.slice(3, Data.length);
  return (
    <section className='py-8 px-8 md:py-20'>
      <div>
        <div className='flex flex-row justify-between md:px-48  items-center md:mb-8 mb-6'>
          <h1 className='text-xl md:text-2xl font-medium text-start'>
            Testimoni
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
        <div className='flex flex-col md:flex-row justify-center mx-auto gap-8 md:gap-16'>
          {limitData.map((testi) => (
            <div
              key={testi.id}
              className='flex flex-col justify-between max-w-xl p-6 md:p-12 shadow-lg'
            >
              <p className='text-justify md:text-base text-sm'>
                {limitWords(testi.comment, 25)}
              </p>
              <div className='flex flex-row mt-4 gap-4 items-center'>
                <img
                  src={testi.image}
                  alt={testi.name}
                  className='rounded-full w-14 h-14'
                />
                <div className=''>
                  <h1 className='font-medium'>{testi.name}</h1>
                  <h1 className='text-sm opacity-60'>Alumni {testi.alumni}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimoni;

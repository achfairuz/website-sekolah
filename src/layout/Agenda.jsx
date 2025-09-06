import { MapIcon } from "@heroicons/react/24/solid";
import Data from "../data/Agenda";
import formatDate from "../Helpers/FormatDate";

const AgendaSection = () => {
  const LastAgenda = Data[Data.length - 1];

  return (
    <section className='px-6 md:px-12 lg:px-20 md:py-20 py-16 bg-gray-900 text-white flex justify-center'>
      <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-end md:gap-20 md:px-16 lg:px-20 '>
        {/* Teks */}
        <div className='flex flex-col w-full lg:mb-8 max-w-xl mb-8 md:mb-0'>
          <h1 className='text-4xl font-bold mb-2'>{LastAgenda.title}</h1>
          <p className='text-sm text-gray-300'>{formatDate(LastAgenda.date)}</p>
          <div className='flex flex-row items-center mt-4 gap-2'>
            <MapIcon className='w-6 h-6 text-yellow-400' />
            <span>{LastAgenda.location}</span>
          </div>
        </div>

        {/* Gambar */}
        {/* <div className=' justify-center mx-auto w-full lg:max-w-3xl'> */}
        <img
          src={LastAgenda.image}
          alt={LastAgenda.title}
          className='w-full h-auto rounded-lg shadow-lg object-cover'
        />
      </div>
    </section>
  );
};

export default AgendaSection;

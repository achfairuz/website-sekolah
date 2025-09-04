import { MapIcon } from "@heroicons/react/24/solid";
import Data from "../data/Agenda";
import formatDate from "../Helpers/FormatDate";

const AgendaSection = () => {
  const LastAgenda = Data[Data.length - 1];

  return (
    <section className='px-6 md:px-20 md:py-20 py-16 bg-gray-900 text-white'>
      <div className='flex flex-col lg:flex-row justify-between items-end md:gap-8 md:px-20 '>
        {/* Teks */}
        <div className='flex flex-col w-full mb-8'>
          <h1 className='text-4xl font-bold mb-2'>{LastAgenda.title}</h1>
          <p className='text-sm text-gray-300'>{formatDate(LastAgenda.date)}</p>
          <div className='flex flex-row items-center mt-4 gap-2'>
            <MapIcon className='w-6 h-6 text-yellow-400' />
            <span>{LastAgenda.location}</span>
          </div>
        </div>

        {/* Gambar */}
        <img
          src={LastAgenda.image}
          alt={LastAgenda.title}
          className='max-w-xl w-full rounded-lg shadow-lg'
        />
      </div>
    </section>
  );
};

export default AgendaSection;

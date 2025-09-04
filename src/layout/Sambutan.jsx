import React from "react";
import Data from "../data/Sambutan";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const Sambutan = () => {
  return (
    <section className='dark:bg-white bg-gray-900'>
      <div
        className='flex md:flex-row flex-col justify-center items-center 
                      mx-4 md:mx-auto md:max-w-6xl max-w-xl gap-12 md:py-20 py-12'
      >
        {/* Gambar */}
        <img
          src={Data.image}
          alt='Foto Sambutan'
          className='w-96 h-64 object-cover rounded-lg shadow-md'
        />

        {/* Teks */}
        <div className='flex flex-col text-center md:text-left text-white dark:text-black'>
          <h1 className='text-4xl'>{Data.title}</h1>
          <p className='line-clamp-6 mt-2 text-justify md:text-left  opacity-60'>
            {Data.isi}
          </p>
          <a
            href={`/Sambutan/${Data.id}`}
            className='flex items-center text-md text-white dark:text-gray-900 hover:underline mt-8 border-2 border-gray-600 hover:bg-blue-600 hover:text-white rounded-lg px-4 py-1 w-fit'
          >
            Lihat Selengkapnya
            <ChevronRightIcon className='w-4 h-4 ml-0.5' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sambutan;

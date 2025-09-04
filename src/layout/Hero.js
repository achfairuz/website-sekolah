import React from "react";
import SekolahSD from "../assets/Sekolah-SD.jpg";
import Data from "../data/Berita";
import Sosmed from "../data/Sosmed";
import { BackspaceIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  const lastNews = Data[Data.length - 1];
  const shortTitle = lastNews.title.slice(0, 15) + "...";
  return (
    <section
      className='hero min-h-screen  flex md:flex-row flex-col md:justify-between md:px-32 md:py-12  md:items-end items-center justify-end gap-8 pb-20 md:pb-16'
      style={{
        backgroundImage: `url(${SekolahSD})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className='flex flex-col mx-4 md:mx-0'>
        <h1 className=' font-semibold text-white mb-4 text-5xl md:max-w-3xl '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>

        <div className='flex flex-col md:flex-row gap-4 items-start md:items-center bg-transparent backdrop-blur-lg max-w-full md:max-w-sm py-4 px-2 rounded-lg'>
          <img
            src={lastNews.image}
            alt={lastNews.title}
            className='w-full md:w-48 h-40 md:h-36 object-cover rounded-md'
          />

          <div className='flex flex-col items-start mt-2 md:mt-0'>
            <div className='bg-white px-2 py-1 rounded-lg'>
              <span className='text-blue-600 font-medium text-xl'>
                Kabar Berita
              </span>
            </div>

            <h2 className='text-xl md:text-lg font-semibold text-white mb-2 md:mb-4'>
              {shortTitle}
            </h2>

            <a
              href={`/berita/${lastNews.slug}`}
              className='inline-flex items-center text-xl text-white hover:underline'
            >
              Lihat Detail
              <ChevronRightIcon className='w-4 h-4 ml-0.5' />
            </a>
          </div>
        </div>
      </div>

      <div className='flex md:flex-col justify-center space-x-6 md:space-x-0 md:space-y-4 max-w-sm'>
        {Sosmed.map((item) => (
          <div key={item.id}>
            <a
              href={item.url}
              target='_blank'
              rel='noopener noreferrer'
              className='w-20 h-20 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-white text-white hover:bg-blue-600 transition-colors'
            >
              {item.icon}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;

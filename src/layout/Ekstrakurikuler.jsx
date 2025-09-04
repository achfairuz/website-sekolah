import React from "react";
import Data from "../data/Ekstrakurikuler";
import YouTube from "react-youtube";

const Ekstrakurikuler = () => {
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };
  const _onReady = (event) => {
    event.target.pauseVideo();
  };
  return (
    <section className=''>
      <h1 className='text-center text-4xl font-medium'>Ekstrakurikuler</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-12 max-w-6xl mx-auto'>
        {Data.map((ekstra) => (
          <div
            key={ekstra.id}
            className='flex flex-col bg-white rounded-xl shadow p-4'
          >
            <h1 className='text-xl font-bold mb-2'>{ekstra.name}</h1>
            <p className='text-gray-600 mb-4 text-sm '>{ekstra.describe}</p>
            <YouTube
              videoId={ekstra.id_yt}
              id={ekstra.id}
              className='w-full flex justify-center'
              opts={opts}
              onReady={_onReady}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ekstrakurikuler;

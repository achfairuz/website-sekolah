import React from "react";
import SekolahSD from "../assets/Sekolah-SD.jpg";

const Hero = () => {
  return (
    <section
      className='hero min-h-screen flex justify-center items-center text-center px-6'
      style={{
        backgroundImage: `url(${SekolahSD})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className='text-5xl font-extrabold text-gray-900'>
        Welcome to MyBrand
      </h1>
      <p className='mt-4 text-lg text-gray-700'>Your subtitle here</p>
    </section>
  );
};

export default Hero;

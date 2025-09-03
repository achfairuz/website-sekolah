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
      <div class='flex flex-col'>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      </div>
    </section>
  );
};

export default Hero;

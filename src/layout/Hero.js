import React from "react";

const Hero = () => {
  return (
    <section className='flex flex-col justify-center items-center text-center min-h-screen bg-gray-100 px-6'>
      <h1 className='text-5xl font-extrabold text-gray-900'>
        Welcome to MyBrand
      </h1>
      <p className='mt-4 text-lg text-gray-600 max-w-xl'>
        The best solution for your needs with speed, security, and simplicity.
      </p>
      <button className='mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition'>
        Get Started
      </button>
    </section>
  );
};

export default Hero;

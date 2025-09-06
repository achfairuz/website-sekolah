import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const ResponsiveArrow = () => {
  return (
    <div className='bg-white rounded-lg flex-shrink-0 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 mb-8 md:mb-0'>
      {/* Panah ke bawah untuk mobile (sm) */}
      <ArrowDownIcon className='w-6 h-6 block md:hidden text-gray-900 text-white' />

      {/* Panah ke kanan untuk md ke atas */}
      <ArrowRightIcon className='w-6 h-6 hidden md:block text-gray-900 text-white'  />
    </div>
  );
};

export default ResponsiveArrow;

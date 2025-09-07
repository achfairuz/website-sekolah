import { FunnelIcon } from "@heroicons/react/24/solid";

const Filter = () => {
  return (
    <div className='flex flex-row'>
      <div className='p-2 border  flex justify-center items-center w-12 h-12 rounded-l-md'>
        <FunnelIcon className='w-4 h-4 opacity-60' />
      </div>
      <div className='border-2 border-black/20 px-8 rounded-r-md py-2 flex justify-center items-center cursor-pointer hover:bg-gray-100 transition'>
        <button type='button' className='text-sm md:text-base'>
          Tanggal
        </button>
      </div>
    </div>
  );
};

export default Filter;

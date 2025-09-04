import Data from "../data/Berita";
import formatDate from "../Helpers/FormatDate";
import FormatDate from "../Helpers/FormatDate";
import limitWords from "../Helpers/TextHelpers";

const Berita = () => {
  const LastBerita = Data[Data.length - 1];
  const limitedData = Data.slice(0, Data.length - 1).slice(0, 3);

  return (
    <section className='py-20'>
      <div className='flex flex-row justify-between px-48'>
        <h1 className='mb-8 text-2xl font-medium text-start  '>
          Kabar dari kami
        </h1>
        <a href='#' className='text-blue-600 font-normal text-base'>
          {" "}
          Selengkapnya
        </a>
      </div>

      <div className='flex flex-row justify-center gap-16'>
        <div className='max-w-xl w-full'>
          <img
            src={LastBerita.image}
            alt={LastBerita.title}
            className='max-w-3xl bg-cover rounded-lg'
          />
          <div className='flex flex-col mt-6'>
            <h1>
              Kabar Berita | <span>{FormatDate(LastBerita.date)}</span>
            </h1>
            <h1 className='text-2xl font-medium'>{LastBerita.title}</h1>
          </div>
        </div>

        <div className='flex flex-col gap-8'>
          {limitedData.map((index) => (
            <div className='flex flex-row gap-4'>
              <img
                src={index.image}
                alt={index.title}
                className='w-60 bg-cover rounded-lg'
              />
              <div className='flex flex-col'>
                {" "}
                <h1>Berita | {formatDate(index.date)}</h1>
                <h1 className='w-60 font-medium'>
                  {limitWords(index.title, 5)}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Berita;

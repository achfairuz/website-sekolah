import Data from "../../../data/Berita";
import formatDate from "../../../Helpers/FormatDate";
import limitWords from "../../../Helpers/TextHelpers";
import Date from "../../../components/Date";

const Index = () => {
  if (!Data || Data.length === 0) {
    return (
      <section className="px-6 md:px-20 lg:px-48 py-10 text-center">
        <h1 className="text-xl font-semibold">Kabar Berita</h1>
        <p className="text-gray-500 mt-4">Belum ada berita tersedia.</p>
      </section>
    );
  }

  const LastBerita = Data[Data.length - 1]; // berita terbaru
  const limitedData = Data.slice(-4, -1); // 3 berita sebelum yang terbaru

  return (
    <section className="py-10">
      <div className="px-6 md:px-20 lg:px-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Berita Utama */}
          <div>
            <div className="w-full aspect-video overflow-hidden rounded-lg">
              <img
                src={LastBerita.image}
                alt={LastBerita.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col mt-4 md:mt-6">
              <p className="text-sm md:text-md mb-1 text-gray-500">
                Kabar Berita | <span>{formatDate(LastBerita.date)}</span>
              </p>
              <h2 className="text-lg md:text-2xl font-medium text-justify">
                {LastBerita.title}
              </h2>
            </div>
          </div>

          {/* Berita Lainnya */}
          <div className="grid gap-4 md:gap-6">
            {limitedData.map((berita) => (
              <div
                key={berita.id}
                className="flex flex-row gap-3 md:gap-4 text-black rounded-lg shadow-md p-3"
              >
                {/* Pakai aspect-video biar konsisten */}
                <div className="w-32 md:w-40 lg:w-48 aspect-video overflow-hidden rounded-lg shrink-0">
                  <img
                    src={berita.image}
                    alt={berita.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <Date title="Berita" date={berita.date} />
                  <h3 className="text-sm md:text-base font-medium text-justify line-clamp-2">
                    {limitWords(berita.title, 8)}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;

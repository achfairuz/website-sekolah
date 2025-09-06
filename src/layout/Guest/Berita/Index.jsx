import Data from "../../../data/Berita";
import formatDate from "../../../Helpers/FormatDate";

const Index = () => {
  const LastBerita = Data[Data.length - 1];
  return (
    <section>
      <h1>Kabar Berita</h1>
      <div className="flex flex-row justify-center gap-4">
        {/* Berita Utama */}
        <div className="max-w-6xl">
          <img
            src={LastBerita.image}
            alt={LastBerita.title}
            className="w-full h-48 object-cover mb-4"
          />
          <div>
            <h1>
              Berita | <span>{formatDate(LastBerita.date)}</span>
            </h1>
            <h1>{LastBerita.title}</h1>
          </div>
        </div>
        <div className="max-w-md">
          {Data.slice(0, 3).map((berita) => {
            return (
              <div className="card flex flex-row" key={berita.id}>
                <img
                  src={berita.image}
                  alt={berita.title}
                  className="w-full h-48 object-cover mb-4"
                />
                <div>
                  <h1>
                    Berita | <span>{formatDate(berita.date)}</span>
                  </h1>
                  <h1>{berita.title}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Index;

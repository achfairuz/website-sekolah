const HeroBerita = () => {
  return (
    <section
      className="relative py-24 sm:py-32 md:py-40 px-6 sm:px-10 md:px-20 lg:px-40 flex items-center  text-start"
      style={{
        backgroundImage: `url(https://placehold.co/1200x600)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay biar teks lebih jelas */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Konten */}
      <div className="relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg ">
          Kabar Berita Kami!
        </h1>
      </div>
    </section>
  );
};

export default HeroBerita;

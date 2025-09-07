import React from "react";

const Data = [
  {
    id: 1,
    title:
      "Teknologi AI Terbaru Membantu Petani Tingkatkan Hasil Panen dengan Inovasi Modern untuk Mendukung Produktivitas dan Efisiensi di Sektor Pertanian Masa Kini",
    slug: "teknologi-ai-terbaru-membantu-petani",
    deskripsi:
      "Teknologi kecerdasan buatan mulai diterapkan di sektor pertanian untuk meningkatkan hasil panen dan efisiensi kerja petani.",
    image: "https://placehold.co/600x400?text=Berita+1",
    date: "2025-09-01",
  },
  {
    id: 2,
    title:
      "Pemerintah Umumkan Program Digitalisasi UMKM di Tahun 2025 untuk Mendukung Transformasi Ekonomi Nasional dengan Basis Teknologi Modern dan Berkelanjutan",
    slug: "program-digitalisasi-umkm-2025",
    deskripsi:
      "Program baru dari pemerintah ditujukan untuk membantu UMKM beradaptasi dengan perkembangan teknologi digital.",
    image: "https://placehold.co/600x400?text=Berita+2",
    date: "2025-09-02",
  },
  {
    id: 3,
    title:
      "Startup Lokal Berhasil Raih Pendanaan Rp50 Miliar dari Investor Global untuk Mengembangkan Solusi Inovatif Berbasis Teknologi yang Siap Mendunia Tahun Ini",
    slug: "startup-lokal-raih-pendanaan",
    deskripsi:
      "Sebuah startup teknologi berhasil mengamankan investasi besar untuk mengembangkan produk inovatif mereka.",
    image: "https://placehold.co/600x400?text=Berita+3",
    date: "2025-09-03",
  },

  // Dummy data panjang judul sampai 50
  ...Array.from({ length: 47 }, (_, i) => {
    const id = i + 4;
    return {
      id,
      title: `Judul Berita Dummy ${id} yang sangat panjang dibuat dengan sekitar dua puluh kata agar dapat menguji tampilan teks panjang di komponen card dan tabel secara responsif`,
      slug: `judul-berita-dummy-${id}`,
      deskripsi: `Ini adalah deskripsi singkat untuk berita dummy ke-${id}. Konten ini hanya digunakan sebagai data contoh untuk kebutuhan testing.`,
      image: `https://placehold.co/600x400?text=Berita+${id}`,
      date: `2025-09-${((id % 30) + 1).toString().padStart(2, "0")}`,
    };
  }),
];

export default Data;

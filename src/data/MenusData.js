const menus = [
  {
    key: "profile",
    title: "Profil",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptate, quia aspernatur dolorum sunt quos nulla, vel minima voluptatibus assumenda provident officia inventore possimus, maiores enim nihil excepturi consectetur soluta.",
    children: [
      { key: "profile-sejarah", title: "Sejarah", href: "/profile/index/" },
      { key: "profile-visimisi", title: "Visi & Misi", href: "#visi-misi" },
      {
        key: "profile-struktur",
        title: "Struktur Organisasi",
        href: "#struktur",
      },
    ],
  },
  {
    key: "program",
    title: "Program",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptate, quia aspernatur dolorum sunt quos nulla, vel minima voluptatibus assumenda provident officia inventore possimus, maiores enim nihil excepturi consectetur soluta.",
    children: [
      { key: "program-tataboga", title: "Tata Boga", href: "#tataboga" },
      { key: "program-tahfidz", title: "Tahfidz Quran", href: "#tahfidz" },
      {
        key: "program-ekstrakurikuler",
        title: "Ekstrakurikuler",
        href: "#ekstrakurikuler",
      },
    ],
  },
  {
    key: "fasilitas",
    title: "Fasilitas",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptate, quia aspernatur dolorum sunt quos nulla, vel minima voluptatibus assumenda provident officia inventore possimus, maiores enim nihil excepturi consectetur soluta.",
    children: [
      {
        key: "fasilitas-sarana",
        title: "Sarana & Prasarana",
        href: "#sarana",
      },
      {
        key: "fasilitas-tatib",
        title: "Panduan & Tata Tertib",
        href: "#tatib",
      },
    ],
  },
  {
    key: "berita",
    title: "Berita",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptate, quia aspernatur dolorum sunt quos nulla, vel minima voluptatibus assumenda provident officia inventore possimus, maiores enim nihil excepturi consectetur soluta.",
    children: [
      { key: "kabar-berita", title: "Kabar Berita", href: "/berita/index" },
      {
        key: "berita-karyailmiah",
        title: "Karya Ilmiah",
        href: "#karyailmiah",
      },
      { key: "berita-majalah", title: "Majalah", href: "#majalah" },
    ],
  },
];

export default menus;

import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("profile");

  const menus = [
    {
      key: "profile",
      title: "Profil",
      children: [
        { key: "profile-sejarah", title: "Sejarah", href: "#sejarah" },
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
      children: [
        {
          key: "berita-karyailmiah",
          title: "Karya Ilmiah",
          href: "#karyailmiah",
        },
        { key: "berita-majalah", title: "Majalah", href: "#majalah" },
      ],
    },
  ];

  return (
    <>
      {/* Navbar (fixed & transparan) */}
      <nav className='fixed top-0 left-0 w-full flex justify-between items-center   bg-gray-900/0 backdrop-blur-md text-white z-50'>
        <h1 className='text-2xl font-bold text-black pl-32 pt-4'>
          SDN 1 Wonorejo
        </h1>
        <button
          onClick={() => setOpen(!open)}
          className='flex items-center gap-2 bg-gray-800/80 text-white py-5 px-6 hover:bg-gray-600 '
        >
          <Bars3Icon className='w-5 h-5' />
          {open ? "Tutup" : "Menu"}
        </button>
      </nav>

      {/* Overlay Menu */}
      {open && (
        <div className='fixed inset-0 top-16 bg-white flex z-40'>
          {/* Kiri: menu utama */}
          <div className='w-1/4 bg-gray-900 text-white flex flex-col p-6 space-y-6 pt-32 pl-32'>
            {menus.map((menu) => (
              <button
                key={menu.key}
                onClick={() => setActiveMenu(menu.key)}
                className={`text-2xl  text-left ${
                  activeMenu === menu.key
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {menu.title}
              </button>
            ))}
          </div>

          {/* Kanan: submenu */}
          <div className='flex-1 p-8 overflow-y-auto pt-32 pl-16'>
            <h2 className='text-2xl font-bold mb-4'>
              {menus.find((m) => m.key === activeMenu)?.title}
            </h2>
            <ul className='space-y-3'>
              {menus
                .find((m) => m.key === activeMenu)
                ?.children.map((child) => (
                  <li key={child.key}>
                    <a
                      href={child.href}
                      className='text-gray-700 hover:text-blue-600 font-medium'
                    >
                      {child.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

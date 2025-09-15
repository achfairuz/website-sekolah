import React, { useState, useEffect } from "react";
import {
  ArrowUturnLeftIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import menus from "../data/MenusData";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("profile");

  const activeMenuItem = menus.find((m) => m.key === activeMenu);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <>
      {/* Navbar */}
      <nav className='fixed top-0 left-0 w-full flex justify-between items-center bg-gray-900/0 text-white z-50'>
        <h1 className='text-md lg:text-2xl font-bold text-red-600 pl-4 lg:pl-32'>
          SDN 1 Wonorejo
        </h1>
        <button
          onClick={() => setOpen(!open)}
          className='flex items-center gap-2 bg-gray-800/80 text-white py-2 px-3 md:py-5 md:px-6  hover:bg-gray-600 '
        >
          {open ? (
            <XMarkIcon className='w-8 h-8' />
          ) : (
            <Bars3Icon className='w-8 h-8' />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className='fixed inset-0 bg-white dark:bg-gray-900 z-40 md:hidden'>
          {/* Menu utama */}
          {!detailOpen && (
            <div className='p-6 pt-36 space-y-6 text-center flex flex-col'>
              {menus.map((menu) => (
                <button
                  key={menu.key}
                  onClick={() => {
                    setActiveMenu(menu.key);
                    setDetailOpen(true);
                  }}
                  className={`text-xl font-bold ${
                    activeMenu === menu.key
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-600 dark:text-gray-600"
                  }`}
                >
                  {menu.title}
                </button>
              ))}
            </div>
          )}

          {/* Detail submenu */}
          {detailOpen && (
            <div className='p-6 pt-36 inset-0 fixed bg-white dark:text-gray-900'>
              <button
                onClick={() => setDetailOpen(false)}
                className='mb-6 text-lg font-semibold text-red-600'
              >
                <ArrowUturnLeftIcon className='w-8 h-8' />
              </button>
              <h1 className='text-2xl font-bold mb-2  dark:text-gray-900 text-white'>
                {activeMenuItem?.title}
              </h1>
              <p className='mb-4 opacity-60 dark:text-gray-900/80 text-white/80'>
                {activeMenuItem?.subTitle}
              </p>
              <ul className='space-y-3'>
                {activeMenuItem?.children.map((child) => (
                  <li key={child.key}>
                    <a
                      href={child.href}
                      className='block text-white dark:text-gray-900  font-medium text-xl'
                      onClick={() => {
                        setOpen(false);
                        setDetailOpen(false);
                      }}
                    >
                      {child.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Desktop Menu */}
      {open && (
        <div className='hidden md:flex fixed inset-0 z-40'>
          {/* Sidebar kiri */}
          <div className='w-1/4 bg-gray-900 text-white flex flex-col p-6 space-y-6 pt-32 lg:pl-32'>
            {menus.map((menu) => (
              <button
                key={menu.key}
                onClick={() => setActiveMenu(menu.key)}
                className={`md:text-md lg:text-2xl text-left ${
                  activeMenu === menu.key
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {menu.title}
              </button>
            ))}
          </div>

          {/* Konten submenu kanan */}
          <div className='flex-1 bg-white p-8 overflow-y-auto pt-32 pl-16'>
            <h2 className='text-2xl font-bold mb-2'>{activeMenuItem?.title}</h2>
            <p className='max-w-md mb-4 opacity-60'>
              {activeMenuItem?.subTitle}
            </p>
            <ul className='space-y-3'>
              {activeMenuItem?.children.map((child) => (
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

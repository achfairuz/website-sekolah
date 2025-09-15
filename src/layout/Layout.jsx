// src/layouts/MainLayout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ children, menuItems }) => {
  return (
    <div className='min-h-screen flex flex-row'>
      {/* Navbar */}
      <Sidebar menuItems={menuItems} />

      {/* Konten utama */}
      <main className='flex-1 pt-20 px-4 md:px-12 lg:px-32'>{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;

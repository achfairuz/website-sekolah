import Navbar from "../components/Navbar";
import Hero from "../layout/Hero";
import Sambutan from "../layout/Sambutan";
import Ekstrakurikuler from "../layout/Ekstrakurikuler";
import Agenda from "../layout/Agenda";
import Berita from "../layout/Berita";
import Testimoni from "../layout/Testimoni";
import PPDB from "../layout/PPDB";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <Hero />
      <Sambutan />
      <Ekstrakurikuler />
      <Agenda />
      <Berita />
      <PPDB />
      <Testimoni />
      <Footer />
      <Copyright />
    </div>
  );
}

import Navbar from "../components/Navbar";
import Hero from "../layout/Hero";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <Hero />

      <section id='profile' className='p-10 bg-white'>
        <h2 className='text-2xl font-bold mb-4'>Profile</h2>
        <p>Lorem ipsum dolor sit amet...</p>
      </section>

      <Footer />
    </div>
  );
}

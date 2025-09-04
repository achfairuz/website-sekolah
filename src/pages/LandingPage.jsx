import Navbar from "../components/Navbar";
import Hero from "../layout/Hero";
import Sambutan from "../layout/Sambutan";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <Hero />
      <Sambutan />
      <Footer />
    </div>
  );
}

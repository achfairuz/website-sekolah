import Navbar from "../../../components/Navbar";
import BeritaHero from "../../../layout/Guest/Berita/BeritaHero";
import Index from "../../../layout/Guest/Berita/Index";
import TableBerita from "../../../layout/Guest/Berita/TableBerita";

export default function BeritaIndex() {
  return (
    <div>
      <Navbar />
      <BeritaHero />
      <Index />
      <TableBerita />
    </div>
  );
}

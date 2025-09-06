import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BeritaIndex from "./pages/Guest/Berita/BeritaIndex";

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path="/berita/index" element={<BeritaIndex />}/>
    </Routes>
  );
}

export default App;

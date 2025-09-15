import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BeritaIndex from "./pages/Guest/Berita/Index";
import ProfileIndex from "./pages/Guest/SchoolProfile/Index";

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/berita/index' element={<BeritaIndex />} />
      <Route path='/profile/index/' element={<ProfileIndex />} />
    </Routes>
  );
}

export default App;

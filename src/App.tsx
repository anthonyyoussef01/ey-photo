import { Routes, Route } from 'react-router-dom';
import { Navigation } from "@/components/Navigation";
import { HomePage } from "@/pages/HomePage";
import { AlbumPage } from "@/pages/AlbumPage";
import { ServicesPage } from "@/pages/ServicesPage";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/album/:albumId" element={<AlbumPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </div>
  );
}

export default App;
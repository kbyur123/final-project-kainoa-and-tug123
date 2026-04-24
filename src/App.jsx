import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DonutPage from "./pages/DonutPage";
import Inventory from "./pages/Inventory";
import WaterSavedPage from "./pages/WaterSavedPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* ✅ HOME FIRST */}
      <Route path="/donut" element={<DonutPage />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/water" element={<WaterSavedPage />} />
    </Routes>
  );
}

export default App;
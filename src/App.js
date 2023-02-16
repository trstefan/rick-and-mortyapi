import "./App.css";
import { Characters } from "./Pages/Characters/Characters";
import { Routes, Route } from "react-router-dom";
import { Locations } from "./Pages/Locations/Locations";
import { Episodes } from "./Pages/Episodes/Episodes";
import { Home } from "./Pages/Home/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/episodes" element={<Episodes />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/characters" element={<Characters />} />
    </Routes>
  );
}

export default App;

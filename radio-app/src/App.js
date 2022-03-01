import "./App.css";
import { Routes, Route } from "react-router-dom";
import MusicPlayerPage from "./pages/MusicPlayerPage";

import MusicListPage from "./pages/MusicListPage";
import MainNav from "./components/layout/MainNav";

function App(props) {
  return (
    <div className="App">
      <MainNav />
      <Routes>
        <Route path="/" element={<MusicPlayerPage />} />
        <Route path="/List" element={<MusicListPage />} />
      </Routes>
    </div>
  );
}

export default App;

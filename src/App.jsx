import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./modules/pages/Home.jsx";
import Music from "./modules/pages/Music.jsx";
import Design from "./modules/pages/Design.jsx";
import Dj from "./modules/pages/Dj.jsx";
import Video from "./modules/pages/Video.jsx";
import Photo from "./modules/pages/Photo.jsx";
import Projects from "./modules/pages/Projects.jsx";

function App() {
  window.location.href = "http://romandahm.com";
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/design" element={<Design />} />
          <Route path="/dj" element={<Dj />} />
          <Route path="/video" element={<Video />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

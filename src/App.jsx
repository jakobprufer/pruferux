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
import AboutMe from "./modules/pages/AboutMe.jsx";

function App() {
  // window.location.href =
  //   "https://research.sc/participant/login/dynamic/19A4FC10-A5AF-4D47-9111-35ACE8F8F7DE";
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/design" element={<Design />} />
          <Route path="/dj" element={<Dj />} />
          <Route path="/video" element={<Video />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

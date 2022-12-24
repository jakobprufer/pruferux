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
import Mould1 from "./modules/ux/Mould1";
import Mould2 from "./modules/ux/Mould2";
import Senses1 from "./modules/ux/Senses1";
import Senses2 from "./modules/ux/Senses2";
import UXHome from "./modules/ux/UXHome";
// temp
import NYC from "./modules/pages/NYC";

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
          <Route path="/nyc" element={<NYC />} />
          <Route path="/ux/mould1" element={<Mould1 />} />
          <Route path="/ux/mould2" element={<Mould2 />} />
          <Route path="/ux/senses1" element={<Senses1 />} />
          <Route path="/ux/senses2" element={<Senses2 />} />
          <Route path="/ux/home" element={<UXHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

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
import Mould from "./modules/ux/Mould";
import Senses from "./modules/ux/Senses";
import UXHome from "./modules/ux/UXHome";
import Hair from "./modules/ux/Hair";
import Birdsong from "./modules/ux/Birdsong";
import Disguise from "./modules/ux/Disguise";
// temp
import NYC from "./modules/pages/NYC";

function App() {
  // window.location.href =
  //   "https://research.sc/participant/login/dynamic/19A4FC10-A5AF-4D47-9111-35ACE8F8F7DE";

  // <Route path="/home" element={<Home />} />
  // <Route path="/music" element={<Music />} />
  // <Route path="/design" element={<Design />} />
  // <Route path="/dj" element={<Dj />} />
  // <Route path="/video" element={<Video />} />
  // <Route path="/photo" element={<Photo />} />
  // <Route path="/projects" element={<Projects />} />
  // <Route path="/aboutme" element={<AboutMe />} />
  // <Route path="/nyc" element={<NYC />} />

  // idea to make subdomains work ...
  // if (window.location.hostname === "prufer.co") {
  // } else if (window.location.hostname === "ux.prufer.co") {
  // } else {
  // }
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/ux" element={<UXHome />} />
          <Route path="/ux/mould" element={<Mould />} />
          <Route path="/ux/senses" element={<Senses />} />
          <Route path="/ux/hair" element={<Hair />} />
          <Route path="/ux/birdsong" element={<Birdsong />} />
          <Route path="/ux/disguise" element={<Disguise />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

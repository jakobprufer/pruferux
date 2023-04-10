import React, { Fragment } from "react";
import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
  ScrollRestoration,
} from "react-router-dom";
import Home from "./modules/pages/Home.jsx";
import Music from "./modules/pages/Music.jsx";
import Design from "./modules/pages/Design.jsx";
import Dj from "./modules/pages/Dj.jsx";
import Video from "./modules/pages/Video.jsx";
import Photo from "./modules/pages/Photo.jsx";
import Projects from "./modules/ux/Layouts/Projects";
import AboutMe from "./modules/pages/AboutMe.jsx";
import Mould from "./modules/ux/Pages/Mould";
import Senses from "./modules/ux/Pages/Senses";
import UX from "./modules/ux/UX";
import Hair from "./modules/ux/Pages/Hair";
import Disguise from "./modules/ux/Pages/Disguise";
import ScrollToTop from "./modules/ux/Functional/ScrollToTop";
// temp
import NYC from "./modules/pages/NYC";
import Overview from "./modules/ux/Pages/Overview";
import UXHome from "./modules/ux/Layouts/UXHome";
import Birdsong from "./modules/ux/Pages/Birdsong";
import Outfit from "./modules/ux/Pages/Outfit";
import Psychogeography from "./modules/ux/Pages/Psychogeography";
import Macro from "./modules/ux/Pages/Macro";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/ux" element={<UX />}>
//       <Route index element={<UXHome />} />
//       <Route path="projects" element={<Projects />}>
//         <Route path="senses" element={<Senses />} />
//         <Route path="mould" element={<Mould />} />
//         <Route path="hair" element={<Hair />} />
//         <Route path="birdsong" element={<Birdsong />} />
//         <Route path="disguise" element={<Disguise />} />
//       </Route>
//     </Route>
//   )
// );

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
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route path="/ux" element={<UX />}>
          <Route index element={<UXHome />} />
          <Route path="projects" element={<Projects />}>
            <Route path="senses" element={<Senses />} />
            <Route path="mould" element={<Mould />} />
            <Route path="hair" element={<Hair />} />
            <Route path="birdsong" element={<Birdsong />} />
            <Route path="disguise" element={<Disguise />} />
            <Route path="outfit" element={<Outfit />} />
            <Route path="psychogeography" element={<Psychogeography />} />
            <Route path="macro" element={<Macro />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import {
  Route,
  Routes,
} from "react-router-dom";
import Projects from "./modules/ux/Layouts/Projects";
import Mould from "./modules/ux/Pages/Mould";
import Senses from "./modules/ux/Pages/Senses";
import UX from "./modules/ux/UX";
import Hair from "./modules/ux/Pages/Hair";
import Disguise from "./modules/ux/Pages/Disguise";
import UXHome from "./modules/ux/Layouts/UXHome";
import Birdsong from "./modules/ux/Pages/Birdsong";
import Outfit from "./modules/ux/Pages/Outfit";
import Psychogeography from "./modules/ux/Pages/Psychogeography";
import Macro from "./modules/ux/Pages/Macro";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UX />}>
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

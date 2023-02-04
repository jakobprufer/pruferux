import React, { Fragment, useState } from "react";
import About from "../Components/About";
import Overview from "../Pages/Overview";

export default function UXHome() {
  const [defOpen, setDefOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const toggleDef = () => {
    setDefOpen(!defOpen);
    setCourseOpen(false);
    setAboutOpen(false);
  };

  const toggleCourse = () => {
    setCourseOpen(!courseOpen);
    setDefOpen(false);
    setAboutOpen(false);
  };

  const toggleAbout = () => {
    setAboutOpen(!aboutOpen);
    setCourseOpen(false);
    setDefOpen(false);
  };

  return (
    <Fragment>
      <About
        toggleDef={toggleDef}
        toggleAbout={toggleAbout}
        toggleCourse={toggleCourse}
        defOpen={defOpen}
        courseOpen={courseOpen}
        aboutOpen={aboutOpen}
      />
      <Overview />
    </Fragment>
  );
}

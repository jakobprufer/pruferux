import React from "react";
import "./Pages.css";
import aboutme1 from "./samplefiles/aboutme1.JPEG";
import aboutme2 from "./samplefiles/aboutme2.jpg";
import aboutme3 from "./samplefiles/aboutme3.jpg";
// import process for images needs to be optimised

function Photo() {
  return (
    <div className="page">
      <div className="header">
        <div className="headerMainline">
          <div className="logo">&uarr; back to projects</div>
        </div>
      </div>
      <div className="aboutCluster">
        <img src={aboutme3} alt="" className="aboutImg1" />
        <img src={aboutme2} alt="" className="aboutImg2" />
        <img src={aboutme1} alt="" className="aboutImg3" />
      </div>
      <body className="displayText aboutMeText">
        Hi, I'm Jakob. <br /> I’m a musician, creative and student. <br /> I’m
        23 years old, grew up in Berlin and am currently based in London.
        <br />
        <br />
        <div className="links">
          <a href="...">&darr; My CV</a> <br />
          <a href="...">Instagram</a> <br />
          <a href="...">Spotify</a> <br />
        </div>
      </body>
      <footer className="footer">
        <form action="" className="activateMisc">
          <input
            className="checkbox"
            type="checkbox"
            name="activateMisc"
            id="activateMisc"
          />
          <label className="checkboxLabel" htmlFor="activateMisc">
            Unlock Misc section in projects
          </label>
        </form>
      </footer>
    </div>
  );
}

export default Photo;

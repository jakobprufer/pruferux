import React from "react";
import "./Pages.css";

function Video() {
  return (
    <div className="page">
      <div className="header">
        <div className="headerMainline">
          <div className="logo">Prufer</div>
          <div className="sortby">Sort by &darr;</div>
        </div>
        {/* <div className="sortExpansion">
          <a href="..." className="sortItem on">
            Relevance
          </a>
          <a href="..." className="sortItem off">
            New to Old
          </a>
          <a href="..." className="sortItem off">
            Old to New
          </a>
          <a href="..." className="sortItem off">
            Estimated Reach
          </a>
        </div> */}
      </div>
      <nav className="filter">
        <a href="/music" className="navItem off">
          Music
        </a>
        <a href="/design" className="navItem off">
          Design
        </a>
        <a href="/dj" className="navItem off">
          DJ
        </a>
        <a href="/video" className="navItem on">
          Video
        </a>
        <a href="/photo" className="navItem off">
          Photo
        </a>
        <a href="/thoughts" className="navItem off">
          Thoughts
        </a>
      </nav>
    </div>
  );
}

export default Video;

import React, { useState } from "react";
import off1 from "./samplefiles/off1.jpg";

function Dj() {
  const [showSort, setShowSort] = useState(false);

  const toggleSort = () => {
    setShowSort(!showSort);
  };

  return (
    <div className="page">
      <div className="header firstLine">
        <div className="headerMainline">
          <div className="logo on">Prufer</div>
          <button className="sortBy" onClick={toggleSort}>
            <span> Sort by&nbsp;</span>
            <span className={showSort ? "turned" : "notTurned"}>&darr;</span>
          </button>
        </div>
      </div>
      <div className={showSort ? "sortOpen" : "sortClosed"}>
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
      </div>
      <nav
        className={showSort ? "filter secondLineDown" : "filter secondLineUp"}
      >
        <a href="/music" className="navItem off">
          Music
        </a>
        <a href="/design" className="navItem off">
          Design
        </a>
        <a href="/dj" className="navItem on">
          DJ
        </a>
        <a href="/video" className="navItem off">
          Video
        </a>
        <a href="/photo" className="navItem off">
          Photo
        </a>
        <a href="/thoughts" className="navItem off">
          Thoughts
        </a>
      </nav>
      <main className={showSort ? "contentDown" : "contentUp"}>
        <div className="post">
          <div className="specialHeader">
            <div className="specialDateContainer">
              <div className="specialDate">2018-2021</div>
            </div>
            <div>
              <span className="offLogo1">off</span>
              <span className="offLogo2">off</span>
            </div>
          </div>
          <img src={off1} alt="" className="off1" />
        </div>
      </main>
    </div>
  );
}

export default Dj;

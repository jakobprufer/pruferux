import React, { useState } from "react";
import "./Pages.css";
import download from "./samplefiles/download.png";
import ny1 from "./samplefiles/ny1.JPG";
import ny2 from "./samplefiles/ny2.JPG";
import ny3 from "./samplefiles/ny3.JPG";
import ny4 from "./samplefiles/ny4.JPG";
// import process for images needs to be optimised

function Photo() {
  const [showSort, setShowSort] = useState(false);

  const toggleSort = () => {
    setShowSort(!showSort);
  };

  return (
    <div className="page">
      <div className="header">
        <div className="headerMainline">
          <div className="logo on">Prufer</div>
          <button className="sortBy" onClick={toggleSort}>
            <span> Sort by&nbsp;</span>
            <span className={showSort ? "turned" : "notTurned"}>&darr;</span>
          </button>
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
        <a href="/video" className="navItem off">
          Video
        </a>
        <a href="/photo" className="navItem on">
          Photo
        </a>
        <a href="/thoughts" className="navItem off">
          Thoughts
        </a>
      </nav>
      <a href="/nyc" className="post">
        <div className="postHeader">
          <div className="postTitle">New York City, 2015</div>
          {/* year needs to be data */}
          <div className="postReach">(estimated reach: 20 people)</div>
        </div>
        <div className="postCluster">
          <img src={ny1} alt="" className="img22" />
          <img src={ny2} alt="" className="img22" />
          <img src={ny3} alt="" className="img22" />
          <img src={ny4} alt="" className="img22" />
        </div>
      </a>
      <a className="post">
        <div className="postHeader">
          <div className="postTitle">New York City, 2015</div>
          {/* year needs to be data */}
          <div className="postReach">(estimated reach: 20 people)</div>
        </div>
        <div className="postCluster">
          <img src={ny1} alt="" className="img22" />
          <img src={ny2} alt="" className="img22" />
          <img src={ny3} alt="" className="img22" />
          <img src={ny4} alt="" className="img22" />
        </div>
      </a>
      <a className="post">
        <div className="postHeader">
          <div className="postTitle">New York City, 2015</div>
          {/* year needs to be data */}
          <div className="postReach">(estimated reach: 20 people)</div>
        </div>
        <div className="postCluster">
          <img src={ny1} alt="" className="img22" />
          <img src={ny2} alt="" className="img22" />
          <img src={ny3} alt="" className="img22" />
          <img src={ny4} alt="" className="img22" />
        </div>
      </a>
      <footer className="footer">
        <div className="aboutMe">&darr; About Me</div>
      </footer>
    </div>
  );
}

export default Photo;

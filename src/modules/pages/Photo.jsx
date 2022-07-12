import React from "react";
import "./Pages.css";
import download from "./samplefiles/download.png";
import ny1 from "./samplefiles/ny1.JPG";
import ny2 from "./samplefiles/ny2.JPG";
import ny3 from "./samplefiles/ny3.JPG";
import ny4 from "./samplefiles/ny4.JPG";
// import process for images needs to be optimised

function Photo() {
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
      <div className="post">
        <div className="postHeader">
          <div className="postTitle">New York City, 2015</div>
          {/* year needs to be data */}
          <div className="postReach">(estimated reach: 20 people)</div>
        </div>
        <div className="postCluster">
          <img src={ny1} alt="" className="postImg" />
          <img src={ny2} alt="" className="postImg" />
          <img src={ny3} alt="" className="postImg" />
          <img src={ny4} alt="" className="postImg" />
        </div>
      </div>
      <div className="post">
        <div className="postHeader">
          <div className="postTitle">New York City, 2015</div>
          {/* year needs to be data */}
          <div className="postReach">(estimated reach: 20 people)</div>
        </div>
        <div className="postCluster">
          <img src={ny1} alt="" className="postImg" />
          <img src={ny2} alt="" className="postImg" />
          <img src={ny3} alt="" className="postImg" />
          <img src={ny4} alt="" className="postImg" />
        </div>
      </div>
      <div className="post">
        <div className="postHeader">
          <div className="postTitle">New York City, 2015</div>
          {/* year needs to be data */}
          <div className="postReach">(estimated reach: 20 people)</div>
        </div>
        <div className="postCluster">
          <img src={ny1} alt="" className="postImg" />
          <img src={ny2} alt="" className="postImg" />
          <img src={ny3} alt="" className="postImg" />
          <img src={ny4} alt="" className="postImg" />
        </div>
      </div>
      <footer className="footer">
        <div className="aboutMe">&darr; About Me</div>
      </footer>
    </div>
  );
}

export default Photo;

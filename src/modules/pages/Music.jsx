import React, { useState } from "react";
import tate from "./samplefiles/JAKOB-1.jpg";
import jp from "./samplefiles/21e.JPEG";

function Music() {
  const [showSort, setShowSort] = useState(false);

  const toggleSort = () => {
    setShowSort(!showSort);
  };

  return (
    <div className="page">
      <div className="stickSection">
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
          <a href="/music" className="navItem on">
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
          <a href="/photo" className="navItem off">
            Photo
          </a>
          <a href="/thoughts" className="navItem off">
            Thoughts
          </a>
        </nav>
      </div>
      <main className={showSort ? "contentDown" : "contentUp"}>
        <div className="post">
          <div className="postHeader">
            <div className="postTitle">Tate Onda (British hip hop project)</div>
            <div className="postReach">(estimated reach: 20 people)</div>
          </div>
          <div className="postCluster">
            <img src={tate} alt="" className="img1" />
          </div>
        </div>
        <div className="post">
          <div className="postHeader">
            <div className="postTitle">
              Jakob Prufer (German hip hop project)
            </div>
            <div className="postReach">(estimated reach: 20 people)</div>
          </div>
          <div className="postCluster">
            <img src={jp} alt="" className="img1" />
          </div>
        </div>
        <div className="post">
          <div className="postHeader">
            <div className="postTitle">
              Jakob Prufer (German hip hop project)
            </div>
            <div className="postReach">(estimated reach: 20 people)</div>
          </div>
          <div className="postCluster">
            <img src={jp} alt="" className="img1" />
          </div>
        </div>
        <div className="post">
          <div className="postHeader">
            <div className="postTitle">
              Jakob Prufer (German hip hop project)
            </div>
            <div className="postReach">(estimated reach: 20 people)</div>
          </div>
          <div className="postCluster">
            <img src={jp} alt="" className="img1" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Music;

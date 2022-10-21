import React from "react";
import download from "./samplefiles/download.png";
import ny1 from "./samplefiles/ny1.JPG";
import ny2 from "./samplefiles/ny2.JPG";
import ny3 from "./samplefiles/ny3.JPG";
import ny4 from "./samplefiles/ny4.JPG";
// import process for images needs to be optimised

function NYC() {
  return (
    <div className="page">
      <div className="projectHeader firstLine">
        <div className="headerMainline">
          <a href="/home" className="logo off">
            Prufer
          </a>
          <div className="arrow">&nbsp;&nbsp;&rarr;&nbsp;&nbsp;</div>
          <a href="/photo" className="subPage on">
            Photo
          </a>
        </div>
      </div>
      <div className="projectTitle secondLineUp">
        <div className="postTitle">New York City</div>
        <div className="year">2015</div>
      </div>
      <div className="projectPage">
        <article>
          During the summer of 2015, i spent 6 weeks visiting my uncle in
          Manhattan. Days and evenings I was wondering around the city on my
          own, taking pictures as I went - but mostly trying to hide my chunky
          DSLR camera to seem more local. I'd say this holiday was
          transformative for me, I returned more mature and independent, having
          left my "home bubble" for the first time.
        </article>
        <img src={ny1} alt="" className="img1" />
        <img src={ny2} alt="" className="img1" />
        <img src={ny3} alt="" className="img1" />
        <img src={ny4} alt="" className="img1" />
      </div>
    </div>
  );
}

export default NYC;

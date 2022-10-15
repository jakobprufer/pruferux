import React, { Fragment, useEffect, useRef, useState } from "react";
import "./Page.css";
import MenuBar from "../MenuBar.jsx";
import ny4 from "./samplefiles/ny4.JPG";
import prufer from "./samplefiles/pruferlogo.png";
import tate from "./samplefiles/JAKOB-1.jpg";
import jp from "./samplefiles/21e.JPEG";

function Design() {
  // header sticky trick & prufer logo scroll & attach header
  const [isSticky, setSticky] = useState(false);
  const [pruferHeight, setPruferHeight] = useState({
    height: 100,
    top: 0,
    // transform: "rotate3d(0, 1, 0, " + 0 + "deg)",
    opacity: 100 + "%",
  });
  const [attach, setAttach] = useState(false);

  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
    let scrollTop = window.scrollY,
      minHeight = 50,
      distance = scrollTop + 60,
      // degree = scrollTop,
      logoOpacity = 200 - scrollTop,
      logoHeight = Math.max(minHeight, 100 - scrollTop / 8);
    setPruferHeight({
      height: logoHeight,
      top: distance,
      // transform: "rotate3d(0, 1, 0, " + Math.min(270, degree) + "deg)",
      opacity: logoOpacity + "%",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll();
      attachHeader();
    });

    return () => {
      window.removeEventListener("scroll", () => {
        handleScroll();
        attachHeader();
      });
    };
  }, []);

  // toggle menu - is in the Menu page component atm
  const [showSort, setShowSort] = useState(false);

  const toggleSort = () => {
    setShowSort(!showSort);
  };

  const attachHeader = () => {
    if (window.scrollY >= 440) {
      setAttach(true);
    } else {
      setAttach(false);
    }
    console.log(isSticky);
  };

  return (
    <Fragment>
      <div className={attach ? "headerBarAttached" : "headerBar"}>
        <div className="logoBar">
          <div className="logoContainer">
            <div className="logo">
              <div className={attach ? "preLogoInnerOut" : "preLogoInnerIn"}>
                Jakob&nbsp;
              </div>
              <div className="logoInner">Prufer</div>
            </div>
            <div
              className={attach ? "sortButtonIn" : "sortButtonOut"}
              onClick={toggleSort}
            >
              <div className="sortButtonInner">
                <span> Sort by&nbsp;</span>
                <span className={showSort ? "turned" : "notTurned"}>
                  &darr;
                </span>
              </div>
            </div>
          </div>
          <div className={attach ? "logoBorderIn" : "logoBorderOut"}></div>
        </div>
        <div className={showSort ? "sortMenuDown" : "sortMenuUp"}>
          <div className="sortItem">Estimated Reach</div>
          <div className="sortItem">Old to new</div>
          <div className="sortItem">New to old</div>
          <div className="sortItem">Relevance</div>
        </div>
      </div>
      <div className="slideContainer">
        <img src={ny4} alt="" className="slide" />
        <img src={prufer} alt="" className="slideLogo" style={pruferHeight} />
      </div>
      <div className={`stickyWrapper${isSticky ? " sticky" : ""}`} ref={ref}>
        <MenuBar />
      </div>
      <main className="page">
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
    </Fragment>
  );
}

export default Design;

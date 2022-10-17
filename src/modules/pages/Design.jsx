import React, { Fragment, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import createScrollSnap from "scroll-snap";
import "./Page.css";
import MenuBar from "../MenuBar.jsx";
import ny4 from "./samplefiles/ny4.JPG";
import prufer from "./samplefiles/pruferlogo.png";
import tate from "./samplefiles/JAKOB-1.jpg";
import jp from "./samplefiles/21e.JPEG";

function Design() {
  // header sticky trick & prufer logo scroll & attach header

  // const [isSticky, setSticky] = useState(false);
  const [slideLogoStyle, setSlideLogoStyle] = useState({
    height: 100,
    top: 0,
    transform: "rotate3d(0, 1, 0, " + 0 + "deg)",
    // opacity: 100 + "%",
  });
  const [slideStyle, setSlideStyle] = useState({
    // opacity: 100 + "%",
  });
  const [attach, setAttach] = useState(false);

  // const ref = useRef(null);
  const handleScroll = () => {
    // if (ref.current) {
    //   setSticky(ref.current.getBoundingClientRect().top <= 0);
    // }
    let scrollTop = window.scrollY,
      minHeight = 50,
      distance = scrollTop,
      degree = scrollTop,
      // slideOpacity = 460 - scrollTop,
      // logoOpacity = 200 - scrollTop,
      logoHeight = Math.max(minHeight, 100 - scrollTop / 8);
    setSlideLogoStyle({
      height: logoHeight,
      top: distance,
      transform: "rotate3d(0, 1, 0, " + Math.min(270, degree) + "deg)",
      // opacity: logoOpacity + "%",
    });
    setSlideStyle({
      // opacity: slideOpacity + "%",
    });
  };

  const ref = useRef(0);

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
      setShowSort(false);
    }
  };

  // const scrollSnap = () => {
  //   createScrollSnap(
  //     ref.current,
  //     {
  //       snapDestinationY: "90%",
  //     },
  //     () => console.log("snapped")
  //   );
  // };

  // useEffect(() => {
  //   scrollSnap();
  // });

  // const myRef = useRef(null);

  // useEffect(() => {
  //   if (window.scrollY > 200 && window.scrollY < 700) {
  //     executeScroll();
  //   }
  // });

  // const executeScroll = () => myRef.current.scrollIntoView();
  // run this function from an event handler or an effect to execute scroll

  return (
    <div>
      <div className="snapContainer" ref={ref}>
        <div className={attach ? "headerBarAttached" : "headerBar"}>
          <div className="logoBar">
            <div className="logoContainer">
              <div className="logo">
                <div className={attach ? "preLogoInnerOut" : "preLogoInnerIn"}>
                  Jakob&nbsp;
                </div>
                <div className="logoInner on">Prufer</div>
                <div
                  className={attach ? "postLogoInnerOut" : "postLogoInnerIn"}
                >
                  &nbsp;- things I've made
                </div>
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
          <img
            src={ny4}
            alt=""
            className={attach ? "slideOff" : "slide"}
            style={slideStyle}
          />
          <img
            src={prufer}
            alt=""
            className="slideLogo"
            style={slideLogoStyle}
          />
        </div>
        {/* <section ref={myRef}></section> */}
        {/* <div className="snapGuide"></div> */}
        <div
          className={classNames(
            "stickyWrapper",
            { sticky: attach && !showSort },
            { stickyDown: attach && showSort }
          )}
        >
          <MenuBar />
        </div>
        <main className="page">
          <div className="post">
            <div className="postHeader">
              <div className="postTitle">
                Tate Onda (British hip hop project)
              </div>
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
        <footer className="footer">
          <div className="aboutMe">&darr; About Me</div>
        </footer>
      </div>
    </div>
  );
}

export default Design;

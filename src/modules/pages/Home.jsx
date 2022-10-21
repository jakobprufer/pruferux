import React, { Fragment, useEffect, useRef, useState } from "react";
import classNames from "classnames";

// components
import Filter from "../Filter.jsx";
import HomeSlide from "../HomeSlide.jsx";
import Header from "../Header";

// sample files
import tate from "./samplefiles/JAKOB-1.jpg";
import jp from "./samplefiles/21e.JPEG";

function Home() {
  // attach header
  const [attach, setAttach] = useState(false);
  // const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  // const handleScroll = () => {
  //   if (ref.current) {
  //     setSticky(ref.current.getBoundingClientRect().top <= 0);
  //   }
  // };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      attachHeader();
    });
    return () => {
      window.removeEventListener("scroll", () => {
        attachHeader();
      });
    };
  }, []);
  const attachHeader = () => {
    if (ref.current.getBoundingClientRect().top <= 63) {
      setAttach(true);
    } else {
      setAttach(false);
      setShowSort(false);
    }
  };

  // toggle sortMenu
  const [showSort, setShowSort] = useState(false);

  const toggleSort = () => {
    setShowSort(!showSort);
  };

  return (
    <div>
      <Header attach={attach} showSort={showSort} toggleSort={toggleSort} />
      <HomeSlide />
      <div
        className={classNames(
          "stickyWrapper",
          { sticky: attach && !showSort },
          { stickyDown: attach && showSort }
        )}
        ref={ref}
      >
        <Filter />
      </div>
      <main className="content">
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
      <footer className="footer">
        <div className="aboutMe">&darr; About Me</div>
      </footer>
    </div>
  );
}

export default Home;

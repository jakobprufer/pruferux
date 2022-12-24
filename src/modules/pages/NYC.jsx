import React, { Fragment, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

// data
import { Projects } from "../../data.js";

// components
import Filter from "../Filter.jsx";
import HomeSlide from "../HomeSlide.jsx";
import Header from "../Header";

function NYC() {
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
    if (ref.current.getBoundingClientRect().top <= 55) {
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

  // select current project
  const current = Projects.find((item) => item.alias === "nyc");

  return (
    <div>
      <Header attach showSort={false} toggleSort={toggleSort} />
      <div
        className={classNames(
          "stickyWrapper",
          { sticky: !showSort },
          { stickyDown: showSort }
        )}
        ref={ref}
      ></div>
      <main className="project">
        <div className="projectTitle">
          <div className="postTitle">{current.title}</div>
          <div className="year">{current.yFinished}</div>
        </div>
        <div className="projectPage">
          <article>{current.description1}</article>
          {current.images.map((image, index) => (
            <div className="imgGridProject">
              <img src={image} alt="" key={index} />
            </div>
          ))}
        </div>
      </main>
      <footer className="footer">
        <div className="aboutMe">&darr; About Me</div>
      </footer>
    </div>
  );
}

export default NYC;

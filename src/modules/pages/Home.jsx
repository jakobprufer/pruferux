import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

// data
import { Projects } from "../../data.js";

// components
import Filter from "../Filter.jsx";
import HomeSlide from "../HomeSlide.jsx";
import Header from "../Header";

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
        <div className="posts">
          {Projects.map((project, index) => (
            <NavLink to={"/" + project.alias} className="post" key={index}>
              <div className="postHeader">
                <div className="postTitle">{project.title}</div>
                <div className="postReach">{project.reach}</div>
              </div>
              <div className={project.previewCluster}>
                {project.previewImages.map((image, index) => (
                  <img src={image} alt="" key={index} />
                ))}
              </div>
            </NavLink>
          ))}
        </div>
      </main>
      <footer className="footer">
        <div className="aboutMe">&darr; About Me</div>
      </footer>
    </div>
  );
}

export default Home;

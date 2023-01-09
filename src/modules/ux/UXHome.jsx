import React, { Fragment, useEffect, useRef, useState } from "react";
import "./UX.sass";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import HoverVideoPlayer from "react-hover-video-player";

function UXHome() {
  const [defOpen, setDefOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const toggleDef = () => {
    setDefOpen(!defOpen);
    setCourseOpen(false);
    setAboutOpen(false);
  };

  const toggleCourse = () => {
    setCourseOpen(!courseOpen);
    setDefOpen(false);
    setAboutOpen(false);
  };

  const toggleAbout = () => {
    setAboutOpen(!aboutOpen);
    setCourseOpen(false);
    setDefOpen(false);
  };

  const mouldPost = useRef();
  const disguisePost = useRef();
  const disguisePost1 = useRef();
  const birdsongPost = useRef();
  const birdsongPost1 = useRef();
  const sensesPost = useRef();
  const hairPost = useRef();

  return (
    <div>
      <div className="uxSolid"></div>
      <div className="uxBody">
        <div className="uxSidebar">
          <a href="/ux/home">
            <div className="uxStickyTitleFirst" id="uxlogoTitle">
              <h1 className="uxLogo">
                <b>MA:UX</b>&nbsp;
              </h1>
              <h1 className="uxName">Jakob Prüfer</h1>
            </div>
          </a>
          <div className="uxSidebarText">
            <p>
              This blog documents the process of my design work within the
              postgraduate{" "}
              <span className="uxHighlight">User Experience Design</span> course
              at the London College of Communication,{" "}
              <span className="uxHighlight">University of the Arts London</span>
            </p>
            <p>
              <div className="uxButton" onClick={toggleDef}>
                <svg
                  className={classNames(
                    "uxArrow",
                    { turned90: defOpen },
                    { notTurned90: !defOpen }
                  )}
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  enableBackground="new 0 0 500 500"
                  version="1.1"
                  viewBox="0 0 500 500"
                  xmlSpace="preserve"
                >
                  <path d="M288.5 248.28c-57.54-53.77-107.68-100.63-158.36-148 19.61-19.53 34.64-34.5 47.13-46.93L368.35 244.4c-61.39 61.29-127.11 126.91-193.6 193.3-9.13-9.54-23.93-25.02-41.03-42.89 48.43-45.85 98.34-93.1 154.78-146.53z"></path>
                </svg>{" "}
                What is UX design?
              </div>
              <div className={defOpen ? "uxIntroIn" : "uxIntroOut"}>
                User experience design is the process of defining the experience
                a user would go through when interacting with a digital product
                or website. Design decisions in UX design are often driven by
                research, data analysis, and test results rather than aesthetic
                preferences and opinions. Unlike user interface design, which
                focuses solely on the design of a computer interface, UX design
                encompasses all aspects of a user's perceived experience with a
                product or website, such as its usability, usefulness,
                desirability, brand perception, and overall performance.{" "}
                <a
                  href="https://en.wikipedia.org/wiki/User_experience_design"
                  target="_blank"
                >
                  Wikipedia
                </a>
              </div>
            </p>
            <p>
              <div className="uxButton" onClick={toggleCourse}>
                <svg
                  className={classNames(
                    "uxArrow",
                    { turned90: courseOpen },
                    { notTurned90: !courseOpen }
                  )}
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  enableBackground="new 0 0 500 500"
                  version="1.1"
                  viewBox="0 0 500 500"
                  xmlSpace="preserve"
                >
                  <path d="M288.5 248.28c-57.54-53.77-107.68-100.63-158.36-148 19.61-19.53 34.64-34.5 47.13-46.93L368.35 244.4c-61.39 61.29-127.11 126.91-193.6 193.3-9.13-9.54-23.93-25.02-41.03-42.89 48.43-45.85 98.34-93.1 154.78-146.53z"></path>
                </svg>{" "}
                What sets this course apart?
              </div>
              <div className={courseOpen ? "uxIntroIn" : "uxIntroOut"}>
                This course lifts the traditional understanding of UX design
                from its digital confinement and places just as much emphasis on
                real-world, embodied experiences. Beyond software and technical
                skills, we are trained to generate ideas in novel, unusual
                contexts; to efficiently organise in quickly changing teams with
                students from diverse subject backgrounds; to implement
                innovative ways of user research other than the traditional
                interview and focus group.{" "}
                <a
                  href="https://www.arts.ac.uk/subjects/animation-interactive-film-and-sound/postgraduate/ma-user-experience-design-lcc"
                  target="_blank"
                >
                  Course Website
                </a>
              </div>
            </p>
            <p>
              <div className="uxButton" onClick={toggleAbout}>
                <svg
                  className={classNames(
                    "uxArrow",
                    { turned90: aboutOpen },
                    { notTurned90: !aboutOpen }
                  )}
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  enableBackground="new 0 0 500 500"
                  version="1.1"
                  viewBox="0 0 500 500"
                  xmlSpace="preserve"
                >
                  <path d="M288.5 248.28c-57.54-53.77-107.68-100.63-158.36-148 19.61-19.53 34.64-34.5 47.13-46.93L368.35 244.4c-61.39 61.29-127.11 126.91-193.6 193.3-9.13-9.54-23.93-25.02-41.03-42.89 48.43-45.85 98.34-93.1 154.78-146.53z"></path>
                </svg>{" "}
                About me
              </div>
              <div className={aboutOpen ? "uxIntroIn" : "uxIntroOut"}>
                I grew up in Berlin and moved to London in 2019. In 2022 I
                completed my BSc in Psychological and Behavioural Science at the
                London School of Economics and Political Science and moved on to
                this masters programme knowing that I wanted to apply my
                psychological insight in a creative way. Besides design and web
                development, I'm passionate about music production, audio
                engineering and DJing.
              </div>
            </p>
          </div>
        </div>
        <div className="uxContent">
          <div className="uxStickyTitle">
            <h2>Favourite Projects</h2>
          </div>
          <div className="uxHomeGrid">
            <a className="uxPost" ref={birdsongPost1} href="/ux/birdsong">
              <div className="uxSmallTitle">Unit 1</div>
              <div className="uxPostTitle">UX of Birdsong</div>
              <div className="uxPostBeauty">
                <HoverVideoPlayer
                  videoSrc="/images/ux/birdsong_b2.mp4"
                  hoverTarget={birdsongPost1}
                  pausedOverlay={
                    <img
                      src="/images/ux/birdsong_bs.jpg"
                      alt=""
                      style={{
                        // Make the image expand to cover the video's dimensions
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                />
              </div>
            </a>
            <a className="uxPost" ref={disguisePost1} href="/ux/disguise">
              <div className="uxSmallTitle">Unit 1</div>
              <div className="uxPostTitle">UX of Disguise</div>
              <div className="uxPostBeauty">
                <HoverVideoPlayer
                  videoSrc="/images/ux/disguise_bslow.mp4"
                  hoverTarget={disguisePost1}
                  pausedOverlay={
                    <img
                      src="/images/ux/disguise2btemp.jpg"
                      alt=""
                      style={{
                        // Make the image expand to cover the video's dimensions
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                />
              </div>
            </a>
          </div>
          <div className="uxStickyTitle">
            <h2>Unit 1: UX Studio Practices</h2>
          </div>
          <div className="uxHomeGrid">
            <a href="/ux/senses" className="uxPost" ref={sensesPost}>
              <div className="uxSmallTitle">Brief 1</div>
              <div className="uxPostTitle">UX of Human Senses</div>
              <div className="uxPostBeauty">
                <HoverVideoPlayer
                  videoSrc="/images/ux/senses_b.mp4"
                  hoverTarget={sensesPost}
                  pausedOverlay={
                    <img
                      src="/images/ux/senses_bs.JPG"
                      alt=""
                      style={{
                        // Make the image expand to cover the video's dimensions
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                />
              </div>
            </a>
            <a className="uxPost" ref={mouldPost} href="/ux/mould">
              <div className="uxSmallTitle">Brief 2</div>
              <div className="uxPostTitle">UX of Mould</div>
              <div className="uxPostBeauty">
                <HoverVideoPlayer
                  videoSrc="/images/ux/mould_bv.mp4"
                  hoverTarget={mouldPost}
                  pausedOverlay={
                    <img
                      src="/images/ux/mould_bs.jpg"
                      alt=""
                      style={{
                        // Make the image expand to cover the video's dimensions
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                />
              </div>
            </a>
            <a className="uxPost" href="/ux/hair" ref={hairPost}>
              <div className="uxSmallTitle">Brief 3</div>
              <div className="uxPostTitle">UX of Hair</div>
              <div className="uxPostBeauty">
                <HoverVideoPlayer
                  videoSrc="/images/ux/hair_b.mp4"
                  hoverTarget={hairPost}
                  pausedOverlay={
                    <img
                      src="/images/ux/hair_btemp.jpg"
                      alt=""
                      style={{
                        // Make the image expand to cover the video's dimensions
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                />
              </div>
            </a>
            <a className="uxPost" ref={birdsongPost} href="/ux/birdsong">
              <div className="uxSmallTitle">Brief 4</div>
              <div className="uxPostTitle">UX of Birdsong</div>
              <div className="uxPostBeauty">
                <HoverVideoPlayer
                  videoSrc="/images/ux/birdsong_b2.mp4"
                  hoverTarget={birdsongPost}
                  pausedOverlay={
                    <img
                      src="/images/ux/birdsong_bs.jpg"
                      alt=""
                      style={{
                        // Make the image expand to cover the video's dimensions
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                />
              </div>
            </a>
            <a className="uxPost" ref={disguisePost} href="/ux/disguise">
              <div className="uxSmallTitle">Brief 5</div>
              <div className="uxPostTitle">UX of Disguise</div>
              <div className="uxPostBeauty">
                <HoverVideoPlayer
                  videoSrc="/images/ux/disguise_bslow.mp4"
                  hoverTarget={disguisePost}
                  pausedOverlay={
                    <img
                      src="/images/ux/disguise2btemp.jpg"
                      alt=""
                      style={{
                        // Make the image expand to cover the video's dimensions
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UXHome;

import React, { Fragment, useEffect, useRef, useState } from "react";
import "./UX.sass";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

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

  return (
    <div>
      <div className="uxSolid"></div>
      <div className="uxContent">
        <div className="uxSidebar">
          <h1 className="uxHomeTitle">
            <b>MA:UX</b> <br />
            Jakob Prüfer
          </h1>
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
                enableBackground="new 0 0 50 50"
                version="1.1"
                viewBox="0 0 50 50"
                xmlSpace="preserve"
              >
                <path
                  d="M9.56 13.05H41.78V18.54H9.56z"
                  transform="rotate(45.001 25.668 15.789)"
                ></path>
                <path
                  d="M9.56 32.05H41.78V37.54H9.56z"
                  transform="rotate(134.999 25.668 34.789)"
                ></path>
              </svg>{" "}
              What is UX design?
            </div>
            <div className={defOpen ? "uxIntroIn" : "uxIntroOut"}>
              User experience design is the process of defining the experience a
              user would go through when interacting with a digital product or
              website. Design decisions in UX design are often driven by
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
                enableBackground="new 0 0 50 50"
                version="1.1"
                viewBox="0 0 50 50"
                xmlSpace="preserve"
              >
                <path
                  d="M9.56 13.05H41.78V18.54H9.56z"
                  transform="rotate(45.001 25.668 15.789)"
                ></path>
                <path
                  d="M9.56 32.05H41.78V37.54H9.56z"
                  transform="rotate(134.999 25.668 34.789)"
                ></path>
              </svg>{" "}
              What sets this course apart?
            </div>
            <div className={courseOpen ? "uxIntroIn" : "uxIntroOut"}>
              This course lifts the traditional understanding of UX design from
              its digital confinement and instead places emphasis on real-world,
              embodied experiences. Beyond software and technical skills, we are
              trained to generate ideas in novel, unusual contexts; to
              efficiently organise in quickly changing teams with students from
              diverse subject backgrounds; to implement innovative ways of user
              reseach other than the traditional interview and focus group.{" "}
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
                enableBackground="new 0 0 50 50"
                version="1.1"
                viewBox="0 0 50 50"
                xmlSpace="preserve"
              >
                <path
                  d="M9.56 13.05H41.78V18.54H9.56z"
                  transform="rotate(45.001 25.668 15.789)"
                ></path>
                <path
                  d="M9.56 32.05H41.78V37.54H9.56z"
                  transform="rotate(134.999 25.668 34.789)"
                ></path>
              </svg>{" "}
              About me
            </div>
            <div className={aboutOpen ? "uxIntroIn" : "uxIntroOut"}>
              I grew up in Berlin and moved to London in 2019. In 2022 I
              completed my BSc in Psychological and Behavioural Science at the
              London School of Economics and Political Science and moved on to
              this masters programme knowing that I wanted to apply my
              psychological insight in the creative industries. Besides design
              and web development, I'm passionate about music production, audio
              engineering and DJing.
            </div>
          </p>
        </div>
        <div className="uxBody">
          <div className="uxBodyBar">
            <h2 className="uxBodyTitle">Unit 1: UX Studio Practices</h2>
          </div>
          <div className="uxHomeGrid">
            <div className="uxPost">
              <div className="uxPostNumber">Brief 5</div>
              <div className="uxPostTitle">UX of Disguise</div>
              <div className="uxPostBeauty">
                <img src="/images/ux/disguise2btemp.jpg" alt="" />
              </div>
            </div>
            <div className="uxPost">
              <div className="uxPostNumber">Brief 4</div>
              <div className="uxPostTitle">UX of Birdsong</div>
              <div className="uxPostBeauty">
                <img src="/images/ux/birdsong2btemp.jpg" alt="" />
              </div>
            </div>
            <div className="uxPost">
              <div className="uxPostNumber">Brief 3</div>
              <div className="uxPostTitle">UX of Hair</div>
              <div className="uxPostBeauty">
                <img src="/images/ux/hair1btemp.jpg" alt="" />
              </div>
            </div>
            <div className="uxPost">
              <div className="uxPostNumber">Brief 2</div>
              <div className="uxPostTitle">UX of Mould</div>
              <div className="uxPostBeauty">
                <img src="/images/ux/mould2b.jpg" alt="" />
              </div>
            </div>
            <a href="/ux/senses1" className="uxPost">
              <div className="uxPostNumber">Brief 1</div>
              <div className="uxPostTitle">UX of Human Senses</div>
              <div className="uxPostBeauty">
                <img src="/images/ux/senses1b.jpg" alt="" />
              </div>
            </a>
          </div>
          <div className="uxBodyBar">
            <h2 className="uxBodyTitle">Unit 2: Micro UX</h2>
          </div>
          <div className="uxHomeGrid">
            <div className="uxPost">
              <div className="uxPostNumber">Brief 5</div>
              <div className="uxPostTitle">UX of Disguise</div>
              <div className="uxPostBeauty">
                <img src="/images/ux/disguise2btemp.jpg" alt="" />
              </div>
            </div>
            <div className="uxPost">
              <div className="uxPostNumber">Brief 4</div>
              <div className="uxPostTitle">UX of Birdsong</div>
              <div className="uxPostBeauty">
                <img src="/images/ux/birdsong2btemp.jpg" alt="" />
              </div>
            </div>
            <div className="uxPost">
              <div className="uxPostNumber">Brief 3</div>
              <div className="uxPostTitle">UX of Hair</div>
              <div className="uxPostBeauty">
                <img src="/images/ux/hair1btemp.jpg" alt="" />
              </div>
            </div>
            <div className="uxPost">
              <div className="uxPostNumber">Brief 2</div>
              <div className="uxPostTitle">UX of Mould</div>
              <div className="uxPostBeauty">
                <img src="/images/ux/mould2b.jpg" alt="" />
              </div>
            </div>
            <a href="/ux/senses1" className="uxPost">
              <div className="uxPostNumber">Brief 1</div>
              <div className="uxPostTitle">UX of Human Senses</div>
              <div className="uxPostBeauty">
                <img src="/images/ux/senses1b.jpg" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UXHome;

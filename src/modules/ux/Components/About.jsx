import React, { Fragment } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

function About({
  toggleDef,
  defOpen,
  toggleCourse,
  courseOpen,
  toggleAbout,
  aboutOpen,
}) {
  return (
    <Fragment>
      <div className="uxSidebar">
        <Link to="/">
          <div className="uxStickyTitleFirst" id="uxlogoTitle">
            <h1 className="uxLogo">
              <b>MA:UX</b>&nbsp;
            </h1>
            <h1 className="uxName">Jakob Prüfer</h1>
          </div>
        </Link>
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
              This course lifts the traditional understanding of UX design from
              its digital confinement and places just as much emphasis on
              real-world, embodied experiences. Beyond software and technical
              skills, we are trained to generate ideas in novel, unusual
              contexts; to efficiently organise in quickly changing teams with
              students from diverse subject backgrounds; to implement innovative
              ways of user research other than the traditional interview and
              focus group.{" "}
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
              engineering and DJing.{" "}
              <a
                href="https://drive.google.com/file/d/1jA1qJpqB5ovfqqSkK-79JOTF5Dg2-jw-/view?usp=sharing"
                target="_blank"
              >
                CV
              </a>{" "}
              /{" "}
              <a href="https://prufer.co" target="_blank">
                Website
              </a>
            </div>
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default About;

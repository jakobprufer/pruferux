import { useState, useEffect } from "react";
import classNames from "classnames";
import { NavLink, Link, useLocation } from "react-router-dom";
import { WiMoonFull, WiMoonAltWaxingGibbous4, WiMoonNew } from "react-icons/wi";

export default function Nav() {
  const [U1Open, setU1Open] = useState(true);
  const [U2Open, setU2Open] = useState(false);

  const toggleU1 = () => {
    setU1Open(!U1Open);
    setU2Open(false);
  };

  const toggleU2 = () => {
    setU2Open(!U2Open);
    setU1Open(false);
  };

  // let location = useLocation();
  // let [currentPath, setCurrentPath] = useState();

  // useEffect(() => {
  //   setCurrentPath(
  //     location.pathname.substring(location.pathname.lastIndexOf("/") + 1)
  //   );
  //   if (
  //     currentPath == "senses" ||
  //     "mould" ||
  //     "hair" ||
  //     "birdsong" ||
  //     "disguise"
  //   ) {
  //     setU1Open(true);
  //     setU2Open(false);
  //   } else {
  //     setU1Open(false);
  //     setU2Open(true);
  //   }
  // }, [location]);

  // console.log(currentPath);

  return (
    <div className="uxSidebar">
      <Link to="/ux">
        <h1 className="uxStickyTitleFirst" id="uxlogoTitle">
          <div className="uxLogo">
            <b>MA:UX</b>&nbsp;
          </div>
          {/* <div className="colourIcons">
            <WiMoonNew className="colourIcon" />
            <WiMoonAltWaxingGibbous4 className="colourIcon" />
            <WiMoonFull className="colourIcon" />
          </div> */}
          <div className="uxName">Jakob Prüfer</div>
        </h1>
      </Link>
      <div className="uxSidebarText">
        <nav className="uxNav">
          <div className="uxNavSection">
            <Link to="/ux">
              <svg
                className="myIcon"
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                enableBackground="new 0 0 1500 1500"
                version="1.1"
                viewBox="0 0 1500 1500"
                xmlSpace="preserve"
              >
                <path d="M749.5 165C426.14 165 164 427.14 164 750.5S426.14 1336 749.5 1336 1335 1073.86 1335 750.5 1072.86 165 749.5 165zm2.93 1107.64c-288.05 0-521.55-233.51-521.55-521.55s233.51-521.55 521.55-521.55 521.55 233.51 521.55 521.55-233.5 521.55-521.55 521.55z"></path>
                <path
                  d="M620.39 666.2H687.27V1014H620.39z"
                  transform="rotate(-45.001 653.828 840.11)"
                ></path>
                <path
                  d="M620.39 468.2H687.27V816H620.39z"
                  transform="rotate(45.001 653.845 642.095)"
                ></path>
                <path
                  d="M756.53 530.07H823.41V952.1400000000001H756.53z"
                  transform="rotate(90 789.967 741.1)"
                ></path>
              </svg>
              Back to overview
            </Link>
          </div>
          <div className="uxNavSection">
            <div className="uxButton" onClick={toggleU1}>
              {/* <svg
                className={classNames(
                  "uxArrow",
                  { turned90: U1Open },
                  { notTurned90: !U1Open }
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
              </svg>{" "} */}
              <svg
                className={classNames(
                  "myIcon",
                  { turned90: U1Open },
                  { notTurned90: !U1Open }
                )}
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                enableBackground="new 0 0 1500 1500"
                version="1.1"
                viewBox="0 0 1500 1500"
                xmlSpace="preserve"
              >
                <path d="M749.5 165C426.14 165 164 427.14 164 750.5S426.14 1336 749.5 1336 1335 1073.86 1335 750.5 1072.86 165 749.5 165zm2.93 1107.64c-288.05 0-521.55-233.51-521.55-521.55s233.51-521.55 521.55-521.55 521.55 233.51 521.55 521.55-233.5 521.55-521.55 521.55z"></path>
                <path
                  d="M744.39 478.2H811.27V826H744.39z"
                  transform="rotate(134.999 777.84 652.1)"
                ></path>
                <path
                  d="M744.39 676.2H811.27V1024H744.39z"
                  transform="rotate(-134.999 777.836 850.105)"
                ></path>
              </svg>
              Unit 1: UX Studio Practices
            </div>
            <div className={U1Open ? "uxIntroIn" : "uxIntroOut"}>
              <NavLink to="/ux/projects/senses" className="uxNavProject">
                UX of Human Senses
              </NavLink>
              <NavLink to="/ux/projects/mould" className="uxNavProject">
                UX of Mould
              </NavLink>
              <NavLink to="/ux/projects/hair" className="uxNavProject">
                UX of Hair
              </NavLink>
              <NavLink to="/ux/projects/birdsong" className="uxNavProject">
                UX of Birdsong
              </NavLink>
              <NavLink to="/ux/projects/disguise" className="uxNavProject">
                UX of Disguise
              </NavLink>
            </div>
          </div>
          <div className="uxNavSection">
            <div className="uxButton" onClick={toggleU2}>
              <svg
                className={classNames(
                  "myIcon",
                  { turned90: U2Open },
                  { notTurned90: !U2Open }
                )}
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                enableBackground="new 0 0 1500 1500"
                version="1.1"
                viewBox="0 0 1500 1500"
                xmlSpace="preserve"
              >
                <path d="M749.5 165C426.14 165 164 427.14 164 750.5S426.14 1336 749.5 1336 1335 1073.86 1335 750.5 1072.86 165 749.5 165zm2.93 1107.64c-288.05 0-521.55-233.51-521.55-521.55s233.51-521.55 521.55-521.55 521.55 233.51 521.55 521.55-233.5 521.55-521.55 521.55z"></path>
                <path
                  d="M744.39 478.2H811.27V826H744.39z"
                  transform="rotate(134.999 777.84 652.1)"
                ></path>
                <path
                  d="M744.39 676.2H811.27V1024H744.39z"
                  transform="rotate(-134.999 777.836 850.105)"
                ></path>
              </svg>
              Unit 2: Collaborative Unit
            </div>
            <div className={U2Open ? "uxIntroIn" : "uxIntroOut"}>
              <NavLink to="/ux/projects/outfit" className="uxNavProject">
                Survival of the Outfit
              </NavLink>
              <NavLink
                to="/ux/projects/psychogeography"
                className="uxNavProject"
              >
                Digital Psychogeography
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

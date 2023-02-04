import { useState } from "react";
import "./UX.sass";
import { Outlet } from "react-router-dom";
import classNames from "classnames";
import { WiMoonFull, WiMoonAltWaxingGibbous4, WiMoonNew } from "react-icons/wi";

function UX() {
  const [light, setLight] = useState(true);
  const [dark, setDark] = useState(false);
  const [paper, setPaper] = useState(false);

  const toggleLight = () => {
    setLight(true);
    setDark(false);
    setPaper(false);
  };

  const toggleDark = () => {
    setLight(false);
    setDark(true);
    setPaper(false);
  };

  const togglePaper = () => {
    setLight(false);
    setDark(false);
    setPaper(true);
  };

  return (
    <div
      // onClick={toggleDark}
      className={classNames({ dark: dark }, { light: light }, { paper: paper })}
    >
      <div className="uxPage">
        <div className="uxSolid"></div>
        <div className="uxSolidBottom"></div>
        <div className="uxBody">
          <div className="colourIconsNew">
            <WiMoonNew
              className={classNames("colourIcon", { dimmed: dark || paper })}
              onClick={toggleLight}
            />
            <WiMoonAltWaxingGibbous4
              className={classNames("colourIcon", { dimmed: dark || light })}
              onClick={togglePaper}
            />
            <WiMoonFull
              className={classNames("colourIcon", { dimmed: light || paper })}
              onClick={toggleDark}
            />
          </div>
          <Outlet />
          <div className="uxBigLogo">
            MA:UX
            {/* <div className="uxBigLogoName">Jakob Prüfer</div> */}
          </div>
          <svg
            className="uxBigUal"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="260"
            height="120"
            x="0"
            y="0"
            version="1.1"
            viewBox="0 0 260 120"
            xmlSpace="preserve"
          >
            <defs>
              <path
                id="SVGID_1_"
                d="M0.913 1.756H259.087V118.244H0.913z"
              ></path>
            </defs>
            <clipPath id="SVGID_2_">
              <use overflow="visible" xlinkHref="#SVGID_1_"></use>
            </clipPath>
            <path
              fill="#010102"
              d="M78.501 116H56.904v-11.525l-.482.005c-5.755 9.288-15.689 13.761-25.277 13.761C6.987 118.244.902 104.646.902 84.17L.897 33.291h22.721v46.721c0 13.598 3.993 20.312 14.556 20.308 12.318 0 17.601-6.882 17.596-23.679l-.008-43.356H78.49L78.501 116zM93.524 58.727c1.283-21.271 20.31-27.668 38.867-27.675 16.478 0 36.31 3.671 36.314 23.498v43.049c0 7.519.808 15.016 2.883 18.387h-23.025c-.806-2.567-1.443-5.268-1.605-7.997-7.191 7.519-17.75 10.239-27.829 10.239-15.67.01-28.172-7.831-28.172-24.795 0-18.7 14.086-23.18 28.158-25.11 13.919-2.076 26.887-1.598 26.887-10.883 0-9.755-6.739-11.197-14.722-11.197-8.643 0-14.244 3.527-15.046 12.484h-22.71zm52.478 16.795c-3.849 3.355-11.832 3.51-18.879 4.793-7.052 1.442-13.438 3.845-13.438 12.166 0 8.485 6.561 10.549 13.92 10.549 17.749 0 18.396-14.077 18.396-19.045v-8.463z"
              clipPath="url(#SVGID_2_)"
            ></path>
            <path
              fill="#010102"
              d="M186.139 1.756H208.86100000000002V115.99H186.139z"
              clipPath="url(#SVGID_2_)"
            ></path>
            <path
              fill="#010102"
              d="M259.074 59.338l-25.099.007V34.716l25.099-.005v24.627zM233.981 91.34h25.103l.006 24.636-25.108.007V91.34z"
              clipPath="url(#SVGID_2_)"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default UX;

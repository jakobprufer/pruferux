import React, { useState, useEffect } from "react";

// temporary:
import ny4 from "./pages/samplefiles/ny4.JPG";
import prufer from "./pages/samplefiles/pruferlogo.png";

function HomeSlide() {
  // slideLogo animation:
  const [slideLogoStyle, setSlideLogoStyle] = useState({
    height: 100,
    top: 0,
    transform: "rotate3d(0, 1, 0, " + 0 + "deg)",
    // opacity: 100 + "%",
  });
  const [slideVideoStyle, setSlideVideoStyle] = useState({
    opacity: 100 + "%",
  });
  const handleScroll = () => {
    let scrollTop = window.scrollY,
      minHeight = 50,
      distance = scrollTop,
      degree = scrollTop,
      // logoOpacity = 200 - scrollTop,
      videoOpacity = 1100 - scrollTop * 2,
      logoHeight = Math.max(minHeight, 100 - scrollTop / 8);
    setSlideLogoStyle({
      height: logoHeight,
      top: distance,
      transform: "rotate3d(0, 1, 0, " + Math.min(270, degree) + "deg)",
      // opacity: logoOpacity + "%",
    });
    setSlideVideoStyle({
      opacity: videoOpacity + "%",
    });
    const logoStyle = slideLogoStyle;
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll();
    });

    return () => {
      window.removeEventListener("scroll", () => {
        handleScroll();
      });
    };
  }, []);

  return (
    <div className="slideContainer">
      <img src={ny4} alt="" className="slideVideo" style={slideVideoStyle} />
      <img src={prufer} alt="" className="slideLogo" style={slideLogoStyle} />
    </div>
  );
}

export default HomeSlide;

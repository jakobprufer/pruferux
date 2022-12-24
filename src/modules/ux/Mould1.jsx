import React from "react";
import "./UX.sass";

function Mould1() {
  return (
    <div className="uxContent">
      <h1 className="uxHeadline">
        <b>UX of Mould</b> (1/2)
      </h1>
      <div className="uxBeautyContainer">
        <video
          className="uxBeautyVideo"
          width="1920"
          height="1080"
          autoPlay
          muted
          playsInline
          preload="auto"
          loop
        >
          <source src="/images/ux/beauty.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="uxText">
        <p>
          <b>Brief:</b> Design an embodied experience that{" "}
          <span className="uxHighlight">translates</span> both the{" "}
          <span className="uxHighlight">good and bad qualities</span> of mould.
          Outcomes must be{" "}
          <span className="uxHighlight">physical and digital</span>.
        </p>
        <p>
          <b>Research Methods:</b>{" "}
          <a
            href="https://spin.atomicobject.com/2017/06/29/design-thinking-activity-love-breakup-letter/"
            target="_blank"
          >
            Love Letter and Breakup Letter
          </a>
          ,{" "}
          <a
            href="https://openpracticelibrary.com/practice/aeiou-observation-framework/"
            target="_blank"
          >
            AEIOU
          </a>
        </p>
        <p>
          <b>Designers:</b> Jakob Prufer, <a href="">Kye Li Chia</a>,{" "}
          <a href="">Manfredi Montaretto Marullo</a>,{" "}
          <a href="">Wan Ying Liang Chen</a>
        </p>
      </div>
    </div>
  );
}

export default Mould1;

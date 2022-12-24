import React, { useState } from "react";
import "./UX.sass";
import Image from "react-image-enlarger";

function ZoomImage({ src, enlargedSrc }) {
  const [zoomed, setZoomed] = React.useState(false);

  return (
    <div>
      <Image
        style={{ width: "10000px", height: "auto" }}
        zoomed={zoomed}
        src={src}
        enlargedSrc={enlargedSrc}
        onClick={() => setZoomed(true)}
        onRequestClose={() => setZoomed(false)}
        renderLoading
      />
    </div>
  );
}

function Senses2() {
  return (
    <div className="uxContent">
      {/* <div className="uxHeadlineBg1">Senses</div>
      <div className="uxHeadlineBg2">Senses</div> */}
      <h1 className="uxHeadline">
        <b>UX of Human Senses</b> (2/2)
      </h1>
      <div className="uxBeautyContainer">
        <img src="/images/ux/senses2b.jpg" alt="" className="uxBeauty" />
      </div>
      <div className="uxText">
        <div className="uxOverview">
          <p>
            <b>Brief:</b> Conceive and design a{" "}
            <span className="uxHighlight">wearable</span> experience derived
            from your sensory experiences of London, specifically the{" "}
            <span className="uxHighlight">Twining’s flagship store</span> in 216
            Strand, London WC2R 1AP. Your design should extend the human sense
            of <span className="uxHighlight">nociception</span> beyond the body.
          </p>
          <p>
            <b>Designers:</b> Jakob Prufer, <a href="">Lingjia Fang</a>,{" "}
            <a href="">Romit Khurd</a>, <a href="">Yuying Wang</a>
          </p>
          <p>
            <b>Dates:</b> 06-13/10/2022
          </p>
        </div>
      </div>
    </div>
  );
}

export default Senses2;

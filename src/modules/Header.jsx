import React, { useState } from "react";

function Header({ attach, showSort, toggleSort }) {
  return (
    <div className={attach ? "headerBarAttached" : "headerBar"}>
      <div className="logoBar">
        <div className="logoContainer">
          <div className="logo">
            <div
              className={attach ? "preLogoInnerOut on" : "preLogoInnerIn on"}
            >
              Jakob&nbsp;
            </div>
            <div className="logoInner on">Prufer</div>
            <div className={attach ? "postLogoInnerOut" : "postLogoInnerIn"}>
              &nbsp;- things I've made
            </div>
          </div>
          <div
            className={attach ? "sortButtonIn" : "sortButtonOut"}
            onClick={toggleSort}
          >
            <div className="sortButtonInner">
              <span> Sort by&nbsp;</span>
              <span className={showSort ? "turned" : "notTurned"}>&darr;</span>
            </div>
          </div>
        </div>
        <div className={attach ? "logoBorderIn" : "logoBorderOut"}></div>
      </div>
      <div className={showSort ? "sortMenuDown" : "sortMenuUp"}>
        <div className="sortItem">Estimated Reach</div>
        <div className="sortItem">Old to new</div>
        <div className="sortItem">New to old</div>
        <div className="sortItem">Relevance</div>
      </div>
    </div>
  );
}

export default Header;

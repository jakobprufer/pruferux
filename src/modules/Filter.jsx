import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Filter() {
  const [showSort, setShowSort] = useState(false);

  const toggleSort = () => {
    setShowSort(!showSort);
  };

  return (
    <div className="stickyInner">
      <div className="filterBar">
        <nav className="filterContainer">
          <NavLink to="/home" className="filterItem on">
            All
          </NavLink>
          <NavLink to="/music" className="filterItem">
            Music
          </NavLink>
          <NavLink to="/design" className="filterItem">
            Design
          </NavLink>
          <NavLink to="/dj" className="filterItem">
            DJ
          </NavLink>
          <NavLink to="/video" className="filterItem">
            Video
          </NavLink>
          <NavLink to="/photo" className="filterItem">
            Photo
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Filter;

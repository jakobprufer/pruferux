import React, { useState } from "react";

function Filter() {
  const [showSort, setShowSort] = useState(false);

  const toggleSort = () => {
    setShowSort(!showSort);
  };

  return (
    <div className="stickyInner">
      <div className="filterBar">
        <nav className="filterContainer">
          <a href="/thoughts" className="filterItem on">
            All
          </a>
          <a href="/music" className="filterItem">
            Music
          </a>
          <a href="/design" className="filterItem">
            Design
          </a>
          <a href="/dj" className="filterItem">
            DJ
          </a>
          <a href="/video" className="filterItem">
            Video
          </a>
          <a href="/photo" className="filterItem">
            Photo
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Filter;

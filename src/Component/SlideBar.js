import React from "react";
import "../AllPagesCss/SlideBar.css";
const SlideBar = () => {
  return (
    <div>
      <div className="allsidebars"></div>
      <div className="sidebar">
        {/* Add your icons here */}
        <div className="icon">Icon 1</div>
        <div className="icon">Icon 2</div>
        <div className="icon">Icon 3</div>
        <div className="icon">Icon 4</div>
        <div className="icon">Icon 5</div>
        <div className="icon">Icon 6</div>
        {/* Add more icons as needed */}
      </div>
    </div>
  );
};

export default SlideBar;

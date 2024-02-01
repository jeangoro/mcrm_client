import React from "react";

const PriveVerticalProgress = ({ progress }) => {
  const height = progress + "%";
  const width = "100%";
  return (
    <div className="my-vertical-progress" style={{ height: "1000px", backgroundColor: "gray", width: "50px" }}>
      <div className="my-vertical-progress-content" style={{ height: height, width: width, backgroundColor: "blue" }}></div>
    </div>
  );
};

export default PriveVerticalProgress;

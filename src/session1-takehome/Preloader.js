import React from "react";
import Preloader from "../images/preLoader.gif";

const PreLoader = () => {
  return (
    <div className="preloader">
      <img src={Preloader} alt={"preloader"} />
    </div>
  );
};

export default PreLoader;

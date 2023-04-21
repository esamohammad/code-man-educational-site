import React from "react";
import { Puff } from "react-loader-spinner";
import "./../style/loader.css";

const Loader = () => {
  return (
    <div>
      <div className="box">
        <div>
          <Puff
            height="120"
            width="120"
            color="#FF0000"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel="circles-with-bar-loading"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;

// https://mhnpd.github.io/react-loader-spinner/
//react-loader-snipper

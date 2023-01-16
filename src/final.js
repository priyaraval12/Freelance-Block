import React from "react";
import "./final.css";
import img from "./assets/BLOCK 1.png";

const Final = (props) => {
  return (
    <div className="final-final">
      <img src={img} alt="BLOCK12227" className="final-b-l-o-c-k1" />
      <span className="final-text">
        <span>
          Congrats!
          <span
            dangerouslySetInnerHTML={{
              __html: " ",
            }}
          />
        </span>
      </span>
    </div>
  );
};

export default Final;

import React from "react";
import "./intro.css";
import img from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";
import img7 from "./assets/img7.png";

const Intro = (props) => {
  return (
    <div>
      <div className="intro-intro">
        <div
          style={{
            width: 500,
            textAlign: "center",
            position: "absolute",
            right: 100,
            top: 100,
          }}
        >
          <span
            style={{
              color: "#FFF",
              fontSize: 40,
            }}
          >
            125 3D GENERATIVE BLOCKS REPRESENTING THE INFINITE WAYS TO BUILD A
            CUBE.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 40,
            width: "100%",
          }}
        >
          <img src={img} alt="IMAGE22052" className="intro-i-m-a-g-e2" />
          <img src={img3} alt="IMAGE32052" className="intro-i-m-a-g-e2" />
          <img src={img4} alt="IMAGE42052" className="intro-i-m-a-g-e2" />
          <img src={img5} alt="IMAGE72052" className="intro-i-m-a-g-e2" />
          <img src={img6} alt="IMAGE82052" className="intro-i-m-a-g-e2" />
          <img src={img7} alt="IMAGE2712226" className="intro-i-m-a-g-e2" />
        </div>
      </div>
    </div>
  );
};

export default Intro;

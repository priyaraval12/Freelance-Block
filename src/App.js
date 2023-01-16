import React  from "react";
import "./hero.css";
import img from "./assets/transparent.png";
import "@fontsource/montserrat";


const Hero = (props) => {
  return (
    <div>
      <div className="hero-hero">
        <div className="cube-container">
          <img
            src={img}
            alt="transparentblock12053"
            className="hero-transparentblock1"
          />
          <div className="cube-connect">
            <span
              style={{
                fontSize: 18,
                textTransform: "uppercase",
                fontWeight: "bold",
                cursor: "pointer",
              }}
             
            >
              connect
            </span>
          </div>
        </div>

        <span className="hero-text">
          <span>BLOCKS.</span>
        </span>
      </div>
    </div>
  );
};

export default Hero;

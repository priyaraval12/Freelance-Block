import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource/montserrat";
import reportWebVitals from "./reportWebVitals";
import Hero from "./App";
import Intro from "./intro";
import Frame3 from "./frame3";
import Concept from "./concept";
import Artist from "./artist";
import Congrats from "./congrats";
import Nav from "./Nav";
// import Metamaskconnected from "./metamaskconnected";
// import Processingtransaction from "./processingtransaction";
// import Final from "./final";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Hero />
    <Intro />
    <Frame3 />
    <Concept />
    <Artist />
    <Congrats />
    <Nav />
    {/* <Metamaskconnected />
    <Processingtransaction />
    <Final/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

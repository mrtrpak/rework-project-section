import React, { useState, useEffect } from 'react';
import { Parallax } from "react-parallax";

import paraImg from "./photos/prague.jpg";
import PlayerLinks from "./PlayerLinks";

import "./App.css";

export default function App() {

  // const [handheld, updHandheld] = useState(false);
  const [height, setHt] = useState(650);
  const [strength, setStr] = useState(300);

  // const handheldChk = (window.innerWidth > 800) ? updHandheld(false) : updHandheld(true);

  const updParallax = () => {
    let width = window.innerWidth;

    if (width < 601) {
      setHt(650);
      setStr(500);
      console.log(width, strength, height, "less");
    } else if (width > 1000) {
      setHt(750);
      setStr(300);
      console.log(width, strength, height, "more");
    } else {
      setHt(700);
      setStr(400);
      console.log(width, strength, height, "middle");
    };
  };

  useEffect(() => {
    updParallax();
  });
  

  return (
    <Parallax bgImage={paraImg} strength={strength} style={{ height: height }} className="playLinkGrid">
      <PlayerLinks />
    </Parallax>
  );
};
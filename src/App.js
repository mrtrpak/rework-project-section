import React, { useState, useEffect } from 'react';
import { Parallax } from "react-parallax";

import paraImg from "./photos/prague.jpg";
import PlayerLinks from "./PlayerLinks";

import "./App.css";

export default function App() {

  const [height, setHt] = useState(700);
  const [strength, setStr] = useState(500);

  const updParallax = () => {
    let width = window.innerWidth;

    if (width > 960) {
      setHt(700);
      setStr(500);
    } else {
      setHt(1000);
      setStr(300);
    };
  };

  useEffect(() => {
    function updPage() {
      updParallax();
    }
    window.addEventListener("resize", updPage);
    return () => window.removeEventListener("resize", updPage);
  }, []);
  
  return (
    <Parallax bgImage={paraImg} strength={strength}  >
      <div className="playLinkGrid" style={{ height: height }}>
        <PlayerLinks />
      </div>
    </Parallax>
  );
};
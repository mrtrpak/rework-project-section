import React, { useState, useEffect } from 'react';
import { Parallax } from "react-parallax";

import paraImg from "./photos/prague.jpg";
import PlayerLinks from "./PlayerLinks";

export default function App() {

  const [handheld, updHandheld] = useState(false);
  const [height, setHt] = useState(650);
  const [strength, setStr] = useState(300);

  return (
    <Parallax bgImage={paraImg} strength={strength} style={{ height: height }}>
      <PlayerLinks />
    </Parallax>
  );
};
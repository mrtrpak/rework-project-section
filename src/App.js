import React, { useState, useEffect } from 'react';
import { Parallax } from "react-parallax";

import paraImg from "./photos/prague.jpg";
import PlayerLinks from "./PlayerLinks";

export default function App() {

  return (
    <Parallax bgImage={paraImg}>
      <PlayerLinks />
    </Parallax>
  );
};
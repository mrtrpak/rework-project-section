import React, { useEffect, useState } from "react";
import { Grid, Link, IconButton, Paper } from "@material-ui/core";
import TheatersIcon from "@material-ui/icons/Theaters";
import GithubIcon from "@material-ui/icons/GitHub";

import budgetGif from "../gifs/budget.gif";
import businessGif from "../gifs/business.gif";
import retroGif from "../gifs/retroGame.gif";
import switchGif from "../gifs/switchGifs.gif";

export default function PlayerLinks() {

  const [projTitle, updTitle] = useState("Portfolio");
  const [source, updSrc] = useState(switchGif);

  return (
    <div>

    </div>
  );
};
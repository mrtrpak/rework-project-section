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

  const handleClick = id => {
    switch (id) {
      case "1":
        document.getElementById("projectText").innerHTML = "A free to use business card creator where a user can create cards from a selection of templates and print out multiple cards on a page.";
        document.getElementById("toolsText").innerHTML = "axios, ES6, CSS3, express, heroku, MySQL, passport, nodemon, react, sequelize";
        updTitle("Business Card App");
        updSrc(businessGif);
        return;
      case "2":
        document.getElementById("projectText").innerHTML = "A retro style game where a user can create a character to fight a tough boss. There are four move types Normal, Special, Heal & Dodge.";
        document.getElementById("toolsText").innerHTML = "ES6, express, handlebars, , MySQL, nes.css, nodemon, sequelize";
        updTitle("Full Stack Game");
        updSrc(retroGif);
        return;
      case "3":
        document.getElementById("projectText").innerHTML = "App that tracks spending and income to get a clear view of money expenditure. It also works offline if there is no internet connection.";
        document.getElementById("toolsText").innerHTML = "CSS3, express, JS, mongoDB, mongoose, PWA";
        updTitle("Budget Tracker App");
        updSrc(budgetGif);
        return;
      default:
        updTitle("Portfolio");
        updSrc(switchGif);
        return;
    };
  };

  return (
    <div>

    </div>
  );
};
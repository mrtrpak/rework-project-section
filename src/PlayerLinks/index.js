import React, { useEffect, useState } from "react";
import { Grid, Link, IconButton, Paper } from "@material-ui/core";
import TheatersIcon from "@material-ui/icons/Theaters";
import GithubIcon from "@material-ui/icons/GitHub";

import budgetGif from "../gifs/budget.gif";
import businessGif from "../gifs/business.gif";
import retroGif from "../gifs/retroGame.gif";
import switchGif from "../gifs/switchGif.gif";

import "./style.css";

export default function PlayerLinks() {

  const [direction, updDir] = useState("row");
  const [projTitle, updTitle] = useState("Portfolio");
  const [source, updSrc] = useState(switchGif);

  function chkWindow() {
    (window.innerWidth <= 960) ?
    updDir("column") : updDir("row"); 
  }; 

  const handleClick = id => {
    switch (id) {
      case "1":
        document.getElementById("projectText").innerHTML = "A free to use business card creator where a user can create cards from a selection of templates and print out multiple cards on a page.";
        document.getElementById("toolsText").innerHTML = "axios, ES6, CSS3, express, heroku, MySQL, passport, nodemon, react, sequelize";
        updTitle("Business Card Creator");
        updSrc(businessGif);
        return;
      case "2":
        document.getElementById("projectText").innerHTML = "A retro style game where a user can create a character to fight a tough boss. There are four move types Normal, Special, Heal & Dodge.";
        document.getElementById("toolsText").innerHTML = "ES6, express, handlebars, , MySQL, nes.css, nodemon, sequelize";
        updTitle("Full-Stack Retro Game");
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

  useEffect(() => {
    function handleLayout() {
      chkWindow()
    }
    window.addEventListener("resize", handleLayout);
    return () => window.removeEventListener("resize", handleLayout);
  }, []);

  return (
    <Grid container alignItems="center" direction={direction} justify="space-evenly" spacing={3}>
    <Grid item xs={5} component={Paper} className="gridItem">
      <img src={source} alt="loading..." className="player" />
    </Grid>
    <Grid container item xs={5} alignItems="center" justify="center" component={Paper} className="gridItem">
      <Grid item xs={2} lg={1}>
        <IconButton onClick={() => { handleClick("1") }} aria-label="card-gif" color="inherit">
          <TheatersIcon />
        </IconButton>
      </Grid>
      <Grid item xs={8} lg={10}>
        <Link style={{ textDecoration: "none" }} color="primary" href="https://stormy-harbor-93453.herokuapp.com/">
        <h3 className="linkText">BUSINESS CARD CREATOR</h3>
        </Link>
      </Grid> 
      <Grid item xs={2} lg={1}>
        <IconButton aria-label="card-github" color="inherit">
          <a href="https://github.com/mrtrpak/Futurum-est-nostrum" className="gitIcon">
            <GithubIcon />
          </a>
        </IconButton>
      </Grid>
      <Grid item xs={2} lg={1}>
        <IconButton onClick={() => { handleClick("2") }} aria-label="game-gif" color="inherit">
          <TheatersIcon />
        </IconButton>
      </Grid>
      <Grid item xs={8} lg={10}>
        <Link style={{ textDecoration: "none" }} color="primary" href="https://immense-hamlet-97451.herokuapp.com/">
          <h3 className="linkText">FULL-STACK GAME</h3>
        </Link>
      </Grid> 
      <Grid item xs={2} lg={1}>
        <IconButton aria-label="game-github" color="inherit">
          <a href="https://github.com/mrtrpak/ProjectTwoTheGame" className="gitIcon">
            <GithubIcon />
          </a>
        </IconButton>
      </Grid>
      <Grid item xs={2} lg={1}>
        <IconButton onClick={() => { handleClick("3") }} aria-label="budget-gif" color="inherit">
          <TheatersIcon />
        </IconButton>
      </Grid>
      <Grid item xs={8} lg={10}>
        <Link style={{ textDecoration: "none" }} color="primary" href="https://still-ravine-53114.herokuapp.com/">
          <h3 className="linkText">BUDGET TRACKER</h3>
        </Link>
      </Grid> 
      <Grid item xs={2} lg={1}>
        <IconButton aria-label="budget-github" color="primary">
          <a href="https://github.com/mrtrpak/Budget-Tracker" className="gitIcon">
            <GithubIcon />
          </a>
        </IconButton>
      </Grid>
      <Grid item xs={6}>
        <p id="projectText">
          Click film icon to view Gif
          <br></br>
          Project name goes to link
          <br></br>
          Github icon goes to repo
        </p>
      </Grid>
      <Grid container item justify="center" xs={6}>
        <p className="toolsTitle">
          {projTitle} Tools Used:
        </p>
        <p id="toolsText">
        axios, github-pages, material-ui, react, react-card-flip, react-parallax
        </p>
      </Grid>
    </Grid>
  </Grid>
  );
};
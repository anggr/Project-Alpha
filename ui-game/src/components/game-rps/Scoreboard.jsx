import React from "react";
import * as Components from "./scoreboard.styled";
import logo from "../../assets/logo.svg";

const Scoreboard = ({ score }) => {
  return (
    <Components.Board>
      <Components.Logo>
        <img src={logo}></img>
      </Components.Logo>
      <Components.ScoreBoardText>
        <div>Rock</div>
        <div>Paper</div>
        <div>Scissors</div>
      </Components.ScoreBoardText>
      <Components.ScoreBox>
        <Components.ScoreTitle>Score</Components.ScoreTitle>
        <Components.Score>{score}</Components.Score>
      </Components.ScoreBox>
    </Components.Board>
  );
};

export default Scoreboard;

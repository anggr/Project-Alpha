import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Components from "./choice.styled";
import rock from "../../assets/batu.svg";
import paper from "../../assets/kertas.svg";
import scissors from "../../assets/gunting.svg";

const Com = ({ myChoice, pcChoice, gameResult }) => {
  return (
    <>
      <Components.Game>
        <Components.PcChoice>
          <h3>Computer</h3>
          {myChoice === "" ? (
            <>
              <h4>?</h4>
              <h4>Waiting Player's Choice</h4>
            </>
          ) : (
            <>
              {pcChoice == "rock" && (
                <Components.Icon bg={rock}></Components.Icon>
              )}
              {pcChoice == "paper" && (
                <Components.Icon bg={paper}></Components.Icon>
              )}
              {pcChoice == "scissors" && (
                <Components.Icon bg={scissors}></Components.Icon>
              )}
              <h4>PC's Choice: {pcChoice}</h4>
            </>
          )}
        </Components.PcChoice>
      </Components.Game>
    </>
  );
};

export default Com;

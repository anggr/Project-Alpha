import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Components from "./gamerps.styled";
import Play from "../../components/game-rps/Play";

export default function GameRps() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);
  return (
    <Components.Container>
      <Play setMyChoice={setMyChoice} />
    </Components.Container>
  );
}

import React from "react";
import GameRules from "./GameRules";
import NewGame from "./NewGame";
import LettersOfAlphabet from "./LettersOfAlphabet";
import WordToGuess from "./WordToGuess";
import NumberOfTries from "./NumberOfTries";

class GameControl extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      wordsToGuess: [
        "CAT",
        "RAT",
        "DOG",
        "BAT",
        "ANT",
        "COW",
        "PIG",
        "APE",
        "HEN",
        "FOX",
      ],
    };
  }

  render() {
    return (
      <>
        <GameRules />
        <NewGame />
        <LettersOfAlphabet />
        <WordToGuess />
        <NumberOfTries />
      </>
    );
  }
}
export default GameControl;

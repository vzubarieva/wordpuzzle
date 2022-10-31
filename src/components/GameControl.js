import React from "react";
import GameRules from "./GameRules";
import NewGame from "./NewGame";
import LettersOfAlphabet from "./LettersOfAlphabet";
import WordToGuess from "./WordToGuess";
import NumberOfTries from "./NumberOfTries";
import PropTypes from "prop-types";

class GameControl extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      numberOfTries: 6,
      currentWord: "",
      selectedLetter: [],
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
        <LettersOfAlphabet
          letter={this.letter}
          onSelect={this.handleClick}
          selectedLetter={this.state.selectedLetter}
        />
        <WordToGuess
          word={this.state.currentWord}
          selectedLetter={this.state.selectedLetter}
        />

        <NumberOfTries value={this.state.numberOfTries} />
      </>
    );
  }
}

GameControl.propTypes = {
  numberOfTries: PropTypes.number,
  currentWord: PropTypes.string,
  selectedLetter: PropTypes.array,
  wordsToGuess: PropTypes.array,
};

export default GameControl;

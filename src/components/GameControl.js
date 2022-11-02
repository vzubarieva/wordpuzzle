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
      selectedLetters: [],
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

  componentDidMount() {
    this.handleNewGameClick();
  }

  handleSelect = (letter) => {
    const newSelectedLetters = this.state.selectedLetters.concat(letter);
    this.setState({
      selectedLetters: newSelectedLetters,
      numberOfTries: this.state.numberOfTries - 1,
    });
  };

  handleNewGameClick = () => {
    const randomWord =
      this.state.wordsToGuess[
        Math.floor(Math.random() * this.state.wordsToGuess.length)
      ];
    this.setState({
      numberOfTries: 6,
      currentWord: randomWord,
      selectedLetters: [],
    });
  };

  // randomWord = () => {

  // };

  render() {
    return (
      <>
        <GameRules />
        <NewGame clickNewGame={this.handleNewGameClick} />
        <LettersOfAlphabet
          letter={this.letter}
          onSelect={this.handleSelect}
          selectedLetters={this.state.selectedLetters}
        />
        <WordToGuess
          word={this.state.currentWord}
          selectedLetters={this.state.selectedLetters}
        />

        <NumberOfTries value={this.state.numberOfTries} />
      </>
    );
  }
}

GameControl.propTypes = {
  numberOfTries: PropTypes.number,
  currentWord: PropTypes.string,
  selectedLetters: PropTypes.array,
  wordsToGuess: PropTypes.array,
};

export default GameControl;

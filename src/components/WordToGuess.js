import React from "react";
import PropTypes from "prop-types";

function WordToGuess1(props) {
  return (
    <h1>
      {props.word.split("").map((letter) => {
        if (props.selectedLetters.includes(letter)) {
          return letter;
        }
        return "-";
      })}
    </h1>
  );
}

WordToGuess1.propTypes = {
  word: PropTypes.string,
  selectedLetters: PropTypes.arrayOf(PropTypes.string),
};
export default WordToGuess1;

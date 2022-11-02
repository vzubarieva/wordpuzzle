import React from "react";
import PropTypes from "prop-types";

function LettersOfAlphabet(props) {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const handleClick = (letter) => {
    return () => {
      console.log(`clicked ${letter}`);
      // TODO: dispatch an action
      props.onSelect(letter);
    };
  };

  return (
    <>
      {letters.map((x) => (
        <button key={x} onClick={handleClick(x)}>
          {x}
        </button>
      ))}
    </>
  );
}
LettersOfAlphabet.propTypes = {
  onSelect: PropTypes.func,
  selectedLetters: PropTypes.arrayOf(PropTypes.string),
};
export default LettersOfAlphabet;

import React from "react";

function LettersOfAlphabet() {
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

export default LettersOfAlphabet;

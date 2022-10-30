import React from "react";

function NewGame() {
  const handleClick = () => {
    console.log(`clicked on new game`);
    // TODO: dispatch an action
  };

  return <button onClick={handleClick}>New Game</button>;
}

export default NewGame;

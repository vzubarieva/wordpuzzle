import React from "react";
import PropTypes from "prop-types";

function NewGame(props) {
  const handleClick = () => {
    console.log(`clicked on new game`);
    // TODO: dispatch an action
    props.clickNewGame();
  };

  return <button onClick={handleClick}>New Game</button>;
  // return <button clickNewGame={handleClick}>New Game</button>;
}

NewGame.propTypes = {
  clickNewGame: PropTypes.func,
};
export default NewGame;

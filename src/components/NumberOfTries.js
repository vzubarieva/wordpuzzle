import React from "react";
import PropTypes from "prop-types";

function NumberOfTries(props) {
  if (props.value === 0) {
    return <h1>Game over</h1>;
  }

  if (props.value < 0) {
    return <h1>Please restart</h1>;
  }

  return <h1>{props.value}</h1>;
}

NumberOfTries.propTypes = {
  value: PropTypes.number,
};
export default NumberOfTries;

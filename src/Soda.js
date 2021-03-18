import React from "react";
import { Link } from "react-router-dom";

/**
 * Displays a message convincing the user not to drink soda, and provides a
 * link to go back to the vending machine.
 * @returns JSX code to render info on sodas
 */
const Soda = () => {
  return (
    <>
      <p>OMG SUGARRRRR</p>
      <Link to="/">GO BACK</Link>
    </>
  );
};

export default Soda;
import React from "react";
import { Link } from "react-router-dom";

/**
 * Displays a message warning users that sardines will eat them. Also provides
 * a link for users to return to the vending machine.
 * @returns JSX code to render info on sardines
 */
const Sardines = () => {
  return (
    <>
      <p>YOU DON'T EAT THE SARDINES. THE SARDINES, THEY EAT YOU!</p>
      <Link to="/">GO BACK</Link>
    </>
  );
};

export default Sardines;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Chips.css";

/**
 * Shows how many chips you have eaten and provides a button that allows users
 * to eat chips. Also displays a link to go back to the vending machine.
 * @returns JSX code to render interface to eat chips
 */
const Chips = () => {
  const [bagsEaten, setBagsEaten] = useState(0);

  /**
   * Updates bagsEaten when user eats a bag of chips
   */
  const eatBag = () => {
    setBagsEaten(bagsEaten => bagsEaten + 1);
  };

  return (
    <div className="Chips">
      <p>BAGS EATEN: { bagsEaten }</p>
      <button onClick={ eatBag }>NOM NOM NOM</button>
      <Link to="/">GO BACK</Link>
    </div>
  );
};

export default Chips;
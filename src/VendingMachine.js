import React from "react";
import NavBar from "./NavBar";

/**
 * Component to show vending machine, where users can select the snack they
 * want
 * @returns JSX code to render a vending machine
 */
const VendingMachine = () => {
  return (
    <>
      <p>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</p>
      <NavBar />
    </>
  );
};

export default VendingMachine;
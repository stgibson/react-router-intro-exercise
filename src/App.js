import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Chips from "./Chips";
import Sardines from "./Sardines";
import SiteWideNavBar from "./SiteWideNavBar";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SiteWideNavBar />
        <Route exact path="/soda"><Soda /></Route>
        <Route exact path="/chips"><Chips /></Route>
        <Route exact path="/sardines"><Sardines /></Route>
        <Route exact path="/"><VendingMachine /></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
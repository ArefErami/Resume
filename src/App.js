import React, { Component } from "react";

import Navigation from "./Sections/Navigation";
import FirstSection from "./Sections/FirstSection";
import SecondSection from "./Sections/SecondSection";
import ThirdSection from "./Sections/ThirdSection";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>
    );
  }
}

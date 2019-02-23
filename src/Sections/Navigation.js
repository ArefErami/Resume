import React, { Component } from "react";
import data from "../data.json";
import { Link, Element } from "react-scroll";
import "./Navigation.css";

export default class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      color: "black"
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor = () => {
    this.setState({
      color: this.state.color === "black" ? "white" : "black"
    });
  };
  render() {
    return (
      <div>
        <div className="navigation">
          <ul>
            <li id="magic">
              <img src={data.arrow.magic} onClick={() => this.changeColor()} />
            </li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={100}
            >
              <li id="about">
                <b style={{ color: this.state.color }}>About</b>
              </li>
            </Link>
            <Element name="about" className="element" />
            <Link
              activeClass="active"
              to="skill"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={100}
            >
              <li id="skill">
                <b style={{ color: this.state.color }}>Skills</b>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

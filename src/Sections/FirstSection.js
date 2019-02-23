import React, { Component } from "react";
import Fullpage from "../Component/Fullpage";
import { SocialIcon } from "react-social-icons";
import data from "../data.json";
import ArrowDown from "../Component/ArrowDown";
import { Link, Element } from "react-scroll";

import "./FirstSection.css";

export default class FirstSection extends Component {
  render() {
    return (
      <div>
        <Element name="title" className="element" />
        <Fullpage className="fullpage first">
          <h1 className="title" >{data.title}</h1>
          <h3 id="Subtit"> {data.subtitle}</h3>
          <div id="icon">
            {Object.keys(data.links).map(key => {
              return <SocialIcon url={data.links[key]} />;
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={100}
        >
          <ArrowDown/>
        </Link>
        <Element name="about" className="element" />
      </div>
    );
  }
}

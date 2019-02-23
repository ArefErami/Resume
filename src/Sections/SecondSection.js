import React, { Component } from "react";
import Fullpage from "../Component/Fullpage";
import data from "../data.json";
import ArrowDown2 from "../Component/ArrowDown2";
import { Link, Element } from "react-scroll";
import './SecondSection.css';

export default class SecondSection extends Component {
  render() {
    return (
      <div>
        <Fullpage className="fullpage second">
          <h1 id="f2About">{data.section[0].title}</h1>
          <h3 className="parag">{data.section[0].items[0].content1}</h3>
          <h3 className="parag">{data.section[0].items[0].content2}</h3>
          <h3 className="parag">{data.section[0].items[0].content3}</h3>
        </Fullpage>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={100}
        >
          <ArrowDown2/>
        </Link>
        <Element name="skills" className="element" />
      </div>
    );
  }
}

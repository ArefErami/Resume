import React, { Component } from "react";
import data from "../data.json";
import ArrowUp from "../Component/ArrowUp";
import { Link, Element } from "react-scroll";
import "./ThirdSection.css";

export default class ThirdSection extends Component {
  render() {
    return (
      <div className="fullpage third">
        <h1 id="ski">
          <b>{data.section[1].title}</b>
        </h1>
        <div className="cards-wraper">
          {data.section[1].items.map(skill => {
            return (
              <div className="card">
                <div className="image-wraper">
                  <img src={skill.content.image} />
                </div>
                <div className="skill-title-wrap">
                  <h4>{skill.content.title}</h4>
                </div>
              </div>
            );
          })}
        </div>
        <Link
          activeClass="active"
          to="title"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={100}
        >
          <ArrowUp />
        </Link>
        <Element name="skill" className="element" />
      </div>
    );
  }
}

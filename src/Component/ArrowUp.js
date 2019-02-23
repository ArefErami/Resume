import React, { Component } from "react";
import data from "../data.json";
import "./ArrowUp.css";

const ArrowUp =(props) => {
    return [
        <div className ="arrowUp"
          onClick = {props.onClick}>
          <div id="up">
            <img src={data.arrow.up} />
          </div>
        </div>
      ];
}
export default ArrowUp
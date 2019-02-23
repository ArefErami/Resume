import React, { Component } from "react";
import data from "../data.json";
import "./ArrowDown.css";

const ArrowDown =(props) => {
    return (
        <div className ="arrowDown"
          onClick = {props.onClick}>
          <div id="down">
            <img src={data.arrow.down} />
          </div>
        </div>
    );
}
export default ArrowDown
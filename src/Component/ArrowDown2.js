import React, { Component } from "react";
import data from "../data.json";
import "./ArrowDown2.css";

const ArrowDown2 =(props) => {
    return (
        <div className ="arrowDown2"
          onClick = {props.onClick}>
          <div id="down2">
            <img src={data.arrow.down2} />
          </div>
        </div>
    );
}
export default ArrowDown2
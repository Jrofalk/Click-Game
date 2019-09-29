import React from "react";
import "./style.css";

function Card(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img src={props.image} />
        </div>
      </div>
    );
  }

export default Card;
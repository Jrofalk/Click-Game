import React from "react";
import "./style.css";

function Card(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img id={props.id} src={props.image} onClick={props.selectCard}/>
        </div>
      </div>
    );
  }

export default Card;
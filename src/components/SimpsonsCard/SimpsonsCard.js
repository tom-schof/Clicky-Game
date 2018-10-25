import React from "react";
import "./SimpsonsCard.css";

const SimpsonsCard = props => (
  <div className="card" >

    <span className="img-container" onClick={() => props.registerClick(props.id)}>
      <img className= "image" alt={props.name} src={props.image} />
    </span>
   
  </div>
);

export default SimpsonsCard;

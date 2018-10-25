import React from "react";
import "../styles/Navbar.css";

const CardBody = props => (
  <div className="card-body">
    <p className="card-text">Click Count: {props.count}</p>
    <button className="btn btn-primary" onClick={props.handleIncrement}>
      Increment
    </button>{" "}
    <button className="btn btn-danger" onClick={props.handleDecrement}>
      Decrement
    </button>
  </div>
);


const Navbar = (props) => (
  <nav className="navbar navbar-default">
    <div className="navbar-home">
      <h2 href="/">Clicky Game</h2>
    </div>
    <div className="navbar-status">
      <h2>{props.correctGuess}</h2>
    </div>
    <div className="navbar-score">
      <h2>Score: {props.score}</h2>
      <h2>High Score: {props.highScore}</h2>
    </div>
    
</nav>
);

export default Navbar;

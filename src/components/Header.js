import React from "react";
import "../styles/Header.css";

// We use JSX curly braces to evaluate the style object

const Header = () => (
  <header  className="header">
    <h1>Clicky Game!</h1>
    <h2>Click on an image to earn points, but don't click on any more than once!</h2>
  </header>
);

export default Header;
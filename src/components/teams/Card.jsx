import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"; // Import the updated CSS

const Card = ({ path, front }) => {
  return (
    <Link to={path} className="card-hover">
      <div className="card-hover__content">
        <img src={front} alt="card image" className="card-image" />
      </div>
    </Link>
  );
};

export default Card;

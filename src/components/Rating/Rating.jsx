import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./Rating.css";

const Rating = ({ rating }) => {
  // Round the rating to the nearest 0.5
  const roundedRating = Math.round(rating * 2) / 2;

  // Create an array of star icons based on the rating
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(<FaStar key={i} color="gold" />);
    } else if (i - 0.5 === roundedRating) {
      stars.push(<FaStarHalfAlt key={i} color="gold" />);
    } else {
      stars.push(<FaStar key={i} color="gray" />);
    }
  }

  return (
    <div className="rating">
      <div className="numeric-rating">{rating}</div>
      <div className="stars">{stars}</div>
    </div>
  );
};

export default Rating;

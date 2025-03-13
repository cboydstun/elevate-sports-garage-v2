import React from "react";
import "react-router-dom";
import { fetchAllReviews } from "../api/ReviewsApi";
import { useEffect, useState } from "react";
import "./Testimonials.css";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const data = await fetchAllReviews();
        setReviews(data);
      } catch (error) {
        console.log("error fetching reviews", error);
      }
    };
    loadReviews();
  }, []);

  const starsFunction = function (numberOfStars) {
    return (
      <div className="star-container">
        {Array.from({ length: numberOfStars }).map((_, index) => (
          <div className="stars" key={index}>
            &#11088;
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="testimonials">
      <h2 className="testimonials-title">What Our Customers Say</h2>
      {reviews.map((review) => {
        return (
          <li key={review._id}>
            <p className="testimonials-item">
              {review.name}
              <br></br>
              <div className='review-stars'>{starsFunction(review.stars)}</div>
              <br></br>
              {review.date}
              <br></br>
              <img
                className="testimonials-image"
                src={review.image}
                alt={review.name}
              />
              <br></br>
              {review.body}
              <br></br>
            </p>
          </li>
        );
      })}
    </div>
  );
}

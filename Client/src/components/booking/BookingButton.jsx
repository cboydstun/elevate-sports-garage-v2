import React from "react";

import { useNavigate } from "react-router-dom";

const BookingButton = ({ label }) => {
  // The BookingButton component takes a prop called label, which is used to set the button text.
  const navigate = useNavigate(); // The useNavigate hook is used to get the navigate function, which allows us to navigate to different routes in the application.

  const handleBooking = () => {
    // The handleBooking function is defined to handle the button click event.
    navigate("/services"); // The navigate function is called with the "/services" route as an argument to navigate to the services page when the button is clicked.
  };

  return (
    // The return statement renders a button element with the button text set to the label prop value or "Book a Cage Now" if no label prop is provided. The button has an onClick event handler that calls the handleBooking function when the button is clicked.
    <button className="booking-button" onClick={handleBooking}>
      {" "}
      {/* The button has a class name of "booking-button" and an onClick event handler that calls the handleBooking function when the button is clicked. */}
      {label || "Book a Cage Now"}{" "}
      {/* The button text is set to the label prop value or "Book a Cage Now" if no label prop is provided. */}
    </button>
  );
};

export default BookingButton;

import React from "react";

import { useNavigate } from "react-router-dom";

const QuickContactButton = ({ label }) => {
  // The QuickContactButton component takes a prop called label, which is used to set the button text.
  const navigate = useNavigate(); // The useNavigate hook is used to get the navigate function, which allows us to navigate to different routes in the application.

  const handleContact = () => {
    // The handleContact function is defined to handle the button click event.
    navigate("/contact"); // The handleContact function uses the navigate function from the useNavigate hook to redirect the user to the "/contact" route when the button is clicked.
  };

  return (
    // The return statement renders a button element with the button text set to the label prop value or "Contact Us" if no label prop is provided. The button has an onClick event handler that calls the handleContact function when the button is clicked.
    <button className="quick-contact-button" onClick={handleContact}>
      {" "}
      {/* The button has a class name of "quick-contact-button" and an onClick event handler that calls the handleContact function when the button is clicked. */}
      {label || "Contact Us"}{" "}
      {/* The button text is set to the label prop value or "Contact Us" if no label prop is provided. */}
    </button>
  );
};

export default QuickContactButton; // The QuickContactButton component is exported as the default export of the file.

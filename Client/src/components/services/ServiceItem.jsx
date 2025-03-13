import React from "react";
import "./ServiceItem.css";

const ServiceItem = ({ service }) => {
  const { name, description, price, image } = service || {};

  return (
    <div className="service-item">
      {image && <img src={image} alt={name} className="service-image" />}

      <h3 className="service-name">{name}</h3>
      <p className="service-description">{description}</p>
      <p className="service-price">Price: ${price}</p>
    </div>
  );
};

export default ServiceItem;

import React from "react";
import "./LocationMap.css";

export default function LocationMap() {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6993.060898668158!2d-98.170369!3d29.85032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c9f051d3cd725%3A0x718ff5cc2ccd38e6!2s1270%20Sattler%20Rd%2C%20New%20Braunfels%2C%20TX%2078132!5e1!3m2!1sen!2sus!4v1739488551592!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

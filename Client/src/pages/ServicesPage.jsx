import React, { useEffect, useState } from "react";
import { fetchAllServices } from "../api/ServicesApi";
import ServiceItem from "../components/services/ServiceItem";
import "./ServicesPage.css";

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await fetchAllServices();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    loadServices();
  }, []);

  return (
    <div className="services-page">
      <h1 className="services-title">Our Services</h1>
      <p className="services-subtitle">
        Check out our training packages, batting cages, and more.
      </p>

      <div className="services-list">
        {services.map((service) => (
          <ServiceItem key={service._id} service={service} />
        ))}
      </div>

      <div className="vagaro-link-container">
        <p className="vagaro-cta-text">
          Ready to book a session? Click below to schedule a session!
        </p>
        <a
          href="https://www.vagaro.com/cl/DaQegUQ305Bsr6sFBZ4B3jH0uGERbapdqFbSl~Zgo8s="
          target="_blank"
          rel="noopener noreferrer"
          className="vagaro-button"
        >
          Book Now!
        </a>
      </div>
    </div>
  );
};

export default ServicesPage;

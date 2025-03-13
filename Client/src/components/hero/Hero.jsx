import React, { useEffect } from "react";
import "./Hero.css";

import QuickContactButton from "../contact/QuickContactButton";
import "../contact/QuickContactButton.css";
import { Link } from "react-router-dom";

const backgroundImage =
  "https://res.cloudinary.com/dck559pu7/image/upload/v1741631183/IMG_6272_fpujgp.jpg";

const Hero = () => {
  return (
    <div className="page">    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-header">
        <p className="join-now">Ask Us About Our Birthday Specials!</p>
        <QuickContactButton label="Contact Us" />
        <h1 className="hero-title">ELEVATE YOUR GAME</h1>
        <p className="hero-subtitle"> Secure Your Membership!</p>
      </div>

      <div className="memberships-container">
        {/* SILVER */}
        <a
          href="https://www.vagaro.com/cl/uftQ7gHMdHuxbk9lr95qOFporscEq8cEf-n4zx-IqFQ="
          target="_blank"
          rel="noopener noreferrer"
          className="membership-card silver"
        >
          <h2 className="membership-title">SILVER</h2>
          <ul className="membership-details">
            <li>Access Weekdays 3:30PM-9PM</li>
            <li>Shared Cages</li>
            <li>45 Swings Every Day</li>
            <li>$5 for Extra Buckets</li>
            <li>10% Off Purchases & Classes</li>
          </ul>
          <p className="membership-price">
            $45 <span>MONTHLY</span>
          </p>
        </a>

        {/* GOLD */}
        <a
          href="https://www.vagaro.com/cl/DaQegUQ305Bsr6sFBZ4B3jH0uGERbapdqFbSl~Zgo8s="
          target="_blank"
          rel="noopener noreferrer"
          className="membership-card gold"
        >
          <h2 className="membership-title">GOLD</h2>
          <ul className="membership-details">
            <li>Access Weekdays & Weekends</li>
            <li>Bring a Friend Free</li>
            <li>2.5 Hours Weekly + Virtual Batting</li>
            <li>$10 for Extra Hour</li>
            <li>10% Off Purchases & Classes</li>
          </ul>
          <p className="membership-price">
            $60 <span>MONTHLY</span>
          </p>
        </a>

        {/* PLATINUM */}
        <a
          href="https://www.vagaro.com/cl/pi5RmUyanXxWwI6tndXL41qAs~2d1bWoU-rE28wHAAQ="
          target="_blank"
          rel="noopener noreferrer"
          className="membership-card platinum"
        >
          <h2 className="membership-title">PLATINUM</h2>
          <p className="limited-offer">ONLY 65 AVAILABLE</p>
          <ul className="membership-details">
            <li>24/7 Access (VIP Card Access)</li>
            <li>Win Reality Profile ($250 value)</li>
            <li>Private Cage Time</li>
            <li>15% Off Purchases & Classes</li>
          </ul>
          <p className="membership-price">
            $75 <span>MONTHLY</span>
          </p>
        </a>
      </div>

      <div className="hero-cta">
        <a href="/services" className="cta-button">
          Start Training Now!
        </a>

        <QuickContactButton label="Contact Us" />
      </div>
      
    </section>
    <div className="hero-testimonials">
    <img
      className="testimonial-img"
      src="https://res.cloudinary.com/dlcaybqqy/image/upload/v1741305317/IMG_6282_irwipu.jpg"
      alt="coach-img"
    />
    <br></br>
    <p>Curious what local coaches are saying?</p>
    <Link to="/testimonials" className="testimonials-link-button">
      See Testimonials
    </Link>
  </div>
  </div>

  );
};
export default function JazzHero() {
  useEffect(() => {
    if (window.innerWidth > 480) return;

    const cards = document.querySelectorAll(".membership-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("expanded-mobile");
          } else {
            entry.target.classList.remove("expanded-mobile");
          }
        });
      },
      { threshold: 0.5 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return <Hero />;
}

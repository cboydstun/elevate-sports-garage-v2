import React from "react";
import NavBar from "../components/navigationBar/Navbar";
import Hero from "../components/hero/Hero";
import SocialProof from "../components/socialProof/SocialProof";
import LocationMap from "../components/LocationMap/LocationMap";

export default function Home() {
  return (
    <div>
      <Hero />
      <SocialProof />

      <LocationMap />
    </div>
  );
}

import React from "react";
import "./Landing.css";
import hero from "./assets/hero.jpg"; 

export default function Landing() {
  return (
    <main className="landing">
      <img className="landing-hero" src={hero} alt="Landing visual" />
    </main>
  );
}

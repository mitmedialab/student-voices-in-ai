import React from "react";
import "./styles.css";
import megaphone from "./assets/megaphone.gif";

export default function App() {
  return (
    <div className="page">
      <div className="card">
        <header className="header">
          <h1 className="title">
  <span className="titleHighlight">
    Student<br />
    Voices in AI
  </span>
</h1>
          <p className="subtitle">
            An extracurricular club for student AI leaders
          </p>
        </header>

        <div className="heroWrap">
          <img className="heroImage" src={megaphone} alt="Student Voices in AI" />
        </div>

        <section className="body">
          <p>
            The Student Voices in AI program empowers students to lead
            conversations about how AI should be used in their schools. Over 12
            weeks, students build confidence in navigating AI in their school
            lives, engage their community to understand local perspectives, and
            propose school guidelines or policies. Through a mix of projects,
            activities, and conversations, the club fosters community dialogue
            and helps teens develop a thoughtful approach to using AI in school.
          </p>

          

          <p className="note">
            <strong>The club is currently being piloted with school districts in the US.</strong>{" "}
            Stay tuned for the full, open‑source materials in early 2026!
          </p>

          <section className="body">
</section>

<div className="ctaGroup">
  <a className="btn btn-orange btn-wide" href="https://docs.google.com/document/d/1z75zEbAmbLucxcW7x3nNF3j3rr8LSYnSstJP2K8A0TQ/edit?tab=t.0#heading=h.d2lt904ufl5d">
    Preview the materials
  </a>
  <a className="btn btn-purple btn-wide" href="https://forms.gle/ASjbBG31r6dnyX4m7">
    Sign up for updates
  </a>
</div>

        </section>
      </div>
    </div>
  );
}

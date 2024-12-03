import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About Us</h2>
      <p className="about-description">
        At <strong>Chicken Rice Shop</strong>, we believe in serving quality food made with fresh ingredients. Our story began in 2005, and since then, we've been dedicated to bringing you the authentic flavors of chicken rice.
      </p>
      <p className="about-details">
        <strong>Established:</strong> 2005 <br />
        <strong>Owner:</strong> John Doe <br />
        <strong>Contact:</strong> +1 234-567-8900 <br />
        <strong>Email:</strong> chickenrice@example.com
      </p>
      <div className="about-video">
        <iframe
          title="About Chicken Rice Shop"
          src="https://www.youtube.com/embed/example"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      <div className="additional-notes">
        <p>💡 **Note:** We are committed to sustainable practices, using eco-friendly packaging and locally sourced ingredients whenever possible.</p>
        <p>🌟 Visit us and experience the difference in every bite!</p>
      </div>
    </div>
  );
}

export default About;

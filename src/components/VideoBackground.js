import React from 'react';
import './AboutUs.css'; // Add styling for the video background

const AboutUs = () => {
  return (
    <div className="about-us">
      <video className="background-video" autoPlay loop muted>
        <source src="/videos/about-us-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>About Us</h1>
        <p>Welcome to Sixer Alumni, where we connect, share, and grow together.</p>
      </div>
    </div>
  );
}

export default AboutUs;

import React from 'react';
import './AboutUs.css'; // Make sure to create this CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* YouTube background video */}
      <div className="background-video">
        <iframe
          src="https://www.youtube.com/embed/gUbXaT37d14?autoplay=1&mute=1&loop=1&playlist=gUbXaT37d14"
          title="Independence High School Liberty Belle Drill Team - You Give Love A Bad Name"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="about-us-content">
        <h1>About Sixer Alumni</h1>
        <p>
          Welcome to Sixer Alumni! We are a community of former students who are
          passionate about staying connected, sharing experiences, and
          supporting one another. Our mission is to foster lifelong
          relationships among alumni and to contribute to the growth and
          success of our members.
        </p>
        <p>
          Whether you're looking to reconnect with old friends, expand your
          professional network, or give back to the community, Sixer Alumni has
          something for everyone. Join us in our journey to create lasting
          memories and impactful connections.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

import React from 'react';
import './Home.css'; // Importing the CSS file
import Carousel from '../components/Carousel'; // Ensure the path is correct
import UpcomingEvents from '../components/UpcomingEvents'; // Import the UpcomingEvents component
import { Card, CardContent, Typography } from '@mui/material'; // Importing Mat Cards

const Home = () => {
    return (
        <div className="home-container">
            <header>
                <img src="/Users/jenicemcdaniel/sixer-alumni/src/images/IHGLogo.png" alt="Logo" className="logo" />
            </header>
            <main className="content">
                <h1 className="home-title">Welcome to Sixer Alumni</h1>
                <p className="home-description">
                    Connect with your fellow alumni, attend events, and stay updated.
                </p>
                <div className="carousel-wrapper">
                    {/* Including the Carousel component */}
                    <Carousel />
                </div>
                
                {/* Adding the Mat Cards for Alumni Spotlight, Upcoming Travel, and Current School Events */}
                <section className="card-section">
                    <div className="card-wrapper">
                        {/* Alumni Spotlight Card */}
                        <Card className="home-card">
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Alumni Spotlight
                                </Typography>
                                <Typography variant="body2">
                                    Highlight a notable alumni here. You can dynamically load content into this card later.
                                </Typography>
                            </CardContent>
                        </Card>

                        {/* Upcoming Travel Card */}
                        <Card className="home-card">
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Upcoming Travel
                                </Typography>
                                <Typography variant="body2">
                                    Showcase upcoming travel plans for alumni trips.
                                </Typography>
                            </CardContent>
                        </Card>

                        {/* Current School Events Card */}
                        <Card className="home-card">
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Current School Events
                                </Typography>
                                <Typography variant="body2">
                                    Display upcoming school events that alumni can participate in.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Adding the Upcoming Events Section */}
                <section className="upcoming-events-section">
                    <UpcomingEvents />
                </section>
               
            </main>
        </div>
    );
};

export default Home;

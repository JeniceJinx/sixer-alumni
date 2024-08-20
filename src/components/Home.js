import React from 'react';
import './Home.css';  // Import your CSS file for styling
import Carousel from '../Components/Carousel'; // Ensure the path is correct
import UpcomingEvents from '../Components/UpcomingEvents'; // Import the UpcomingEvents component
import { Card, CardContent, Typography } from '@mui/material'; // Importing Mat Cards
import { useNavigate } from 'react-router-dom'; // Import navigation hook

const Home = () => {
    const navigate = useNavigate(); // Initialize the navigation hook

    // Function to navigate to Sign In page
    const goToSignIn = () => navigate('/auth?mode=signin');

    // Function to navigate to Sign Up page
    const goToSignUp = () => navigate('/auth?mode=signup');

    return (
        <div className="home-container">
            <header>
                <img src="src/images/IHS SIGN.jpg" alt="Logo" className="logo" />
            </header>
            <main className="content">
                <h1 className="home-title">Welcome to Sixer Alumni</h1>
                <p className="home-description">
                    Connect with your fellow alumni, attend events, and stay updated.
                </p>

                <div className="carousel-wrapper">
                    <Carousel />
                </div>

                <section className="card-section">
                    <div className="card-wrapper">
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

                <section className="upcoming-events-section">
                    <UpcomingEvents />
                </section>

                {/* Buttons to navigate to sign-in and sign-up pages */}
                <button className="open-modal-button" onClick={goToSignIn}>Sign In</button>
                <button className="open-modal-button" onClick={goToSignUp}>Sign Up</button>
            </main>
        </div>
    );
};

export default Home;

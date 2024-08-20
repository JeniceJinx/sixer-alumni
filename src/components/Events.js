import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar'; // Calendar component
import 'react-calendar/dist/Calendar.css'; // Calendar component's styles
import './Events.css'; // Custom styles
import Photo1 from '../images/Photo1.jpg';
import Photo2 from '../images/Photo2.jpg';
import Photo3 from '../images/Photo3.jpg';
import Photo4 from '../images/Photo4.jpg';
import Photo5 from '../images/Photo5.jpg';
import Photo6 from '../images/Photo6.jpg';
import Photo7 from '../images/Photo7.jpg';
import Photo8 from '../images/Photo8.jpg';
import Photo10 from '../images/Photo10.jpg';
import Photo11 from '../images/Photo11.jpg';
import Photo12 from '../images/Photo12.jpg';
import Photo13 from '../images/Photo13.jpg';
import Photo14 from '../images/Photo14.jpg';
import Photo15 from '../images/Photo15.jpg';
import Photo16 from '/Users/jenicemcdaniel/Desktop/SixerProject/sixer-alumni/src/images/Photo16.jpg';


const EventsPage = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [backgroundIndex, setBackgroundIndex] = useState(0);

    const backgroundImages = [
        Photo1, Photo2, Photo3, Photo5, Photo6, Photo4, Photo7, Photo8, Photo16, Photo15, Photo14, Photo10,Photo11, Photo12, Photo13
    ];
    

    const events = [
        { id: 1, name: 'Alumni Meetup', date: new Date(2024, 7, 25), location: 'Downtown Conference Center', address: '123 Main St, City, State' },
        { id: 2, name: 'Sports Day', date: new Date(2024, 8, 15), location: 'City Sports Complex', address: '456 Sports Ave, City, State' },
        { id: 3, name: 'Charity Gala', date: new Date(2024, 9, 10), location: 'Grand Hotel Ballroom', address: '789 Hotel Rd, City, State' },
    ];

    // Change the background image every 20 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 10000); // 10 seconds

        // Cleanup the interval when the component unmounts
        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    const handleDateClick = (date) => {
        const event = events.find((event) => event.date.toDateString() === date.toDateString());
        if (event) {
            setSelectedEvent(event);
        } else {
            setSelectedEvent(null);
        }
    };

    const openGoogleMaps = (address) => {
        const url = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
        window.open(url, '_blank');
    };

    return (
        <div
            className="events-page-container"
            style={{
                backgroundImage: `url(${backgroundImages[backgroundIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 1s ease-in-out' // Smooth transition between images
            }}
        >
           <div className="upcoming-events-container">
            <h1 className="upcoming-events-title">Upcoming Events</h1>
            <div className="scrolling-events">
                <ul className="events-list">
                    {events.map((event) => (
                        <li key={event.id} className="event-item">
                            {event.name} - {event.date.toDateString()}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
            <div className="calendar-section">
                <Calendar onClickDay={handleDateClick} />
            </div>
            {selectedEvent && (
                <div className="event-details">
                    <h2>{selectedEvent.name}</h2>
                    <p>Date: {selectedEvent.date.toDateString()}</p>
                    <p>Location: {selectedEvent.location}</p>
                    <button onClick={() => openGoogleMaps(selectedEvent.address)}>View Location on Google Maps</button>
                </div>
            )}
        </div>
    );
};

export default EventsPage;
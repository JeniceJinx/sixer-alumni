import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar'; // Calendar component
import 'react-calendar/dist/Calendar.css'; // Calendar component's styles
import './Events.css'; // Custom styles
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';
import photo4 from '../images/photo4.jpg';
import photo5 from '../images/photo5.jpg';
import photo6 from '../images/photo6.jpg';
import photo7 from '../images/photo7.jpg';
import photo8 from '../images/photo8.jpg';
import photo10 from '../images/photo10.jpg';
import photo11 from '../images/photo11.jpg';
import photo12 from '../images/photo12.jpg';
import photo13 from '../images/photo13.jpg';
import photo14 from '../images/photo14.jpg';
import photo15 from '../images/photo15.jpg';
import photo16 from '../images/photo16.jpg';


const EventsPage = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [backgroundIndex, setBackgroundIndex] = useState(0);

    const backgroundImages = [
        photo1, photo2, photo3, photo5, photo6, photo4, photo7, photo8, photo16, photo15, photo14, photo10,photo11, photo12, photo13
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

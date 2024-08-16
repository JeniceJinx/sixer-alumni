import React from 'react';
import './UpcomingEvents.css'; // Styling for the events section

const UpcomingEvents = () => {
    const events = [
        { id: 1, name: 'Alumni Meetup', date: 'August 25, 2024', location: 'Downtown Conference Center' },
        { id: 2, name: 'Sports Day', date: 'September 15, 2024', location: 'City Sports Complex' },
        { id: 3, name: 'Charity Gala', date: 'October 10, 2024', location: 'Grand Hotel Ballroom' }
    ];

    return (
        <div className="upcoming-events-container">
            <h2 className="upcoming-events-title">Upcoming Events</h2>
            <div className="scrolling-events">
                <ul className="events-list">
                    {events.map((event) => (
                        <li key={event.id} className="event-item">
                            <h3>{event.name}</h3>
                            <p>{event.date}</p>
                            <p>{event.location}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UpcomingEvents;

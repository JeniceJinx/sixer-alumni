import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Optional: Import carousel-specific styles
import photo1 from '../images/Photo1.jpg';
import photo2 from '../images/Photo2.jpg';
import photo3 from '../images/Photo3.jpg';
import photo4 from '../images/Photo4.jpg';
import photo5 from '../images/Photo5.jpg';
import photo6 from '../images/Photo6.jpg';
import photo7 from '../images/Photo7.jpg';
import photo8 from '../images/Photo8.jpg';
import photo10 from '../images/Photo10.jpg';
import photo11 from '../images/Photo11.jpg';
import photo12 from '../images/Photo12.jpg';
import photo13 from '../images/Photo13.jpg';
import photo14 from '../images/Photo14.jpg';
import photo15 from '../images/Photo15.jpg';
import photo16 from '../images/Photo16.jpg';




const Carousel = () => {
    // Store the images in an array
    const [photos] = useState([photo1, photo2, photo3, photo5, photo6, photo4, photo7, photo8, photo16, photo15, photo14, photo10,photo11, photo12, photo13]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically cycle through images every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Clear interval on unmount
    }, [photos.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    };

    return (
        <div className="carousel-wrapper">
            <div
                className="carousel"
                style={{ transform: `translateX(-${currentIndex * (300 + 10)}px)` }} // Adjust for image size + margin
            >
                {photos.map((photo, index) => (
                    <div className="carousel-item" key={index}>
                        <img src={photo} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            <button className="carousel-control prev" onClick={prevSlide}>❮</button>
            <button className="carousel-control next" onClick={nextSlide}>❯</button>
        </div>
    );
};


export default Carousel;

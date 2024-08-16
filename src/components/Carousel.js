import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Optional: Import carousel-specific styles
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


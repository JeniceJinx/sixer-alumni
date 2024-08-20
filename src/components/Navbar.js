import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../FirebaseContext';
import { auth } from '../Firebase';  // Import auth from firebase.js
import { onAuthStateChanged } from 'firebase/auth';  // Import onAuthStateChanged from Firebase SDK
import './Navbar.css';
import logo from '../images/Block I.png';  // Ensure the correct path to your logo image

const Navbar = () => {
  const { isAdmin, currentUser, handleSignOut } = useContext(FirebaseContext);
  const [loading, setLoading] = useState(true);  // Loading state

  useEffect(() => {
    // Listen for auth state changes using Firebase's onAuthStateChanged
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);  // Set loading to false when Firebase is ready
    });

    return () => unsubscribe();  // Clean up the listener on unmount
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <p>Loading...</p>  {/* Display a loading message or spinner */}
      </div>
    );
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Sixer Alumni Logo" className="logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AboutUs">About Us</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>

        {/* Conditionally render the Admin link */}
        {isAdmin && <li><Link to="/admin/dashboard">Admin</Link></li>}

        {/* Conditionally render Sign In/Sign Out links */}
        {currentUser ? (
          <li><button onClick={handleSignOut}>Sign Out</button></li>
        ) : (
          <>
            <li><Link to="/auth?mode=signin">Sign In</Link></li>
            <li><Link to="/auth?mode=signup">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import SignIn from '../Components/SignIn'; // SignIn form
import SignUp from '../Components/SignUp'; // SignUp form

const AuthPage = () => {
  // State to track whether the user is signing in or signing up
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="auth-page-container">
      <h1>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
      <div className="auth-toggle">
        {/* Toggle between Sign In and Sign Up */}
        <button onClick={() => setIsSignIn(true)} disabled={isSignIn}>
          Sign In
        </button>
        <button onClick={() => setIsSignIn(false)} disabled={!isSignIn}>
          Sign Up
        </button>
      </div>
      
      {/* Render either the SignIn or SignUp component based on the state */}
      {isSignIn ? <SignIn /> : <SignUp />}
    </div>
  );
};

export default AuthPage;

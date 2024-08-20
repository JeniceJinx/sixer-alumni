import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../FirebaseContext'; // Ensure FirebaseContext is imported
import { useNavigate } from 'react-router-dom';

const SignUp = () => {  // No need for onClose anymore
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { handleSignUp } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSignUp(email, password);
      navigate('/'); // Redirect to home after successful sign-up
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email"
          required 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password"
          required 
        />
        <div className="form-buttons">
          <button type="submit">Sign Up</button> {/* Submit Button */}
        </div>
      </form>
    </div>
  );
};

export default SignUp;

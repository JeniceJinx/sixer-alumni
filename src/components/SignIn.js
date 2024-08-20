import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../FirebaseContext'; // Ensure FirebaseContext is imported
import { useNavigate } from 'react-router-dom';

const SignIn = () => {  // No need to pass onClose anymore
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { handleSignIn } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSignIn(email, password);
      navigate('/'); // Redirect to home after successful sign-in
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
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
          <button type="submit">Sign In</button> {/* Submit Button */}
        </div>
      </form>
    </div>
  );
};

export default SignIn;

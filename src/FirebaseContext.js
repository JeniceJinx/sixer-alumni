import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const auth = getAuth();

  // Handle user state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user && user.email === 'admin@example.com') { // Modify this check as needed
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  // Sign up function
  const handleSignUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Sign up success, user is automatically logged in
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Sign in function
  const handleSignIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Sign in success, user state is updated via onAuthStateChanged
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Sign out function
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
      setIsAdmin(false);
    } catch (error) {
      throw new Error("Sign-out error: " + error.message);
    }
  };

  return (
    <FirebaseContext.Provider value={{ currentUser, isAdmin, handleSignUp, handleSignIn, handleSignOut }}>
      {children}
    </FirebaseContext.Provider>
  );
};

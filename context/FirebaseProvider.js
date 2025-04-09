// context/FirebaseProvider.js
import React, { createContext, useContext } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  initializeAuth, 
  getAuth, 
  browserPopupRedirectResolver,
  AuthProvider,
  GoogleAuthProvider 
} from 'firebase/auth';
import { firebaseConfig } from '../firebaseConfig';

// Create a context
const FirebaseContext = createContext(null);

// Provider component
export function FirebaseProvider({ children }) {
  // Initialize Firebase only once
  const app = initializeApp(firebaseConfig);
  
  // Configure authentication with explicit options
  const auth = initializeAuth(app, {
    // Provide a resolver for web/mobile compatibility
    authProvider: AuthProvider,
    popupRedirectResolver: browserPopupRedirectResolver,
    
    // Add Google Sign-In configuration
    googleAuthProvider: new GoogleAuthProvider(),
    
    // Additional options for development
    persistence: null // Let Firebase handle persistence
  });

  return (
    <FirebaseContext.Provider value={{ app, auth }}>
      {children}
    </FirebaseContext.Provider>
  );
}

// Custom hook to use the Firebase context
export function useFirebase() {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
}
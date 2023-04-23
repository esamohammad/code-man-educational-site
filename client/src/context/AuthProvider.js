import React, { createContext,useEffect, useState } from "react";
import {getAuth,signInWithPopup,onAuthStateChanged} from 'firebase/auth'
import app from '../firbase/firebase.config';


export const AuthContext = createContext();
const auth =getAuth(app);



const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
}

//observer set for manage user state
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('inside auth state change', currentUser);
      setUser(currentUser)
  });

  return () => {
      unsubscribe();
  }

}, [])

  const authInfo = { user,
  providerLogin };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

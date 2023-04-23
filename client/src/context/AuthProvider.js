import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firbase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
  }
  // ! create user by registration
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }





  // ! login user by registration and (ema)
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }





  //! logout authentication
  const logOut = () => {
    return signOut(auth);
  }



  //!observer set for manage user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('inside auth state change', currentUser);
      setUser(currentUser)
    });

    return () => {
      unsubscribe();
    }

  }, [])

  const authInfo = {
    user,
    providerLogin,
    logOut,
    createUser,
    signIn
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

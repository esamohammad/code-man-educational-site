import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, sendEmailVerification } from 'firebase/auth'
import app from '../firbase/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app); //!👨‍👨‍👧‍👦👨‍👨‍👧‍👦
//!jehetu ache tai no parameter👨‍👨‍👧‍👦👨‍👨‍👧‍👦



const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }
  // ! create user by registration
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }





  // ! login user by registration and (ema)
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }



  //! register ar user name and photo store-manage user-🌟🌟
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  }



  //! send verification mail-👨‍👨‍👧‍👦👨‍👨‍👧‍👦
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  }




  //! logout authentication
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }



  //! observer set for manage user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('inside auth state change', currentUser);
      setUser(currentUser)
      setLoading(false);
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
    signIn,
    loading,
    updateUserProfile, //! 🌟🌟
    verifyEmail //! 👨‍👨‍👧‍👦👨‍👨‍👧‍👦
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

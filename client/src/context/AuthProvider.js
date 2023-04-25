import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firbase/firebase.config';
import { GithubAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth"; //!fb---1 ✅✅


export const AuthContext = createContext();

const auth = getAuth(app); //!👨‍👨‍👧‍👦👨‍👨‍👧‍👦
//!jehetu ache tai no parameter👨‍👨‍👧‍👦👨‍👨‍👧‍👦



const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); //!redirect issue
  // ! rederect source 💥💥💥💥💥💥💥💥




  //!github provider
  const githubProvider = new GithubAuthProvider();



  //!Facebook provider
  const facebookProvider = new FacebookAuthProvider(); //!fb---2 ✅✅



  //!google sign in with popup
  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }



  // ! create user by registration
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }



  // ! login user by and (email  and password)
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }



  //! register ar user name and photo store-manage user-🌟🌟
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  }



  //! github🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟
  const signInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  }
  //! github🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟



  //!fb---3 ✅✅
  //! Facebook  popup🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟
  const signInWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  }
  //!fb---3 ✅✅



  //! logout authentication
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }



  //! observer set for manage user state change
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
    updateUserProfile,
    signInWithGithub, //! Github Popup
    signInWithFacebook //! FB Popup //!fb---4 ✅✅

  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

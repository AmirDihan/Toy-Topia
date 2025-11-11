import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "./../firebase/firebase.config";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUserWithEmailAndPasswordFunc = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmailAndPasswordFunc = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const sendEmailVerificationFunc = (user) => {
    return sendEmailVerification(user);
  }
  const updateProfileFunc = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
        displayName,
        photoURL
    })
  }
  const signOutFunc = () => {
    setLoading(true);
    return signOut(auth);
  };
  const signInWithGooglePopupFunc = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const sendPasswordResetEmailFunc = (email) => {
    return sendPasswordResetEmail(auth, email)
  }
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUserWithEmailAndPasswordFunc,
    signInWithEmailAndPasswordFunc,
    signOutFunc,
    signInWithGooglePopupFunc,
    sendEmailVerificationFunc,
    updateProfileFunc,
    sendPasswordResetEmailFunc,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;

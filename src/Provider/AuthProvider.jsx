import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase.init";

export const AuthContex = createContext();
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // console.log(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  //   create uSer
  const CreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //update User
  const updateUser = (displayName, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoUrl,
    });
  };
  // Login user
  const UserLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //Login with Popup
  const LoginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //signOut user
  const signOutUser = () => {
    return signOut(auth);
  };

  //password reset
  const ResetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const authValue = {
    user,
    setuser,
    CreateUser,
    UserLogin,
    loading,
    setLoading,
    updateUser,
    error,
    setError,
    signOutUser,
    ResetPassword,
    LoginWithGoogle,
  };
  return (
    <AuthContex.Provider value={authValue}>{children}</AuthContex.Provider>
  );
};

export default AuthProvider;

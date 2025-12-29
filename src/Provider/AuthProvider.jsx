import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase.init";

export const AuthContex = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setLoading] = useState(true);
  //   console.log(user);

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
  // Login user
  const UserLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authValue = {
    user,
    setuser,
    CreateUser,
    UserLogin,
    loading,
    setLoading,
  };
  return <AuthContex value={authValue}>{children}</AuthContex>;
};

export default AuthProvider;

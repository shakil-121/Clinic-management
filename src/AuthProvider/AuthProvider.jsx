import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState();
  // console.log(loggedUser);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const logOut = () => {
    // setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setLoggedUser(loggedUser);
      // console.log(loggedUser);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const AuthInfo = {
    createUser,
    signIn,
    updateUserProfile,
    loggedUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

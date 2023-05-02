/* eslint-disable */
import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase/firebase.init";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const signinWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signinWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (currentUser, userInfo) => {
    return updateProfile(currentUser, {
      displayName: userInfo.userName,
      photoURL: userInfo.photoUrl,
    });
  };
  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    signinWithGoogle,
    signinWithGithub,
    createUser,
    loginUser,
    updateUser,
    logOut,
    user,
    setLoading,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedinUser) => {
      setUser(loggedinUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [loading]);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

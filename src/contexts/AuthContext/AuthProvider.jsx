/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
import config from "../../config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // states for holding user info
  const [user, setUser] = useState(null);
  const [userDB, setUserDB] = useState(null);
  const [refetchUserDB, setRefetchUserDB] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // states for creating org
  const [newOrgInfo, setNewOrgInfo] = useState({
    // orgEmail: user?.email || userDB?.email,
    // orgOwnerId: userDB?._id,
    // orgOwnerEmail: user?.email || userDB?.email,
  });

  // states for organization retrieval
  const [activeOrgId, setActiveOrgId] = useState(null);
  const [activeOrg, setActiveOrg] = useState({});
  const [refetchActiveOrg, setRefetchActiveOrg] = useState(false);

  const createUserWithEmail = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInWithEmail = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const sendResetPassword = (email) => {
    setIsLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const logInWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logInWithGithub = () => {
    setIsLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  // getting and setting the user from firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => {
      return () => unsubscribe();
    };
  }, []);

  // Getting the user from mongodb database
  useEffect(() => {
    if (user?.email) {
      setIsLoading(true);
      fetch(`${config.base_url}/users/profile?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setUserDB(data.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
        });
    }
  }, [user, user?.email, refetchUserDB]);

  // setting active org
  useEffect(() => {
    if (activeOrgId) {
      fetch(`${config?.base_url}/organizations/single?orgId=${activeOrgId}`)
        .then((res) => res.json())
        .then((data) => {
          setActiveOrg(data?.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [activeOrgId]);

  const authInfo = {
    user,
    userDB,
    isLoading,
    createUserWithEmail,
    sendResetPassword,
    logInWithEmail,
    logInWithGoogle,
    logOut,
    setIsLoading,
    setRefetchUserDB,
    logInWithGithub,
    activeOrgId,
    setActiveOrgId,
    activeOrg,
    setActiveOrg,
    refetchActiveOrg,
    setRefetchActiveOrg,
    newOrgInfo,
    setNewOrgInfo,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

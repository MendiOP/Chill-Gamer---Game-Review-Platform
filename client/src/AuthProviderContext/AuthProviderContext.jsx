import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./../../firebase.config";
import { AuthContext } from "./../AuthContext/AuthContext";
import { WatchlistContext } from "./../WatchlistContext/WatchlistContext";

const AuthProviderContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [watchlist, setWatchlist] = useState([]);
  const provider = new GoogleAuthProvider();

  const addToWatchlist = (reviewId) => {
    if (!watchlist.includes(reviewId)) {
      setWatchlist((prev) => [...prev, reviewId]);
    }
  };

  const createUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    signOut(auth);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const disconnectInFuture = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      disconnectInFuture();
    };
  }, []);

  const authInfo = {
    createUser,
    signInUser,
    user,
    signOutUser,
    signInWithGoogle,
    loading,
  };

  const watchListInfo = {
    addToWatchlist,
    watchlist,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      <WatchlistContext.Provider value={watchListInfo}>
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <span className="text-center loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          children
        )}{" "}
      </WatchlistContext.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProviderContext;

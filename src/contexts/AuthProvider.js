import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const signInWithGoogle = () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    const signInWithGithub = () => {
        setLoading(true);
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        auth,
        user,
        createUser,
        signIn,
        logOut,
        updateUser,
        loading,
        signInWithGoogle,
        signInWithGithub
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
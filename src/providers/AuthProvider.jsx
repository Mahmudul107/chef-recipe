import React, { createContext } from 'react';
import app from '../firebase/firebase.config'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app)   

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
googleProvider.addScope('https://www.googleapis.com/auth/userinfo.email');

const githubProvider = new GithubAuthProvider();
// githubProvider.setCustomParameters({ allow_signup: false, scope: 'user' });

const AuthProvider = ({children}) => {
    const user = null;

    const googleSign = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const githubSign = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserData = (user, name, photo) => {
        return updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
    }

    const authInfo = {
        user,
        createUser,
        signInUser,
        googleSign,
        githubSign,
        updateUserData
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

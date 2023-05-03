import React, { createContext } from 'react';
import app from '../firebase/firebase.config'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app)   
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
provider.addScope('https://www.googleapis.com/auth/userinfo.email');

const AuthProvider = ({children}) => {
    const user = null;

    const googleSign = () => {
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserData = (user) => {
        return updateProfile(user)
    }

    const authInfo = {
        user,
        createUser,
        signInUser,
        googleSign,
        updateUserData
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
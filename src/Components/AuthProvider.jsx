import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LogOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user)
                setLoading(false)
            } else {
            }
        });
        return () => {
            unsubscribe()
        }
    }, [])
    console.log(user);

    const authInfo = {
        createUser,
        loginUser,
        LogOut,
        user,
        setLoading,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
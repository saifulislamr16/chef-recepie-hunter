import { createContext, useEffect, useState } from 'react';

import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const FireAuthContext = createContext(null);
const auth = getAuth(app);
const gmailProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const FireAuthProvider = ({children}) => {
    
    const [load, setLoad] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, current => {
            setUser(current);
            setLoad(false);
        });

        return () =>{
            return unsubscribe();
        }
    },[])

    const LogIn = (email, pass) =>{
        setLoad(true);
        return signInWithEmailAndPassword(auth, email, pass);
    }

    const GoogleLogIn = () =>{
        setLoad(true);
        return signInWithPopup(auth, gmailProvider);
    }

    const GitHubLogIn = ()=>{
        setLoad(true);
        return signInWithPopup(auth, gitProvider)
    }

    const Register = (email, pass) =>{
        setLoad(true);
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const Update = (name, url) =>{
        setLoad(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url
          })
    }

    const LogOut = () =>{
        setLoad(true)
       return signOut(auth)
    }

    const provides = {
        auth,
        user,
        load,
        LogIn,
        GoogleLogIn,
        GitHubLogIn,
        Register,
        Update
    }
    return (
        <FireAuthContext.Provider value={provides}>
            {children}
        </FireAuthContext.Provider>
    );
};

export default FireAuthProvider;
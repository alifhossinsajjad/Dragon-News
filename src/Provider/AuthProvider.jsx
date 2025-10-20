import { useEffect, useState } from "react";
import { Authcontex } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true);



    const createUser = (email, password) => {
        // loading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }
        
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)

        
    }


    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser,updateData);
        
    }

    const logOut = () => {
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(cureentUser) =>{
            // console.log('cureent user in auth state', cureentUser);
            setUser(cureentUser);
            setLoading(false);
        })

        return(() => {
            unsubscribe();
        })
    },[])


    const authData = {
        user,
        createUser,
        logInUser,
        logOut,
        loading,
        setLoading,
        updateUserProfile,
        setUser,
      
    }

    return <Authcontex.Provider value={authData}>
        {children}
    </Authcontex.Provider>
};

export default AuthProvider;
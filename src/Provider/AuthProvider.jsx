import { useEffect, useState } from "react";
import { Authcontex } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const logInUser = (emial, password) => {
        return signInWithEmailAndPassword(auth,emial,password)
    }

    const logOut = () => {
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(cureentUser) =>{
            console.log('cureent user in auth state', cureentUser);
            setUser(cureentUser)
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
        // setUser,
      
    }

    return <Authcontex.Provider value={authData}>
        {children}
    </Authcontex.Provider>
};

export default AuthProvider;
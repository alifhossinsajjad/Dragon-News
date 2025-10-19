import { useState } from "react";
import { Authcontex } from "./AuthContext";


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)


    const authData = {
        user,
        setUser,
    }

    return <Authcontex.Provider value={authData}>
        {children}
    </Authcontex.Provider>
};

export default AuthProvider;
import { createContext, useState } from "react";

//creating a global state
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  // Initialize auth state from localStorage so tokens persist after refresh
    const [auth, setAuth] = useState(() => {
    const storedAccess = localStorage.getItem("accessToken");
    const storedRefresh = localStorage.getItem("refreshToken");
    return {
      accessToken: storedAccess || "",
      refreshToken: storedRefresh || "",
    };})

    return(
      //defining a wrapper to pass down state
        <AuthContext.Provider value={{auth, setAuth}}>

            {children}

        </AuthContext.Provider>
    )
}



export default AuthContext;

import { createContext, useState, type ReactNode } from "react";




interface AuthContextType {
  auth: { accessToken?: string; refreshToken?: string } | null;
  setAuth: React.Dispatch<
    React.SetStateAction<{ accessToken?: string; refreshToken?: string } | null>
  >;
}


//creating a global state
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: {children: ReactNode}) => {
  // Initialize auth state from localStorage so tokens persist after refresh
    const [auth, setAuth] = useState<{ accessToken?: string; refreshToken?: string } | null>(() => {
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

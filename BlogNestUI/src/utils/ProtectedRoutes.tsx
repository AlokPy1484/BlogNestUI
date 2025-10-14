import { Outlet, Navigate } from "react-router-dom";
// import AuthContext from "../context/AuthProvider";


const ProtectedRoutes = () => {
    const auth = false  
    return auth? <Outlet/> : <Navigate to="login"/>
}

export default ProtectedRoutes



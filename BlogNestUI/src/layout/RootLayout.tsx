import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidenav from "../components/SideNav"
import Activity from "../components/Activity"
import { Toaster } from "@/components/ui/sonner"




function RootLayout(){


    return(
        <div>
            <Navbar/>
            <Sidenav/>
            <Toaster />
            <Activity/>
            <Outlet/>
        </div>
    )
}

export default RootLayout
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
// import { Input } from "@/components/ui/input"
// import { Button } from "./ui/button"
// import { Bell, Search, SquarePen, UserRound } from "lucide-react"
// import { NavLink, useNavigate} from 'react-router-dom'
// import AuthContext from "@/context/AuthProvider"
// import { useContext, useState } from "react"


// function AdminLayout(){

//       const [search,setSearch] = useState(false);

//   const context = useContext(AuthContext);

//   if (!context) {
//     throw new Error("AuthContext must be used within an AuthProvider");}

//   const { auth } = context;


//     const handleClick = () => {
//     if(search){
//       setSearch(false)
//     }
//     else{
//       setSearch(true)
//     }
//     console.log(search)
//   }


//     return(
//         <div>
//                <div className="flex fixed top-0 w-[100vw] p-4 border-none bg-black z-100">
//       <div className="flex flex-row justify-start md:justify-between w-full">
//     <div className="flex flex-row justify-start gap-3 md:pl-5 w-100 md:w-full">
//       <NavLink to='/'><a className="text-shadow-blue-50 text-2xl">BlogNest</a></NavLink>
//         </div>
//             <div className="flex gap-2 ">
//               <Button onClick={handleClick} className="block md:hidden"><Search className="size-4" /></Button>
//               <NavLink to='/write'><Button variant="outline" size="sm"><SquarePen />Write</Button></NavLink>
//               <Popover>
//               <PopoverTrigger><Bell className="size-4" /></PopoverTrigger>
//               <PopoverContent className="bg-black">
//                 <div>Notifications</div>
//                 <div className=" w-full pt-4 text-zinc-500 text-center">You have 0 notifications</div>
//               </PopoverContent>
//               </Popover>
//               {auth?.accessToken?( <NavLink to='/profile/1'><Button variant="outline" size="sm"><UserRound/>Profile</Button></NavLink>):
//                <NavLink to='/login'><Button variant="outline" size="sm"><UserRound/>Login</Button></NavLink>}
             
//         </div>
//       </div>
//       </div>


//         </div>
//     )
// }
// export default AdminLayout
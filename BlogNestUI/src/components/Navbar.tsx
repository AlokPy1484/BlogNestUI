import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { Bell, Search, SquarePen, UserRound } from "lucide-react"
import { NavLink, useNavigate} from 'react-router-dom'
import AuthContext from "@/context/AuthProvider"
import { useContext, useState } from "react"
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

// import Notifications from "./Notifications"





const Navbar = () => {
  
  const [search,setSearch] = useState(false);

  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("AuthContext must be used within an AuthProvider");}

  const { auth } = context;

  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search");
    navigate(`/search/${query}`, {replace:true})
    console.log(query)}

  const handleClick = () => {
    if(search){
      setSearch(false)
    }
    else{
      setSearch(true)
    }
    console.log(search)
  }


  // console.log(auth.accessToken)

  return (
    <div className="flex flex-row justify-center items-center fixed top-0 left-0 w-screen p-4 border-none bg-black z-100">
      <div className="flex flex-row justify-start md:justify-between w-screen">
    <div className="flex flex-row justify-start gap-3 md:pl-5 w-100 md:w-full">
      <NavLink to='/'><a className="text-shadow-blue-50 text-2xl">BlogNest</a></NavLink>
      <form className={ `md:block ${search ? `block`:`hidden`}` } onSubmit={onSubmit}>
      <Input className="w-40 mr-3 md:w-80" type="input" name="search" placeholder="Search blog" />
      <Button type="submit" variant="outline">
        Search
      </Button>
      </form>
        </div>
            <div className="flex gap-2 ">
              <Button onClick={handleClick} className="block md:hidden"><Search className="size-4" /></Button>
              <NavLink to='/write'><Button variant="outline" size="sm"><SquarePen />Write</Button></NavLink>
              <Popover>
              <PopoverTrigger><Bell className="size-4" /></PopoverTrigger>
              <PopoverContent className="bg-black">
                <div>Notifications</div>
                <div className=" w-full pt-4 text-zinc-500 text-center">You have 0 notifications</div>
                {/* <Notifications/> */}
              </PopoverContent>
              </Popover>
               <SignedOut>
        <div ><SignInButton className="w-25"/></div>
      </SignedOut>
            <SignedIn>
        <UserButton classname="p-5" />
      </SignedIn>
             
        </div>
      </div>
      </div>
  );
};

export default Navbar;

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { Bell, SquarePen, UserRound } from "lucide-react"
import { NavLink, useNavigate} from 'react-router-dom'
import {
  Form,

} from "@/components/ui/form"



const Navbar = () => {

  const navigate = useNavigate();

  const onSubmit = (e) => {
    const formData = new FormData(e.target);
    const query = formData.get("search");
    navigate(`/search/${query}`, {replace:true})
    console.log(query)}

  return (
    <div className="flex fixed top-0  w-full  p-4 border-none bg-black z-100">
      <div className="flex flex-row justify-between w-full">
    <div className="flex flex-row justify-start gap-3 md:pl-5 w-100 md:w-full">
      <NavLink to='/'><a className="text-shadow-blue-50 text-2xl">BlogNest</a></NavLink>
      <form onSubmit={onSubmit}>
      <Input className="w-80" type="input" name="search" placeholder="Search blog" />
      <Button type="submit" variant="outline">
        Search
      </Button>
      </form>
        </div>
            <div className="hidden md:flex gap-2 ">
              <NavLink to='/write'><Button variant="outline" size="sm"><SquarePen />Write</Button></NavLink>
              <Popover>
              <PopoverTrigger><Bell className="size-4" /></PopoverTrigger>
              <PopoverContent className="bg-black">
                <div>Notifications</div>
                <div className=" w-full pt-4 text-zinc-500 text-center">You have 0 notifications</div>
              </PopoverContent>
              </Popover>
              <NavLink to='/profile/1'><Button variant="outline" size="sm"><UserRound/>Profile</Button></NavLink>
        </div>
      </div>
      </div>
  );
};

export default Navbar;

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import { Separator } from "@/components/ui/separator"
import { House, HeartPlus, SquarePen, CircleFadingPlus } from "lucide-react"


function Sidenav(){


    return(
        <Card className="bg-black hidden md:block fixed left-0 top-14 h-[100vh] w-2/11 border-0 ">
        {/* <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction>
        </CardHeader> */}
        <CardContent className="flex flex-col justify-center items-center gap-10 mb-5">
            <Button className="w-30"><House/>Home</Button>
            <Button className="w-30"><HeartPlus/>Liked</Button>
            <Button className="w-30"><SquarePen/>Write</Button>
            <Button className="w-30"><CircleFadingPlus/>Story</Button>
        </CardContent>
        <Separator className="bg-zinc-600" />
        <CardFooter className="flex justify-center mt-5">
            <p>Category</p>
        </CardFooter>
        </Card>
    )
}

export default Sidenav 
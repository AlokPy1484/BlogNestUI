import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button"



function CommentCard(props){



    return(
        <Card className="w-full  p-1 border-0 bg-black" >
        <CardHeader>
            <CardDescription className="flex flex-row align-middle justify-start gap-2">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>{props.user}</p>
            </CardDescription>
            {/* <CardAction>Card Action</CardAction> */}
        </CardHeader>
        <CardContent className="m-0">
            <p>{props.body}</p>
        </CardContent>
        <CardFooter>
            <Button>Like</Button>
        </CardFooter>
        </Card>

    )
}

export default CommentCard
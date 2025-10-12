import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "./ui/button"
import { Heart, MessageCircle, Share2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


interface Props {
title: string;
content: string;
author: string;
date_since: string
}

function BlogCard(props: Props){



    return(
        <Card className=" w-9/10 relative top-10 md:w-3/5 m-10 border-none p-2 md:max-w-[70vw] bg-black">
        <div >
            <AspectRatio ratio={16 / 9} className="flex justify-center m-2 p-0">
            <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" 
                    alt="thumbnail"                         
                    className="m-2 rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"/>
            </AspectRatio>
        </div>
        <CardHeader>
            <CardTitle className="text-3xl pb-2">{props.title}</CardTitle>
            <CardDescription>
                <div className="flex flex-col md:flex-row justify-between align-middle w-full ">
                <div className="blogInfo pb-4 flex flex-row justify-start items-center gap-2">
                    <Avatar className="w-6 h-6">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>US</AvatarFallback>
                    </Avatar>
                    <a>{props.author}</a>
                    <a>Follow</a>
                    <a>{props.date_since}</a>
                </div>
                <div className="blogButtons flex flex-row justify-center gap-2 p-2">
                    <Button variant="outline" ><Heart/>2.1K</Button>
                    <Button><MessageCircle/>632</Button>
                    <Button variant="outline" size="icon"><Share2/></Button>
                </div>
                </div>
            </CardDescription>
            {/* <CardAction>Save</CardAction> */}
        </CardHeader>
            <CardContent>
                <p className="leading-relaxed my-4">{props.content}</p>
            </CardContent>

        </Card>
    )
}

export default BlogCard
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button"
import { Link } from 'react-router-dom'
import { Heart, MessageCircle, Share2 } from "lucide-react"



interface Props {
title: string;
content: string;
author: string;
date_since: string;
id:string;
}

function BlogfeedCard(props:Props){



    return(
            <Card className="w-9/10 relative top-15 m-30 mb-0 mt-10 p-2 md:max-w-3/5 bg-black">
            <div className="blogBody flex flex-col md:flex-row">
            <div className="thumbnailContainer  flex justify-center md:justify-start">
                <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                        alt="thumbnail"
                        className=" max-w-9/10 md:max-h-100 md:max-w-[250px] m-2 rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"/>
            </div>
            <div>
            <CardHeader className="flex flex-row justify-start pt-2">
                <Link to={`/blog/${props.id}`} className='link'><CardTitle className="text-2xl pb-2">{props.title}</CardTitle></Link>
            </CardHeader>
            <CardContent>
                <div className="blogInfo pb-4 flex flex-row justify-start gap-2">
                    <Avatar className="w-6 h-6">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>US</AvatarFallback>
                    </Avatar>
                    <a>{props.author}</a>
                    <a>Follow</a>
                    <a>{props.date_since}</a>
                </div>
                <p>{props.content}</p>
                <div className="blogButtons flex flex-row justify-center gap-2 p-2">
                    <Button variant="outline" ><Heart/>2.1K</Button>
                    <Button><MessageCircle/>632</Button>
                    <Popover>
                    <PopoverTrigger>
                        <Share2 className="size-4"/>
                    </PopoverTrigger>
                    <PopoverContent className="bg-black">
                        <div>
                            <a>Share this blog</a>
                            <div className="flex flex-col justify-center p-2 text-zinc-600">https://youtu.be/2hR-uWjBAgw?si=cLndLF5MTfZ27luO</div><Button className="w-full">Copy URL</Button>
                        </div>
                    </PopoverContent>
                    </Popover>
                </div>
            </CardContent>
            </div>
            </div>
            </Card>

    )
}
export default BlogfeedCard
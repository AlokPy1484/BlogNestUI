import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input"
import CommentCard from "./CommentCard";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";
import AuthContext from "@/context/AuthProvider";


//axios api call

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzYwMTcyMTk3LCJpYXQiOjE3NjAxNzE4OTcsImp0aSI6IjQxZTM2ZWZkZGEyZDQ2MzhhNmUyN2JlZjg3Y2UzN2FjIiwidXNlcl9pZCI6IjEifQ.S-l5_qLLw8VJZbB23jQ-ApKZ6hBH2Y8ifM-QwkStHtg"
function CommentHeader(props){
    
    const { auth } = useContext(AuthContext);
    // console.log(`user Token:`,auth.accessToken)  
    const postComment = async(newComment)=> {
        console.log(auth.accessToken)
        try{
            const response = await axios.post('http://127.0.0.1:8000/comment/',newComment,{
                                          headers: { Authorization: `Bearer ${auth.accessToken}` }});
            console.log(response)
            return response.data
        }
        catch(err){
            console.log(`Error: `,err)
        }
    }


    const [comment, setComment] = useState("");
    
    const mutation = useMutation({
        mutationFn: postComment,
        onSuccess: (data) => {
            console.log(data)
        },
    })

const handleSubmit = (e) => {
    e.preventDefault()
    const blog = props.blogID
    const body = comment
    console.log({blog,body})
    mutation.mutate({blog,body})
}

    return(
        <div className="w-9/10  mb-0 border-none mt-0 p-2 md:max-w-3/5 bg-black">
        <Card className="border-none">
        <CardHeader>
            <CardTitle className="text-white text-3xl">Comments</CardTitle>
            <CardDescription className="flex flex-row align-middle justify-start gap-2">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Alok Pandey</p>
            </CardDescription>
            <CardAction><Button>Filter</Button></CardAction>
        </CardHeader>
        <CardContent>
        <form onSubmit={handleSubmit} >
        <Input className="md:w-[2/5] w-full" name="body" type="input" value={comment} onChange={(e) => setComment(e.target.value)}  placeholder="Write your comment here" />
        </form>
        </CardContent>
        </Card>
        </div>
    )    
}

export default CommentHeader;
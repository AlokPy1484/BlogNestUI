import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input"
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";
import AuthContext from "@/context/AuthProvider";
import { BASE_URL } from "@/config";
import { useAuth } from "@clerk/clerk-react";



interface CommentProp{
    blogID: string | number;
}

interface NewComments{
    body: string;
    blog: string | number;
}


// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzYwMTcyMTk3LCJpYXQiOjE3NjAxNzE4OTcsImp0aSI6IjQxZTM2ZWZkZGEyZDQ2MzhhNmUyN2JlZjg3Y2UzN2FjIiwidXNlcl9pZCI6IjEifQ.S-l5_qLLw8VJZbB23jQ-ApKZ6hBH2Y8ifM-QwkStHtg"
function CommentHeader(props:CommentProp){

    const { getToken } = useAuth();
    
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("User not logedIn, no context");
    }

    const {auth} = context

    if(!auth){
        throw new Error("User not logedIn, no auth")
    }



    // console.log(`user Token:`,auth.accessToken)  
    const postComment = async(newComment:NewComments)=> {

        const token = await getToken();
        console.log("Clerk Token:",token)

        // console.log(auth.accessToken)
        try{
            const response = await axios.post(`${BASE_URL}/comment/`,newComment,{
                                          headers: { Authorization: `Bearer ${token}` }});
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
            window.location.reload();
        },
    })

const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const blog = props.blogID
    const body = comment
    console.log({body,blog})
    mutation.mutate({body,blog})

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
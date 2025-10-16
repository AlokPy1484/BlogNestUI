import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useContext } from "react"
import AuthContext from "@/context/AuthProvider"

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzYwMDY5NjA5LCJpYXQiOjE3NjAwNjkzMDksImp0aSI6IjNjOGRkZTdjZjlkNDQwYmI4Nzk5OWIxZWY5ZTcwMzdiIiwidXNlcl9pZCI6IjEifQ.Nv2BDmIibtvTSFOYTdFZbXzu9-VAN7MhpfKpMfi9gn8"


interface NewPost {
  title: string;
  content: string;
}


function BlogCreate(){
    
    const { auth } = useContext(AuthContext);
    
    const postBlog = async(newPost:NewPost) => {
        try{
            const response = await axios.post('http://127.0.0.1:8000/blogposts/',newPost,{
                                          headers: { Authorization: `Bearer ${auth.accessToken}` }});
            console.log(response)
            return response.data
        }
        catch(err){
            console.log(`Error: ${err}`)
        }
    }


    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const title = formData.get("title") as string;
        const content = formData.get("content") as string;
        console.log({title,content})
        mutation.mutate({title,content})
    }

    const mutation = useMutation({
        mutationFn: postBlog,
        onSuccess: (data) => {
            console.log(data)
        }

    })

    return(
        <Card className="w-full max-w-[70vw] m-30 bg-black">
            <CardHeader>
                <CardTitle className="text-white text-3xl">Create Blog</CardTitle>
                <CardDescription>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, voluptatem! Eos, maxime voluptatibus, delectus rem doloribus error impedit soluta, totam beatae ab amet sed deserunt quibusdam vel magnam pariatur. Laborum!</CardDescription>
                <CardAction className="text-sm"><Button className="hidden md:block">Save Draft</Button></CardAction>
            </CardHeader>
            <form onSubmit={handleSubmit}>
            <CardContent>
                <div className="grid w-full max-w-sm items-center gap-3">
                <Label className="text-2xl"  >Title</Label>
                <Input className="md:w-[65vw] w-[60vw]" type="input" name="title" placeholder="Email" /></div>
                <div className="grid w-full pt-5 max-w-sm items-center gap-3">
                <Label className="text-2xl"  >Content</Label>
                <Textarea className="md:w-[65vw] w-[60vw] min-h-50 mr-6" name="content" placeholder="Write your blog here" />
                </div>
                
            </CardContent>
            <CardFooter className="gap-2">    
                <Button className="w-1/2 md:w-full">Post</Button>
                <Button className="w-1/2 md:hidden">Save Draft</Button>
            </CardFooter>
            </form>
        </Card>
    )
}

export default BlogCreate
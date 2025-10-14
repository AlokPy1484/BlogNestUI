import BlogCard from "@/components/BlogCard";
import CommentCard from "@/components/CommentCard";
import CommentHeader from "@/components/CommentHeader";
import { useQuery } from "@tanstack/react-query"
import axios from 'axios';
import { useParams } from "react-router-dom";
import CommentPage from "./CommentPage";



const BASE_URL = "http://127.0.0.1:8000/";

interface Comments{
    id:string;
}

function BlogPage(){
    
    const { blogID } = useParams()
    
    const fetchBlog = async() => {
    
        try{
            const response = await axios.get(`${BASE_URL}blogposts/${blogID}`)
            console.log(response.data)
            return response.data
        }
        catch(err){
            console.log(`Error: ${err}`)
        }
    }

    
    const {data: blogpost, isLoading:isLoadingBlog } = useQuery({
        queryFn: () => fetchBlog(),
        queryKey: ["blog"]
    })

    if(isLoadingBlog){
        return <div>Loading...</div>
    }

    return(

    <div className="flex flex-col justify-center items-center w-screen bg-black">
        <BlogCard author={blogpost.author} date_since={blogpost.date_since} title={blogpost.title} content={blogpost.content}/>
        <div className="flex flex-col justify-center items-center w-full">
        <CommentPage blogID={blogpost.id}/>
        </div>
        
    </div>)
}

export default BlogPage
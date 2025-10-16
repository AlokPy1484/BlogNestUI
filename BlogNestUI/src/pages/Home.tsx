import BlogfeedCard from "@/components/BlogfeedCard"
import { useQuery } from "@tanstack/react-query"
import axios from 'axios';
import { BASE_URL } from "@/config";



interface Blogpost {
id: string;
title: string;
content: string;
author: string;
date_since: string
}

interface BlogResponse {
  results: Blogpost[];
  count?: number;
}

// const BASE_URL = "https://blognestapi.onrender.com/blogposts";

const fetchBlogs = async() => {
    try{
        const response = await axios.get(`${BASE_URL}/blogposts/all`);
        console.log(response.data)
        return response.data
    }
    catch(err){
        console.log(`Error: ${err}`)
    }
}

function HomePage(){

    const {data: blogposts, isLoading} = useQuery<BlogResponse>({
        queryFn: () => fetchBlogs(),
        queryKey: ["blogs"]
    });


    if (isLoading){
        return <div>Loading...</div>
    }

    return(
    <div >
        {blogposts?.results?.map((blogpost: Blogpost) => {
            return <div className="flex flex-col justify-center items-center w-screen bg-zinc-900" key={blogpost.id}>
                <BlogfeedCard id={blogpost.id} title={blogpost.title} content={blogpost.content} author={blogpost.author}  date_since={blogpost.date_since}/>
                </div>
        })}
    </div>)
 
}

export default HomePage
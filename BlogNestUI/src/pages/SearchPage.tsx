import BlogfeedCard from "@/components/BlogfeedCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const BASE_URL = "http://127.0.0.1:8000/";

function SearchPage(){

    const { keyword } = useParams();

    const fetchBlogs = async() => {

        try{
            const response = await axios.get(`${BASE_URL}/blogposts/search/?title=${keyword}`)
            console.log(response.data)
            return response.data
        }
        catch(err){
            console.log(`Error: ${err}`)
        }
    }

    const {data: blogposts, isLoading} = useQuery<Blogpost[]>({
        queryFn: () => fetchBlogs(),
        queryKey: ["blogs"]
    });


    if (isLoading){
        return <div>Loading...</div>
    }


    return(
        <div className="flex flex-col justify-center items-center w-screen bg-zinc-900">
            <a className="flex flex-row mt-25 text-xl text-white">Found {blogposts?.length | 0} articles related to your search</a>
            <div>
                {blogposts?.map((blogpost) => {
                return <div className="flex flex-col justify-center items-center w-screen bg-zinc-900" key={blogpost.id}>
                <BlogfeedCard id={blogpost.id} title={blogpost.title} content={blogpost.content} author={blogpost.author}  date_since={blogpost.date_since}/>
                    </div> 
                })}
            </div>
        </div>
    )   
}

export default SearchPage
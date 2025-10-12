import CommentCard from "@/components/CommentCard"
import CommentHeader from "@/components/CommentHeader"
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";


const BASE_URL = "http://127.0.0.1:8000/";

interface Comments{
    id:string;
}



function CommentPage(props){

    const blogID = props.blogID


    const fetchComment = async() => {
    
        try{
            const response = await axios.get(`${BASE_URL}/comment/blog/${blogID}`)
            console.log(response.data)
            return response.data
        }
        catch(err){
            console.log(`Error: ${err}`)
        }
    }



    const {data: comments, isLoading } = useQuery({
        queryFn: () => fetchComment(),
        queryKey: ["comments",blogID]
    })

    if(isLoading){
        return <div>Loading...</div>
    }


//   // Handle both array or single object response
//   const commentList = Array.isArray(comments) ? comments : [comments];

    return(
        <div className="flex flex-col justify-center items-center w-screen bg-black">
            <CommentHeader blogID={blogID}/>
      <div className="flex flex-col gap-5 w-4/5 md:max-w-1/2 mt-4">
        {comments?.results?.map((comment) => (
          <div key={comment.id}>
            <CommentCard user={comment.user} body={comment.body}/>
          </div>
        ))}
      </div>
        </div>
    )
}
export default CommentPage
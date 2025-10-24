import BlogfeedCard from "@/components/BlogfeedCard"
import Profile from "@/components/Portfolio"
import { useEffect, useState } from "react";

// interface Props {
//   title: string;
//   content: string;
//   author: string;
//   date_since: string;
//   id: string;
// }

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  author_id?: string;  // optional if sometimes missing
  date_since: string;
}

function ProfilePage(){
     const [blogposts, setBlogposts] = useState<{ results: BlogPost[] } | null>(null);

    useEffect(() => {
    // Replace this with your API fetch
    fetch("/api/blogposts")
      .then(res => res.json())
      .then(data => setBlogposts(data));
  }, []);


    return(
        <div className="flex flex-col justify-center items-center w-screen bg-zinc-900">
            <Profile/>

        {blogposts?.results?.map((blogpost) => {
            return <div className="flex flex-col justify-center items-center w-screen bg-zinc-900" key={blogpost.id}>
                <BlogfeedCard id={blogpost.id} title={blogpost.title} content={blogpost.content} author={blogpost.author}  date_since={blogpost.date_since}/>
                </div>
        })}
        </div>
    )
}

export default ProfilePage
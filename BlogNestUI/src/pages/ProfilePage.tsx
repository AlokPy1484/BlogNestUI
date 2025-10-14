import BlogfeedCard from "@/components/BlogfeedCard"
import Profile from "@/components/Portfolio"



function ProfilePage(){

    return(
        <div className="flex flex-col justify-center items-center w-screen bg-zinc-900">
            <Profile/>
            <BlogfeedCard/>
            <BlogfeedCard/>
            <BlogfeedCard/>
            <BlogfeedCard/>
        </div>
    )
}

export default ProfilePage
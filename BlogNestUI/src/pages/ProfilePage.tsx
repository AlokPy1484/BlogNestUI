import Profile from "@/components/Portfolio"

// interface Props {
//   title: string;
//   content: string;
//   author: string;
//   date_since: string;
//   id: string;
// }

function ProfilePage(){

    return(
        <div className="flex flex-col justify-center items-center w-screen bg-zinc-900">
            <Profile/>
            {/* <BlogfeedCard/>
            <BlogfeedCard/>
            <BlogfeedCard/>
            <BlogfeedCard/> */}
        </div>
    )
}

export default ProfilePage
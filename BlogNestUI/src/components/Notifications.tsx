import { BASE_URL } from "@/config"
import { useAuth } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query"
import axios from "axios"



function Notifications(){
     const { getToken } = useAuth();


 const fetchNotifications = async() => {
    const token = await getToken();

        try{
            const response = await axios.get(`${BASE_URL}/notifications/user`,{
                headers: { Authorization: `Bearer ${token}` },
            })
            console.log(response)
            return response.data
        }
        catch(err){
            console.log(`Error: ${err}`)
        }
    }

    const {data:notifications, isLoading} = useQuery({
        queryFn: () => fetchNotifications(),
        queryKey: ['notifications']
    })

    if(isLoading){
        return(
            <div>
                Loading ......
            </div>
        )
    }



    return(
        <div>
            {
                notifications?.map((notification) => {
                    return <div className="py-3 text-sm" key={notification.id}> {notification.message}</div>
                })
            }
        </div>
    )
}

export default Notifications
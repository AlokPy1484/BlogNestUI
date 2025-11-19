import { BASE_URL } from "@/config"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"



function Notifications(){


 const fetchNotifications = async() => {

        try{
            const response = await axios.get(`${BASE_URL}/notifications`)
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
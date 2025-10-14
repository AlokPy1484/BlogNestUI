import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


function Actiity(){


    return(
        <div className="fixed hidden md:block top-20 right-0 w-2/11 m-2">
            <Card className="bg-black">
                <CardHeader className="flex justify-center" >
                    <CardTitle>Recent Activities</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center text-zinc-400 ">
                    Coming Soon
                </CardContent>

            </Card>


        </div>
    )
}

export default Actiity
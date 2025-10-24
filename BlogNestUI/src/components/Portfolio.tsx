import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Share2, UserRoundPlus, UsersRound } from "lucide-react"
import { Button } from "./ui/button"
// import { jwtDecode } from "jwt-decode";
// import { useContext } from "react"
// import AuthContext from "@/context/AuthProvider"

// interface TokenPayload {
//   username: string;
//   user_id: number;
//   email: string;
//   exp: number;
// }



function Profile(props:any){
//       const context = useContext(AuthContext);

//   if (!context) {
//     throw new Error("AuthContext must be used within an AuthProvider");}

//     const { auth } = context;
//     const token = auth?.accessToken

//     if (token) {
//     const decoded = jwtDecode<TokenPayload>(token);
//     console.log(token)
//     console.log(decoded.username); // 👉 "alok"
//     }


  return(     
            <Card className="w-9/10 relative top-15 m-30 mb-0 mt-10 p-2 md:max-w-3/5 bg-black">
            <div className="blogBody flex flex-col md:flex-row justify-center align-middle min-w-[300px]">
            <div className="thumbnailContainer w-full flex justify-center">
                <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                        alt="thumbnail"
                        className="w-[200px] h-[200px] m-2 rounded-full object-cover dark:brightness-[0.2] dark:grayscale"/>
            </div>
            <div>
            <CardHeader className="pt-2">
                <CardTitle className="text-2xl pb-2">{props.username}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="blogInfo pb-4 flex flex-row justify-start gap-2">
                    <a>{props.posts}</a>
                    <a>123 Friends</a>
                    <a>{props.likes}</a>
                </div>
                <p>{props.bio}</p>
                <div className="flex flex-col md:flex-row justify-between items-center w-full mt-4 mb-2 ">
                <div className="blogButtons flex flex-row justify-start gap-2">
                    <Button ><UserRoundPlus/>Add</Button>
                    <Popover>
                      <PopoverTrigger className="flex flex-row gap-2 m-0 p-0"><UsersRound/>Friends</PopoverTrigger>
                      <PopoverContent className="flex justify-center w-50 bg-black">
                        <div className="friendList flex flex-col gap-4">
                        <div className="friendCard flex flex-row items-center justify-start gap-2">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <p>Alok Pandey</p>
                        </div>
                        <div className="friendCard flex flex-row items-center justify-start gap-2">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <p>Alok Pandey</p>
                        </div>
                        <div className="friendCard flex flex-row items-center justify-start gap-2">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <p>Alok Pandey</p>
                        </div>
                        <div className="friendCard flex flex-row items-center justify-start gap-2">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <p>Alok Pandey</p>
                        </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                    <Popover>
                    <PopoverTrigger className="flex flex-row gap-2 items-center">
                        <Share2 className="size-4"/> Share
                    </PopoverTrigger>
                    <PopoverContent className="bg-black">
                        <div>
                            <a>Share this profile</a>
                            <div className="flex flex-col justify-center p-2 text-zinc-600">https://youtu.be/2hR-uWjBAgw?si=cLndLF5MTfZ27luO</div><Button className="w-full">Copy URL</Button>
                        </div>
                    </PopoverContent>
                    </Popover>
                    </div>
                </div>
            </CardContent>  
            </div>
            </div>
            </Card>
  )
}

export default Profile
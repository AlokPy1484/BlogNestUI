import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useForm, type SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "sonner"


import { Link } from 'react-router-dom';
import axios from "axios"
import { useMutation } from "@tanstack/react-query"
import { useContext } from "react"
import AuthContext from "@/context/AuthProvider"
import { BASE_URL } from "@/config"
// type Inputs = {
//   email: string
//   password: string
// }



const schema = z.object({
  username: z.string({
    message: "Enter valid email address",
  }),
  password: z.string().min(6,{
    message: "Enter a valid password",
  }),
})

type Inputs = z.infer<typeof schema>

// const BASE_URL = "http://127.0.0.1:8000/";


const fetchTokens = async(data: Inputs) => {
  console.log("Data being sent to axios:", data);
  try{
   const response = await axios.post(`${BASE_URL}/api/token/`,data);
    console.log(response);
    return response.data;
  }
  catch(err){
    console.log(`Error: ${err}`)
    toast.error("Wrong password or username!")
  }
}

export function Login() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("AuthContext must be used within an AuthProvider");}

  const { setAuth} = context;

  // const mutation = useMutation({
  //   mutationFn: ()=> fetchTokens(data),
  // });


  const mutation = useMutation({
    mutationFn: fetchTokens,
    //tokens = whatevery rq is returning
    onSuccess: (tokens) => {
      const {access,refresh} = tokens
      console.log("JWT access tokens:",access);
      toast("Event has been created.");
      setAuth({ accessToken: access, refreshToken: refresh });
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);
      // console.log(`context`,auth.accessToken);
      toast.success("Login Successful!")
    },
  })


  // if (isLoading){
  //   return(<div>Loading...</div>)
  // }

  const form  = useForm<Inputs>({ resolver: zodResolver(schema),
                            defaultValues: {
                                              username: "",
                                              password: "",
                                            },
  })


  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("Data being sent to reactQuery:", data);
    mutation.mutate(data);
  }



  return (
    <div className="flex justify-center items-center pr-15 w-[100vw] h-[100vh]">
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

    <Card className="w-full max-w-80 m-10 bg-black">
      <CardHeader>
        <div className="text-white">
        <CardTitle>Login to your account</CardTitle></div>
        <div className="text-gray-400">
        <CardDescription>
          Enter your username below to login to your account
        </CardDescription></div>
        <CardAction>
          <Link to='/signup'><Button variant="default">Sign Up</Button></Link>
        </CardAction>
      </CardHeader>
      <CardContent>
          <div className="flex flex-col gap-6">
      <FormField
            control={form.control}
            name="username"
          render={({ field }) => (
            <FormItem>
            <div className="grid gap-2">
               <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
              </FormControl> </div>
              <FormMessage/>
              </FormItem> )} />
            <FormField
              control={form.control}
              name="password"
            render={({ field }) => (
              <FormItem>
              <div className="grid gap-2">
              <div className="flex items-center">
                <FormLabel>Password</FormLabel>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                  Forgot your password?
                </a>
              </div>
              <FormControl>
              <Input  placeholder="Enter your password" {...field}/>
              </FormControl>
            </div>
            <FormMessage />
            </FormItem>)}/>
          </div>
        <Button type="submit" className=" w-full mt-5">
          Login
        </Button>
        
      </CardContent>
    </Card>
    </form>
    </Form>
    </div>
  )
}

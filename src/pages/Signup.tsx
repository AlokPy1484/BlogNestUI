import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from 'react-router-dom';

import { useForm, type SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { FormInput } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";


const schema = z.object({
  username: z.string({
    message: "Enter valid username",
  }),
  password: z.string().min(6,{
    message: "Enter a valid password",
  }),
  confirmPassword: z.string().min(6,{
    message: "Passwords do not match"
}),
})  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      // attach the issue to confirmPassword so the UI shows it next to that field
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
        message: "Passwords do not match",
      })
    }
  })

type Inputs = z.infer<typeof schema>


const createUser = async(userData) => {
  try{
    const response = await axios.post("http://127.0.0.1:8000/register/",userData)
    console.log(response)
    return response.data
  }
  catch(err){
    console.log('Error:',err)
  }
}



export function Signup() {

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      console.log(data)
    }
  })


  const form  = useForm<Inputs>({ resolver: zodResolver(schema),
                            defaultValues: {
                                              username: "",
                                              password: "",
                                              confirmPassword: ""
                                            },
  })




  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const username = data.username;
    const password = data.password;
    console.log({username,password});
    mutation.mutate({username,password})}


  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} >

    <Card className="w-full max-w-80 m-30 bg-black">
      <CardHeader>
        <div className="text-white">
        <CardTitle>Create new account</CardTitle></div>
        <div className="text-gray-400">
        <CardDescription>
          Join now by making your free account
        </CardDescription></div>
        <CardAction>
          <Link to='/login'><Button variant="link">Log In</Button></Link>
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
                <Input placeholder="Enter your email id" {...field} />
              </FormControl>
            </div>
            <FormMessage/>
            </FormItem>)}/>
            <div className="grid gap-2">
              <FormField control={form.control} name="password" render={({field}) => (
              <FormItem>
              <div className="flex items-center">
                <FormLabel>Password</FormLabel>
              </div>
              <FormControl>
                <Input type="password"  placeholder="Enter your email id" {...field} />
              </FormControl> 
              <FormMessage/>
              </FormItem> )}/>
            </div>
            <div className="grid gap-2">
              <FormField control={form.control} name="confirmPassword" render={({field}) => (
              <FormItem>
              <div className="flex items-center">
                <FormLabel>Re enter Password</FormLabel>
              </div>
              <FormControl>
                <Input type="password" placeholder="Enter your email id" {...field} />
              </FormControl> 
              <FormMessage/>
              </FormItem> )}/>
            </div>
          </div>
          
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className=" w-full">
          Sign Up
        </Button>
        <Button type="submit" className=" w-full">
          Continue with Google
        </Button>
      </CardFooter>
    </Card>
    </form>
    </Form>
  )
}

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'


import BlogCreate from "./pages/BlogCreate"
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"
import RootLayout from './layout/RootLayout'
import HomePage from './pages/Home'
import BlogPage from './pages/BlogPage'
import ProfilePage from './pages/ProfilePage'
import ProtectedRoutes from './utils/ProtectedRoutes'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchPage from './pages/SearchPage'
import { AuthProvider } from "./context/AuthProvider";
import Toaster from './components/ui/sonner'



const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <>
    <Route path='login' element={<Login/>}/>
    <Route path='signup' element={<Signup/>}/>
    <Route path='write' element={<BlogCreate/>}/>

    <Route path='/' element={<RootLayout/>}>
    <Route path='blog/:blogID' element={<BlogPage/>}/>
    <Route path='search/:keyword' element={<SearchPage/>}/>
    <Route element={<ProtectedRoutes/>}>
    </Route>
    <Route path='profile/:userID' element={<ProfilePage/>}/>
    <Route index element={<HomePage/>}/>
    </Route>
    </>   
  ))

  return (
    <div className="flex flex-col justify-center items-center w-screen bg-zinc-900">
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <Toaster richColors />
    <RouterProvider router={router}/>
    </QueryClientProvider>
    </AuthProvider>
    </div>
  )
}

export default App

import { Cookie, GalleryVerticalEnd } from "lucide-react"

import { LoginForm } from "@/components/login-form"
import axiosHandler from "@/utils/axiosHandler"
import { toast } from "sonner"  
import { useNavigate } from "react-router"

export default function LoginPage() {
  const navigate = useNavigate()

  const handleLogin=async (data) => {    
    try{
      const resp = await axiosHandler("http://localhost:8080/public/login","post",null,true,data);
      if(resp.status === 200){
        toast.success("Login Successfull")
        localStorage.setItem("access_token",resp.data.token)
      }
    } catch (error) {
      toast.error(error.message)
      console.error(error);
    }



  }



  return (
    <div className="grid min-h-svh lg:grid-cols-2">
        <div className="flex items-center justify-center">
        <img
          src="./Logo/ChatGPT Image Apr 3, 2025, 10_11_44 PM.png"
          alt="Image"
          className="  w-[40vw] rounded-2xl  "
        />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
   <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm handleLogin={handleLogin} />
          </div>
        </div>
      </div>
    
    </div>
  )
}

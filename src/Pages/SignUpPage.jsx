import { GalleryVerticalEnd } from "lucide-react";

import { SigninForm } from "@/components/signin-form";
import axiosHandler from "@/utils/axiosHandler";
import { toast } from "sonner";
import { use, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {

  const navigate= useNavigate();

  const handleSubmit = async (values) => {
    console.log(values);
      try{
        const resp = await axiosHandler("http://localhost:8080/public/signup","post",false,null,values);
        if(resp.status === 200){
          toast.success("Signin Successfull")
          navigate("/login")
          toast.info("Please login to your account")
        }
      } catch (error) {
        toast.error(error.message)
        console.error(error);
      }
  }


  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="    flex items-center justify-center">
        <img
          src="./Logo/ChatGPT Image Apr 3, 2025, 10_11_44 PM.png"
          alt="Image"
          className="  w-[40vw] rounded-2xl  "
        />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SigninForm handleSubmit={handleSubmit}/>
          </div>
        </div>
      </div>
    </div>
  );
}

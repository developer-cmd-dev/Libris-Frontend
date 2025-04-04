import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
import { toast } from "sonner";

export function SigninForm({ className, ...props }) {

  const [userData,setUserData]=useState({
    email: "",
    name: "",
    password: "",
    roles: ["user"],
  });
  const handleOnChange = (e) => {
   const {name,value}=e.target;
   setUserData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit=(e) => {
  e.preventDefault();
    props.handleSubmit(userData) 
    setUserData({
      email: "",
      name: "",
      password: "",
      roles: ["user"],
    });
  }


  return (
    <div className={cn("flex flex-col gap-6 ", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Signin to your account</CardTitle>
          <CardDescription>
            Enter your details below to Signin to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  onChange={handleOnChange}
                  name="email"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  onChange={handleOnChange}
                  name="name"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  onChange={handleOnChange}
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Signin
                </Button>
                <Button variant="outline" className="w-full">
                  Signin with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

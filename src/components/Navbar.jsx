import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import UserDropDownMenu from "./UserDropDownMenu";
import { useSelector } from "react-redux";


function Navbar() {
  const { isAuthenticated } = useSelector((state) => state.authentication);

  return (
    <header className="sticky top-0 flex h-22 shrink-0 items-center gap-2   px-4 bg-slate-900">
      <Breadcrumb className={" w-full flex items-center justify-around"}>
        <BreadcrumbList className={"w-full "}>
          <BreadcrumbItem className={"w-32 rounded-3xl  "}>
            <img
              src="./Logo/ChatGPT Image Apr 3, 2025, 10_11_44 PM.png"
              alt=""
              className="rounded-3xl"
            />
          </BreadcrumbItem>
        </BreadcrumbList>

        <BreadcrumbList>
          <BreadcrumbItem className={""}>
            {isAuthenticated ? (
              <UserDropDownMenu />
            ) : (
              <Button className={`rounded-full hover:bg-slate-700`}>
                Login/Signup
              </Button>
            )}

            <Input
              className={`w-52 rounded-full`}
              type={"search"}
              placeholder={"Search Books"}
            />
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}

export default Navbar;

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import axiosHandler from "./utils/axiosHandler";
import { Link } from "react-router";

export default function App() {
  const [response, setResponse] = useState([]);
  const [header, setHeader] = useState(null);
  useEffect(() => {
    const getAxiosData = async () => {
      const resp = await axiosHandler(
        "http://localhost:8080/home",
        "get",
        null,
        false
      );
      setResponse(resp.data);
      setHeader(resp.headers);
      console.log(resp.data);
    };
    getAxiosData();
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className={"w-28 "}>
                <img
                  src="./public/Logo/ChatGPT Image Apr 3, 2025, 10_11_44 PM.png"
                  alt=""
                />
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-5">
            {response.map((data) => (
              <Link
              to={`title/${data.title}`}
                key={data.id}
                className="aspect-square rounded-xl bg-muted/50  flex flex-col  items-center justify-end    cursor-pointer"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 50%), url(${data.formats["image/jpeg"]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="w-full h-[20%]  bg-slate-900 hover:bg-blue-900 transition-all rounded-bl-xl rounded-br-xl flex flex-col px-2 items-start justify-center">
                  <h1 className="text-[0.9em]">
                    <span className="text-[1.2em]">Title: </span>
                    {data.title.substring(0, 50).concat("....")}
                  </h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

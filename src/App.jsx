

import { useEffect, useState } from "react";
import axiosHandler from "./utils/axiosHandler";
import { Link, Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { Toaster } from "sonner";


export default function App() {
  const [response, setResponse] = useState([]);
  const [header, setHeader] = useState(null);
  useEffect(() => {
    const getAxiosData = async () => {
     try {
    const data=JSON.parse(localStorage.getItem("booksData")) ;
    if( data==null||data.length==0){
      const resp = await axiosHandler(
        "http://localhost:8080/home",
        "get",
        null,
        false
      );
      localStorage.setItem("booksData", JSON.stringify(resp.data));
      setResponse(resp.data);
      setHeader(resp.headers);
    }else{
      setResponse(data);
    }
     } catch (error) {
      console.log(error);
     }
    };
    getAxiosData();
  }, []);

  return (
      <>
          
          <Navbar/>
          <Outlet context={[response]}/>
      </>

    
  );
}
